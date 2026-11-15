# SkillPath AI

An interactive, static website demo for the SkillPath AI minor project. The site demonstrates a learner profile, career-role exploration, a sample baseline quiz, explainable skill-gap calculations, a weekly study plan, task tracking, and a Data & AI explainer.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static web server. No build step or package installation is required.

On Windows, double-click `Start SkillPath AI.bat` to open the deployed website in your default browser.

## Demo behavior

- The profile, assessment, syllabus-coverage choices and task progress are saved in browser local storage.
- The initial learner and assessment values are illustrative demo data.
- Career packs and sample questions are not official or expert-validated requirements. Check current exam notices and professional requirements.
- “Curriculum coverage” is entered by the learner; the site does not ingest or match a college syllabus.
- The Coach screen uses fixed rules over the current demo plan. No generative model, API key or live data feed is connected.
- There is no sign-in service, shared account, backend database or synchronization across devices. Do not enter passwords or sensitive personal information.

## Data, algorithms and design status

The Data & AI section describes O*NET, ESCO, official Indian exam notices and NCS as potential sources, with review and freshness requirements. It also documents the demo's JavaScript arrays and keyed objects, browser-local task state, planned relational storage and conceptual prerequisite graph.

The live demo calculates:

- `gap = max(0, target level - assessed level)`
- `priority = role importance × gap / 4`
- `readiness = 100 × weighted mean of min(assessed level / target level, 1)`

It sorts the gaps and distributes career-preparation hours over the four highest priorities. The course/syllabus coverage check is self-reported and separate from the readiness calculation. Graph scheduling, adaptive testing and retrieval-grounded AI are future work, not active features.

## Publish

The included GitHub Actions workflow deploys the repository root to GitHub Pages on pushes to `main`. Enable GitHub Pages with **GitHub Actions** as the publishing source in repository settings.

## Sources shown in the website

- [O*NET Database](https://www.onetcenter.org/database.html)
- [ESCO](https://esco.ec.europa.eu/)
- [India National Career Service](https://www.ncs.gov.in/)
- [Staff Selection Commission](https://ssc.gov.in/)
