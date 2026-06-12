# ESP32-S3 Microphone Test Example

Note: The firmware provided in this online flasher is the ESP-IDF version of this example.

## Overview

This example demonstrates microphone capture, AFE processing, and playback on the ONX2432G028 development board (ESP32-S3). The LVGL UI provides MIC (record), release-to-play, and STOP controls.

## Features

- **Microphone capture**: PDM mic input.
- **AFE processing**: NS/VAD/AGC/SE (depending on model availability).
- **Playback**: Record to RAM and loop playback.
- **Touch UI**: LVGL UI for record/play/stop.

## Hardware Requirements

- **MCU**: ESP32-S3 Development Board
- **LCD**: 2.8-inch ST7789 SPI TFT LCD (240x320)
- **Touch**: CST826 I2C capacitive touch controller
- **IO Expander**: PCF8574 I2C IO expander
- **Microphone**: External  PDM mic
- **Speaker**: External  speaker / amplifier
- **PSRAM**: Recommended (recording buffer)

## Pin Connections (aligned with code)

| Function | ESP32-S3 Pin | Description |
| :--- | :--- | :--- |
| **I2C** | | |
| I2C SCL | GPIO_NUM_7 | I2C Clock |
| I2C SDA | GPIO_NUM_8 | I2C Data |
| **SPI (LCD)** | | |
| SPI SCLK | GPIO_NUM_5 | SPI Clock |
| SPI MOSI | GPIO_NUM_1 | SPI Data |
| LCD DC | GPIO_NUM_3 | LCD Data/Command |
| LCD CS | GPIO_NUM_2 | LCD Chip Select |
| **Other** | | |
| LCD BL | GPIO_NUM_6 | Backlight (PWM) |
| LCD RST | - | Controlled via PCF8574 |

> Mic and speaker pins are configured in `board_mic` / `board_speaker` components.

## How to Use

1. **Connect hardware**: ensure mic/speaker/LCD are ready.
2. **Flash**: Flash the firmware to the board.
3. **Record**: long-press the MIC button.
4. **Playback**: release MIC to loop playback.
5. **Stop**: tap STOP to stop recording/playback.

### Product Purchase Link
[2.8-inch capacitive screen (ONX2432G028)](https://itead.cc/product/open-nextion-2-8-genius-series-esp32-s3-lcd-touchscreen-development-board/)
[Dual MIC Board](https://itead.cc/product/nextion-dual-mic-board/)
[speaker](https://itead.cc/product/nextion-box-speaker/)

### Product Information
[2.8-inch capacitive screen (ONX2432G028)](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)

### Source Code
- [ESP-IDF version - 07_microphone_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-IDF/07_microphone_test)
- [ESP-Arduino version - 07_microphone_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-Arduino/07_microphone_test)
