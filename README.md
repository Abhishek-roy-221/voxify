# 🎙️ Voxify

**Voxify** is a full-stack AI-powered voice generation platform that enables teams and developers to generate, manage, and scale realistic speech using self-hosted text-to-speech models.

It combines **voice cloning, multi-tenant architecture, and usage-based billing** into a production-ready SaaS system.

---

## 🚀 Features

* 🎧 **Text-to-Speech Generation**
  Generate high-quality, realistic audio using self-hosted AI models

* 🧬 **Custom Voice Cloning**
  Create unique voices via file upload or in-browser recording

* 🏢 **Multi-Tenant Workspaces**
  Organization-based access control using Clerk

* 💳 **Usage-Based Billing**
  Meter every generation with Polar integration

* 📦 **Cloud Storage (S3-compatible)**
  Store and manage audio via Cloudflare R2

* 📊 **Interactive Waveform Playback**
  Built with WaveSurfer.js for real-time audio interaction

* ⚡ **Type-Safe Backend**
  End-to-end type safety using tRPC + Zod

---

## 🧱 Tech Stack

**Frontend**

* Next.js 16
* Tailwind CSS v4
* shadcn/ui
* WaveSurfer.js

**Backend**

* tRPC (type-safe APIs)
* Node.js (Next.js API layer)

**Database**

* PostgreSQL
* Prisma ORM

**Infrastructure**

* Cloudflare R2 (object storage)
* Serverless GPU (FastAPI for model inference)

**Auth & Multi-tenancy**

* Clerk

**Billing**

* Polar (usage-based metering)

---

## ⚙️ Architecture Overview

```
User Input → tRPC API → Backend Validation → AI Model (GPU) → R2 Storage → Response 
```

### Flow Breakdown

1. User submits text input
2. Input validated using Zod
3. tRPC verifies organization & permissions
4. Backend calls self-hosted Chatterbox model (FastAPI + GPU)
5. Audio is generated and uploaded to Cloudflare R2
6. Usage is metered via Polar
7. Audio URL returned to frontend
8. Waveform rendered using WaveSurfer.js

---

## 📦 Deployment

* **Frontend & Backend:** Vercel
* **Storage:** Cloudflare R2
* **Database:** PostgreSQL (Neon / Supabase)
* **AI Model:** FastAPI + Serverless GPU

---

## 💡 Author

**Abhishek Roy**
