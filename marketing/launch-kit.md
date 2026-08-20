# ShrpWare launch and growth kit

Updated: August 19, 2026

This package stays product-focused. It does not use a founder biography, personal photographs, or a “maker story.”

## The release gate

Do not start the WavePlume launch push until all five items are true:

1. The signed 14-day Windows installer is published at its final URL.
2. Windows Defender SmartScreen no longer produces an avoidable reputation warning, or the support page clearly documents the remaining expected prompt without telling people to bypass security.
3. The installer is tested on a clean Windows 10 and Windows 11 machine.
4. The trial can be installed, activated, upgraded to the Store build, and removed cleanly.
5. The single `trialDestination` value in `app/lib/site.ts` points to that installer.

DeltaTxt can launch after Microsoft Store certification. Until then, use the direct installer and describe the Store release as pending—not available.

## Positioning

### ShrpWare

Focused, local-first desktop software for people who want capable tools, local control, and less noise.

### WavePlume

Primary promise: Private meeting transcripts without a bot in the room.

Proof points:

- Records system audio and microphone locally.
- Transcribes locally with Whisper.
- No account or recurring subscription.
- $14.99 one time, with a 14-day Windows trial.
- macOS and Windows.

Best audiences:

- Consultants, researchers, journalists, and independent professionals.
- Privacy-conscious teams that do not want a bot joining calls.
- People replacing a recurring meeting-transcription subscription.
- Users who need local files and searchable transcripts more than cloud collaboration.

### DeltaTxt

Primary promise: A sharper workbench for text files that fight back.

Proof points:

- Large logs, side-by-side compare and merge, and workspace search.
- Python and external-script workflows.
- Native Windows app and freeware.
- No account, telemetry, analytics, advertising, or subscription.

Best audiences:

- IT and support engineers investigating logs.
- Developers who need a focused diff/search tool beside their IDE.
- System administrators comparing configurations and diagnostic exports.
- Technical users automating repetitive text cleanup.

## Store listing copy

### WavePlume short description

Record and transcribe meetings locally with Whisper—no bot, cloud upload, account, or subscription.

### WavePlume long description

WavePlume turns meetings into searchable local transcripts without adding a bot to the call. Record system audio, your microphone, or both; transcribe on your computer with Whisper; and keep sessions in folders you control.

Use the searchable session library to return to the useful moment later. Meeting audio is not uploaded to a cloud transcription service. Optional network access is used for actions such as downloading a Whisper model or connecting Webex schedule information.

- Local audio recording and transcription
- No meeting bot
- Searchable sessions and transcripts
- Files stored in folders you choose
- No account or recurring subscription
- One-time $14.99 purchase

Always follow the recording-consent laws and policies that apply to your meetings.

### DeltaTxt short description

Edit large logs, compare and merge files, search workspaces, and automate text workflows. Free for Windows.

### DeltaTxt long description

DeltaTxt is a focused native Windows workbench for difficult text jobs. Open large logs, search related files, compare two versions, merge changes, and run your own Python or script-powered transformations without loading a full IDE around the task.

- Large log and text-file editing
- Side-by-side compare and merge
- Workspace-wide search
- Python and external-script workflows
- Local preferences and recovery
- No account, telemetry, analytics, or advertising
- Freeware

Scripts and external interpreters run with your Windows permissions. Review third-party code before running it.

## Launch posts

Use one launch at a time. Reply to questions for the first several hours, but never manufacture votes, reviews, or testimonials.

### Product Hunt — WavePlume

**Tagline**

Private meeting transcription without a bot in the room

**First comment**

WavePlume records system audio and your microphone, then transcribes locally with Whisper. It was built for people who want searchable meeting notes without inviting a cloud bot or uploading the recording for processing.

The app runs on macOS and Windows, requires no account, and costs $14.99 once. A standalone Windows installer includes a 14-day trial.

The tradeoff is deliberate: WavePlume focuses on private local sessions rather than a shared cloud transcript workspace. We would especially value feedback on the recording setup, transcript search, and first-run model download.

### Product Hunt — DeltaTxt

**Tagline**

A free Windows workbench for text files that fight back

**First comment**

DeltaTxt brings large-log editing, side-by-side compare and merge, workspace search, and Python-powered text workflows into one focused Windows app.

It is freeware with no account, telemetry, advertising, subscription, or paid tier. The goal is not to replace a full IDE; it is to solve the awkward text job that should not require opening one.

Feedback on large-file behavior, comparison workflows, and workspace search is especially useful.

