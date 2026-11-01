# Chakradhar Muppuri — Portfolio

React + Vite + Tailwind CSS 3 + Framer Motion + Lucide. Frontend only.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```

## Edit content
All content lives in `src/data/`: `profile.js` (bio, links, resume path, education), `skills.js`, `interests.js`, `certifications.js`, `achievements.js`, `projects.js`.
Resume: put the PDF in `public/resume/` and set `resumeUrl` in `profile.js`.

## Push to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/chakradhar027/<repo-name>.git
git push -u origin main
```

## Deploy on Vercel
1. Go to vercel.com → Add New → Project → import the GitHub repo.
2. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
3. Click Deploy.
