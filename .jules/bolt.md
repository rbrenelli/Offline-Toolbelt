# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-23 - [Optimizing WAV Generation]
**Learning:** When generating binary data like WAV files, iterating by byte offset with `DataView` is slow and error-prone (proven by a 20x speedup when switching to `Int16Array` and sample-based indexing).
**Action:** Always prefer TypedArray views (`Int16Array`, `Float32Array`) for bulk binary data manipulation. Avoid calculating offsets in loops; use simple incrementing indices.
