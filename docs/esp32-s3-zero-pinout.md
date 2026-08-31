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

## Planned battery ADC

GPIO1 is reserved as the planned battery ADC input.

Battery ADC support is not implemented yet.

## Reserved / do not use

- GPIO19 = USB D-
- GPIO20 = USB D+
- GPIO21 = onboard WS2812 RGB LED
- GPIO33–37 = internal Flash/PSRAM
- GPIO43/44 = UART0 / debug
- Avoid strapping pins unless explicitly required

## Firmware profile

Profile: `zbridge_zero_4m2r_companion`

```text
ESP-NOW <-> ESP32-S3 Zero <-> BLE Remote <-> nRF52840 + LoRa
                     |
                     +-> BLE Companion phone
```

Enabled:

- ESP-NOW
- BLE Companion Peripheral
- BLE Remote Central x1
- `CONFIG_BT_MAX_CONN=2`
- Unified Router and FieldControl
- GC9A01 and encoder
- GPS
- Web UI and TCP Companion

Disabled:

- Physical LoRa on ESP32-S3 Zero
- Second BLE Remote
- MCP23017
- LoRa scanner
- Wi-Fi AP mode

Memory configuration:

- Flash: 4 MB
- PSRAM: 2 MB
- Configured PSRAM heap: 512 KB

This pinout is the current hardware target for the first Waveshare ESP32-S3-Zero + GC9A01 prototype.
