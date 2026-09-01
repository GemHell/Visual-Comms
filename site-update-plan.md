# Fall 2026 Site Update Plan
*Comparing `syllabusMEDP150_FALL2026.pdf` against the current Visual-Comms site (L05/L06, Tue labs, HN 432)*

Generated 2026-08-25. This is a working checklist, not for publication.

---

## Update Log

**2026-08-29** — Cross-referenced the syllabus's Homework Section (page 10) against the Course Schedule (pages 4–9) and rewrote the homework sections on `week_2.html` through `week_14.html` to match, using the PDF's actual embedded hyperlinks for readings/viewings. This pass resolved:
- Section 1, items 6–9 (empty Weeks 5, 6, 9, 14 now have homework content)
- Section 2, item 11 (Week 7 now has a note explaining the Tue 10/13 Monday-schedule quirk from the syllabus)
- Section 3 (homework numbering) — renumbered every week's homework label to match the syllabus's canonical Homework 1–10 sequence (option (a) from the recommendation)
- Section 4 (reading assignments) — added the missing "Your Brain on ChatGPT" reading to Week 3, added the missing Nuclear War reading to Week 10, and moved "Motherhood in Crisis" from Week 13 to Week 5 to match the syllabus

Verified against the live site while updating this log: items 2, 3, 4, 5 (Section 1) and items 13, 14 (Section 2) were already fixed prior to today and are now crossed off below.

Not addressed: Section 1 items 1, 10; Section 2 items 12, 15; Section 5 (all items).

---

## 1. Must-fix (broken or actively wrong)

These will confuse or mislead students if the site goes out as-is.

| # | Location | Problem | Fix |
|---|----------|---------|-----|
| 1 | `index.html` line 102 | Syllabus link is a literal placeholder: `href="UPDATE-URL"` | Link to the actual syllabus (Brightspace, or host `syllabusMEDP150_FALL2026.pdf` in the repo and link to it) |
| 2 | ~~`oral_presentation.html` line 86~~ | ~~Says "five-minute presentation"~~ | ✅ **Already fixed** — page now reads "A six-minute oral presentation" |
| 3 | ~~`oral_presentation.html` lines 77–79~~ | ~~Sign-up links labeled `1LO1: 9:30AM-11:20AM` and `1L02: 11:30AM-1:20PM`~~ | ✅ **Already fixed** — sign-up links now correctly labeled "L05 Tu 1:00PM - 2:50PM" and "L06 Tu 3:00PM - 4:50PM" |
| 4 | ~~`week_11.html` — `<h1>Color and Pattern</h1>`~~ | ~~Title doesn't match the page's actual content~~ | ✅ **Already fixed** — now `<h1>Week 11: Intro to CSS</h1>` |
| 5 | ~~`week_12.html` — `<h1>History and Theory of Games</h1>`~~ | ~~Title is syllabus's Week 9 topic ("Games")~~ | ✅ **Already fixed** — now `<h1>Week 12: CSS Continued...</h1>` |
| 6 | ~~`week_5.html`~~ | ~~Title only ("Illustrator: Fills & Strokes, Color, Complex Shapes"), no body content, no homework~~ | ✅ **Fixed 2026-08-29** — added Homework 5 (In-Lab Vector Emotive Eye) section |
| 7 | ~~`week_6.html`~~ | ~~Title only, no content~~ | ✅ **Fixed 2026-08-29** — added Homework 6 (Illustrated Environment) section |
| 8 | ~~`week_9.html`~~ | ~~Title only ("Work Day"), no content~~ | ✅ **Fixed 2026-08-29** — added a note pointing to the continued Homework 7 (Animated GIFs) assignment |
| 9 | ~~`week_14.html`~~ | ~~Title only ("Work on Interactive Story and Online Portfolio"), no content~~ | ✅ **Fixed 2026-08-29** — added Homework 10 (finalize portfolio + interactive story, due 6pm Fri 12/18) section |
| 10 | `week_15.html` | Deleted (per `git status`) | Confirm nothing load-bearing was lost — syllabus only runs through Week 14, so removal looks correct, but double check no nav or other page still links to it (current nav in all pages already stops at Week 14, so this looks clean). |

