# ESP32-S3 Zero + GC9A01 pinout

Board: Waveshare ESP32-S3-Zero

Hardware:

- ESP32-S3
- Flash: 4 MB
- PSRAM: 2 MB Quad
- USB native / USB Serial-JTAG
- Onboard WS2812: GPIO21
- UART0 TX: GPIO43
- UART0 RX: GPIO44
- GPIO33–37 reserved for internal Flash/PSRAM
- GPIO19/20 reserved for USB

## GC9A01 1.28-inch 240x240

| GC9A01 | ESP32-S3 Zero |
|---|---|
| SCK / SCL | GPIO12 |
| MOSI / SDA | GPIO11 |
| CS | GPIO10 |
| DC | GPIO9 |
| RST | GPIO8 |
| GND | GND |
| VCC | 3V3 |

MISO is not required.

Display configuration:

- GC9A01, 240x240
- RGB565
- SPI write-only at 20 MHz
- Zephyr driver: `galaxycore,gc9x01x`
- Direct RGB565 renderer without a framebuffer

## Encoder

| Signal | GPIO |
|---|---|
| A | GPIO5 |
| B | GPIO6 |
| SW | GPIO7 |

## 3-way navigation switch

| Signal | GPIO |
|---|---|
| LEFT | GPIO13 |
| RIGHT | GPIO14 |
| CENTER | GPIO15 |

Electrical configuration:

- Active-low
- Internal pull-ups enabled
- Switch contacts connect GPIO to GND

Navigation behavior:

- LEFT → previous / left
- RIGHT → next / right
- CENTER single click → OK / Select / Enter
- CENTER double click → Back

Timing:

- GPIO debounce: 25 ms
- Double-click window: 350 ms

The existing rotary encoder remains enabled and works in parallel with the 3-way navigation switch.

## GPS

| Signal | GPIO |
|---|---|
| GPS TX → MCU RX | GPIO16 |
| GPS RX ← MCU TX | GPIO17 |
| GPS ENABLE | GPIO18 |

## Battery ADC

Battery voltage measurement is implemented on GPIO1.

| Signal | GPIO |
|---|---|
| Battery ADC | GPIO1 / ADC1_CH0 |

Recommended hardware divider for 1-cell Li-ion / LiPo:

