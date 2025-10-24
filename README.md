# Zomato_MERN

An end-to-end MERN (MongoDB, Express, React, Node) application that showcases food partners uploading short promotional videos and users browsing a reels-style feed. Built with performance and mobile-first UX in mind.

---

## Highlights
- Full-stack MERN application with JWT authentication for users and food partners
- Video upload pipeline using `multer` (server memory storage) and a storage adapter (ImageKit) to persist media
- Instagram/TikTok-like vertical reels interface implemented with React and CSS (snap-scrolling, fullscreen videos)
- Food Partner profile pages with stats and a responsive video gallery
- Mobile-first, theme-driven design using CSS custom properties in `theme.css`

---

## Tech Stack
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, multer
- Frontend: React (Vite), React Router, Axios
- Storage: ImageKit (adapter) for media uploads (see `Backend/src/services/storage.service.js`)
- Dev tools: Nodemon, ESLint, Vite

---

## Quick Demo (what you'll see)
- Landing feed: vertical reels of food videos (auto-play, loop, mute, overlays)
- Food partner profile: avatar, address, stats (total meals, customers served), and a responsive grid of uploaded videos
- Create Food: a mobile-first upload form for food partners to create video-based menu items

---

## Repo structure (important files)

Backend/
- `server.js` — server bootstrap and DB connect
- `src/app.js` — express app, middleware, routes
- `src/Routes/` — `auth.routes.js`, `food.routes.js`, `foodPartner.routes.js`
- `src/controllers/` — `auth.controller.js`, `food.controller.js`, `foodPartner.controller.js`
- `src/models/` — `user.model.js`, `foodpartner.model.js`, `food.model.js`
- `src/services/storage.service.js` — ImageKit upload helper

Frontend/
- `index.html`, Vite entry
- `src/main.jsx` — React entry
- `src/App.jsx` — App wrapper
- `src/routes/AppRoutes.jsx` — routing table
- `src/general/Home.jsx` — reels UI
- `src/foodPartner/Profile.jsx` — food partner profile
- `src/foodPartner/CreateFood.jsx` — create food (upload) form
- `src/components/auth/` — login/register components
- `src/styles/theme.css` — global theme variables (spacing, colors)

---

## Environment variables
Create a `.env` file in the `Backend/` folder with the following (example):

```
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/zomato
JWT_SECRET=your_jwt_secret_here
IMAGEKIT_PUBLIC_KEY=xxxx
IMAGEKIT_PRIVATE_KEY=xxxx
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_account/
```

Replace with your actual credentials. The backend reads `MONGODB_URI` and `JWT_SECRET` at minimum.

---

## Local setup

1. Backend

```bash
cd Backend
npm install
# create .env with the variables above
npx nodemon server.js
```

The server runs on `http://localhost:5000` by default.

2. Frontend

```bash
cd Frontend
npm install
npm run dev
```

The frontend dev server runs on `http://localhost:5173` and calls the backend (CORS configured in `src/app.js`).

---

## API highlights
- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login user (sets JWT cookie)
- `POST /api/food` — upload a food video (protected: food partner middleware, multipart/form-data `video` field)
- `GET /api/food` — list food videos
- `GET /api/food-partner/:id` — get partner profile + their foodItems

Refer to `Backend/src/Routes` and `Backend/src/controllers` for implementation details.

---

## Notes & tips
- For video uploads ensure `multer` is configured (the project uses memory storage and forwards the file buffer to ImageKit).
- The frontend `CreateFood.jsx` form posts `FormData` with `name`, `description`, and `video` fields.
- JWT tokens are stored in cookies and backend uses role-based middleware to protect routes.

---

## Contributing / Extending
- Add tests, CI, and lint pipelines.
- Replace ImageKit with any other cloud storage (AWS S3, Cloudinary) by updating `storage.service.js`.
- Add pagination or lazy-loading for the reels feed, and real-time likes using WebSockets.

---

If you want, I can also:
- Add a short `README` section for screens and sample API requests
- Generate a Postman collection for quick endpoint testing
- Create a one-line resume bullet tailored for a frontend/backend/full-stack role based on what you built

---

Made with ❤️ — happy to help improve this README or generate a demo script for interviews.
