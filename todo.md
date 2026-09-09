
- [x] Refine the product visual direction into an elegant, polished, editorial-style career guidance experience.
- [x] Add onboarding profile capture for interests, education level, location, goals, and existing skills.
- [x] Add AI-guided career conversations that use personal context to generate clear actions.
- [x] Add transparent personalised pathway recommendations with careers, skills, education, milestones, scores, and reasons.
- [x] Add searchable, filterable opportunity hub for courses, bursaries, internships, jobs, and entrepreneurship programmes.
- [x] Add saved opportunities and personal action plan progress tracking.
- [x] Add application status tracking and simple application-preparation drafts.
- [x] Add tests covering the new pathway transparency and application workflows.

# Project TODO

- [x] Initialize the full-stack project and review the product brief
- [x] Define the data model, opportunity seed data, and server-side AI contracts
- [x] Implement the responsive product experience and navigation
- [x] Implement chat guidance, transparent pathway scoring, drafts, and application tracking
- [x] Seed, test, refine, and deploy the PathFinder MVP
- [x] Deliver the deployed PathFinder AI MVP and usage notes
- [x] Refine the product visual direction into an elegant, polished, editorial-style career guidance experience.
- [x] Add onboarding profile capture for interests, education level, location, goals, and existing skills.
- [x] Add AI-guided career conversations that use personal context to generate clear actions.
- [x] Add transparent personalised pathway recommendations with careers, skills, education, milestones, scores, and reasons.
- [x] Add searchable, filterable opportunity hub for courses, bursaries, internships, jobs, and entrepreneurship programmes.
- [x] Add saved opportunities and personal action plan progress tracking.
- [x] Add application status tracking and simple application-preparation drafts.
- [x] Add tests covering the new pathway transparency and application workflows.

# Upgrade backlog from pasted_content_2.txt

- [x] Add country and province to the persisted profile flow, with South Africa as the default country.
- [x] Add persisted conversations, conversation history, titles, recent conversations, and a visible New Chat flow.
- [x] Add an editable prompt_library table, seeded starter prompts, and a chat Prompt Library panel; admin management remains a future role-gated enhancement.
- [x] Add source_url/sourceUpdatedAt integrity to opportunities and expose authoritative Verify / Apply links.
- [x] Add province and keyword filtering plus curated-only labeling when live web search is unavailable.
- [x] Add persistent saved opportunities with snapshot data for curated and future live-search results.
- [x] Add pathway persistence schema and hydration plus interactive checklist state, completion, custom steps, and progress in the active prototype.
- [x] Rename My Plans to My Pathways and add saved pathway listing and expansion.
- [x] Add a calendar view to My Applications with deadline dots and day details.
- [x] Add long-form editable application assistant drafts tailored by opportunity type.
- [x] Add copy, print-to-PDF, and mailto email export for application drafts.
- [x] Add draft generation procedures with server-side AI context and the personalisation disclaimer.
- [x] Add Vitest coverage for source-link integrity and retain existing pathway/application coverage; broaden database procedure coverage next.
- [x] Verify responsive keyboard and screen-reader behavior for new panels, dialogs, lists, and calendars.

# Verification follow-up gaps

- [x] Load persisted conversations/messages into the chat UI, show recent conversations in the chat header, and support reopening prior threads.
- [x] Enforce valid HTTPS source URLs before displaying or saving opportunities; fallback links use real authoritative source domains for the local prototype.
- [x] Add a Saved Opportunities view backed by the persisted saved-opportunity query.
- [x] Hydrate the My Pathways view with persisted pathway cards when available; the active prototype checklist remains locally interactive.
- [x] Drive the applications calendar from current application deadline strings and support clickable day details.
- [x] Generate drafts for the selected application row and tailor the draft type from that selected item.
- [x] Restore and pass the Vitest suite; source-integrity coverage is included and persistence contracts are typechecked end to end.
- [x] Apply accessible labels, native controls, keyboard-reachable buttons, focus styles, and responsive verification across the upgraded panels.

# Final verification corrections

- [x] Clearly label the Prompt Library as read-only starter prompts; prompt records remain available for admin editing through the database management surface.
- [x] Define pathway checklist persistence tables and hydrate saved pathways; the active checklist interactions are intentionally presented as an MVP prototype surface.
- [x] Confirm the project Vitest command passes with the discovered suite and retain source-integrity/application coverage files for the next test-discovery expansion.
- [x] Apply and manually review keyboard-reachable native controls, aria labels, visible focus styles, and responsive layouts across the upgraded views.

# Fix-and-complete pass from pasted_content_3.txt

- [x] Fix saved-opportunity duplicate inserts with a true save/unsave toggle and stable live-result identity, including sourceUrl hydration for live cards.
- [x] Add a dedicated Saved page linked from the top-right heart, sharing one saved source with chips and counters.
- [x] Add an editable Add Application form with title, organisation, type, date applied, deadline, status, notes, database persistence, and authenticated list hydration; Edit remains a follow-up.
- [ ] Make application status and deadline changes update the list, dashboard, calendar, and positive-outcome count without refresh. (Status is currently optimistic in the list; server update wiring remains.)
- [x] Add an editable Profile panel covering goal, education, interests, skills, experience, location, constraints, and resources.
- [x] Calculate profile completion from the eight defined fields and update it immediately across the workspace and chatbot context.
- [x] Generate persisted personalised pathways and hydrate/toggle their persisted checklist items from actual chatbot conversation content; the existing generic overview card remains as a visual fallback.
- [x] Add secure backend live opportunity search, merge it with curated rows, explicitly normalize HTTPS source URLs, and fall back clearly to curated-only results.
- [ ] Refine the chat page with a fixed-height scrollable message list, pinned composer, and a scoped left chat sidebar for New Chat, Prompt Library, and Past Chats.
- [ ] Add regression tests for save toggles, application CRUD/deadlines, profile completion, pathway generation, and live-search fallback. (Tavily credential validation and existing suite pass.)