```text
BAT+ ---- 100k ----+---- GPIO1
                   |
                  100k
                   |

                 GND
Recommended filter capacitor:

GPIO1 ---- 100 nF ---- GND

ADC configuration:

ESP32-S3 ADC1
Channel 0
12-bit resolution
12 dB attenuation
Zephyr gain: ADC_GAIN_1_4
Divider: 100 kΩ / 100 kΩ
Nominal battery multiplier: 8800
Persistent calibration through adc.multiplier
Averaging: up to 8 successful samples

Battery voltage is available to:

GC9A01 UI
Status page
Web API
SensorSnapshot
Local LoRa 868 — SX126x / E22

The S3 Zero profile supports one physical local LoRa868 radio using the existing SX126x/E22 backend.

Target radio family:

SX1262
SX1268
Ebyte E22 SX126x-class modules
Pinout
LoRa signal	ESP32-S3 Zero
SCK	GPIO12
MOSI	GPIO11
MISO	GPIO4
NSS / CS	GPIO2
DIO1	GPIO38
BUSY	GPIO39
RESET	GPIO40
RXEN	GPIO41
TXEN	Not used
DIO2	Internal TX RF-switch control
DIO3	Internal TCXO control

GPIO42 remains free.

LoRa and GC9A01 share the same SPI2 bus:

Device	SCK	MOSI	MISO	CS	Frequency
GC9A01	GPIO12	GPIO11	—	GPIO10	20 MHz
SX126x	GPIO12	GPIO11	GPIO4	GPIO2	8 MHz

Chip-select mapping:

GC9A01  reg = 0  CS = GPIO10
SX126x  reg = 1  CS = GPIO2

Radio configuration:

CONFIG_LORA=y
CONFIG_LORA_SX126X=y
CONFIG_ZEPHCORE_DUAL_RADIO_BRIDGE=y
DIO2 internal TX RF-switch control
DIO3 TCXO control at 1.8 V
TCXO startup delay: 10 ms
RX boosted mode enabled

If the LoRa module is absent or initialization fails:

system continues booting
LoRa868 is reported unavailable
related Router routes fail closed
GC9A01, ESP-NOW, BLE Remote, Web UI and GPS remain available
Unified Router

The S3 Zero exposes these logical interfaces:

ESP-NOW
Local LoRa868
Local LoRa434 — currently unavailable
BLE Remote

With Local LoRa868 installed, supported routes include:

ESP-NOW -> LoRa868
LoRa868 -> ESP-NOW

LoRa868 -> BLE Remote
BLE Remote -> LoRa868

Local LoRa868 is independent from BLE Remote.

BLE Remote must never be silently mapped to Local LoRa868 or Local LoRa434.

Existing Unified Router, CrossBandPolicy, dedup and loop-protection logic remain in use.

Reserved / do not use
GPIO0 = BOOT / strapping
GPIO3 = strapping / JTAG
GPIO19 = USB D-
GPIO20 = USB D+
GPIO21 = onboard WS2812 RGB LED
GPIO26–37 = internal Flash / PSRAM interface
GPIO43/44 = UART0 / debug
GPIO45/46 = strapping
GPIO47/48 = do not use without confirming board pad availability
Current GPIO allocation
GPIO	Function
GPIO1	Battery ADC
GPIO2	LoRa NSS / CS
GPIO4	LoRa MISO
GPIO5	Encoder A
GPIO6	Encoder B
GPIO7	Encoder SW
GPIO8	GC9A01 RST
GPIO9	GC9A01 DC
GPIO10	GC9A01 CS
GPIO11	SPI MOSI — GC9A01 + LoRa
GPIO12	SPI SCK — GC9A01 + LoRa
GPIO13	3-way LEFT
GPIO14	3-way RIGHT
GPIO15	3-way CENTER
GPIO16	GPS RX
GPIO17	GPS TX
GPIO18	GPS ENABLE
GPIO19	USB D-
GPIO20	USB D+
GPIO21	Onboard WS2812
GPIO38	LoRa DIO1
GPIO39	LoRa BUSY
GPIO40	LoRa RESET
GPIO41	LoRa RXEN
GPIO42	Free
GPIO43	UART0 TX
GPIO44	UART0 RX
Firmware profile

Profile:

zbridge_zero_4m2r_companion

Architecture:

                         +-> Local LoRa868 / SX126x
                         |
ESP-NOW <-> ESP32-S3 Zero
                         |
                         +-> BLE Remote <-> remote radio node
                         |
                         +-> BLE Companion phone

Enabled:

ESP-NOW
Physical Local LoRa868
BLE Companion Peripheral
BLE Remote Central x1
CONFIG_BT_MAX_CONN=2
Unified Router
CrossBandPolicy
FieldControl
GC9A01
Rotary encoder
3-way navigation switch
GPS
Battery ADC
Web UI
TCP Companion

Currently unavailable / disabled:

Local LoRa434
Second BLE Remote
MCP23017
LoRa scanner
Wi-Fi AP mode
Memory configuration
Flash: 4 MB
PSRAM: 2 MB
Configured PSRAM heap: 512 KB

Current Local-LoRa build:

FLASH:          1,099,796 / 4,194,048 bytes
Internal RAM:     385,704 / 399,108 bytes
Free RAM:          13,404 bytes
ext_dram:       1,529,120 bytes

Internal RAM headroom is limited, so future features should avoid unnecessary internal-RAM buffers and duplicate queues.

This pinout is the current hardware target for the Waveshare ESP32-S3-Zero + GC9A01 Z-Bridge prototype.
