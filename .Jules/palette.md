## 2024-05-23 - Form Label Association
**Learning:** Found several inputs (selects and number inputs) lacking programmatic label associations. This is a common pattern in older or rapidly prototyped simple HTML apps where visual proximity is assumed sufficient.
**Action:** Always check form inputs for `for` attribute on labels or `aria-label` when visual labels are absent. Simple `for` attributes provide immediate wins for screen reader users and click-to-focus usability.

## 2024-05-24 - Navigation Roles
**Learning:** Navigation rails often act more like tab lists than simple lists of links, especially in Single Page Apps (SPAs) where content is swapped dynamically without page reloads. Using `role="tablist"` and `aria-selected` provides much better context to screen readers than a generic list of buttons.
**Action:** When auditing navigation in SPAs, consider if the interaction model is "tab-like". If so, upgrade semantics from simple buttons to ARIA tabs to communicate state (selected/active) properly.

## 2024-05-25 - Icon-Only Button Accessibility
**Learning:** Icon-only buttons (like start/stop recording circles) are completely invisible to screen readers if they rely solely on visual shapes or symbols (like ● or ■) without text content or labels.
**Action:** Always add `aria-label` for screen readers and `title` for mouse users to icon-only buttons. This ensures the button's purpose is communicated to all users regardless of how they interact with the interface.
