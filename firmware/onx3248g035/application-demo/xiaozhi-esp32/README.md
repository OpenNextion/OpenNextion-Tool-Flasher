# ESP32-S3 XiaoZhi AI Example

## Overview

This example aims to demonstrate the XiaoZhi AI voice features.

## Features

- **Wake Word Activation**: Chinese firmware wake word: "你好，小智"; English firmware wake word: "Jarvis".
- **AI Voice**: AI voice conversation. ## Hardware Requirements

## Hardware Requirements

- **MCU**: ESP32-S3 Development Board
- **LCD**: 3.5-inch ST7796U SPI TFT LCD (320x480)
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

### Product Purchase Link
[3.5-inch capacitive screen (ONX3248G035)](https://itead.cc/product/open-nextion-3-5-genius-series-esp32-s3-lcd-touchscreen-development-board/)
[Dual MIC Board](https://itead.cc/product/nextion-dual-mic-board/)
[speaker](https://itead.cc/product/nextion-box-speaker/)

### Product Resources
[3.5-inch capacitive screen (ONX3248G035)](https://github.com/OpenNextion/OpenNextion-SKU-ONX3248G035)

### Source code
[OpenNextion-Example-xiaozhi-esp32](https://github.com/OpenNextion/OpenNextion-Example-xiaozhi-esp32)