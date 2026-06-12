# ESP32-S3 Wi-Fi Test Example

Note: The firmware provided in this online flasher is the ESP-IDF version of this example.

## Overview

This example demonstrates Wi-Fi scanning, connection, and status display on the ONX2432G028 development board (ESP32-S3). The UI is built with LVGL and the Wi-Fi logic is provided by the `wifi_manager` component.

## Features

- **Wi-Fi scan**: scan nearby APs.
- **Wi-Fi connect**: select an SSID and connect (common WPA/WPA2).
- **Status UI**: show connection state and errors.

## Hardware Requirements

- **MCU**: ESP32-S3 Development Board
- **LCD**: 2.8-inch ST7789 SPI TFT LCD (240x320)
- **Touch**: CST826 I2C capacitive touch controller
- **IO Expander**: PCF8574 I2C IO expander

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

## How to Use

1. **Connect hardware**: LCD + touch + board.
2. **Flash**: Flash the firmware to the board.
3. **Provision Wi-Fi**: scan and select SSID on the screen, then enter password.

### Product Purchase Link
[2.8-inch capacitive screen (ONX2432G028)](https://itead.cc/product/open-nextion-2-8-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### Product Information
[2.8-inch capacitive screen (ONX2432G028)](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)

### Source Code
- [ESP-IDF version - 05_wifi_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-IDF/05_wifi_test)
- [ESP-Arduino version - 05_wifi_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-Arduino/05_wifi_test)

