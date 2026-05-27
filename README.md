# OpenNextion Flasher

[中文说明](./README_zh.md)

OpenNextion Flasher is a browser-based firmware flashing tool for OpenNextion development boards. It uses Web Serial and `esptool-js` so users can open the web page, select a board, choose a firmware example, and flash ESP32-series firmware directly from Chrome or Edge.

Online page: [https://opennextion.github.io/OpenNextion-Tool-Flasher/](https://opennextion.github.io/OpenNextion-Tool-Flasher/)

## Features

- Board selection for `ONX2432G028` and `ONX3248G035`.
- Cloud firmware from this repository, plus local `.bin` firmware upload.
- Firmware examples grouped by category.
- Bilingual UI, with the initial language following the browser language.
- Bilingual firmware notes loaded from each example's `README.md` or `README_zh.md`.
- Serial port selection, connection log, flash progress, reset, and disconnect handling.
- Board, group, and firmware metadata maintained through JSON files.

## Browser Requirements

Web Serial requires a secure context. Use the GitHub Pages URL above, or another HTTPS deployment.

Recommended browsers:

- Desktop Chrome
- Desktop Edge

## Supported Boards

Both supported boards currently use these default flashing parameters:

| Board | Chip | Baud Rate | Flash Mode | Flash Freq | Flash Size | Reset | Disconnect Delay |
| --- | --- | ---: | --- | --- | --- | --- | --- |
| ONX2432G028 | ESP32-S3 | 921600 | QIO | 80M | 16MB | Inverted RTS reset | 0.8 s |
| ONX3248G035 | ESP32-S3 | 921600 | QIO | 80M | 16MB | Inverted RTS reset | 0.8 s |

These defaults are stored in `data/boards.json`. The web page loads them automatically when a board is selected. Users can expand the flash settings panel and adjust the parameters manually when needed.

## Firmware Layout

Cloud firmware and documentation are stored under `firmware/`:

```text
firmware/
  onx2432g028/
    factory-demo/
      01_touch_test/
        01_touch_test.bin
        README.md
        README_zh.md
      ...
    application-demo/
      xiaozhi-esp32/
        README.md
        README_zh.md
        xiaozhi_*.bin
  onx3248g035/
    factory-demo/
      ...
    application-demo/
      xiaozhi-esp32/
        ...
```

Current cloud firmware index:

- Factory Demo: 18 entries, version `v1.0.0`.
- Application Demo: 4 XiaoZhi AI entries, version `v2.2.6`.

## Metadata Files

The web page is configured by these JSON files:

| File | Purpose |
| --- | --- |
| `data/boards.json` | Board information, chip type, USB description, and default flash parameters. |
| `data/groups.json` | Firmware example groups and bilingual group names. |
| `data/firmwares.json` | Firmware entries, bilingual names/descriptions, README paths, bin paths, and flash addresses. |

## Adding Firmware

1. Create a folder under the target board directory, for example:

   ```text
   firmware/onx2432g028/factory-demo/10_new_example/
   ```

2. Add the firmware binary and documentation:

   ```text
   10_new_example.bin
   README.md
   README_zh.md
   ```

3. Add an entry to `data/firmwares.json`:

   ```json
   {
     "id": "onx2432g028-factory-demo-10_new_example",
     "name": {
       "zh": "10 新例程",
       "en": "10 New Example"
     },
     "groupId": "factory",
     "boardIds": ["onx2432g028"],
     "version": "v1.0.0",
     "summary": {
       "zh": "中文简介。",
       "en": "English summary."
     },
     "description": {
       "zh": "中文描述。",
       "en": "English description."
     },
     "markdown": {
       "zh": "./firmware/onx2432g028/factory-demo/10_new_example/README_zh.md",
       "en": "./firmware/onx2432g028/factory-demo/10_new_example/README.md"
     },
     "files": [
       {
         "path": "./firmware/onx2432g028/factory-demo/10_new_example/10_new_example.bin",
         "address": "0x0"
       }
     ]
   }
   ```

For merged factory images flashed at `0x0`, the page keeps the flash parameters embedded in the image. For multi-file firmware, set each `files[].address` to the correct ESP-IDF flash address.

## Local Preview

Because the page loads JSON, Markdown, and firmware files with `fetch()`, preview it through a local HTTP server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Implementation Notes

- The flashing library is loaded from `https://unpkg.com/esptool-js@0.6.0/bundle.js`.
- Keep `esptool-js` on the tested `0.6.0` bundle unless you re-test flashing, reset, and repeated flashing stability.
- The current OpenNextion test hardware can auto-run after flashing with inverted RTS reset and a 0.8-second disconnect delay.
- The page disables low-level serial tracing and releases firmware buffers after flashing to reduce memory pressure during repeated flashes.
- If flashing fails before completion, the page keeps the serial connection open instead of closing it on the failure path.
