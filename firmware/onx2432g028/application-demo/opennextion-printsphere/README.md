# OpenNextion PrintSphere - Bambu Lab Printer Status Display (ONX2432G028)

Ports the open-source [PrintSphere](https://github.com/cptkirki/PrintSphere) project to the OpenNextion ONX2432G028 (2.8-inch) rectangular ESP32-S3 display. Shows real-time status of Bambu Lab 3D printers on your desk.

> **Note:** This firmware is an unofficial port. Use at your own risk. Not affiliated with Bambu Lab or OpenNextion.

## Features

- **Print Status**: Displays lifecycle state — Idle / Preparing / Printing / Paused / Finished / Error
- **Print Info**: G-code filename, current layer / total layers, remaining time, progress percentage
- **Temperatures**: Nozzle, heated bed, chamber temperature (dual-nozzle H2D supported)
- **AMS Support**: Up to 4 AMS units × 4 slots + external spool; filament color and material display
- **Cover Image**: Preview image from Bambu Cloud (Hybrid / Cloud mode)
- **Camera Snapshot**: P1S JPEG socket camera frame display
- **Chamber Light**: Status display and toggle push
- **CJK Font**: Built-in `onx_cjk_16` Chinese font (Source Han Sans SC subset, ~2500 common characters)
- **Error Lookup**: HMS / print error code lookup with human-readable descriptions
- **Connection Modes**: Local MQTT (LAN), Cloud MQTT, or Hybrid (local-first with cloud fallback)
- **CN Region**: Compatible with Bambu Cloud China region (`api.bambulab.cn` / `cn.mqtt.bambulab.com`)
- **Wi-Fi Portal**: Built-in HTTP setup portal for Wi-Fi, printer, and display configuration
- **OTA-ready**: Partition layout supports OTA (not publicly distributed in v0.2.1)

## Supported Printers (v0.2.1)

| Printer | Local | Cloud/Hybrid | AMS | Cover | Camera | Notes |
| --- | :---: | :---: | :---: | :---: | :---: | --- |
| A1 mini | ✅ | ✅ | - | ✅ | ✅ | CN account tested; no AMS in test env |
| H2C | - | ✅ | ✅ | ✅ | - | CN account tested |
| P1S | pending | pending | pending | pending | pending | Verification pending |
| Others | varies | varies | - | - | - | Models: A1, P1P, X1, X1C, X1E, H2D... |

## Hardware Requirements

- **MCU**: ESP32-S3R8 (240 MHz, 8 MB Octal PSRAM)
- **LCD**: 2.8-inch SPI TFT (320×240, landscape)
- **Touch**: CST826 I2C capacitive touch controller
- **IO Expander**: PCF8574 I2C IO expander
- **Flash**: 16 MB
- **Board**: [ONX2432G028](https://nextion.tech/wiki/onx2432g028/)

## Pin Connections

| Function | ESP32-S3 Pin | Description |
| :--- | :--- | :--- |
| **SPI (LCD)** | | |
| SPI SCLK | GPIO 5 | SPI Clock |
| SPI MOSI | GPIO 1 | SPI Data |
| LCD DC | GPIO 3 | Data/Command |
| LCD CS | GPIO 2 | Chip Select |
| **I2C** | | |
| I2C SCL | GPIO 7 | Clock (CST826 touch + PCF8574 IO expander) |
| I2C SDA | GPIO 8 | Data |
| **Other** | | |
| LCD BL | GPIO 6 | Backlight PWM (10-bit, 10 kHz) |
| LCD RST | — | Controlled via PCF8574 |
| BAT ADC | GPIO 4 | Battery voltage ADC (ADC1 CH3) |

## Firmware Information

| Item | Value |
| :--- | :--- |
| Target Board | ONX2432G028 |
| Version | v0.2.1 |
| Chip | ESP32-S3 |
| Flash | 16 MB |
| Flash Address | 0x0 (merged image) |
| Orientation | Landscape (320×240) |
| Source Branch | main |

## First Use

1. Flash this firmware at address `0x0` using this tool.
2. On first boot, the device starts a Wi-Fi AP named `PrintSphere-XXXXXX`.
3. Connect to the AP, then open `http://192.168.4.1` in a browser.
4. In the setup portal: configure Wi-Fi, enter your Bambu account or local printer credentials, and select connection mode.
5. Save and reboot. The display will connect and show your printer status.

## 3D Printed Case

[ONX2432G028 Desk Stand on MakerWorld](https://makerworld.com/models/2950328-printsphere-ported-to-opennextion-for-2-8-inch-bam#profileId-3305542)

### Product Purchase Link

[ONX2432G028 (2.8-inch ESP32-S3 LCD)](https://itead.cc/product/open-nextion-2-8-genius-series-esp32-s3-lcd-touchscreen-development-board/)

### Product Resources

[ONX2432G028 Wiki & Schematics](https://nextion.tech/wiki/onx2432g028/)  
[ONX2432G028 GitHub SKU Repository](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)

### Source Code

[opennextion-printsphere on GitHub](https://github.com/OpenNextion/opennextion-printsphere)  
[Original PrintSphere by Cpt_Kirk](https://github.com/cptkirki/PrintSphere)
