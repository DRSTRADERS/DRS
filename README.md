# DRS TRADERS — E-Commerce Platform

Premium Sarees & Quality Cocopeat | Salem, Tamil Nadu | Pan-India Shipping

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Install Dependencies
```bash
cd D:\drs-traders
npm install
```

### 2. Configure Environment
```bash
copy .env.example .env
```
Edit `.env` and fill in your values (see sections below).

### 3. Setup Database
```bash
npx prisma db push     # creates SQLite database
npx prisma db seed     # seeds products, admin user, settings
```

### 4. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### 5. Admin Panel
URL: http://localhost:3000/admin/login
- **Email**: admin@drstraders.com
- **Password**: Admin@123

(Change these in `.env` before seeding)

---

## 🌱 Environment Variables

Create a `.env` file from `.env.example`:

```env
# Database (SQLite for dev, PostgreSQL for prod)
DATABASE_URL="file:./dev.db"

# NextAuth (generate a random 32+ char secret)
NEXTAUTH_SECRET="your-super-secret-here-min-32-chars-abc123"
NEXTAUTH_URL="http://localhost:3000"

# Admin credentials
ADMIN_EMAIL="admin@drstraders.com"
ADMIN_PASSWORD="Admin@123"

# Razorpay (get from https://dashboard.razorpay.com/app/keys)
RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxxxxxx"
RAZORPAY_KEY_SECRET="xxxxxxxxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxxxxxx"

# WhatsApp Cloud API
WHATSAPP_PHONE_NUMBER_ID="your_phone_number_id"
WHATSAPP_ACCESS_TOKEN="your_access_token"
WHATSAPP_VERIFY_TOKEN="your_webhook_verify_token"
OWNER_WHATSAPP="916374966736"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## 💳 Razorpay Setup

1. **Create Account**: Go to https://dashboard.razorpay.com
2. **Get Test Keys**: Dashboard > Settings > API Keys > Generate Test Key
3. **Add to `.env`**: Paste `Key ID` and `Key Secret`
4. **Test Card**: Use `4111 1111 1111 1111` (any future expiry, any CVV)
5. **Go Live**: Replace test keys with live keys when ready

---

## 📱 WhatsApp Cloud API Setup

### Step 1: Meta Business Setup
1. Go to https://developers.facebook.com
2. Create a new App > Business > WhatsApp
3. Add a test phone number

### Step 2: Get Credentials
- **Phone Number ID**: WhatsApp > Getting Started > Phone Number ID
- **Access Token**: App Settings > Generate Token
- **Business Account ID**: WhatsApp > API Setup

### Step 3: Set Environment Variables
```env
WHATSAPP_PHONE_NUMBER_ID="123456789012345"
WHATSAPP_ACCESS_TOKEN="EAAxxxxxxx..."
WHATSAPP_VERIFY_TOKEN="my_verify_token_123"
```

### Step 4: Webhook Setup (for production)
1. Go to WhatsApp > Configuration > Webhook
2. Set URL: `https://yourdomain.com/api/whatsapp/webhook`
3. Set Verify Token to match `WHATSAPP_VERIFY_TOKEN`
4. Subscribe to `messages` events

> ⚠️ Note: For testing within 24 hours of a customer message, text messages work without templates.

---

## 🎨 Changing Brand Colors

Edit `tailwind.config.ts`:

```typescript
// Saree theme (magenta/gold)
saree: {
  primary: '#C026D3',   // Change to any color
  secondary: '#F59E0B',
  accent: '#EC4899',
},
// Cocopeat theme (green/earth)
cocopeat: {
  primary: '#16A34A',   // Change to any color
  secondary: '#92400E',
  accent: '#65A30D',
},
```

---

## 🛠️ Production Build

```bash
npm run build
npm run start
```

---

## ☁️ Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project at https://vercel.com
3. Add all `.env` variables in Vercel dashboard
4. Deploy!

**For PostgreSQL in production:**
```env
DATABASE_URL="postgresql://user:password@host:5432/drstraders"
```
Update `prisma/schema.prisma` `provider` from `sqlite` to `postgresql`.

---

## 🗄️ Image Storage

Default: Images are stored as URLs (Unsplash, etc.) in the database.

**For production with Cloudinary:**
1. Create account at https://cloudinary.com
2. Install: `npm install cloudinary`
3. Update `src/app/api/upload/route.ts` to use Cloudinary SDK
4. Add env vars: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

---

## 📁 Project Structure

```
drs-traders/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── admin/              # Admin panel
│   │   ├── api/                # API routes
│   │   ├── sarees/             # Saree shop page
│   │   ├── cocopeat/           # Cocopeat shop page
│   │   ├── products/[slug]/    # Product detail page
│   │   ├── cart/               # Cart page
│   │   ├── checkout/           # Checkout
│   │   ├── track-order/        # Order tracking
│   │   └── policies/           # Policy pages
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── home/               # Home page sections
│   │   ├── product/            # Product components
│   │   ├── cart/               # Cart drawer
│   │   ├── admin/              # Admin components
│   │   └── ui/                 # Shared UI (ProductCard, WhatsApp)
│   ├── lib/                    # Utils, Prisma, Razorpay, WhatsApp
│   ├── store/                  # Zustand cart store
│   └── types/                  # TypeScript types
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Seed data
├── public/                     # Static assets
└── .env.example                # Environment template
```

---

## 📞 Contact & Support

**DRS TRADERS**
- 📞 Phone/WhatsApp: +91 6374966736
- 📧 Email: drstraders07@gmail.com
- 📸 Instagram: @drs_traders
- 📍 Location: Salem, Tamil Nadu

---

*Built with ❤️ for DRS TRADERS — Made in India*
