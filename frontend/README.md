# Alibaba-Style Ecommerce Frontend

A modern React + Vite frontend for a full-stack ecommerce project built for the **Developers Hub Full-Stack Internship**. The app focuses on clean UI, fast performance, and a scalable structure. It includes authentication, customer & seller dashboards, product CRUD, catalog (PLP), product detail (PDP), and profile management. Layouts use responsive **Grid** and **Flex** with Tailwind CSS.

**Live Demo:** [https://alibaba-client.vercel.app](https://alibaba-client.vercel.app)

---

## ✨ Features

* **Auth**: Login/Signup flows (React Hook Form + Toast notifications)
* **Dashboards**

  * **Customer**: Orders, saved items, profile
  * **Seller**: Add/Edit products, inventory list, analytics basics
* **Catalog**

  * **PLP** (Product List Page) with filters/sorting/pagination
  * **PDP** (Product Detail Page) with gallery & related products
* **Product Management**: Create/Update/Delete products (seller)
* **Profile**: Customer & seller profile pages with avatar upload
* **UI/UX**: Responsive Grid/Flex layouts, spinners, toasts
* **Routing**: React Router v7 nested routes & protected routes
* **State**: Redux Toolkit slices for auth, products, cart, etc.
* **Charts**: Recharts for basic seller metrics

---

## 🧰 Tech Stack

* **Framework**: React **19** + Vite **7**
* **Language**: JavaScript (ESM)
* **Routing**: `react-router-dom` **7**
* **State**: `@reduxjs/toolkit`, `react-redux`
* **HTTP**: `axios`
* **UI**: Tailwind CSS **4**, Radix UI primitives, Lucide icons
* **Forms**: `react-hook-form`
* **Charts**: `recharts`
* **Build/Dev**: Vite, ESLint

---

## 📦 Dependencies

```json
{
  "@radix-ui/react-slot": "^1.2.3",
  "@reduxjs/toolkit": "^2.8.2",
  "@tailwindcss/vite": "^4.1.11",
  "axios": "^1.11.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "embla-carousel-react": "^8.6.0",
  "lucide-react": "^0.525.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hook-form": "^7.61.1",
  "react-icons": "^5.5.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.7.1",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "recharts": "^3.1.0",
  "tailwind-merge": "^3.3.1",
  "tailwindcss": "^4.1.11"
}
```

---


## 🚀 Getting Started

```bash
# clone
git clone <your-repo-url>
cd frontend

# install deps
npm install

# run locally
npm run dev
```

---

## 📁 Suggested Project Structure

```
frontend/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ hooks/
│  ├─ pages/
│  ├─ routes/
│  ├─ services/
│  ├─ store/
│  ├─ styles/
│  ├─ utils/
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ .env.production
├─ index.html
└─ package.json
```

---

## 🧩 UI Notes

* **Tailwind** utilities for Grid/Flex layouts
* **Embla Carousel** for PDP image gallery
* **Lucide** icons for consistent glyphs
* **React Spinners** for loading states
* **Toastify** for feedback messages

---

## 🛳️ Deployment (Vercel)

Live frontend is deployed here: **[https://alibaba-client.vercel.app](https://alibaba-client.vercel.app)**

Vercel auto-detects Vite. Set `VITE_BASE_URL` in **Vercel Project → Settings → Environment Variables** and redeploy.

---

## 📝 License

MIT © Maria Sony 2025

---

## 🙌 Credits

Built for **Developers Hub** full-stack internship.