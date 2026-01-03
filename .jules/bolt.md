# Bolt's Journal

## 2024-05-22 - [Optimizing FCP with Defer]
**Learning:** This codebase uses heavy external libraries loaded synchronously in the head. This blocks FCP. Adding `defer` is a standard optimization.
**Action:** I will add `defer` to the external scripts in `index.html`.

## 2024-05-23 - [Nested Loops in Text Processing]
**Learning:** `fixBodyIdLink` used an O(N*M) nested loop structure where M is the number of link targets. For large EPUBs with many files and chapters, this caused significant blocking on the main thread (reproduction showed ~124ms vs ~2.4ms for 100 files).
**Action:** Replaced nested loops with a single-pass Regex constructed from sorted keys. This is safer and much faster for bulk string replacements.
