Web design for bold brands that want to go beyond — rebuilt in React 18 with Vite and React Router.
Pages: Home, About, Services, Contact.

live demo: " https://brianjacksons2811.github.io/Jacksonsweblab.co.za/"

✨ Features

⚡ Fast dev experience with Vite

🧭 Client-side routing (react-router-dom v6)

🎨 Lightweight custom CSS (no framework)

📬 Contact form uses mailto: fallback (easy to swap for Formspree/EmailJS)

🚀 One-command deploy to GitHub Pages

🧱 Tech Stack

React 18

Vite

React Router DOM 6

📁 Project Structure
jacksonsweblab-react/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ styles.css
│  ├─ app/App.jsx
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  └─ Footer.jsx
│  └─ pages/
│     ├─ Home.jsx
│     ├─ About.jsx
│     ├─ Services.jsx
│     └─ Contact.jsx
└─ README.md

▶️ Getting Started

Requirements: Node.js 18+ and npm

# install deps
npm i

# start dev server
npm run dev


Vite will print a local URL (usually http://localhost:5173).

🛠️ Configuration

Site base path (for GitHub Pages):
In vite.config.js, base is set to:

base: '/jacksonsweblab-react/'


If your repository name is different, update this string to '/your-repo-name/'.

Contact email:
src/pages/Contact.jsx uses a mailto: link. Replace the email with yours.

Branding / images:
Replace the favicon and add assets in src/assets/, then update image paths in components/pages.

🚀 Deploy to GitHub Pages

Push this project to a GitHub repo (e.g., jacksonsweblab-react).

Ensure vite.config.js base matches your repo name.

Deploy:

npm run deploy


This builds to dist/ and publishes the site to the gh-pages branch.

In GitHub → Settings → Pages, set source to the gh-pages branch if not auto-detected.

🔌 Swapping the Contact Form to an Email Service (Optional)

Formspree (no backend):

Create a form on Formspree, get your endpoint, then fetch() it on submit.

EmailJS:

Install emailjs-com, initialize with your keys, and send on submit.

Want help wiring either of these? Open an issue or drop the endpoint and I’ll plug it in.

🧩 Available Scripts
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview production build locally
npm run deploy    # build + publish to gh-pages

🗺️ Routes

/ — Home

/about — About

/services — Services

/contact — Contact

📄 License

MIT (or your preferred license)
