# SENSOR routing

Z-Bridge должен позволять определять, какие SENSOR-ноды остаются локальными, а какие публикуются в LoRa.

## Routing scope

Для каждой SENSOR identity:

- Local
- 868
- 434
- 868 + 434
- Blocked

Пример:

Boiler -> Local
Weather -> 868
Pet tracker -> 434
SOS -> 868 + 434

## Фильтрация телеметрии

Можно разрешать отдельные типы данных:

- temperature;
- humidity;
- pressure;
- power;
- GPS;
- alarm/SOS.

Например домашний INA3221 может оставаться Local, а наружная температура публиковаться в 868.

## Несколько Z-Bridge

Если один SENSOR одновременно слышат несколько Z-Bridge, пакет не должен бесконтрольно попадать в LoRa несколько раз.

Нужны:

- full-frame dedup;
- временный hash cache;
- original packet identity;
- origin transport;
- bridge history;
- cross-band TTL;
- loop counters.

## Рекомендуемая модель

ESP-NOW -> Local
LoRa 434 -> Area
LoRa 868 -> City

Это позволяет масштабировать сеть без постоянной загрузки городского LoRa эфира локальной телеметрией.
