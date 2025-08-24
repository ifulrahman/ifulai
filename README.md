# Iful.ai – Fullstack AI Tools Platform

---

## 📖 Overview

**Live Preview** : **https://iful-ai.vercel.app/**

Iful.ai is a modern **Fullstack AI Tools Platform**, bridging creativity with productivity.  
Whether you're generating articles, crafting blog titles, creating stunning AI-driven images, removing backgrounds or objects effortlessly, or reviewing resumes—this all-in-one platform empowers you to accomplish more with less.

---

## ✨ Features

| Feature                     | Description                                                                         |
|-----------------------------|-------------------------------------------------------------------------------------|
| **AI Article Generator**    | Craft full articles using Google Gemini LLM.                                        |
| **Blog Title Creator**      | Generate catchy titles instantly.                                                   |
| **AI Image Generator**      | Produce unique visuals via ClipDrop OCR.                                            |
| **Background/Object Removal** | Remove unwanted backgrounds or objects using AI-powered Cloudinary tools.         |
| **Resume Review**           | Convert resumes into AI-powered feedback reports seamlessly.                        |
| **Authentication**          | Secure login with free & premium plans via Clerk.                                  |
| **Cloud Storage**           | Stored images managed & optimized on Cloudinary.                                    |
| **Database**                | Serverless Postgres via Neon for effortless data handling.                          |

---

## 🛠 Tech Stack

### **Frontend**
- **React (Vite)** – Fast React development environment with instant Hot Module Reload (HMR).  
- **Tailwind CSS** – Utility-first CSS framework for elegant, responsive design using minimal custom styles.
- **PrebuiltUI** – https://prebuiltui.com
- **Clerk React** – https://clerk.com - Provides prebuilt auth components (Sign In/Up, User Management) optimized for React, including SSO and MFA functionality.  
- **Lucide React** – Lightweight, tree-shakable icon library with inline SVG components for minimal bundle size.  
- **Axios** – Promise-based HTTP client for clean and efficient API communication.  
- **React Markdown** – Renders AI-generated markdown content as React components effortlessly.  
- **React Hot Toast** – Modern and customizable toast notifications to enhance user feedback.  

### **Backend**
- **Express.js** – Flexible Node.js framework powering backend REST APIs.  
- **Clerk Express** – https://clerk.com – Middleware layer to apply secure authentication logic on server-side.  
- **Multer** – Handles file uploads (like resumes or images) via multipart form-data.  
- **Cloudinary** – https://cloudinary.com/ – Robust media management with AI-powered image transformations and CDN delivery.  
- **ClipDrop API** – https://clipdrop.co/apis – External AI service facilitating image generation and editing.  
- **Google Gemini AI (via OpenAI SDK)** – https://ai.google.dev/gemini-api/docs – State-of-the-art language model for generating articles, titles, and resume feedback.  
- **Neon Postgres** http://neon.com – Serverless PostgreSQL featuring instant provisioning, auto-scaling, "scale-to-zero", branching, snapshotting, and cost-effective pay-per-use pricing.  

---
