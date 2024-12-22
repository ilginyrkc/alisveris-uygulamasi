let urunler = [
    { ad: "Ürün A", fiyat: 50, stok: 10 },
    { ad: "Ürün B", fiyat: 30, stok: 20 },
    { ad: "Ürün C", fiyat: 20, stok: 15 },
];

let sepet = [];
let bakiye = 100;

function urunleriListele() {
    console.log("\nÜrün Listesi:");
    for (let i = 0; i < urunler.length; i++) {
        console.log((i + 1) + ". " + urunler[i].ad + " - Fiyat: " + urunler[i].fiyat + " TL - Stok: " + urunler[i].stok);
    }
}

function sepetiGoster() {
    console.log("\nSepetiniz:");
    if (sepet.length === 0) {
        console.log("Sepetiniz boş.");
    } else {
        for (let i = 0; i < sepet.length; i++) {
            console.log(sepet[i].ad + " - Fiyat: " + sepet[i].fiyat + " TL - Adet: " + sepet[i].adet);
        }
    }
}

function urunSatinAl() {
    urunleriListele();
    let secim = prompt("Satın almak istediğiniz ürünün numarasını girin:");


    secim = Number(secim);

    if (!secim || secim < 1 || secim > urunler.length) {
        console.log("Geçersiz ürün seçimi.");
        return;
    }

    let urun = urunler[secim - 1];
    let adet = prompt("Kaç adet " + urun.ad + " satın almak istiyorsunuz?");

    
    adet = Number(adet);

    if (!adet || adet <= 0) {
        console.log("Geçersiz adet.");
        return;
    }

    if (adet > urun.stok) {
        console.log("Yeterli stok yok.");
    } else if (adet * urun.fiyat > bakiye) {
        console.log("Yeterli bakiyeniz yok.");
    } else {
        bakiye -= adet * urun.fiyat;
        urun.stok -= adet;

        let sepetItem = null;
        for (let i = 0; i < sepet.length; i++) {
            if (sepet[i].ad === urun.ad) {
                sepetItem = sepet[i];
                break;
            }
        }

        if (sepetItem) {
            sepetItem.adet += adet;
        } else {
            sepet.push({ ad: urun.ad, fiyat: urun.fiyat, adet: adet });
        }

        console.log(adet + " adet " + urun.ad + " sepete eklendi.");
    }
}

function bakiyeEkle() {
    let miktar = prompt("Eklemek istediğiniz miktarı girin:");

    miktar = Number(miktar);

    if (!miktar || miktar <= 0) {
        console.log("Geçerli bir miktar girin.");
    } else {
        bakiye += miktar;
        console.log("Bakiyenize " + miktar + " TL eklendi. Güncel bakiye: " + bakiye + " TL");
    }
}

function bakiyeyiGoster() {
    console.log("Mevcut bakiyeniz: " + bakiye + " TL");
}

function anaMenu() {
    let secim = prompt(`
        1. Ürünleri listele
        2. Sepeti göster
        3. Ürün satın al
        4. Bakiye ekle
        5. Bakiyeyi göster
        6. Çıkış yap
    `);


    secim = Number(secim);

    if (!secim || secim < 1 || secim > 6) {
        console.log("Geçersiz seçenek. Lütfen tekrar deneyin.");
        anaMenu();
    } else if (secim === 1) {
        urunleriListele();
        anaMenu();
    } else if (secim === 2) {
        sepetiGoster();
        anaMenu();
    } else if (secim === 3) {
        urunSatinAl();
        anaMenu();
    } else if (secim === 4) {
        bakiyeEkle();
        anaMenu();
    } else if (secim === 5) {
        bakiyeyiGoster();
        anaMenu();
    } else if (secim === 6) {
        console.log("Çıkış yapılıyor...");
    }
}


anaMenu();
