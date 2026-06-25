# Al Dur Al Nafees Website

Light premium React/Vite/Tailwind/GSAP single-page website for Al Dur Al Nafees General Contracting Est.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content updates

Most editable website content is centralized in:

```text
src/data/siteContent.ts
```

Use this file to update navigation, company info, stats, services, projects, leadership/team cards, contact methods, and location/map copy.

## Media paths

Browser paths must use `/sample/...`. Do not use `/public/sample/...` in React components or data.

Logo:

```text
public/sample/branding/logo.png
```

Main construction video used in the About section:

```text
public/sample/video/construction.mp4
```

Optional location video shown below the Location map only if the file exists:

```text
public/sample/video/location.mp4
```

Project and construction images:

```text
public/sample/projects/project-01.jpg
public/sample/projects/project-02.jpg
...
```

## Team cards

Leadership content is configured in `src/data/siteContent.ts` under `leadership`.

Replace leadership and Vision 2030 imagery here:

```text
public/sample/leadership/leader-main.jpg
public/sample/vision/vision-2030.jpg
```

The old animated placeholder avatar grid has been removed.

GSAP scroll animations are enhancement only. Leadership and Contact content is visible by default so hard refreshes still render the cards before any animation runs.

## Contact methods

Contact cards are configured in `src/data/siteContent.ts` under `contactMethods` and `company`.

WhatsApp link:

```text
https://wa.me/966590821464
```

## Location map

Location copy, map marker text, coordinate label, info cards, and optional video caption are configured in `src/data/siteContent.ts` under `location`.
