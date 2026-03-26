# SEO Check — Harvey Cabeleireiro
_URL: https://harvey-orcin.vercel.app_
_Checked: 2026-03-26_

## ✅ Passing

### PT (/pt)
- [x] Title: "Harvey Cabeleireiro | Cabeleireiro Masculino em Carcavelos"
- [x] Meta description: 161 chars, descriptive, includes keywords
- [x] Robots: index, follow
- [x] og:title matches title
- [x] og:description matches meta description
- [x] og:image present
- [x] og:type: website
- [x] og:locale: pt_PT
- [x] twitter:card: summary_large_image
- [x] twitter:title and twitter:description present
- [x] html lang="pt" correct
- [x] Exactly 1 h1 element
- [x] JSON-LD: LocalBusiness with name, address, telephone, image
- [x] No broken images
- [x] Favicon present
- [x] site.webmanifest referenced
- [x] Hreflang tags for en and pt

### EN (/en)
- [x] Title: "Harvey Cabeleireiro | Men's Barbershop in Carcavelos"
- [x] Meta description: 156 chars, descriptive
- [x] html lang="en" correct
- [x] og:locale: en_US
- [x] Exactly 1 h1 element
- [x] No broken images
- [x] All same SEO tags present as PT

## 🔴 Failing

- [ ] **Double-slash in canonical URL** — `https://harvey-orcin.vercel.app//pt` (double `/`). Same issue in og:url, og:image, hreflang hrefs, and JSON-LD url. Caused by SITE_URL having no trailing slash + layout prepending `/`. Fix: ensure `SITE_URL` doesn't end with `/` and canonical uses `${SITE_URL}/${lang}` without double slashes.

- [ ] **Instagram link doubled** — `https://instagram.com/https://instagram.com/harveycabeleireiro` in both contact section and footer. The component prepends `https://instagram.com/` but the dict value already contains the full URL. Fix: use the dict value as-is, or strip the protocol in the dict.

## ⚠️ Warnings

- [ ] **Footer links not translated** — Footer headings "Links" and "Contact" and link labels ("About", "Services", "Gallery", "Contact") are hardcoded in English on both PT and EN pages. Should come from dict.
- [ ] **SITE_URL mismatch** — `.env` has `https://harvey.vercel.app` but actual deploy is at `https://harvey-orcin.vercel.app`. All canonical/og URLs point to the wrong domain.
- [ ] **Meta description length (PT)** — 161 chars, slightly over the recommended 160 max. Minor.

## 📊 Summary
- **21 checks passed**
- **2 failing** (double-slash URLs, doubled Instagram link)
- **3 warnings** (footer not translated, SITE_URL mismatch, description length)
