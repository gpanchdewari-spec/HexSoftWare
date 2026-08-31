# HexSoftwares Premium MERN Redesign

A premium animated company/startup website built with a deliberately simple MERN architecture:

**React + Vite + Tailwind CSS + Axios + Framer Motion → Express REST API → Mongoose → MongoDB**

## Features

- Premium responsive marketing homepage using the official HexSoftwares color palette
- Services and dynamic service details
- Portfolio filters and case-study details
- Careers and internship listings
- Internship application form with Multer and optional Cloudinary resume upload
- Certificate verification (`HX20260001`–`HX20260010` after seeding)
- Contact inquiry storage in MongoDB
- JWT admin authentication
- Admin dashboard with CRUD-oriented JSON panel
- Responsive navbar, mobile drawer, animated hero, bento sections, cards and CTAs
- Central Axios instance with Bearer-token interceptor
- MVC backend with complete controllers, models, routes and middleware

## Requirements

- Node.js 20+
- MongoDB local or MongoDB Atlas

## Setup

1. Copy `backend/.env.example` to `backend/.env` and set `MONGO_URI` and `JWT_SECRET`.
2. Copy `frontend/.env.example` to `frontend/.env`.
3. From the project root run:

```bash
npm install
npm run install-all
npm run seed
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## Seed Admin

- Email: `admin@hexsoftwares.com`
- Password: `Admin@123`

Change these credentials before production use.

## Cloudinary

Resume uploads work without Cloudinary credentials, but no remote `resumeUrl` will be saved. To enable Cloudinary uploads, add all three Cloudinary values to `backend/.env`.

## Production

Build the frontend with:

```bash
npm run build
```

Deploy `frontend` to Vercel and `backend` to Render. Use MongoDB Atlas for the database and set `VITE_API_URL` to your deployed backend `/api` URL.

## Brand palette

- Primary Blue `#1565C0`
- Primary Green `#22A06B`
- Light Green `#6BCB77`
- Gold `#D4A017`
- White `#FFFFFF`
- Charcoal `#1A1A1A`
- Light Gray `#F5F7FA`

## Audit notes

The project was re-audited against the original build brief. The revised package includes a dedicated `Hero.jsx`, `BackToTop.jsx`, technology stack, statistics, industries, internship preview, certificate verification CTA, careers CTA, and final project CTA on the homepage. Frontend API calls use the shared Axios instance; no `fetch()` calls are present. No source-code files are empty.

Build validation was attempted in the generation environment, but dependency installation exceeded the execution time limit. Run `npm install` / `npm run install-all` locally and then `npm run build` for final environment-specific verification.
