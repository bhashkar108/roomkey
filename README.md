# RoomKey

Premium real estate maison built with **Next.js** and **Tailwind CSS**. The app lives in the repository root and includes a curated listing experience, property detail pages, a home banner slider, and a full footer.

## Pages

- Home with rotating banner slider and featured residences
- Residences collection with search and filters
- Property detail with gallery, amenities, advisor, and inquiry form
- Advisors, Maison (about), and Contact — every page includes photography
- Shared header and premium footer on all routes

## API

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/properties` | List all homes |
| GET | `/api/properties/:id` | Single home |
| POST | `/api/inquiries` | Viewing request |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This is a full-stack Next.js app (UI + API), so one host is enough.

- **Netlify:** connect this GitHub repo and use `netlify.toml`
- **Render:** Blueprint via `render.yaml`, or a Node web service with `npm run build` / `npm start`
- **Vercel:** import the repo; Next.js is detected automatically