### Show HN — WavePlume

**Title**

Show HN: WavePlume – local Whisper meeting transcription without a bot

**Body**

WavePlume is a macOS and Windows app that records system audio/microphone locally and transcribes with Whisper on the same computer. It does not join the meeting, upload audio for transcription, require an account, or charge a subscription.

The app organizes recordings and transcripts as searchable sessions in user-controlled folders. Model files are downloaded when selected, but meeting content remains local.

It is $14.99 once, with a 14-day standalone Windows trial. The product page includes the privacy details and a direct comparison with common cloud-bot workflows: https://shrpware.com/apps/waveplume

Interested in feedback on model selection, system-audio setup across platforms, and the limits of a deliberately local-only workflow.

### Show HN — DeltaTxt

**Title**

Show HN: DeltaTxt – free Windows editor for large logs, diff/merge, and scripts

**Body**

DeltaTxt is a focused native Windows editor for technical text work: large logs, file comparison and merge, workspace search, and user-selected Python/script workflows.

It is intentionally smaller in scope than an IDE and free to use. There is no account, telemetry, analytics, advertising, or automatic crash submission.

Product page and screenshots: https://shrpware.com/apps/deltatxt

Feedback on real-world log sizes, compare/merge ergonomics, and script integration is welcome.

### Community post — WavePlume

**Title**

Local meeting transcription without adding a bot to the call

**Body**

WavePlume is a desktop recorder and transcriber for macOS and Windows. It captures system audio and microphone locally, runs Whisper locally, and keeps the session files in folders you control.

There is no account or subscription. It is $14.99 once, and the Windows version has a 14-day trial.

This is a product post, so please remove it if it is outside the community rules. Privacy details and screenshots are here: https://shrpware.com/apps/waveplume

### Community post — DeltaTxt

**Title**

Free Windows workbench for large logs, file comparison, and script workflows

**Body**

DeltaTxt is freeware for technical text jobs that sit between a basic editor and a full IDE. It handles large logs, side-by-side compare/merge, workspace search, and user-selected Python or external scripts.

It has no account, telemetry, analytics, advertising, or subscription. Screenshots and the direct download are here: https://shrpware.com/apps/deltatxt

This is a product post; please remove it if it does not fit the community rules.

## Outreach templates

### Newsletter or directory

Subject: Product submission: [WavePlume / DeltaTxt]

Hello,

ShrpWare has released [one-sentence approved description]. It is designed for [specific audience] and differs from common alternatives by [single concrete difference].

Product page: [URL]
Press kit: https://shrpware.com/press

If it fits your coverage, the press kit includes approved facts, screenshots, and icons. No response is needed if it is not a match.

Best,
ShrpWare

### Reviewer or creator

Subject: A local-first [meeting transcription / technical text] tool to test

Hello,

Your coverage of [relevant topic] looks closely aligned with [WavePlume / DeltaTxt]. The app [one-sentence approved description].

The useful angle is [local Whisper processing without a meeting bot / a free focused workbench for large logs, diff/merge, search, and scripts]. There is no sponsorship requirement and no expectation of positive coverage.

Product page: [URL]
Press kit: https://shrpware.com/press

Regards,
ShrpWare

## Directory and earned-distribution checklist

- Complete both store listings with the same headline, screenshots, privacy language, and support URL.
- Submit DeltaTxt to Windows Package Manager only after the final installer URL and version are stable.
- Add product pages to reputable software directories that allow vendor submissions and clearly identify sponsored placement.
- Launch each product separately on Product Hunt rather than grouping two different audiences into one post.
- Use Show HN only once per meaningful launch; answer technical questions directly.
- Post in communities only after reading current rules. Prefer a useful workflow explanation over a bare link.
- Send a small, targeted press note to privacy, Windows utility, productivity, and developer-tool newsletters.
- Offer evaluation builds to reviewers without requiring favorable language.
- Ask real customers for honest store reviews after they have completed a successful workflow; never incentivize rating direction.

## Search plan

The site already includes the first five high-intent pages:

- offline meeting transcription without a bot
- WavePlume vs. cloud meeting bots
- large log file editor for Windows
- compare and merge text files
- DeltaTxt vs. heavyweight editors

Next articles, in priority order:

1. How to record system audio and microphone locally on Windows
2. How local Whisper transcription works and what model size to choose
3. A consent-first checklist for recording online meetings
4. How to compare a good log run with a failed run
5. A repeatable workflow for redacting sensitive values from logs
6. How to compare configuration files without opening a full IDE
7. When a local transcript is safer than a shared cloud workspace
8. Windows text editors for multi-gigabyte diagnostic files

