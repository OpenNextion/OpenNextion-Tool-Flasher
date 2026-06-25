# Plane Radar

## Overview

This firmware is the Plane Radar build for `ONX2432G028`. It shows a live aircraft radar view based on ADS-B data and provides first-boot Wi-Fi setup and location configuration for desktop flight-tracking and information display use cases.

## Firmware Information

| Item | Value |
| :--- | :--- |
| Target board | ONX2432G028 |
| Firmware version | Not specified |
| Chip | ESP32-S3 |
| Flash | 16MB |
| Flash address | 0x0 |
| Display orientation | Landscape (320×240) |
| Source branch | main |

## Main Features

- Displays a live ADS-B aircraft radar centered on the configured location.
- Supports first-boot Wi-Fi portal setup and radar location configuration.
- Supports radar range, distance unit, and runway overlay related settings.
- Periodically fetches nearby aircraft data from an online ADS-B source and refreshes the display.

## First Use

1. Select the `ONX2432G028` board in the online flasher.
2. Select `Plane Radar` under Application Demo.
3. After flashing and rebooting, connect to the `PlaneRadar-Setup` Wi-Fi hotspot created by the device on first use.
4. Open `http://plane-radar.local` or `http://192.168.4.1` in your browser.
5. Configure Wi-Fi, latitude/longitude, distance unit, and runway overlay options in the portal, then save and let the device reboot into the radar screen.

## Usage Notes

- Radar data depends on network access to the online ADS-B data source. No live aircraft data will be shown when the network is unavailable.
- The upstream project defines button actions for range switching and clearing saved settings. If this OpenNextion build maps controls differently, follow the actual firmware behavior on the device.
- Aircraft positions and labels scale with the selected range. Targets beyond the main radar ring are shown as edge direction cues.

## Notes

- This firmware is a merged image. The online flasher writes it to `0x0` and keeps the flash parameters embedded in the image.
- Aircraft data comes from a public ADS-B interface. Display results depend on network status, service availability, and source coverage.
- Wi-Fi, location, and UI related settings are stored in the device flash.

## Links

- [OpenNextion-ESP32-Plane-Radar Source](https://github.com/OpenNextion/OpenNextion-ESP32-Plane-Radar)
- [adsb.fi Open Data](https://opendata.adsb.fi/)
- [ONX2432G028 Product Files](https://github.com/OpenNextion/OpenNextion-SKU-ONX2432G028)
