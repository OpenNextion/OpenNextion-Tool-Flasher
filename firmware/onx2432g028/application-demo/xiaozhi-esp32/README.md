# ESP32-S3 XiaoZhi AI Example

## Overview

This example aims to demonstrate the XiaoZhi AI voice features.

## Features

- **Wake Word Activation**: Chinese firmware wake word: "你好，小智"; English firmware wake word: "Jarvis".
- **AI Voice**: AI voice conversation. ## Hardware Requirements

## Hardware Requirements

- **Main Controller**: ESP32-S3 Development Board
- **LCD Screen**: 2.8-inch ST7789 SPI Interface TFT LCD (Resolution: 240x320)
- **Touch Controller**: CST826 I2C Interface Capacitive Touch Controller
- **IO Expander**: PCF8574 I2C IO Expander (Used for LCD Reset)
- **Microphone**: Requires an external PDM microphone
- **Speaker**: Requires an external speaker/amplifier

## Pin Connections (Consistent with Code)

| Function | ESP32-S3 Pin | Description |
| :--- | :--- | :--- |
| **I2C** | | |
| I2C SCL | GPIO_NUM_7 | I2C Clock Line |
| I2C SDA | GPIO_NUM_8 | I2C Data Line |
| **SPI (LCD)** | | |
| SPI SCLK | GPIO_NUM_5 | SPI Clock Line |
| SPI MOSI | GPIO_NUM_1 | SPI Data Line |
| LCD DC | GPIO_NUM_3 | LCD Data/Command Select |
| LCD CS | GPIO_NUM_2 | LCD Chip Select |
| **Other** | | |
| LCD BL | GPIO_NUM_6 | Backlight Control (PWM) |
| LCD RST | - | Controlled via PCF8574 |

#### Product Purchase Link
[2.8-inch capacitive screen (ONX2432G028)](https://itead.cc/product/open-nextion-2-8-genius-series-esp32-s3-lcd-touchscreen-development-board/)
[Dual MIC Board](https://itead.cc/product/nextion-dual-mic-board/)
[speaker](https://itead.cc/product/nextion-box-speaker/)

#### Product Resources
[2.8-inch Capacitive Screen ONX2432G028](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)

#### Source code
[OpenNextion-Example-xiaozhi-esp32](https://github.com/OpenNextion/OpenNextion-Example-xiaozhi-esp32)