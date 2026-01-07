# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-23 - [Debouncing Image Processing]
**Learning:** The Image Tool performed expensive canvas operations (`drawImage`, `toBlob`) synchronously on every `input` event from range sliders. This caused UI jank.
**Action:** Implemented a standard `debounce` pattern to decouple immediate UI updates (labels) from the heavy image processing, significantly improving responsiveness during rapid inputs.
