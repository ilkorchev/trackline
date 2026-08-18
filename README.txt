TRACKLINE v2.0

WHAT IT IS
Trackline is a free, local-first 1500m development tracker. Training records are stored in IndexedDB on the device/browser that you use. There is no account, subscription, analytics service or paid backend.

IMPORTANT: HOW SAVING WORKS
1. Every check-in, workout, test and setting is written to IndexedDB as soon as you press its Save button or change a daily task checkbox.
2. Closing the app, restarting the phone, going offline, or installing a new Trackline version does not intentionally clear this database.
3. The service worker stores the app files for offline use. App files/cache and training records are separate.
4. Clearing Safari/Chrome website data, uninstalling in ways that remove site data, private-browsing restrictions, browser storage eviction, or losing the device can still remove local records.
5. Therefore use Settings -> Download backup regularly. The backup is a normal JSON file and can restore the full database.

RECOMMENDED SETUP: GITHUB PAGES (FREE)
1. Create a free GitHub account.
2. Create a new PUBLIC repository named trackline (or another name).
3. Unzip this package.
4. Upload the CONTENTS of the trackline folder to the repository root: index.html, sw.js, manifest.webmanifest, icon files, .nojekyll and README.txt.
5. In GitHub open the repository -> Settings -> Pages.
6. Under Build and deployment choose Deploy from a branch.
7. Choose main and /(root), then Save.
8. Open the Pages address GitHub gives you. Use that SAME address from now on. IndexedDB is tied to the website origin, so changing to a different site address creates a separate local database.

INSTALL ON IPHONE / IPAD
1. Open the GitHub Pages Trackline address in Safari.
2. Tap Share.
3. Tap Add to Home Screen.
4. Turn on Open as Web App.
5. Tap Add.
6. Launch Trackline from the new Home Screen icon.

INSTALL ON ANDROID / DESKTOP CHROME-STYLE BROWSERS
1. Open the HTTPS Trackline address.
2. Tap Trackline's Install button when available, or browser menu -> Install app / Add to Home Screen.
3. Launch it from the installed icon.

HOW UPDATES WORK
1. Keep the SAME GitHub repository and SAME Pages address.
2. Before a major update, Settings -> Download backup.
3. Replace the old app files in the repository with the new version's files and commit/upload them to main.
4. GitHub Pages republishes the site.
5. Installed Trackline periodically checks its service worker. When a new build is ready, Trackline shows an Update available banner.
6. Tap Update. The page reloads with the new app files. Your IndexedDB training records remain separate and are not part of the cache update.
7. If an update ever behaves oddly, close/reopen the app or refresh the website. Do NOT clear website data unless you have a backup.

DATA PROTECTION ROUTINE
- In Trackline -> Settings, tap Protect local storage. Browsers that support persistent storage may reduce the chance of automatic eviction.
- Download a JSON backup at least weekly and before every app update.
- Save that JSON backup somewhere outside the app, e.g. iCloud Drive, Google Drive, OneDrive or a computer.
- CSV is for analysis/export. JSON is the full restore format.

MOVING TO A NEW PHONE
1. Old device: Settings -> Download backup.
2. Put that JSON file somewhere accessible to the new phone.
3. New device: open/install the SAME Trackline website.
4. Trackline -> Settings -> Restore backup.
5. Leave Replace current database checked and select the JSON file.

VERSION 2 CHANGES
- Reworked branding and copy to feel like a purpose-built athlete tool rather than generated software.
- Local-time date keys instead of UTC date keys, avoiding near-midnight date errors.
- Readiness now respects your configured sleep target.
- Persistent-storage status/request.
- Backup-age status.
- Safer exact-database restore option.
- PWA install helper.
- Explicit service-worker update flow without deleting IndexedDB.
- Network-first navigation so published updates are detected more reliably.
