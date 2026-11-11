# راهنمای دپلوی در GitHub Pages

برای پیش‌نمایش محلی قبل از انتشار، `PREVIEW.md` را ببینید. پوشهٔ `Portfolio_Final_Deploy/` نسخهٔ همگام‌شده برای آپلود است؛ ریشهٔ پروژه منبع اصلی محتواست.

## مراحل:

1. یک repository جدید در GitHub بساز (مثلاً portfolio)

2. repository رو به پروژه متصل کن:
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

3. فایل‌ها رو push کن:
   git branch -M main
   git push -u origin main

4. در تنظیمات repository:
   - برو به Settings > Pages
   - در قسمت Source، branch main رو انتخاب کن
   - روی Save کلیک کن

5. سایتت در چند دقیقه در این آدرس منتشر می‌شه:
   https://YOUR_USERNAME.github.io/portfolio/

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
