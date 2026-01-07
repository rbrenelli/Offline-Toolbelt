## 2024-05-26 - State Toggle Accessibility
**Learning:** Visual toggle buttons (like "Manual vs Auto" mode switchers) often rely solely on CSS classes (e.g., `.active`) to show state. This is invisible to screen readers, making the current mode unknowable without trial and error.
**Action:** Use `aria-pressed="true"` on the active button and `aria-pressed="false"` on the inactive one. Update these attributes dynamically via JavaScript alongside the visual class changes to ensure state is communicated programmatically.
