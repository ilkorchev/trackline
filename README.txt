TRACKLINE 4.0
Middle-distance training, Garmin context, recovery and performance

UPDATE FROM TRACKLINE 3.x
1. Open your current Trackline and go to Settings -> Download backup.
2. Keep that JSON file somewhere outside the browser.
3. Upload/replace the files in THIS folder in your existing GitHub repository.
4. Keep the SAME repository name and SAME GitHub Pages URL.
5. Commit to main and allow GitHub Pages to redeploy.
6. Reopen Trackline. If an Update available banner appears, press Update.

Your data is stored in the same IndexedDB database name (runnerRPG). Updating the app files does not intentionally replace the database. Keep backups anyway.

NEW IN 4.0
- Garmin hub designed around a Forerunner 165.
- Manual sleep remains the readiness input when Garmin sleep is inaccurate.
- Log Body Battery, 7-day HRV, HRV status, Garmin stress, recovery time, Garmin VO2max and RHR.
- Personal RHR and HRV baselines from your own recent data.
- Garmin sleep-confidence check comparing watch sleep with your manual sleep.
- Import Garmin Connect TCX, GPX and CSV activity exports.
- Imported activities can include duration, distance, HR, cadence, elevation and TCX lap details.
- Re-importing the same export uses a stable activity ID to reduce duplicates.
- Add RPE, pain and context after importing.
- Garmin-derived RHR/HRV flags appear only as supporting context.
- Sleep vs quality-session RPE association appears after enough paired data.
- Manual session logging now includes cadence and elevation gain.

FIT FILES
Trackline 4.0 deliberately does not bundle an external FIT-parser dependency. If Garmin Connect gives you a .FIT file, export the activity as TCX, GPX or CSV and import that instead. This keeps the app fully offline, dependency-free and easier to maintain.

DATA SAFETY
- Entries save locally in IndexedDB as you submit them.
- Settings -> Download backup creates a complete JSON backup.
- Do this at least weekly and keep a copy in iCloud Drive, Google Drive, OneDrive or on a computer.
- Do not clear browser/site data for your GitHub Pages origin unless you have a recent backup.
- Do not create a new GitHub Pages URL for each update.

GARMIN WORKFLOW
Morning (optional, ~20 seconds):
- Enter manual sleep in Log.
- Enter RHR / HRV / Body Battery / recovery context in Garmin if useful.
- Do not worry about Garmin sleep stages.

After a run:
- Export/import TCX, GPX or CSV if you want Garmin data in Trackline.
- Add RPE, pain and useful notes.
- Garmin measures; Trackline interprets; you and your coach decide.

INSTALL
Host these files on HTTPS (GitHub Pages is suitable), open the site on your phone, then install/add it to the home screen using your browser.
