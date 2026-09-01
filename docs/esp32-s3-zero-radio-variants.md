# ESP32-S3 Zero — Local LoRa variants

Waveshare ESP32-S3 Zero Z-Bridge использует только **один физический Local LoRa модуль на одну сборку прошивки**.

Общая платформа для всех вариантов:

- GC9A01 240×240
- Encoder
- 3-way navigation
- GPS
- Battery ADC
- ESP-NOW
- BLE Companion
- BLE Remote
- Unified Router
- Web UI
- USB CLI

## 1. E22 / SX126x

Status: Testing

| Signal | GPIO |
|---|---:|
| SCK | GPIO12 |
| MOSI | GPIO11 |
| MISO | GPIO4 |
| CS / NSS | GPIO2 |
| DIO1 | GPIO38 |
| BUSY | GPIO39 |
| RESET | GPIO40 |
| RXEN | GPIO41 |

Это существующий Zero V2 профиль.

E22-specific TCXO/RF-switch configuration сохраняется без изменений.

---

## 2. RA-02 / SX1278

Status: In development

| Signal | GPIO |
|---|---:|
| SCK | GPIO12 |
| MOSI | GPIO11 |
| MISO | GPIO4 |
| CS / NSS | GPIO2 |
| DIO0 | GPIO38 |
| RESET | GPIO40 |

GPIO39 — free  
GPIO41 — free

RA-02 не использует:

- BUSY
- RXEN
- TXEN
- TCXO control

Для Zero используется single-radio SX1278 adapter.

Large-S3 LoRa1 / dual-radio architecture здесь не используется.

---

## 3. RA-01SH / SX1262

Status: In development

| Signal | GPIO |
|---|---:|
| SCK | GPIO12 |
| MOSI | GPIO11 |
| MISO | GPIO4 |
| CS / NSS | GPIO2 |
| DIO1 | GPIO38 |
| BUSY | GPIO39 |
| RESET | GPIO40 |

GPIO41 — free.

Target configuration:

- SX1262
- XTAL
- no DIO3 TCXO
- DIO2 RF-switch
- no E22 RXEN behavior
- TX power up to +22 dBm

RA-01SH профиль не должен наследовать E22-specific DIO3 1.8 V TCXO configuration.

---

# Transport model

BLE телефона — это Companion/control interface.

Это не второй Local LoRa transport.

Локальные mesh-интерфейсы:

- Local LoRa ON/OFF
- ESP-NOW ON/OFF

Варианты:

- LoRa ON + ESP-NOW OFF → LoRa only
- LoRa OFF + ESP-NOW ON → ESP-NOW only
- LoRa ON + ESP-NOW ON → Dual
- оба OFF → BLE/Web configuration only

Display, Web UI и CLI должны управлять одним persisted transport state.

---

# Firmware variants

Планируем отдельные прошивки:

- `Z-Bridge S3 Zero · E22 / SX126x`
- `Z-Bridge S3 Zero · RA-02 / SX1278`
- `Z-Bridge S3 Zero · RA-01SH / SX1262`

RA-02 и RA-01SH не публикуются для Flash до успешного pristine build.

Для каждой готовой прошивки в manifest должны быть записаны:

- file
- SHA-256
- size
- build date
- status
