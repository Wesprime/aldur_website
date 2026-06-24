Local media guide for Al Dur Al Nafees website

Drop future assets into these folders:

- branding/
  Logo and brand files.
  Expected file:
  branding/logo.png
  Browser path:
  /sample/branding/logo.png

- projects/
  Construction site, project, service, equipment, materials, and gallery images.
  Current mapped names in src/data/siteContent.ts:
  project-01.jpg through project-10.jpg.
  Browser path example:
  /sample/projects/project-01.jpg

- team/
  Leadership photos. Expected names:
  team-ashiq.jpg, team-althaf.jpg, team-junaid.jpg.
  Browser path example:
  /sample/team/team-ashiq.jpg
  Do not use:
  /public/sample/team/team-ashiq.jpg

- video/
  Main construction video:
  video/construction.mp4
  Browser path:
  /sample/video/construction.mp4

  Optional location video:
  video/location.mp4
  Browser path:
  /sample/video/location.mp4
  If location.mp4 is missing, the location media slot is hidden.

- sample/
  You can temporarily place mixed images here before organizing them.
  For best results, move final images into the folders above and update
  src/data/siteContent.ts if filenames differ.

Important:
- Use browser paths starting with /sample/...
- Never use /public/sample/... in React components or src/data/siteContent.ts.
