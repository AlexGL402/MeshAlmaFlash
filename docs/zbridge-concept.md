# Z-Bridge — концепция

Z-Bridge — companion-based gateway между локальной ESP-NOW сетью и MeshCore/LoRa.

## Основная идея

ESP-NOW = быстрый локальный транспорт
LoRa = дальний транспорт
Z-Bridge = точка соединения между ними

## Для чего нужен Z-Bridge

ESP-NOW удобен для локальных устройств:

- SENSOR;
- домашняя автоматика;
- GPS-трекеры;
- дисплеи;
- контроллеры;
- сервисные ноды.

Такие устройства могут быть компактными и не иметь собственного LoRa-модуля.

DS18B20 / BME280 / GPS / INA3221
↓
ESP32-C3 SENSOR
↓ ESP-NOW
Z-Bridge S3
↓
LoRa 868 / LoRa 434
↓
MeshCore network

Локальная телеметрия может передаваться часто по ESP-NOW и не занимать LoRa эфир.

Z-Bridge выпускает в дальнюю сеть только нужный трафик.

## Примеры

### Домашние SENSOR

Несколько ESP32-C3 передают:

- температуру;
- влажность;
- давление;
- питание;
- состояние оборудования.

Внутри дома используется ESP-NOW.

В LoRa через Z-Bridge передаётся только нужная информация.

### Уличный SENSOR

SENSOR может вообще не иметь LoRa:

SENSOR -> ESP-NOW -> Z-Bridge -> LoRa 868

При сохранении исходной MeshCore identity в LoRa это остаётся та же SENSOR-сущность.

### GPS tracker

Рядом с локальной сетью трекер использует ESP-NOW.

Z-Bridge может передать нужные координаты дальше через 434 или 868.

### Несколько Z-Bridge

Несколько Z-Bridge могут стоять в разных домах и районах.

Каждый может:

- принимать локальные ESP-NOW SENSOR;
- передавать выбранный трафик в LoRa;
- принимать LoRa;
- собирать статистику;
- показывать локальную видимость сети.

Для нескольких мостов обязательны dedup и loop protection.

## Local / Area / City

ESP-NOW = Local
LoRa 434 = Area / район
LoRa 868 = City / город

Примеры:

Boiler sensor -> Local
Weather station -> 868
Pet tracker -> 434
SOS sensor -> 434 + 868

## Почему Companion Bridge, а не Repeater Bridge

Repeater в первую очередь предназначен для:

RX -> routing / forwarding -> TX

Z-Bridge выполняет значительно больше функций:

- собственная identity;
- Companion protocol;
- BLE;
- TCP Companion;
- Wi-Fi;
- Web UI;
- GNSS;
- ESP-NOW;
- LoRa 868;
- LoRa 434;
- SENSOR discovery;
- SENSOR management;
- API;
- статистика;
- routing policy;
- remote CLI в будущем.

Companion является endpoint и естественно обслуживает локальные интерфейсы.

Z-Bridge добавляет к нему дополнительные transport ingress/egress.

Если строить всё вокруг Repeater, начинают смешиваться:

- local traffic;
- transit traffic;
- management traffic;
- bridge forwarding.

Это усложняет архитектуру и увеличивает риск routing loops.

## Важное правило

Z-Bridge не должен автоматически становиться обычным mesh repeater.

MeshCore repeater forwarding и cross-transport bridge forwarding — разные функции.

Cross-transport forwarding должен иметь:

- packet dedup;
- origin tracking;
- bridge ID/history;
- TTL/hop limit;
- loop protection;
- per-band policy.

По умолчанию пакет должен пересекать границу transport только один раз.
