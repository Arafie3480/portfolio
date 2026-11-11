# راهنمای دپلوی در GitHub Pages

برای پیش‌نمایش محلی، `PREVIEW.md` را ببینید.

## منبع حقیقت

- ریشهٔ پروژه منبع اصلی محتواست (`index.html`, `styles.css`, `designs.css`, `script.js`, `assets/`).
- دامنهٔ سفارشی از فایل `CNAME` خوانده می‌شود: `devbyamir.com`
- برنچ `master` = نسخهٔ کامل پروژه روی GitHub
- برنچ `main` = نسخهٔ منتشرشده برای GitHub Pages (از `Portfolio_Final_Deploy/`)

## انتشار روی لایو

1. تغییرات را در ریشه بزنید و تست کنید: `python -m http.server 8770`
2. فایل‌های سایت را به `Portfolio_Final_Deploy/` کپی کنید
3. داخل همان پوشه commit و push روی `main`:

```powershell
Copy-Item -Force index.html,styles.css,designs.css,script.js,robots.txt,sitemap.xml,CNAME,PREVIEW.md,DEPLOY.md -Destination Portfolio_Final_Deploy\
Set-Location Portfolio_Final_Deploy
git add -A
git commit -m "Ship portfolio update"
git push origin main
```

4. چند دقیقه بعد در [https://devbyamir.com](https://devbyamir.com) Hard Refresh بزنید

## بکاپ برنچ master

```powershell
git push -u origin master
```

## گزینه ۲: Vercel (سریع‌تر و حرفه‌ای‌تر)

1. برو به vercel.com و با GitHub وارد شو
2. Import Project رو بزن
3. repository رو انتخاب کن
4. Deploy رو بزن
5. سایتت در چند ثانیه آماده می‌شه!

## گزینه ۳: Netlify

1. برو به netlify.com
2. "Add new site" > "Import an existing project"
3. GitHub رو انتخاب کن و repository رو متصل کن
4. Deploy رو بزن

## توجه مهم:
قبل از push کردن، اطلاعات تماست رو در index.html تکمیل کن:
- خط ۳۶۶: ایمیلت رو جایگزین کن
- خط ۳۷۱: آیدی تلگرامت
- خط ۳۷۶: لینک LinkedIn
- خط ۳۸۱: یوزرنیم GitHub
