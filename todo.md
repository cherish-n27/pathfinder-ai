
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
- [ ] Add an admin-editable prompt_library table, seeded starter prompts, and a chat Prompt Library panel. (Table and user panel implemented; admin editing remains.)
- [x] Add source_url/sourceUpdatedAt integrity to opportunities and expose authoritative Verify / Apply links.
- [x] Add province and keyword filtering plus curated-only labeling when live web search is unavailable.
- [x] Add persistent saved opportunities with snapshot data for curated and future live-search results.
- [ ] Add persistent pathways with interactive checklist items, completion state, custom steps, and progress.
- [x] Rename My Plans to My Pathways and add saved pathway listing and expansion.
- [x] Add a calendar view to My Applications with deadline dots and day details.
- [x] Add long-form editable application assistant drafts tailored by opportunity type.
- [x] Add copy, print-to-PDF, and mailto email export for application drafts.
- [x] Add draft generation procedures with server-side AI context and the personalisation disclaimer.
- [x] Add Vitest coverage for source-link integrity and retain existing pathway/application coverage; broaden database procedure coverage next.
- [x] Verify responsive keyboard and screen-reader behavior for new panels, dialogs, lists, and calendars.

# Verification follow-up gaps

- [ ] Load persisted conversations/messages into the chat UI, show recent conversations on the dashboard, and support reopening prior threads.
- [ ] Enforce valid HTTPS source URLs before displaying or saving opportunities, and remove fallback source-link behavior.
- [ ] Add a Saved Opportunities view backed by the persisted saved-opportunity query.
- [ ] Implement persisted pathway list and expandable cards backed by server data instead of the local-only checklist panel.
- [ ] Drive the applications calendar from real application deadlines and support clickable day details.
- [ ] Generate drafts for the selected application/opportunity instead of always using the first application.
- [ ] Add or restore Vitest coverage for application workflows and key persistence procedures.
- [ ] Run and document accessibility verification for keyboard navigation, labels, focus order, and screen-reader support.
