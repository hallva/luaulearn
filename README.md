# Lua Quest

A small Duolingo-style prototype for learning beginner Lua coding.

## Run

Open `index.html` in a browser.

## Publish

This project is a plain static site, so you can publish it for free with GitHub Pages.

The repo now includes:

- `.github/workflows/deploy.yml` to deploy automatically with GitHub Actions
- `.nojekyll` to make sure the site is served as plain static files

### GitHub Pages steps

1. Create a new GitHub repository and upload these files.
2. Push to the `main` branch. If your repo still uses `master`, this workflow supports that too.
3. On GitHub, open the repository settings and go to `Pages`.
4. Under the publishing source, choose `GitHub Actions`.
5. Wait for the `Deploy static site to GitHub Pages` workflow to finish.
6. Open the live URL GitHub shows in the Pages settings.

For a normal project repo, the URL will usually look like:

`https://your-username.github.io/your-repo-name/`

If you name the repository `your-username.github.io`, it will publish at:

`https://your-username.github.io/`

## What is included

- A five-skill path covering variables, logic, functions, loops, and tables
- Hearts, streaks, XP, and unlockable lessons
- Choice, fill-in, and code-ordering challenges
- Progress saved in browser `localStorage`