---

## 2. Needs verification (possibly correct, but flag before publishing)

| # | Location | Issue | What to check |
|---|----------|-------|----------------|
| 11 | `week_7.html` — "No Class" | Syllabus Week 7 lecture is **Exam 1** (10/14), but the syllabus also notes *"Labs: Tue 10/20 (10/13 follows Monday schedule), Thu 10/15"* — implying Tuesday 10/13 labs may not meet because the college runs a Monday schedule that day. If that's why L05/L06 has no class, this page is likely **correct as-is** for your sections specifically. | ⚠️ **Partially addressed 2026-08-29** — added a homework note quoting the syllabus's Exam 1/Monday-schedule language and the Homework 6 continuation deadline. Still need to confirm against the actual Fall 2026 Hunter academic calendar that Tue 10/13/2026 follows a Monday schedule. |
| 12 | Syllabus document itself | Header on page 1 reads **"Fall 2025 MEDPL 150"** (not 2026) despite the filename. Also, the Week 1 schedule text has a date inconsistency: *"Lecture: 9/2"* (paired with "Wednesdays") but *"Labs: Tue 9/2, Thu 9/3"* — 9/2/2026 is actually a Wednesday, so "Tue 9/2" doesn't line up. | This is an error in the master syllabus, not something to fix on the site — but it means **every date in the syllabus's Course Schedule may be inherited from Fall 2025** and not re-verified against the real Fall 2026 calendar. Before you copy any specific due date onto the site, cross-check it against the actual 2026 calendar (or ask Prof. Miranda whether the schedule dates were updated for this year). |
| 13 | ~~`index.html` contact block~~ | ~~"Jem Hill... Office Hour: Tuesdays 1:30 - 2:30pm HN 515"~~ | ✅ **Already fixed** — now reads "Office Hour: Tuesdays 12:00 - 12:50pm HN 515", no longer overlapping the L05 lab |
| 14 | ~~`oral_presentation.html` restriction list~~ | ~~Site added a rule not in the syllabus (anime/streaming/graphic novel/film restriction)~~ | ✅ **Already fixed** — restriction list no longer present on the page |
| 15 | `index.html` dropdown menus (L05/L06 class-website selects) | `<select>` elements have no `<option>` values yet besides the placeholder | Presumably populated once students submit their site URLs — just confirm this is pending, not forgotten. |

---

## 3. Structural inconsistency: homework numbering

The site's homework numbers don't track the syllabus's canonical Homework 1–10 sequence, and aren't even consistent with each other:

| Site page | Site's homework label | Syllabus's actual homework # (by topic) |
|---|---|---|
| Week 1 (Photography Basics) | Homework #2 | Homework 1 (Cropping/Resizing/Tonal Range) |
| Week 2 (Depth of Field) | Homework #3 | Homework 2 |
| Week 3 (Photomontage) | Homework #4 | Homework 3 |
| Week 4 (Illustrator intro) | Homework #5 (combines eye **and** environment) | Homework 4/5 (Illustrator vector elements) — and folds in Homework 6 (Illustrated Environment), which the syllabus places at Week 6 |
| Week 8 (Animation) | Homework #6 | Homework 7 |
| Week 10 (Web Dev Basics) | Homework #1 | Homework 8 (Online Portfolio) |
| Week 12 (CSS/Interactive Story pt.1) | Homework #8a | Homework 9 |
| Week 13 (Interactive Story pt.2) | Homework #8b | Homework 9 (cont.) |

