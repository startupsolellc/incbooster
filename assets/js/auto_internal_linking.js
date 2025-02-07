window.onload = function() {
    console.log("Auto Internal Linking script is running!"); // Debug log

let keywords = {
    // 🏢 Girişimcilik & Startup
    "startup": "/tags/girisimcilik-startup/",
    "girişimcilik": "/tags/girisimcilik-startup/",
    "startup rehberi": "/tags/girisimcilik-startup/",
    "girişimciler için": "/tags/girisimcilik-startup/",
    "startup finansmanı": "/tags/girisimcilik-startup/",
    "yatırımcı bulma": "/tags/girisimcilik-startup/",
    "iş modeli geliştirme": "/tags/girisimcilik-startup/",
    "erken aşama girişimler": "/tags/girisimcilik-startup/",
    "MVP oluşturma": "/tags/girisimcilik-startup/",
    "lean startup nedir": "/tags/girisimcilik-startup/",
    "iş fikri geliştirme": "/tags/girisimcilik-startup/",
    "pazara giriş stratejileri": "/tags/girisimcilik-startup/",
    
    // 🛍️ Küresel E-Ticaret
    "e-ticaret": "/tags/e-ticaret/",
    "uluslararası satış": "/tags/e-ticaret/",
    "global e-ticaret": "/tags/e-ticaret/",
    "dropshipping": "/tags/e-ticaret/",
    "Amazon FBA": "/tags/e-ticaret/",
	"Amazon": "/tags/e-ticaret/",
	"Etsy": "/tags/e-ticaret/",
    "Shopify mağazası": "/tags/e-ticaret/",
    "e-ticarette ödeme sistemleri": "/tags/e-ticaret/",
    "e-ticaret platformları": "/tags/e-ticaret/",
    "Etsy mağazası açmak": "/tags/e-ticaret/",
    "uluslararası lojistik çözümleri": "/tags/e-ticaret/",
    "e-ihracat nasıl yapılır": "/tags/e-ticaret/",
    "e-ticarette vergi": "/tags/e-ticaret/",
    "dijital ürün": "/tags/e-ticaret/",
    "Amazon Avrupa satış": "/tags/e-ticaret/",
    
    // 🏛️ LLC Şirket
    "LLC şirket": "/tags/llc/",
    "şirket kurulumu": "/tags/llc/",
    "ABD şirketi": "/tags/llc/",
    "LLC nasıl kurulur": "/tags/llc/",
    "LLC vergileri": "/tags/llc/",
    "en iyi eyaletler LLC": "/tags/llc/",
    "LLC ve C-Corp farkı": "/tags/llc/",
    "LLC için EIN başvurusu": "/tags/llc/",
    "ABD’de şirket kurmak": "/tags/llc/",
    "LLC yasal gereklilikleri": "/tags/llc/",
    "LLC yıllık rapor": "/tags/llc/",
    "LLC registered agent": "/tags/llc/",
    "LLC maliyetleri": "/tags/llc/",
	"Amerikada Şirket Kurmak": "/tags/llc/",
	"Amerikada Şirket Kurma": "/tags/llc/",
    
    // 📢 Pazarlama
    "dijital pazarlama": "/tags/pazarlama-ve-buyume/",
    "içerik pazarlaması": "/tags/pazarlama-ve-buyume/",
    "SEO": "/tags/pazarlama-ve-buyume/",
    "e-posta pazarlama": "/tags/pazarlama-ve-buyume/",
    "sosyal medya reklamları": "/tags/pazarlama-ve-buyume/",
    "performans pazarlaması": "/tags/pazarlama-ve-buyume/",
    "Google Ads optimizasyonu": "/tags/pazarlama-ve-buyume/",
    "affiliate marketing nasıl yapılır": "/tags/pazarlama-ve-buyume/",
    "influencer pazarlama": "/tags/pazarlama-ve-buyume/",
    "growth hacking stratejileri": "/tags/pazarlama-ve-buyume/",
    "içerik üretimi teknikleri": "/tags/pazarlama-ve-buyume/",
    "funnel marketing nedir": "/tags/pazarlama-ve-buyume/",
    "remarketing kampanyaları": "/tags/pazarlama-ve-buyume/",
    "dönüşüm optimizasyonu": "/tags/pazarlama-ve-buyume/",
    
	// 📌 Genel Konular
    "iş dünyası": "/tags/genel/",
    "girişimcilik": "/tags/genel/",
    "ekonomi": "/tags/genel/",
    "başarı": "/tags/genel/",
    "yatırım": "/tags/genel/",
    "strateji": "/tags/genel/",
    "yenilik": "/tags/genel/",
    "teknoloji": "/tags/genel/",
    "büyüme": "/tags/genel/",
    "pazar": "/tags/genel/"
	
    // 🌍 Küresel İş Fırsatları
    "yurt dışı iş fırsatları": "/tags/is-firsatlari/",
    "freelance kazanç": "/tags/is-firsatlari/",
    "uluslararası yatırım": "/tags/is-firsatlari/",
    "remote work": "/tags/is-firsatlari/",
    "global iş imkanları": "/tags/is-firsatlari/",
    "en iyi yurt dışı iş fikirleri": "/tags/is-firsatlari/",
    "yurt dışında yaşamak ve çalışmak": "/tags/is-firsatlari/",
    "dijital göçebe olmak": "/tags/is-firsatlari/",
    "serbest çalışma fırsatları": "/tags/is-firsatlari/",
    "uzaktan çalışarak para kazanma": "/tags/is-firsatlari/",
    "ABD’de çalışma vizesi almak": "/tags/is-firsatlari/",
    "uluslararası pazarlara açılma": "/tags/is-firsatlari/",
    "en iyi ülkeler iş kurmak için": "/tags/is-firsatlari/",
};


    let contentBlocks = document.querySelectorAll(".entry-wrapper.content__entry");

    if (!contentBlocks.length) {
        console.log("No content blocks found! Exiting script.");
        return;
    }

    contentBlocks.forEach(block => {
        let html = block.innerHTML;
        console.log("Processing block:", block); // Debug log

        for (let key in keywords) {
            let regex = new RegExp("\\b" + key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + "\\b", "i"); // Sadece ilk eşleşmeyi alacak

            if (!html.includes(`<a href="${keywords[key]}">`)) {
                html = html.replace(regex, `<a href="${keywords[key]}">$&</a>`); // Sadece ilk eşleşmeyi değiştir
                console.log(`Linked "${key}" to ${keywords[key]}`); // Debug log
            }
        }
        block.innerHTML = html;
    });

    console.log("Internal linking script execution completed."); // Kod tamamlandı mesajı
};
