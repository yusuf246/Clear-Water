# Clear Water Treatment — Starter Site

Plain HTML/CSS/JS, no build tools or frameworks. Open any `.html` file directly in a browser to preview.

## Files
- `index.html` — homepage
- `services.html` — all 9 service types (industrial, commercial, residential, pool, ozone, dosing/chlorination, UF, softeners, RO)
- `spares.html` — spares/equipment catalogue table
- `about.html` — company info (placeholder text — rewrite this)
- `contact.html` — contact info + inquiry form
- `assets/styles.css` — all styling (colors/fonts are CSS variables at the top)
- `assets/script.js` — mobile nav toggle + form handler

## Things to replace before going live
- Company name "Aqualine" — find & replace across all files with the real name
- Phone number `+920000000000` and email `info@yourdomain.com` — in every footer + contact page
- `about.html` placeholder paragraphs — write the real company story
- The contact form currently just shows an alert on submit. Wire it to something real:
  - **Formspree** (easiest, free tier): sign up at formspree.io, replace `action="#"` in `contact.html` with your Formspree endpoint, remove the `e.preventDefault()` block in `script.js`'s form handler.
  - Or embed a Google Form instead.

## Editing
Everything is plain HTML — open a file in any code editor (VS Code etc.) and edit the text directly. Colors, fonts and spacing all live in `assets/styles.css` under `:root` at the top.

## Deploying with GitHub Pages + your custom domain
See the step-by-step walkthrough in chat. Quick summary:
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → deploy from `main` branch, root folder.
3. Add a `CNAME` file (just the domain, one line) to the repo root, or set the custom domain in the Pages settings.
4. At your domain registrar, add the DNS records GitHub gives you.