**Recommendation:** pick one scheme and apply it consistently — either (a) renumber the site's homeworks to match the syllabus's 1–10 sequence exactly, or (b) keep your own lab-specific numbering but state clearly on `index.html` that "Homework #N on this site ≠ Homework N in the master syllabus" so students aren't confused when cross-referencing Brightspace. Given students are explicitly told to check both the syllabus *and* the lab site, consistent numbers matter.

✅ **Fixed 2026-08-29** — went with option (a): every week's homework heading (Weeks 2–14) was renumbered to match the syllabus's Homework 1–10 sequence exactly, and Week 4's content was corrected to actual Homework 4 (photomontage & design), with the eye/environment content moved to Weeks 5 and 6 where the syllabus places them.

---

## 4. Reading assignments: missing or misplaced

The syllabus has four required readings, each tied to a specific homework/week:

1. **Sontag, "In Plato's Cave"** — Week 1 → ✅ present on `week_1.html`, correctly placed.
2. **"Your Brain on ChatGPT" + video** — tied to Homework 3 (Week 3, Photomontage) → ❌ not mentioned anywhere on `week_3.html` or elsewhere on the site.
3. **"Graphic Novel: Motherhood in Crisis"** — tied to Homework 5 (syllabus Week 5/6) → present on the site, but placed at **Week 13** as "Reading and Written Response #3," far from where the syllabus schedules it.
4. **"The Rising Risk, and How We Stop It" (NYT, Nuclear War)** — tied to Homework 8 (Week 10/11, due with the portfolio) → ❌ not present anywhere on the site.

**Recommendation:** add the ChatGPT reading to Week 3 and the Nuclear War reading to Week 10 or 11 (wherever you intend it due), and either move the Motherhood in Crisis reading earlier to match the syllabus or explicitly note that your lab schedules it later intentionally.

✅ **Fixed 2026-08-29** — added the "Your Brain on ChatGPT" reading + video to `week_3.html`, added the Nuclear War reading to `week_10.html`, and moved "Motherhood in Crisis" from `week_13.html` to `week_5.html` to match the syllabus's Homework 5 placement.

---

## 5. Lower priority / optional

- **Extra credit exhibitions list** (Governors Island, Whitney, Society of Illustrators, MoMA, etc.) exists in the syllabus but isn't referenced anywhere on the site. Since it's already in the shared syllabus PDF, this may be intentionally omitted — but consider a one-line pointer/link on `index.html` so students don't miss it.
- **`imagemaptest.html`** — looks like a scratch/test file for the HTML Image Map technique mentioned in Week 13. Not linked from nav. Fine to keep as a working reference, but consider removing or clearly labeling it if it's not meant for students.
- **`WeeklyPageBoilerPlater.html`** — still has stale placeholder content ("WEEK" / "DATE" / "Due 2/24" / "Homework #3: Depth of Field and Camera Raw") baked into the template itself rather than truly generic placeholders. Low priority since it's a template, but worth genericizing so copy-pasting it doesn't require deleting leftover Week 3-specific text.

---

## 6. Suggested order of operations

1. ~~Fix the four "must-fix" items that are pure errors regardless of content decisions: the 5-min → 6-min presentation length, the two mistitled weeks (11, 12), and the stale oral-presentation sign-up times.~~ ✅ Done. Only the `UPDATE-URL` placeholder (item 1) remains open.
2. ~~Decide the homework-numbering scheme (Section 3)~~ ✅ Done — option (a), renumbered to match the syllabus.
3. ~~Fill in the empty weeks (5, 6, 9, 14)~~ ✅ Done.
4. ~~Add the two missing readings (ChatGPT, Nuclear War) and reconcile the Motherhood in Crisis placement.~~ ✅ Done.
5. Verify the calendar-dependent items (Section 2, #11–#12) against the actual Fall 2026 Hunter academic calendar before publishing any specific dates. *(still open)*
6. ~~Confirm office hours and the anime/film restriction rule are intentional as currently written.~~ ✅ Done — both already corrected on the site.
