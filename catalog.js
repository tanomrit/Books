
// Update this list with the correct filenames provided
const catalog = [
    {
        "id": "2KLZgdipINin2YTZiNmH2YUg2YjYp9mE2LTYpNmF",
        "cover": "covers/آفة الوهم والشؤم.png",
        "addedDate": "2025-12-09T20:13:02",
        "filename": "آفة الوهم والشؤم.pdf",
        "category": "عام",
        "title": "آفة الوهم والشؤم"
    },
    {
        "id": "2KPYsdmK2K8g2KXYtdmE2KfYrSDZhtmB2LPZig==",
        "cover": "covers/أريد إصلاح نفسي.png",
        "addedDate": "2025-12-09T20:22:05",
        "filename": "أريد إصلاح نفسي.pdf",
        "category": "عام",
        "title": "أريد إصلاح نفسي"
    },
    {
        "id": "2KPYs9im2YTYqSDZiNij2KzZiNio2Kkg2K3ZiNmEINin2YTYrdis2KfYqCDYp9mE2LTYsdi52Yo=",
        "cover": "covers/أسئلة وأجوبة حول الحجاب الشرعي.png",
        "addedDate": "2025-12-09T20:03:10",
        "filename": "أسئلة وأجوبة حول الحجاب الشرعي.pdf",
        "category": "عام",
        "title": "أسئلة وأجوبة حول الحجاب الشرعي"
    },
    {
        "id": "2KPYs9io2KfYqCDYp9mE2LTYudmI2LEg2KjYp9mE2YbZgti1INmI2LnZhNin2KzZhw==",
        "cover": "covers/أسباب الشعور بالنقص وعلاجه.png",
        "addedDate": "2025-12-09T20:02:45",
        "filename": "أسباب الشعور بالنقص وعلاجه.pdf",
        "category": "عام",
        "title": "أسباب الشعور بالنقص وعلاجه"
    },
    {
        "id": "2KPYttix2KfYsSDYp9iq2KjYp9i5INin2YTZh9mI2Ykg2YjYp9mE2LTZh9mI2KfYqg==",
        "cover": "covers/أضرار اتباع الهوى والشهوات.png",
        "addedDate": "2025-12-09T20:03:35",
        "filename": "أضرار اتباع الهوى والشهوات.pdf",
        "category": "عام",
        "title": "أضرار اتباع الهوى والشهوات"
    },
    {
        "id": "2KPZh9mF2YrYqSDYp9mE2LXZhNin2Kkg2YjZgdi22YTZh9in",
        "cover": "covers/أهمية الصلاة وفضلها.png",
        "addedDate": "2025-12-09T20:08:12",
        "filename": "أهمية الصلاة وفضلها.pdf",
        "category": "عام",
        "title": "أهمية الصلاة وفضلها"
    },
    {
        "id": "2KPZh9mF2YrYqSDYp9mE2YjZgtiq",
        "cover": "covers/أهمية الوقت.png",
        "addedDate": "2025-12-09T20:19:34",
        "filename": "أهمية الوقت.pdf",
        "category": "عام",
        "title": "أهمية الوقت"
    },
    {
        "id": "2KPZh9mF2YrYqSDYsNmD2LEg2KfZhNmE2Ycg2YjZgdi22KfYptmE2Ycg2YjZg9mK2YHZitiq2Yc=",
        "cover": "covers/أهمية ذكر الله وفضائله وكيفيته.png",
        "addedDate": "2025-12-09T20:10:50",
        "filename": "أهمية ذكر الله وفضائله وكيفيته.pdf",
        "category": "عام",
        "title": "أهمية ذكر الله وفضائله وكيفيته"
    },
    {
        "id": "2KXYqtmC2KfZhl/Yp9mE2KjYsdmH2KfZhl/ZgdmKX9i52YTZiNmFX9in2YTZgtix2KLZhg==",
        "cover": "covers/quran-science.jpg",
        "addedDate": "2025-12-09T19:29:57",
        "filename": "إتقان_البرهان_في_علوم_القرآن.pdf",
        "category": "عام",
        "title": "إتقان_البرهان_في_علوم_القرآن"
    },
    {
        "id": "2KfYrtiq2KjYp9ixINin2YTZgtmK2KfZhdip",
        "cover": "covers/اختبار القيامة.png",
        "addedDate": "2025-12-09T20:18:34",
        "filename": "اختبار القيامة.pdf",
        "category": "عام",
        "title": "اختبار القيامة"
    },
    {
        "id": "2KfYutin2KvYqV/Yp9mE2YTZh9mB2KfZhl/ZhdmGX9mF2LXYp9mK2K9f2KfZhNi02YrYt9in2YY=",
        "cover": "covers/devil.webp",
        "addedDate": "2025-12-09T19:27:44",
        "filename": "اغاثة_اللهفان_من_مصايد_الشيطان.pdf",
        "category": "عام",
        "title": "اغاثة_اللهفان_من_مصايد_الشيطان"
    },
    {
        "id": "2KfZhNin2LPYqti62YHYp9ixINmF2YHYqtin2K0g2KfZhNij2YbZiNin2LE=",
        "cover": "covers/الاستغفار مفتاح الأنوار.png",
        "addedDate": "2025-12-09T20:55:39",
        "filename": "الاستغفار مفتاح الأنوار.pdf",
        "category": "عام",
        "title": "الاستغفار مفتاح الأنوار"
    },
    {
        "id": "2KfZhNiq2YHZg9mR2LEg2YHZiiDYo9mF2YjYsSDYp9mE2KLYrtix2Kk=",
        "cover": "covers/التفكّر في أمور الآخرة.png",
        "addedDate": "2025-12-09T20:07:11",
        "filename": "التفكّر في أمور الآخرة.pdf",
        "category": "عام",
        "title": "التفكّر في أمور الآخرة"
    },
    {
        "id": "2KfZhNit2KzYp9ioINmB2Yog2KfZhNi02LHYuSDZiNin2YTZgdi32LHYqQ==",
        "cover": "covers/الحجاب في الشرع والفطرة.jpg",
        "addedDate": "2025-12-09T20:58:27",
        "filename": "الحجاب في الشرع والفطرة.pdf",
        "category": "عام",
        "title": "الحجاب في الشرع والفطرة"
    },
    {
        "id": "2KfZhNit2YLZiNmCINin2YTYstmI2KzZitipICgg2K3ZgiDYp9mE2LLZiNisICk=",
        "cover": "covers/الحقوق الزوجية ( حق الزوج ).png",
        "addedDate": "2025-12-09T20:58:49",
        "filename": "الحقوق الزوجية ( حق الزوج ).pdf",
        "category": "عام",
        "title": "الحقوق الزوجية ( حق الزوج )"
    },
    {
        "id": "2KfZhNi12YfZitmI2YbZitipX9in2YTYudin2YTZhdmK2Kk=",
        "cover": "covers/majos.jpg",
        "addedDate": "2025-12-09T19:31:57",
        "filename": "الصهيونية_العالمية.pdf",
        "category": "عام",
        "title": "الصهيونية_العالمية"
    },
    {
        "id": "2KfZhNi52YXYr9ipINmB2Yog2LTYsditINin2YTYqNix2K/YqQ==",
        "cover": "covers/العمدة في شرح البردة.png",
        "addedDate": "2025-12-09T20:23:53",
        "filename": "العمدة في شرح البردة.pdf",
        "category": "عام",
        "title": "العمدة في شرح البردة"
    },
    {
        "id": "2KfZhNi62YHZhNip",
        "cover": "covers/الغفلة.png",
        "addedDate": "2025-12-09T20:19:04",
        "filename": "الغفلة.pdf",
        "category": "عام",
        "title": "الغفلة"
    },
    {
        "id": "2KfZhNmF2K3Yp9mB2LjYqSDYudmE2Ykg2KfZhNij2LnZhdin2YQg2KfZhNi12KfZhNit2Kkg2KjYudivINix2YXYttin2YY=",
        "cover": "covers/المحافظة على الأعمال الصالحة بعد رمضان.png",
        "addedDate": "2025-12-09T20:07:35",
        "filename": "المحافظة على الأعمال الصالحة بعد رمضان.pdf",
        "category": "عام",
        "title": "المحافظة على الأعمال الصالحة بعد رمضان"
    },
    {
        "id": "2KfZhNmF2LnYrNiy2KfYqiDYp9mE2YLYsdii2YbZitip",
        "cover": "covers/المعجزات القرآنية.jpg",
        "addedDate": "2025-12-09T20:56:10",
        "filename": "المعجزات القرآنية.pdf",
        "category": "عام",
        "title": "المعجزات القرآنية"
    },
    {
        "id": "2KjYp9ioINin2YTZhdi52KfYtNix2Kk=",
        "cover": "covers/باب المعاشرة.png",
        "addedDate": "2025-12-09T19:55:23",
        "filename": "باب المعاشرة.pdf",
        "category": "عام",
        "title": "باب المعاشرة"
    },
    {
        "id": "2KjYsSDYp9mE2YjYp9mE2K/ZitmGINmI2KPYq9ixINin2YTYr9i52KfYoSDZhNij2KjZhtin2KbZh9mF",
        "cover": "covers/بر الوالدين وأثر الدعاء لأبنائهم.png",
        "addedDate": "2025-12-09T20:11:51",
        "filename": "بر الوالدين وأثر الدعاء لأبنائهم.pdf",
        "category": "عام",
        "title": "بر الوالدين وأثر الدعاء لأبنائهم"
    },
    {
        "id": "2KjYsdmD2KfYqiDYqtmE2KfZiNipINin2YTZgtix2KLZhiDYp9mE2YPYsdmK2YU=",
        "cover": "covers/بركات تلاوة القرآن الكريم.png",
        "addedDate": "2025-12-09T20:12:48",
        "filename": "بركات تلاوة القرآن الكريم.pdf",
        "category": "عام",
        "title": "بركات تلاوة القرآن الكريم"
    },
    {
        "id": "2KrYudmE2YrZhSDYp9mE2YXYqti52YTZhSDYt9ix2YrZgiDYp9mE2KrYudmE2YU=",
        "cover": "covers/تعليم المتعلم طريق التعلم.png",
        "addedDate": "2025-12-09T20:21:32",
        "filename": "تعليم المتعلم طريق التعلم.pdf",
        "category": "عام",
        "title": "تعليم المتعلم طريق التعلم"
    },
    {
        "id": "2KrZiNin2LbYuSDYs9mK2K/ZhtinINi52YXYsSDYqNmGINin2YTYrti32KfYqCDYsdi22Yog2KfZhNmE2Ycg2LnZhtmH",
        "cover": "covers/تواضع سيدنا عمر بن الخطاب رضي الله عنه.png",
        "addedDate": "2025-12-09T20:19:14",
        "filename": "تواضع سيدنا عمر بن الخطاب رضي الله عنه.pdf",
        "category": "عام",
        "title": "تواضع سيدنا عمر بن الخطاب رضي الله عنه"
    },
    {
        "id": "2KzZhdin2YQg2YjYrNmHINix2LPZiNmEINin2YTZhNmHIO+3ug==",
        "cover": "covers/rasol.png",
        "addedDate": "2025-12-09T20:20:49",
        "filename": "جمال وجه رسول الله ﷺ.pdf",
        "category": "عام",
        "title": "جمال وجه رسول الله ﷺ"
    },
    {
        "id": "2K3Ys9mGINin2YTYuNmGINio2KfZhNmE2Yc=",
        "cover": "covers/حسن الظن بالله.jpg",
        "addedDate": "2025-12-09T20:35:09",
        "filename": "حسن الظن بالله.pdf",
        "category": "عام",
        "title": "حسن الظن بالله"
    },
    {
        "id": "2K3ZgtmK2YLYqSDYp9mE2KzZhiDZgdmJINi42YTYp9mEINin2YTZgtix2KfZhg==",
        "cover": "covers/حقيقة الجن فى ظلال القران.webp",
        "addedDate": "2025-12-09T19:25:19",
        "filename": "حقيقة الجن فى ظلال القران.pdf",
        "category": "عام",
        "title": "حقيقة الجن فى ظلال القران"
    },
    {
        "id": "2K3ZgtmK2YLYqSDYp9mE2YXZiNiq",
        "cover": "covers/حقيقة الموت.jpg",
        "addedDate": "2025-12-09T20:59:38",
        "filename": "حقيقة الموت.pdf",
        "category": "عام",
        "title": "حقيقة الموت"
    },
    {
        "id": "2K3ZiNin2LEg2YXYuSDYtdiv2YrZgtmKINin2YTZhdmE2K3Yrw==",
        "cover": "covers/حوار مع صديقي الملحد.webp",
        "addedDate": "2025-12-09T20:31:06",
        "filename": "حوار مع صديقي الملحد.pdf",
        "category": "عام",
        "title": "حوار مع صديقي الملحد"
    },
    {
        "id": "2K7ZhNin2LXYqSDYqtio2YrYp9mGINin2YTZiNi22YjYoQ==",
        "cover": "covers/خلاصة تبيان الوضوء.png",
        "addedDate": "2025-12-09T20:13:20",
        "filename": "خلاصة تبيان الوضوء.pdf",
        "category": "عام",
        "title": "خلاصة تبيان الوضوء"
    },
    {
        "id": "2K/ZhNin2KbZhCDYp9mE2K7Zitix2KfYqiDZiNi02YjYp9ix2YIg2KfZhNij2YbZiNin2LHZgdmKINiw2YPYsSDYp9mE2LXZhNin2Kkg2LnZhNmJINin2YTZhtio2Yo=",
        "cover": "covers/دلائل الخيرات وشوارق الأنوارفي ذكر الصلاة على النبي.webp",
        "addedDate": "2025-12-09T19:16:10",
        "filename": "دلائل الخيرات وشوارق الأنوارفي ذكر الصلاة على النبي.pdf",
        "category": "عام",
        "title": "دلائل الخيرات وشوارق الأنوارفي ذكر الصلاة على النبي"
    },
    {
        "id": "2LHYrdmE2Kkg2KXZhNmKINin2YTYr9in2LEg2KfZhNii2K7Ysdip",
        "cover": "covers/رحلة إلي الدار الآخرة.jpg",
        "addedDate": "2025-12-09T21:08:06",
        "filename": "رحلة إلي الدار الآخرة.pdf",
        "category": "عام",
        "title": "رحلة إلي الدار الآخرة"
    },
    {
        "id": "2LTZh9in2K/Yp9iqINmF2K7ZitmB2Kkg2LnZhNmJINin2YTYudio2K8g2YrZiNmFINin2YTZgtmK2KfZhdip",
        "cover": "covers/شهادات مخيفة على العبد يوم القيامة.png",
        "addedDate": "2025-12-09T19:56:23",
        "filename": "شهادات مخيفة على العبد يوم القيامة.pdf",
        "category": "عام",
        "title": "شهادات مخيفة على العبد يوم القيامة"
    },
    {
        "id": "2LXYrdmK2K0g2KfZhNio2K7Yp9ix2Yo=",
        "cover": "covers/صحيح البخاري.jpg",
        "addedDate": "2025-12-09T21:07:34",
        "filename": "صحيح البخاري.pdf",
        "category": "عام",
        "title": "صحيح البخاري"
    },
    {
        "id": "2LXZgdipINi12YTYp9ipINin2YTYrNmG2KfYstip",
        "cover": "covers/صفة صلاة الجنازة.png",
        "addedDate": "2025-12-09T20:12:35",
        "filename": "صفة صلاة الجنازة.pdf",
        "category": "عام",
        "title": "صفة صلاة الجنازة"
    },
    {
        "id": "2LnYryDYpdmE2Ykg2KfZhNmE2Yc=",
        "cover": "covers/عد إلى الله.jpg",
        "addedDate": "2025-12-09T20:52:18",
        "filename": "عد إلى الله.pdf",
        "category": "عام",
        "title": "عد إلى الله"
    },
    {
        "id": "2LnZgtmK2K/YqV/Yp9mE2YXYs9mE2YU=",
        "cover": "covers/muslim.webp",
        "addedDate": "2025-12-09T19:30:40",
        "filename": "عقيدة_المسلم.pdf",
        "category": "عام",
        "title": "عقيدة_المسلم"
    },
    {
        "id": "2LnZhNmJINmF2YbZh9in2Kwg2KfZhNmG2KjZiNip",
        "cover": "covers/على منهاج النبوة.jpg",
        "addedDate": "2025-12-09T20:27:15",
        "filename": "على منهاج النبوة.pdf",
        "category": "عام",
        "title": "على منهاج النبوة"
    },
    {
        "id": "2YHYttin2KbZhCDYp9mE2LXYr9mC2KfYqg==",
        "cover": "covers/فضائل الصدقات.png",
        "addedDate": "2025-12-09T20:21:10",
        "filename": "فضائل الصدقات.pdf",
        "category": "عام",
        "title": "فضائل الصدقات"
    },
    {
        "id": "2YHYttin2KbZhCDYp9mE2YPYs9ioINin2YTYrdmE2KfZhCDZiNi52YLZiNio2KfYqiDYo9mD2YQg2KfZhNit2LHYp9mF",
        "cover": "covers/فضائل الكسب الحلال وعقوبات أكل الحرام.png",
        "addedDate": "2025-12-09T20:13:45",
        "filename": "فضائل الكسب الحلال وعقوبات أكل الحرام.pdf",
        "category": "عام",
        "title": "فضائل الكسب الحلال وعقوبات أكل الحرام"
    },
    {
        "id": "2YHYttin2KbZhCDYs9mI2LHYqSDYp9mE2YHYp9iq2K3YqSDZiNij2LPYsdin2LHZh9in",
        "cover": "covers/فضائل سورة الفاتحة وأسرارها.png",
        "addedDate": "2025-12-09T20:04:03",
        "filename": "فضائل سورة الفاتحة وأسرارها.pdf",
        "category": "عام",
        "title": "فضائل سورة الفاتحة وأسرارها"
    },
    {
        "id": "2YHYttin2KbZhCDYs9mK2K/ZhtinINi52YTZiiDYqNmGINij2KjZiiDYt9in2YTYqCDYsdi22Yog2KfZhNmE2Ycg2LnZhtmH",
        "cover": "covers/فضائل سيدنا علي بن أبي طالب رضي الله عنه.png",
        "addedDate": "2025-12-09T20:07:54",
        "filename": "فضائل سيدنا علي بن أبي طالب رضي الله عنه.pdf",
        "category": "عام",
        "title": "فضائل سيدنا علي بن أبي طالب رضي الله عنه"
    },
    {
        "id": "2YHYttmEINil2K7Zgdin2KEg2KfZhNij2LnZhdin2YQg2KfZhNi12KfZhNit2Kk=",
        "cover": "covers/فضل إخفاء الأعمال الصالحة.png",
        "addedDate": "2025-12-09T20:10:17",
        "filename": "فضل إخفاء الأعمال الصالحة.pdf",
        "category": "عام",
        "title": "فضل إخفاء الأعمال الصالحة"
    },
    {
        "id": "2YHYttmEINi32YTYqCDYp9mE2LnZhNmFINmI2KPZh9mF2YrYqtmH",
        "cover": "covers/فضل طلب العلم وأهميته.png",
        "addedDate": "2025-12-09T20:04:11",
        "filename": "فضل طلب العلم وأهميته.pdf",
        "category": "عام",
        "title": "فضل طلب العلم وأهميته"
    },
    {
        "id": "2YHZgtmHINin2YTYo9iz2LHYqQ==",
        "cover": "covers/فقه الأسرة.webp",
        "addedDate": "2025-12-09T19:23:04",
        "filename": "فقه الأسرة.pdf",
        "category": "عام",
        "title": "فقه الأسرة"
    },
    {
        "id": "2YLYtdi1INin2YTYtdit2KfYqNipINmI2KfZhNi12KfZhNit2YrZhg==",
        "cover": "covers/قصص الصحابة والصالحين.png",
        "addedDate": "2025-12-09T20:17:08",
        "filename": "قصص الصحابة والصالحين.pdf",
        "category": "عام",
        "title": "قصص الصحابة والصالحين"
    },
    {
        "id": "2YLZiNin2YbZitmGINin2YTYt9io2YrYudipINin2YTYqNi02LHZitip",
        "cover": "covers/قوانين الطبيعة البشرية.jpg",
        "addedDate": "2025-12-09T20:53:18",
        "filename": "قوانين الطبيعة البشرية.pdf",
        "category": "عام",
        "title": "قوانين الطبيعة البشرية"
    },
    {
        "id": "2YPYqtin2Kgg2KPYs9mF2KfYoSDYp9mE2YTZhyDYp9mE2K3Ys9mG2Yk=",
        "cover": "covers/كتاب أسماء الله الحسنى.jpg",
        "addedDate": "2025-12-09T20:54:26",
        "filename": "كتاب أسماء الله الحسنى.pdf",
        "category": "عام",
        "title": "كتاب أسماء الله الحسنى"
    },
    {
        "id": "2YPYqtin2Kgg2KXYudis2KfYsiDYp9mE2YLYsdii2YYg2YjYp9mE2KjZhNin2LrYqSDYp9mE2YbYqNmI2YrYqQ==",
        "cover": "covers/كتاب إعجاز القرآن والبلاغة النبوية.jpg",
        "addedDate": "2025-12-09T20:56:37",
        "filename": "كتاب إعجاز القرآن والبلاغة النبوية.pdf",
        "category": "عام",
        "title": "كتاب إعجاز القرآن والبلاغة النبوية"
    },
    {
        "id": "2YPYqtin2Kgg2KfZhNij2K3ZhNin2YU=",
        "cover": "covers/كتاب الأحلام.jpg",
        "addedDate": "2025-12-09T20:36:05",
        "filename": "كتاب الأحلام.pdf",
        "category": "عام",
        "title": "كتاب الأحلام"
    },
    {
        "id": "2YPYqtin2Kgg2KfZhNil2LnYsdin2Kgg2KfZhNmF2YrYs9ixINmB2Yog2YLZiNin2LnYryDYp9mE2YTYutipINin2YTYudix2KjZitip",
        "cover": "covers/كتاب الإعراب الميسر في قواعد اللغة العربية.jpg",
        "addedDate": "2025-12-09T20:57:11",
        "filename": "كتاب الإعراب الميسر في قواعد اللغة العربية.pdf",
        "category": "عام",
        "title": "كتاب الإعراب الميسر في قواعد اللغة العربية"
    },
    {
        "id": "2YPYqtin2Kgg2LHZitin2LYg2KfZhNi12KfZhNit2YrZhiDZhNmE2YbZiNmI2Yo=",
        "cover": "covers/كتاب رياض الصالحين للنووي.webp",
        "addedDate": "2025-12-09T19:19:05",
        "filename": "كتاب رياض الصالحين للنووي.pdf",
        "category": "عام",
        "title": "كتاب رياض الصالحين للنووي"
    },
    {
        "id": "2YPYqtin2Kgg2YLYtdi1INin2YTYo9mG2KjZitin2KE=",
        "cover": "covers/كتاب قصص الأنبياء.webp",
        "addedDate": "2025-12-09T19:21:51",
        "filename": "كتاب قصص الأنبياء.pdf",
        "category": "عام",
        "title": "كتاب قصص الأنبياء"
    },
    {
        "id": "2YPYqtin2Kgg2YPZgdin2K3Zig==",
        "cover": "covers/كتاب كفاحي.jpg",
        "addedDate": "2025-12-09T20:35:20",
        "filename": "كتاب كفاحي.pdf",
        "category": "عام",
        "title": "كتاب كفاحي"
    },
    {
        "id": "2YPYqtin2Kgg2YXZgdin2KrZititINin2YTYutmK2Kg=",
        "cover": "covers/كتاب مفاتيح الغيب.jpg",
        "addedDate": "2025-12-09T20:50:19",
        "filename": "كتاب مفاتيح الغيب.pdf",
        "category": "عام",
        "title": "كتاب مفاتيح الغيب"
    },
    {
        "id": "2YPYqtin2Kgg2YbZiNin2LPYriDYp9mE2YLYsdii2YY=",
        "cover": "covers/كتاب نواسخ القرآن.webp",
        "addedDate": "2025-12-09T19:35:36",
        "filename": "كتاب نواسخ القرآن.pdf",
        "category": "عام",
        "title": "كتاب نواسخ القرآن"
    },
    {
        "id": "2YPYqtin2Kgg2YrYo9is2YjYrCDZiNmF2KPYrNmI2Kwg2YHYqtmG2Kkg2KfZhNmF2KfYttmKINmI2KfZhNit2KfYttixINmI2KfZhNmF2LPYqtmC2KjZhA==",
        "cover": "covers/كتاب يأجوج ومأجوج فتنة الماضي والحاضر والمستقبل.jpg",
        "addedDate": "2025-12-09T19:34:44",
        "filename": "كتاب يأجوج ومأجوج فتنة الماضي والحاضر والمستقبل.pdf",
        "category": "عام",
        "title": "كتاب يأجوج ومأجوج فتنة الماضي والحاضر والمستقبل"
    },
    {
        "id": "2YPZitmB2YrYqSDYp9mE2LrYs9mEICjYudmE2Ykg2KfZhNmF2LDZh9ioINin2YTYtNin2YHYudmKKQ==",
        "cover": "covers/كيفية الغسل (على المذهب الشافعي).png",
        "addedDate": "2025-12-09T20:11:02",
        "filename": "كيفية الغسل (على المذهب الشافعي).pdf",
        "category": "عام",
        "title": "كيفية الغسل (على المذهب الشافعي)"
    },
    {
        "id": "2YTZhdin2LDYp1/Zitiu2KfZgdmI2YZf2KfZhNil2LPZhNin2YU=",
        "cover": "covers/why-fear-islam.png",
        "addedDate": "2025-12-09T19:37:14",
        "filename": "لماذا_يخافون_الإسلام.pdf",
        "category": "عام",
        "title": "لماذا_يخافون_الإسلام"
    },
    {
        "id": "2YXYqNin2K/ZidihX9ij2YjZhNmK2Klf2YHZil/Yp9mE2YHZhNiz2YHYqQ==",
        "cover": "covers/philo.webp",
        "addedDate": "2025-12-09T19:50:18",
        "filename": "مبادىء_أولية_في_الفلسفة.pdf",
        "category": "عام",
        "title": "مبادىء_أولية_في_الفلسفة"
    },
    {
        "id": "2YXYudmK2KfYsSDYp9mE2LnZhNmF",
        "cover": "covers/معيار العلم.png",
        "addedDate": "2025-12-09T19:58:09",
        "filename": "معيار العلم.pdf",
        "category": "عام",
        "title": "معيار العلم"
    },
    {
        "id": "2YXZgdiq2KfYrSDYp9mE2YbYrNin2K0=",
        "cover": "covers/مفتاح النجاح.jpg",
        "addedDate": "2025-12-09T20:49:36",
        "filename": "مفتاح النجاح.pdf",
        "category": "عام",
        "title": "مفتاح النجاح"
    },
    {
        "id": "2YXZhiDYo9iz2KjYp9ioINmH2YTYp9mDINin2YTYo9mC2YjYp9mF",
        "cover": "covers/من أسباب هلاك الأقوام.png",
        "addedDate": "2025-12-09T19:57:46",
        "filename": "من أسباب هلاك الأقوام.pdf",
        "category": "عام",
        "title": "من أسباب هلاك الأقوام"
    },
    {
        "id": "2YXZhiDYtdmB2KfYqiDYo9mH2YQg2KfZhNiq2YLZiNmJ",
        "cover": "covers/من صفات أهل التقوى.png",
        "addedDate": "2025-12-09T20:06:22",
        "filename": "من صفات أهل التقوى.pdf",
        "category": "عام",
        "title": "من صفات أهل التقوى"
    },
    {
        "id": "2YXZh9in2YTZgyDYp9mE2YXYudin2LXZiiDZiNi52YjYp9mC2Kgg2KfZhNiw2YbZiNio",
        "cover": "covers/مهالك المعاصي وعواقب الذنوب.png",
        "addedDate": "2025-12-09T20:11:42",
        "filename": "مهالك المعاصي وعواقب الذنوب.pdf",
        "category": "عام",
        "title": "مهالك المعاصي وعواقب الذنوب"
    },
    {
        "id": "2YbZhdin2LDYrCDZhdmGINit2YrYp9ihINin2YTYs9mE2YEg2KfZhNi12KfZhNit",
        "cover": "covers/نماذج من حياء السلف الصالح.png",
        "addedDate": "2025-12-09T20:20:28",
        "filename": "نماذج من حياء السلف الصالح.pdf",
        "category": "عام",
        "title": "نماذج من حياء السلف الصالح"
    },
    {
        "id": "2YjYtdin2YrYp1/Yp9mE2LHYs9mI2YRf2YTZhNiu2LfYqNin2KFf2Yhf2KfZhNiv2LnYp9ip",
        "cover": "covers/advices.webp",
        "addedDate": "2025-12-09T19:27:37",
        "filename": "وصايا_الرسول_للخطباء_و_الدعاة.pdf",
        "category": "عام",
        "title": "وصايا_الرسول_للخطباء_و_الدعاة"
    },
    {
        "id": "2YrYs9ij2YTZiNmG2YMg2LnZhiDYp9mE2LHZiNit",
        "cover": "covers/يسألونك عن الروح.jpg",
        "addedDate": "2025-12-09T21:07:43",
        "filename": "يسألونك عن الروح.pdf",
        "category": "عام",
        "title": "يسألونك عن الروح"
    },
    {
        "id": "2aLZpSDYrdmD2KfZitipINi52YYg2KPZh9mEINin2YTZgtio2YjYsQ==",
        "cover": "covers/٢٥ حكاية عن أهل القبور.png",
        "addedDate": "2025-12-09T20:17:33",
        "filename": "٢٥ حكاية عن أهل القبور.pdf",
        "category": "عام",
        "title": "٢٥ حكاية عن أهل القبور"
    }
];
