[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [string]$Source,

    [Parameter(Mandatory = $true)]
    [string]$Id,

    [Parameter(Mandatory = $true)]
    [string]$Version,

    [Parameter(Mandatory = $true)]
    [ValidateSet('stable', 'testing', 'experimental', 'planned')]
    [string]$Status,

    [string]$DescriptionRu,
    [string]$DescriptionEn,
    [string]$DescriptionKk,
    [string[]]$Included,
    [string[]]$KnownIssues
)

$ErrorActionPreference = 'Stop'
$repoRoot = $PSScriptRoot
$manifestPath = Join-Path $repoRoot 'manifest.json'

if (-not (Test-Path -LiteralPath $Source -PathType Leaf)) {
    throw "Firmware source file not found: $Source"
}
if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) {
    throw "Manifest not found: $manifestPath"
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$matches = @($manifest.firmware | Where-Object { $_.id -eq $Id })
if ($matches.Count -ne 1) {
    throw "Expected exactly one manifest entry for id '$Id'; found $($matches.Count)."
}

$entry = $matches[0]
$versionNumber = $Version -replace '^[vV]+', ''
if ([string]::IsNullOrWhiteSpace($versionNumber)) {
    throw 'Version must contain a value after the optional v prefix.'
}

$currentRelativePath = [string]$entry.file
$firmwareDirectory = Split-Path -Parent (Join-Path $repoRoot $currentRelativePath)
if (-not (Test-Path -LiteralPath $firmwareDirectory -PathType Container)) {
    New-Item -ItemType Directory -Path $firmwareDirectory | Out-Null
}

$extension = [System.IO.Path]::GetExtension($Source).ToLowerInvariant()
if ($extension -notin @('.uf2', '.bin')) {
    throw "Unsupported firmware extension '$extension'. Expected .uf2 or .bin."
}

$destinationName = "$Id-v$versionNumber$extension"
$destinationPath = Join-Path $firmwareDirectory $destinationName
$sourcePath = (Resolve-Path -LiteralPath $Source).Path
if ($sourcePath -ne $destinationPath) {
    Copy-Item -LiteralPath $sourcePath -Destination $destinationPath -Force
}

$hash = (Get-FileHash -LiteralPath $destinationPath -Algorithm SHA256).Hash.ToLowerInvariant()
$size = (Get-Item -LiteralPath $destinationPath).Length
$relativeDirectory = Split-Path -Parent $currentRelativePath
$relativePath = ($relativeDirectory, $destinationName -join '/') -replace '\\', '/'

$entry.version = "v$versionNumber"
$entry.build_date = Get-Date -Format 'yyyy-MM-dd'
$entry.status = $Status
$entry.file = $relativePath
$entry.sha256 = $hash
$entry.size = $size
$entry.ready = $true

if ($PSBoundParameters.ContainsKey('DescriptionRu')) { $entry.description.ru = $DescriptionRu }
if ($PSBoundParameters.ContainsKey('DescriptionEn')) { $entry.description.en = $DescriptionEn }
if ($PSBoundParameters.ContainsKey('DescriptionKk')) { $entry.description.kk = $DescriptionKk }
if ($PSBoundParameters.ContainsKey('Included')) { $entry.included = @($Included) }
if ($PSBoundParameters.ContainsKey('KnownIssues')) { $entry.known_issues = @($KnownIssues) }

$json = $manifest | ConvertTo-Json -Depth 12
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($manifestPath, $json + "`n", $utf8NoBom)

Push-Location $repoRoot
try {
    git diff --check
    if ($LASTEXITCODE -ne 0) { throw 'git diff --check failed.' }
    git status --short
} finally {
    Pop-Location
}

Write-Host "ID:          $Id"
Write-Host "Version:     v$versionNumber"
Write-Host "Status:      $Status"
Write-Host "Destination: $destinationPath"
Write-Host "Size:        $size bytes"
Write-Host "SHA-256:     $hash"
