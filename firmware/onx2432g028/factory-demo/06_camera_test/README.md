# ESP32-S3 Camera Test Example

Note: The firmware provided in this online flasher is the ESP-IDF version of this example.

## Overview

This project demonstrates how to use a camera on the ONX2432G028 development board (ESP32-S3) and display the live video stream on an LCD screen. It initializes a OV2640 camera sensor, configures it to output in RGB565 format, and continuously captures and displays frames on an ST7789 LCD.

## Features

- **Camera Integration**: Initializes and configures a OV2640 camera sensor.
- **Live Video Stream**: Captures frames from the camera and displays them in real-time on the LCD.
- **LCD Display**: Uses an ST7789 LCD to render the camera feed.
- **LVGL Integration**: Leverages the LVGL library to manage the display buffer and rendering.

## Hardware Requirements

- **MCU**: ESP32-S3 Development Board
- **LCD Screen**: 2.8-inch ST7789 SPI TFT LCD (Resolution: 240x320)
- **Camera**: OV2640 Camera Module
- **IO Expander**: PCF8574 I2C IO Expander (used for LCD reset).

## Pin Connections

| Function      | ESP32-S3 Pin | Description                               |
| :------------ | :----------- | :---------------------------------------- |
| **I2C**       |              |                                           |
| I2C SCL       | GPIO_NUM_7   | I2C Clock Line                            |
| I2C SDA       | GPIO_NUM_8   | I2C Data Line                             |
| **SPI**       |              |                                           |
| SPI SCLK      | GPIO_NUM_5   | SPI Clock Line                            |
| SPI MOSI      | GPIO_NUM_1   | SPI Master Out Slave In Data Line         |
| LCD DC        | GPIO_NUM_3   | LCD Data/Command Select                   |
| LCD CS        | GPIO_NUM_2   | LCD Chip Select                           |
| **Camera**    |              |                                           |
| CAM PCLK      | GPIO_NUM_41  | Camera Pixel Clock                        |
| CAM XCLK      | GPIO_NUM_38  | Camera System Clock                       |
| CAM HSYNC     | GPIO_NUM_18  | Camera Horizontal Sync                    |
| CAM VSYNC     | GPIO_NUM_17  | Camera Vertical Sync                      |
| CAM D0 (Y2)   | GPIO_NUM_45  | Camera Data Line 0                        |
| CAM D1 (Y3)   | GPIO_NUM_47  | Camera Data Line 1                        |
| CAM D2 (Y4)   | GPIO_NUM_48  | Camera Data Line 2                        |
| CAM D3 (Y5)   | GPIO_NUM_46  | Camera Data Line 3                        |
| CAM D4 (Y6)   | GPIO_NUM_42  | Camera Data Line 4                        |
| CAM D5 (Y7)   | GPIO_NUM_40  | Camera Data Line 5                        |
| CAM D6 (Y8)   | GPIO_NUM_39  | Camera Data Line 6                        |
| CAM D7 (Y9)   | GPIO_NUM_21  | Camera Data Line 7                        |
| **Other**     |              |                                           |
| LCD BL        | GPIO_NUM_6   | LCD Backlight Control (PWM)               |
| LCD RST       | -            | Controlled via PCF8574                    |

## How to Use

1.  **Connect Hardware**: Connect the LCD screen and camera module to the ESP32-S3 board according to the pin connections table.
2.  **Flash**: Flash the firmware to the board.
3.  **View Output**: The live camera feed should appear on the LCD screen after the device boots up.

### Product Purchase Link
[2.8-inch capacitive screen (ONX2432G028)](https://itead.cc/product/open-nextion-2-8-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### Product Information
[2.8-inch capacitive screen (ONX2432G028)](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)

### Source Code
- [ESP-IDF version - 06_camera_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-IDF/06_camera_test)
- [ESP-Arduino version - 06_camera_test](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028/tree/main/Example%20Programs/ESP-Arduino/06_camera_test)

