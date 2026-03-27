# Audit Report — Harvey Cabeleireiro
_Generated: 2026-03-26_

## 🔴 Critical (must fix before launch)

- [ ] `metadata.email` is empty `""` — no email for JSON-LD structured data. Get from client or confirm phone-only.
- [ ] `metadata.type` is `"LocalBusiness"` — should be `"BarberShop"` for richer schema.org markup
- [ ] All images are AI-generated — need real photos from client (team, shop interior, services, before-after, reviews, gallery). This is the single biggest trust gap.

## 🟡 Warning (should verify with client)

- [ ] `services.priceNote` "Starting from €10" — only €10 clipper cut confirmed. Get full price list from client.
- [ ] `about.features` "413+ Happy Clients" uses review count as client count — verify or rephrase
- [ ] `hero.stats` "30+ Years" — exact founding year unknown per populate report. Verify with Harvey.
- [ ] `team` has 2 members — confirm no other barbers work at the shop
- [ ] EN reviews are translated from Portuguese originals — acceptable but consider noting "translated from Google Reviews"
- [ ] No `NEXT_PUBLIC_GOOGLE_REVIEW_URL` env var — no Google Review CTA on site
- [ ] No `NEXT_PUBLIC_FORMSPREE_ID` — bookings are phone-only (likely intentional for a barbershop)

## 🟢 Info (nice to have)

- [ ] No FAQ section — could add common questions (appointment policy, pricing, walk-in availability)
- [ ] No pricing section — explicit prices could help SEO and user expectations
- [ ] `og-image.jpg` is AI-generated (111KB) — replace with real photo of the shop for social sharing
- [ ] `logo.png` exists in public root but navbar uses text brand — could use logo image instead
- [ ] Instagram link uses `instagram.com` not `www.instagram.com` — works but non-canonical
- [ ] No statsCounters section — stats are inline in hero/about, a dedicated section could reinforce trust

## ✅ Passing

### Data Parity (EN ↔ PT)
All 24 non-translatable field groups checked — **zero mismatches**:
- metadata (phone, email, address, type) ✅
- navbar (brand, ctaPhone, link IDs) ✅
- hero (ctaPhone, stats values) ✅
- about (feature values) ✅
- services (image paths, ctaPhone) ✅
- beforeAfter (image paths) ✅
- reviews (names, ratings, image paths) ✅
- team (names, image paths) ✅
- gallery (image src paths) ✅
- contact (phone, phoneLink, address, mapsEmbed, mapsLink, instagram, hour times) ✅
- footer (phone, address, instagram, mapsLink, link IDs) ✅

### Images
- [x] 30/30 dict-referenced images exist in public/ ✅
- [x] All images are WebP optimized ✅
- [x] hero-video.mp4 present ✅
- [x] og-image.jpg present (111KB, not placeholder) ✅
- [x] favicon.ico present (15KB, custom) ✅
- [x] apple-touch-icon.png present ✅
- [x] site.webmanifest present ✅
- [x] logo.png present ✅

### SEO
- [x] metadata.name: "Harvey Cabeleireiro" ✅
- [x] NEXT_PUBLIC_SITE_URL: https://harvey-barber.vercel.app ✅
- [x] Google Maps embed URL uses real CID ✅

### Content
- [x] 6 real reviews from Google Maps (mix of 4★ and 5★) ✅
- [x] Hours match Google Maps listing (incl. lunch break + Saturday difference) ✅
- [x] Phone consistent across all sections ✅
- [x] Address consistent across all sections ✅
- [x] Footer headings are dict-driven and translated ✅

## 📊 Summary
- **3 critical issues** (empty email, schema type, AI images)
- **7 warnings** (pricing, stats, team size, reviews, env vars)
- **6 info items** (FAQ, pricing section, og-image, logo, instagram URL, statsCounters)
- **0 images missing**
- **30+ images/assets present**

### Top 3 to fix first:
1. **Get real photos from client** — AI images are the biggest trust gap; real photos will transform the site
2. **Update metadata.type to "BarberShop"** — quick fix, better SEO schema
3. **Get full price list** — clients want to know costs before calling
