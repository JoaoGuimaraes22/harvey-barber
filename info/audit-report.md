# Audit Report — Harvey Cabeleireiro
_Generated: 2026-03-26_

## 🔴 Critical (must fix before launch)

- [ ] **metadata.email is empty** — EN: `""`, PT: `""`. No email address for the business. Need to get from client or confirm they don't use email.
- [ ] **Review images are AI-generated** — `/reviews/review-1..5.webp` are AI placeholders, not real client photos. Replace with real post-service photos when available.
- [ ] **Before/after images are AI-generated** — `/before-after/*.webp` are AI placeholders. Replace with real transformation photos from the barbershop.
- [ ] **Footer hardcoded in English** — Footer headings "Links" and "Contact" and link labels ("About", "Services", "Gallery", "Contact") are not from dict, they show English text on the PT page too.

## 🟡 Warning (should verify with client)

- [ ] **All 5 reviews are 5-star** — Real reviews from Google Maps, but all selected are 5/5. Consider including the 4-star reviews for authenticity.
- [ ] **"20+ Years" stat is unverified** — Reviews mention 20+ years of loyalty but the exact founding year is unknown. Confirm with client.
- [ ] **Service pricing incomplete** — Only "Starting from €10" confirmed. Get full price list from client for each service.
- [ ] **Hero/about/services/gallery images are AI-generated** — All images are AI placeholders. Replace with real photography when client provides photos.
- [ ] **EN reviews are translated, not original** — The EN dict has translated versions of originally Portuguese reviews. Consider keeping originals with a translation toggle, or noting they're translated.

## 🟢 Info (nice to have)

- [ ] **No email in metadata** — flagged in populate report as missing from info.md. Business may not use email (appointment by phone only).
- [ ] **Logo exists but not used in navbar** — `public/logo.png` exists but navbar uses text "Harvey." instead. Consider using logo image.
- [ ] **No team section** — David "the artist" is mentioned in reviews and about text but there's no dedicated team section. Could add when client provides team photos/bios.

## ✅ Passing

### Data Parity (EN ↔ PT)
- [x] metadata.phone: identical ✅
- [x] metadata.address: identical ✅
- [x] metadata.email: identical (both empty) ✅
- [x] navbar.ctaPhone: identical ✅
- [x] hero.ctaPhone: identical ✅
- [x] hero.stats values: identical ✅
- [x] about.features values: identical ✅
- [x] services.items images: identical ✅
- [x] services.ctaPhone: identical ✅
- [x] beforeAfter.items images: identical ✅
- [x] reviews.items images: identical ✅
- [x] reviews.items names: identical ✅
- [x] reviews.items ratings: identical ✅
- [x] contact.phone: identical ✅
- [x] contact.phoneLink: identical ✅
- [x] contact.address: identical ✅
- [x] contact.mapsEmbed: identical ✅
- [x] contact.mapsLink: identical ✅
- [x] contact.instagram: identical ✅
- [x] footer.phone: identical ✅
- [x] footer.address: identical ✅
- [x] footer.instagram: identical ✅
- [x] footer.mapsLink: identical ✅

### Images
- [x] All 25 dict-referenced images exist in public/
- [x] All images are WebP optimized
- [x] hero-video.mp4 present (client-provided)
- [x] og-image.jpg present (1909KB)
- [x] favicon.ico present
- [x] apple-touch-icon.png present
- [x] site.webmanifest present
- [x] logo.png present

### SEO
- [x] metadata.name: "Harvey Cabeleireiro" ✅
- [x] metadata.type: "LocalBusiness" ✅
- [x] NEXT_PUBLIC_SITE_URL set: https://harvey-orcin.vercel.app ✅
- [x] Google Maps embed URL is real CID (not placeholder) ✅

### Content
- [x] Reviews are real (from Google Maps scrape, 4-5 stars only)
- [x] Contact hours match Google Maps listing
- [x] Address matches Google Maps listing
- [x] Phone matches Google Maps listing

## 📊 Summary
- **4 critical issues** (empty email, AI images x2, footer not translated)
- **5 warnings** (all-5-star reviews, unverified stats, incomplete pricing, AI images, translated reviews)
- **3 info items** (no email, unused logo, no team section)
- **0 images missing**
- **33 images/assets present**
- **23 data parity checks passed**

### Top 3 to fix first:
1. **Translate footer** — hardcoded English on PT page is visible to users
2. **Get real photos from client** — AI images are placeholders; real photos will dramatically improve trust
3. **Get full price list** — only one price confirmed, clients want to know costs upfront
