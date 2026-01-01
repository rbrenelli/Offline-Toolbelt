## 2024-05-23 - Form Label Association
**Learning:** Found several inputs (selects and number inputs) lacking programmatic label associations. This is a common pattern in older or rapidly prototyped simple HTML apps where visual proximity is assumed sufficient.
**Action:** Always check form inputs for `for` attribute on labels or `aria-label` when visual labels are absent. Simple `for` attributes provide immediate wins for screen reader users and click-to-focus usability.
