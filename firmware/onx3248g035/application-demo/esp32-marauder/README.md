# ESP32 Marauder

## Overview

This firmware is the ESP32 Marauder build for `ONX3248G035`. ESP32 Marauder is a suite of Wi-Fi / Bluetooth security testing tools for the ESP32 platform, intended for authorized testing, education, and lab environments.

## Firmware Information

| Item | Value |
| :--- | :--- |
| Target board | ONX3248G035 |
| Firmware version | v1.12.2 |
| Chip | ESP32-S3 |
| Flash | 16MB |
| Flash address | 0x0 |
| Source branch | add-ONX3248G035-support |

## Main Features

- Provides Wi-Fi / Bluetooth security testing tool menus.
- Adapts the `ONX3248G035` 3.5-inch touch display and touch input.
- Supports SD card related workflows where provided by the firmware menus.

## First Use

1. Select the `ONX3248G035` board in the online flasher.
2. Select `ESP32 Marauder` under Application Demo.
3. After flashing and rebooting, use the on-screen menu.
4. Prepare a compatible microSD card if you need SD card related features.

## Notes

- This firmware comes from the `add-ONX3248G035-support` branch of `OpenNextion-Example-ESP32Marauder`.
- The firmware is a merged image. The online flasher writes it to `0x0` and keeps the flash parameters embedded in the image.
- Use this firmware only on devices, networks, and lab environments where you have explicit authorization. Follow local laws and organizational security policies.

## Links

- [OpenNextion-Example-ESP32Marauder Source](https://github.com/OpenNextion/OpenNextion-Example-ESP32Marauder)
- [ESP32 Marauder Project](https://github.com/justcallmekoko/ESP32Marauder)
- [ONX3248G035 Product Files](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)