Every article should solve the problem on its own, show the relevant product only where it helps, and link to one product CTA. Do not publish thin pages that merely repeat a keyword.

## Small paid-search experiment

Do not buy broad terms such as “meeting notes,” “text editor,” or “AI transcription.” Start with exact or phrase-match intent.

### WavePlume groups

- offline meeting transcription
- local Whisper meeting transcription
- meeting transcription without bot
- private meeting recorder Windows

Ad concept A:

- Headline: Meeting Transcripts, Kept Local
- Headline: No Bot. No Subscription.
- Description: Record and transcribe on your computer with Whisper. Try WavePlume for 14 days on Windows.

Ad concept B:

- Headline: Transcribe Meetings Without a Bot
- Headline: $14.99 Once
- Description: Local recording, local Whisper transcription, searchable sessions. No account required.

### DeltaTxt groups

- large log file editor Windows
- compare merge text files Windows
- log viewer with workspace search
- Python text workflow editor

Ad concept A:

- Headline: Large Logs Without a Full IDE
- Headline: DeltaTxt Is Free
- Description: Search workspaces, compare files, merge changes, and run scripts in one Windows workbench.

Run one product at a time with a capped test budget. Stop a keyword after meaningful click volume if it produces no installer or store clicks. Never optimize against page views alone.

## Privacy-respecting measurement

The site uses first-party `/go/...` redirect paths for high-value clicks. Cloudflare request logs can count those paths without setting a marketing cookie.

Primary events:

- `/go/waveplume-trial`
- `/go/waveplume-mac`
- `/go/waveplume-windows`
- `/go/deltatxt-download`
- `/go/deltatxt-store`

Weekly scorecard:

| Metric | Meaning |
| --- | --- |
| Product-page visits | Qualified attention by product |
| Installer/store clicks | Primary site conversion |
| Trial starts | Measured in the installer/app, if available without user tracking |
| Trial-to-purchase | Product fit and onboarding quality |
| Search impressions/clicks | Discoverability from Search Console |
| Store page views/acquisitions | Store listing performance |
| Support requests per 100 installs | Friction and reliability signal |

Use campaign query parameters only at the inbound link, for example `?utm_source=producthunt&utm_medium=launch&utm_campaign=waveplume_2026`. Do not pass those parameters to app-store destinations unless needed for a supported store-reporting feature.

## 30-day launch sequence

### Days 1–3: release readiness

- Finish and sign the WavePlume trial installer.
- Test both apps on clean supported systems.
- Verify every download, store, privacy, support, and changelog link.
- Submit the sitemap and inspect both product URLs in Google Search Console.

### Days 4–7: listings and proof

- Finalize store descriptions and screenshot order.
- Publish the release notes.
- Capture real installer-to-first-success timings and fix the largest onboarding delay.
- Prepare one short screen recording per product; do not add a talking-head requirement.

### Week 2: one focused launch

- Launch WavePlume or DeltaTxt—not both—on the channel that best matches its audience.
- Answer questions and record objections using exact customer language.
- Fix broken expectations on the product page within 24 hours.
- Contact five tightly matched newsletters or reviewers using the template above.

### Week 3: compound the useful material

- Publish the first high-intent guide for the launched product.
- Submit to two reputable directories.
- Add an in-app, post-success request for an honest store review.
- Turn the three most common questions into page or support improvements.

### Week 4: measure and decide

- Compare product-page visits with installer/store clicks.
- Compare each source by conversions, not traffic.
- Keep the best organic channel and cut the weakest.
- Run one small paid-search test only if installer, onboarding, and store analytics are trustworthy.
- Schedule the second product’s launch using the lessons from the first.

## Final pre-publish checklist

- [ ] Signed WavePlume trial URL inserted in `app/lib/site.ts`
- [ ] Clean-machine Windows 10 and 11 installer test complete
- [ ] DeltaTxt Microsoft Store listing approved, or Store CTA held back
- [ ] Store prices and version numbers match the website
- [ ] Download file sizes checked
- [ ] Privacy and recording-consent language reviewed
- [ ] Product screenshots match the current releases
- [ ] `npm run build` passes
- [ ] Sitemap and robots routes return 200
- [ ] All five `/go/...` paths redirect correctly
- [ ] Cloudflare Worker deployment reviewed before publishing
