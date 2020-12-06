module.exports.feladatok=()=>{
    let todo = {
            1: "erdeklodni az uj fiatal gazda palyazatrol: https://szilberhorn.com/fiatal-gazda-palyazat.html",
            2: "fontos tudnivalok a fiatal gazda palyazatrol: https://fiatalgazdapalyazat.com/",
            3: "aranykalaszos gazda kepzesek"[{
                id: 1,
                indulas: "egesz evben hetente tobbszor (?)",
                idotartam: "?",
                kepzesi_dij: 90000,
                vizsgadij: 60000,
                befizetesi_hatarido: "jelentkezes utan 3 nappal: 100.000 Ft, vizsga elott legkesobb 20 nappal: 50.000 Ft",
                kedvezmeny: "?",
                elmelet: "online",
                gyakorlat: "nincs, egy konzultacio szukseges a vizsga elott",
                varhato_vizsgaidopont: "?",
                honlap: "http://minervakft.hu/okj-tanfolyamok/aranykalaszos-gazda",
                telefonszam: "0670 593 2232",
                e_mail: "info@minervakft.hu"
                },
                {
                id: 2,
                indulas: "2020. 12. 30.",
                idotartam: "2 honap",
                kepzesi_dij: 94410/104900,
                vizsgadij: 63900,
                befizetesi_hatarido: "?",
                kedvezmeny: "egyosszegu fizetes eseten 94.410 Ft a kepzesi dij 104.900 Ft helyett",
                elmelet: "online",
                gyakorlat: "Vac mellett talalhato gazdasagban",
                varhato_vizsgaidopont: "?",
                honlap: "https://www.efeb.hu/felnottkepzes/aranykalaszos-gazda-tanfolyam-okj-kepzes?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkOMiUj3J7YXnatpyTjU-bZKuvglDZP4GgrLTcrkvNDmMV51SNPC2JxoCnZUQAvD_BwE",
                telefonszam: "061 321 9215, 0670 616 1171",
                e_mail: "info@efeb.hu"
                },
                {
                id: 3,
                indulas: "2020. 12. 10. / 2021.",
                idotartam: "?",
                kepzesi_dij: 150000,
                vizsgadij: 0,
                befizetesi_hatarido: "2021. 01. 31.",
                kedvezmeny: "decemberi jelentkezes eseten 240.000 Ft helyett 150.000 Ft a teljes dij",
                elmelet: "online",
                gyakorlat: "?",
                varhato_vizsgaidopont: "2021. tavasza",
                honlap: "https://elia.hu/aranykalaszos-gazda-kepzes/?gclid=CjwKCAiAn7L-BRBbEiwAl9UtkPJJrXDYYbPv-mpAycFpZNVBklYXlVMhuPPGjjTJuokEYmuCJAHpRxoCIbgQAvD_BwE",
                telefonszam: "0670 550 0555, 0630 473 0933",
                e_mail: "oktatas@elia.hu"
                }],
            4: "uj palyazati lehetoseg hamarosan"[{
                id: 1,
                honlap: "https://magyarmezogazdasag.hu/2020/12/02/az-elelmiszeripar-fejlesztese-prioritas-lesz"
                }],
            5: "udemy react course folytatasa",
            6: "input formot osszevonni a feldolgozott konyvek js objectjevel",
            7: "megkeresni hova toltottem fel a mobilszolgaltatok.ods-t",
            8: "megkeresni hova toltottem fel a diakhitel_infok.ods-t",
            9: "app.plant_learning folytatasa (kesz: html input form)",
            10: "app.plant_learning html input form-ját függőleges síkba hozni (ne szöveg-hosszúságként eltérő intendálással jelenjen meg az input field, hanem mindegyik a leghosszabb szöveghez igazodjon egy sorba)",
            11: "app.plant_learninghez uj adatok"[{
                id: 2,
                honlap: "https://magyarmezogazdasag.hu/2020/12/06/letrehoztak-novenyfajok-legnagyobb-katalogusat",
                github: "https://github.com/idiv-biodiversity/lcvplants/"
            }],
            12: "megkeresni az uj memoriapalotas fajlt (a regi megvan)",
            13: "piackutatas.ods befejezese",
            14: "teli_novenyismereti_beszamolo_2019_2020.ods + kepek folytatasa",
            15: "bme oktatok elerhetosegenek legyujtese",
            16: "windows mindmapek (projektek megvalositasanak lepesei mindmanagerben)",
            17: "osszegyujteni a mindmapeket + telepiteni virtualboxot windows 10-el es mindmanagerrel egyutt",
            18: "bevinni ezeket a taskokat task_manager mappaba egy olyan tablazatba mint a telepitett_programok.html",
            19: "schedule: calendar.html folytatasa",
            20: "megkeresni es letolteni a felhobe feltoltott konyveket",
            21: "interaktiv tartalomjegyzeket irni aditi singhal - how to memorize anything c. konyvehez",
            22: "utananezni miert nem mukodik a 'del', 'home' es 'end' gyorsbillentyu",
            23: "megkeresni a konyvek mappat hova toltottem fel",
            24: "erdekolesi teruleteket osszeszurni a projektekkel",
            25: "szerv_meridianok.ods fajlt egybevonni az ayurvedikus heti receptekkel es az edzestervvel",
            26: "erettsegi feladatsorokat megkeresni",
            27: "install a hover modal",
            28: "edzesi naplo vezetese (2 naponta - 20:00-ig max)",
            29: "telepitett_prgoramok.html-be integralni az aktualis datumot",
            30: "flow dia folders.ods-t folytatni",
            31: "megkeresni a korabban win10-en letrehozott mindmapeket",
            32: "schedule mappa html-css tartalmat navigalhatova tenni a jobbra-balra billentyukkel",
            33: "bevinni a one-click-copy funkciot a telepitett_programok.html-be",
            34: "irni egy scriptet ami egy paranccsal feltelepit minden rogzitett programkodot linuxban",
            35: "alomtabla kepeit integralni a fresh portfolio site-al (es normalizalni az animacioit)"
        }
return console.log(todo)
};

module.exports.olvasas=()=>{
    const list = {
        write_daily_progress_for: "Memory Castle",
        write_daily_progress_for: "a book a day" [{
            1: "Vallalkozasi alapismeretek",
            2: "Dominic O'Brien - How to develop a perfect memory",
            3: "Ayurvedikus fozes",
            4: "Clojure for the Brave and True",
            5: "Obadovics - Matematika"
        }],
    }
    return console.log(list);
};

module.exports.elvegezve=()=>{
    let done = {
            1: "eltavolitott alkalmazasok (win10 alaphelyzetbe allitasa utan) html-jét intendalni es template-kent hasznalni a linuxra telepitett programokhoz",
            2: "befejezni a felhoben tarolt mappak letolteset",
            3: "alkalmazni a quiz formot javascritben az app.plant_learning-en",
            4: "npm install boron",
            5: "megkeresni a projekteket es a szukseges lepeseket osszefoglalo .ods fajlt",
            6: "malnatovek metszese csutortok esteig",
            7: "portfolio oldal kidolgozasat elkezdeni"
    }
    return console.log(done)
};