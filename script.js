const STORAGE_KEY = 'chronicles_of_hikmah_save_v1';
    const TILE = 48;
    const MAP_SIZE = 14;
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const questions = window.GAME_DATA.questions;

    const areas = window.GAME_DATA.areas;

    const quests = window.GAME_DATA.quests;

    const bosses = window.GAME_DATA.bosses;

    const maps = window.GAME_DATA.maps;

    /* original inline questions removed
    const questions = [
      {id:'ar1', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'Apakah makna perkataan Arab "ءَالَآءِ" dalam Surah Ar-Rahman?', choices:['Nikmat-nikmat','Gunung-ganang','Malaikat','Perjalanan'], answer:0, rewardExp:18, rewardGold:8, note:'Dokumen mentafsirkan "ءَالَآءِ" sebagai النعم.'},
      {id:'ar2', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'"يَسْجُدَانِ" dalam dokumen ditafsirkan sebagai apa?', choices:['Bercahaya','Tunduk dan patuh','Berjalan pantas','Bersatu'], answer:1, rewardExp:18, rewardGold:8, note:'Makna yang diberi ialah ينقادان.'},
      {id:'ar3', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'Apakah maksud "بِالْقِسْطِ"?', choices:['Dengan sabar','Dengan adil','Dengan kekuatan','Dengan ilmu'], answer:1, rewardExp:18, rewardGold:8, note:'Dokumen memberi makna بالعدل.'},
      {id:'ar4', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'"وَلَا تُخْسِرُوا" bermaksud...', choices:['Jangan menambah','Jangan meninggalkan','Jangan mengurangkan','Jangan menipu diri'], answer:2, rewardExp:18, rewardGold:8, note:'Maknanya ولا تنقصوه.'},
      {id:'ar5', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'Apakah maksud "لِلْأَنَامِ"?', choices:['Untuk para nabi','Untuk makhluk','Untuk malaikat','Untuk orang kaya'], answer:1, rewardExp:18, rewardGold:8, note:'Dokumen menyatakan للخَلْقِ.'},
      {id:'ar6', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'"الْأَكْمَامِ" dalam Surah Ar-Rahman merujuk kepada...', choices:['Awan tebal','Lembah hijau','Bekas atau seludang tamar','Lautan luas'], answer:2, rewardExp:18, rewardGold:8, note:'Makna yang diberi ialah أوعية التمر.'},
      {id:'ar7', subject:'Tafsir', difficulty:1, source:'Ar-Rahman', prompt:'Apakah erti "الرَّيْحَانُ" menurut dokumen?', choices:['Rezeki','Bunga','Angin','Kebun'], answer:0, rewardExp:18, rewardGold:8, note:'Dokumen mentafsirkan الرزق.'},
      {id:'ar8', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Dalam ayat "عَلَّمَ الْقُرْءَانَ", apakah nikmat tertinggi yang didahulukan?', choices:['Nikmat harta','Nikmat keturunan','Nikmat الدين dan Al-Quran','Nikmat hujan'], answer:2, rewardExp:22, rewardGold:10, note:'Syarah menyebut نعمة الدين dan pengajaran Al-Quran didahulukan.'},
      {id:'ar9', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Mengapa penciptaan manusia disebut selepas Al-Quran dalam dokumen?', choices:['Kerana manusia lebih lemah','Supaya manusia tahu dia dicipta untuk agama','Supaya malaikat memahami wahyu','Kerana urutan sejarah'], answer:1, rewardExp:22, rewardGold:10, note:'Syarah menyebut manusia dicipta untuk الدين dan belajar wahyu.'},
      {id:'ar10', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'"عَلَّمَهُ الْبَيَانَ" menekankan nikmat apa?', choices:['Nikmat perjalanan','Nikmat bahasa dan penjelasan','Nikmat perdagangan','Nikmat peperangan'], answer:1, rewardExp:22, rewardGold:10, note:'Makna البيان ialah المنطق الفصيح.'},
      {id:'ar11', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'"الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ" menunjukkan manfaat utama apa?', choices:['Ilmu tahun dan kiraan','Ilmu perubatan','Ilmu perkapalan','Ilmu pertanian sahaja'], answer:0, rewardExp:22, rewardGold:10, note:'Dokumen menyebut علم السنين والحساب.'},
      {id:'ar12', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Dalam syarah, "النَّجْمُ" boleh bermaksud...', choices:['Bintang sahaja','Tumbuhan yang tumbuh tanpa batang','Lautan','Wahyu'], answer:1, rewardExp:22, rewardGold:10, note:'Dokumen menjelaskan النجم sebagai النبات الذي ينبت من الأرض لا ساق له.'},
      {id:'ar13', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Apakah tujuan "وَوَضَعَ الْمِيزَانَ" menurut syarah?', choices:['Untuk hiasan','Untuk keadilan dalam timbangan dan muamalah','Untuk peperangan','Untuk penentuan arah'], answer:1, rewardExp:22, rewardGold:10, note:'Syarah mengaitkannya dengan التسوية والتعديل.'},
      {id:'ar14', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'"أَلَّا تَطْغَوْا فِي الْمِيزَانِ" mengajar kita agar...', choices:['Bersifat sombong','Tidak melampau dalam timbangan','Melupakan urusan jual beli','Sentiasa diam'], answer:1, rewardExp:22, rewardGold:10, note:'Maknanya larangan melampau dan menzalimi.'},
      {id:'ar15', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Apakah maksud "وَلَا تُخْسِرُوا الْمِيزَانَ" dalam ayat 9?', choices:['Jangan kurangkan timbangan','Jangan rosakkan bangunan','Jangan tinggalkan musafir','Jangan campur makanan'], answer:0, rewardExp:22, rewardGold:10, note:'Syarah menyebut larangan menipu dengan kekurangan.'},
      {id:'ar16', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'"وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ" menggambarkan bumi sebagai...', choices:['Medan perang','Hamparan untuk makhluk','Tempat hukuman','Laut terbuka'], answer:1, rewardExp:22, rewardGold:10, note:'Dokumen menggambarkan bumi seperti basat bagi makhluk.'},
      {id:'ar17', subject:'Tafsir', difficulty:2, source:'Ar-Rahman', prompt:'Menurut dokumen, "الْعَصْفِ" bermaksud...', choices:['Akar pokok','Daun tanaman atau jerami','Cahaya matahari','Aroma kasturi'], answer:1, rewardExp:22, rewardGold:10, note:'Makna yang diberi ialah ورق الزرع / التبن.'},
      {id:'ar18', subject:'Tafsir', difficulty:3, source:'Ar-Rahman', prompt:'Kepada siapakah seruan "رَبِّكُمَا" dalam ayat "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ" ditujukan?', choices:['Orang beriman dan kafir','Langit dan bumi','Manusia dan jin','Nabi dan malaikat'], answer:2, rewardExp:26, rewardGold:12, note:'Dokumen menyebut الخطاب للثقلين الإنس والجن.'},
      {id:'ar19', subject:'Tafsir', difficulty:3, source:'Ar-Rahman', prompt:'"صَلْصَالٍ كَالْفَخَّارِ" merujuk kepada apa?', choices:['Tanah liat kering seperti tembikar','Besi panas','Air laut','Awan hitam'], answer:0, rewardExp:26, rewardGold:12, note:'Makna disebut طين يابس له صلصلة كالخزف.'},
      {id:'ar20', subject:'Tafsir', difficulty:3, source:'Ar-Rahman', prompt:'Dokumen menerangkan bahawa tiada pertentangan antara "صلصال" dengan "تراب" kerana...', choices:['Semua ayat itu mansukh','Ia merujuk peringkat berbeza penciptaan manusia','Ia merujuk bangsa berbeza','Ia hanya kiasan'], answer:1, rewardExp:26, rewardGold:12, note:'Syarah menyebut proses: turab, tin, hama',},
      {id:'an1', subject:'Sirah', difficulty:2, source:'An-Najm', prompt:'Apakah tema utama bab pertama Surah An-Najm dalam dokumen?', choices:['Kisah peperangan','Kebenaran wahyu dan kenabian','Hukum faraid','Sejarah kota Makkah'], answer:1, rewardExp:20, rewardGold:9, note:'Bab pertama dinamakan صدق الوحي.'},
      {id:'an2', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"هوى" dalam dokumen diberi makna...', choices:['Terbit','Tenggelam / terbenam','Berjalan','Membesar'], answer:1, rewardExp:18, rewardGold:8, note:'Maknanya غربت.'},
      {id:'an3', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'Apakah makna "مَا ضَلَّ"?', choices:['Tidak berpaling / tidak sesat','Tidak bercakap','Tidak melihat','Tidak menangis'], answer:0, rewardExp:18, rewardGold:8, note:'Dokumen memberi makna ما عدل.'},
      {id:'an4', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"غوى" bermaksud...', choices:['Mengikut kebatilan','Membaca kitab','Mendaki bukit','Membina rumah'], answer:0, rewardExp:18, rewardGold:8, note:'Maknanya اتباع الباطل.'},
      {id:'an5', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'Maksud "ذُو مِرَّةٍ" dalam dokumen ialah...', choices:['Pemilik harta','Mempunyai rupa yang elok','Sangat tua','Sangat kecil'], answer:1, rewardExp:18, rewardGold:8, note:'Dokumen menyebut ذو منظر حسن.'},
      {id:'an6', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"فاستوى" dalam senarai makna kata diterangkan sebagai...', choices:['Lemah','Lurus / tegak','Berpecah','Hilang'], answer:1, rewardExp:18, rewardGold:8, note:'Maknanya فاستقام.'},
      {id:'an7', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'Apakah maksud "الأفق الأعلى"?', choices:['Dasar laut','Ufuk tertinggi / tempat terbit matahari','Rumah besar','Taman hijau'], answer:1, rewardExp:18, rewardGold:8, note:'Dokumen mentafsirkan sebagai مطلع الشمس.'},
      {id:'an8', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"تدلى" diberi makna...', choices:['Semakin dekat','Semakin jauh','Semakin tinggi','Semakin berat'], answer:0, rewardExp:18, rewardGold:8, note:'Maknanya زاد في القرب.'},
      {id:'an9', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'Apakah makna "أفتمارونه"?', choices:['Adakah kamu memujinya','Adakah kamu mendebatinya','Adakah kamu menolongnya','Adakah kamu melupakannya'], answer:1, rewardExp:18, rewardGold:8, note:'Dokumen memberi makna أفتجادلونه.'},
      {id:'an10', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"ما زاغ" bermaksud...', choices:['Tidak menyimpang','Tidak tidur','Tidak takut','Tidak senyum'], answer:0, rewardExp:18, rewardGold:8, note:'Maknanya ما عدل.'},
      {id:'an11', subject:'Bahasa Arab', difficulty:1, source:'An-Najm', prompt:'"طغى" bermaksud...', choices:['Melampau','Bertasbih','Berdiam','Bersuci'], answer:0, rewardExp:18, rewardGold:8, note:'Maknanya جاوز.'},
      {id:'an12', subject:'Aqidah', difficulty:2, source:'An-Najm', prompt:'Bab kedua Surah An-Najm menekankan apa?', choices:['Kelemahan berhala dan hakikat syafaat','Kemenangan tentera Islam','Perjalanan hijrah','Hukum puasa'], answer:0, rewardExp:20, rewardGold:9, note:'Bab kedua bertajuk عدم فائدة الأصنام.'},
      {id:'an13', subject:'Bahasa Arab', difficulty:2, source:'An-Najm', prompt:'"ضيزى" diberi makna...', choices:['Adil','Zalim / jahat pembahagiannya','Pantas','Berkat'], answer:1, rewardExp:20, rewardGold:9, note:'Dokumen mentafsirkan جائرة.'},
      {id:'an14', subject:'Bahasa Arab', difficulty:2, source:'An-Najm', prompt:'Dalam bab kedua, "سلطان" bermaksud...', choices:['Kerajaan','Hujah atau bukti','Pedang','Kemenangan'], answer:1, rewardExp:20, rewardGold:9, note:'Maknanya حجة.'},
      {id:'an15', subject:'Bahasa Arab', difficulty:2, source:'An-Najm', prompt:'"الظن" dalam senarai makna kata diberi erti...', choices:['Ilmu pasti','Sangkaan','Keadilan','Taufik'], answer:1, rewardExp:20, rewardGold:9, note:'Dokumen menyebut توهم.'},
      {id:'an16', subject:'Bahasa Arab', difficulty:2, source:'An-Najm', prompt:'Apakah maksud "تَهْوَى"?', choices:['Disukai nafsu','Dipukul angin','Dibaca perlahan','Dipagar rapi'], answer:0, rewardExp:20, rewardGold:9, note:'Maknanya تشتهيه.'},
      {id:'an17', subject:'Hadis', difficulty:2, source:'An-Najm', prompt:'Menurut kata kunci bab pertama, wahyu dikaitkan dengan siapa?', choices:['Mikail','Israfil','Jibril','Malik'], answer:2, rewardExp:20, rewardGold:9, note:'Keyword bab pertama memuatkan جبريل.'},
      {id:'an18', subject:'Tafsir', difficulty:2, source:'An-Najm', prompt:'Apakah fokus bab ketiga menurut dokumen?', choices:['Orang musyrik menamakan malaikat sebagai anak perempuan Allah','Penciptaan manusia dari tanah','Hukum waris','Adab berjiran'], answer:0, rewardExp:20, rewardGold:9, note:'Bab ketiga dinamakan تسمية المشركين الملائكة بنات الله.'},
      {id:'math1', subject:'Matematik', difficulty:1, source:'Umum', prompt:'Jika anda mendapat 20 EXP setiap jawapan betul, berapa EXP untuk 3 jawapan betul?', choices:['40','50','60','80'], answer:2, rewardExp:16, rewardGold:7, note:'3 × 20 = 60.'},
      {id:'math2', subject:'Matematik', difficulty:1, source:'Umum', prompt:'HP anda 100. Jika diserang 25 damage, baki HP ialah...', choices:['85','75','65','50'], answer:1, rewardExp:16, rewardGold:7, note:'100 - 25 = 75.'},
      {id:'math3', subject:'Matematik', difficulty:1, source:'Umum', prompt:'Anda ada 50 emas. Beli 2 ramuan pada harga 10 emas setiap satu. Baki emas?', choices:['20','25','30','40'], answer:2, rewardExp:16, rewardGold:7, note:'50 - 20 = 30.'},
      {id:'science1', subject:'Sains', difficulty:1, source:'Umum', prompt:'Matahari dan bulan membantu manusia mengetahui...', choices:['Rasa makanan','Masa dan kiraan','Warna batu','Jenis logam'], answer:1, rewardExp:16, rewardGold:7, note:'Selari dengan tema hisab dan peredaran.'},
      {id:'science2', subject:'Sains', difficulty:1, source:'Umum', prompt:'Tumbuhan memerlukan apa untuk membesar?', choices:['Cahaya, air dan nutrien','Besi sahaja','Pasir sahaja','Asap sahaja'], answer:0, rewardExp:16, rewardGold:7, note:'Asas sains tumbuhan.'},
      {id:'nahu1', subject:'Nahu', difficulty:2, source:'Umum', prompt:'Dalam frasa Arab "الرحمنُ", tanda dhammah biasanya menunjukkan kata nama itu dalam keadaan...', choices:['Majrur','Mansub','Marfu\'','Majzum'], answer:2, rewardExp:20, rewardGold:9, note:'Dhammah lazimnya tanda marfu\'.'},
      {id:'nahu2', subject:'Nahu', difficulty:2, source:'Umum', prompt:'Perkataan "ولا" biasanya berfungsi sebagai...', choices:['Huruf larangan atau gabungan nafi','Isim mawsul','Fi\'il madhi','Haraf qasam'], answer:0, rewardExp:20, rewardGold:9, note:'Digunakan dalam larangan dan sambungan.'},
      {id:'arab1', subject:'Bahasa Arab', difficulty:1, source:'Umum', prompt:'Apakah maksud "علم" dalam konteks pembelajaran?', choices:['Ilmu','Rumah','Jalan','Api'], answer:0, rewardExp:16, rewardGold:7, note:'علم bermaksud ilmu/mengetahui mengikut konteks.'},
      {id:'arab2', subject:'Bahasa Arab', difficulty:1, source:'Umum', prompt:'Perkataan Arab untuk "kitab" ialah...', choices:['قلم','كتاب','باب','درس'], answer:1, rewardExp:16, rewardGold:7, note:'كتاب bermaksud buku/kitab.'},
      {id:'arab3', subject:'Bahasa Arab', difficulty:1, source:'Umum', prompt:'Apakah maksud "قسط" yang dekat dengan penggunaan dalam dokumen?', choices:['Adil','Cepat','Panjang','Haus'], answer:0, rewardExp:16, rewardGold:7, note:'قسط berkaitan keadilan.'},
      {id:'sirah1', subject:'Sirah', difficulty:2, source:'Umum', prompt:'Dalam tradisi Islam, wahyu diturunkan kepada nabi melalui malaikat...', choices:['Ridwan','Jibril','Munkar','Harut'], answer:1, rewardExp:20, rewardGold:9, note:'Jibril ialah penyampai wahyu.'},
      {id:'hadis1', subject:'Hadis', difficulty:2, source:'Umum', prompt:'Menuntut ilmu dalam Islam dianggap...', choices:['Perkara sia-sia','Amalan yang mulia','Hanya untuk pedagang','Dilarang bagi anak muda'], answer:1, rewardExp:20, rewardGold:9, note:'Tema umum pendidikan Islam.'},
      {id:'boss1', subject:'Boss', difficulty:3, source:'Ar-Rahman', prompt:'Untuk mengaktifkan Serangan Hikmah, apakah makna "سُلْطَانٍ" menurut dokumen Ar-Rahman?', choices:['Kekuatan / kuasa','Lautan','Bunga','Tidur'], answer:0, rewardExp:30, rewardGold:14, note:'Dokumen menyatakan بقوة / قهر / غلبة.'},
      {id:'boss2', subject:'Boss', difficulty:3, source:'Ar-Rahman', prompt:'"الثَّقَلَانِ" merujuk kepada siapa?', choices:['Langit dan bumi','Manusia dan jin','Matahari dan bulan','Laut dan darat'], answer:1, rewardExp:30, rewardGold:14, note:'Makna yang diberi ialah الإنس والجن.'},
      {id:'boss3', subject:'Boss', difficulty:3, source:'Ar-Rahman', prompt:'Dalam dokumen, "بَرْزَخٌ" bermaksud...', choices:['Taman','Penghalang','Hiasan','Kitab'], answer:1, rewardExp:30, rewardGold:14, note:'Makna yang diberi ialah حاجز.'},
      {id:'boss4', subject:'Boss', difficulty:3, source:'An-Najm', prompt:'"الهدى" dalam bab kedua An-Najm diterangkan sebagai...', choices:['Harta','Rasul dan kitab','Angin malam','Golongan bangsawan'], answer:1, rewardExp:30, rewardGold:14, note:'Dokumen menyebut الرسول والكتاب.'}
    ];

    questions[19].note = 'Syarah menyebut peringkat penciptaan yang berbeza, maka tiada pertentangan.';

    */

    // areas loaded from data/game-data.js
    /* const areas = [
      {id:'kampung', name:'Kampung Permulaan', subject:['Sirah','Matematik'], unlockLevel:1, color:'#96c26a', boss:null, questIds:['q1','q2']},
      {id:'library', name:'Perpustakaan Hikmah', subject:['Tafsir','Hadis'], unlockLevel:1, color:'#d8b26d', boss:null, questIds:['q3']},
      {id:'forest', name:'Hutan Pengetahuan', subject:['Sains','Sirah'], unlockLevel:2, color:'#7fb574', boss:'b1', questIds:['q4']},
      {id:'desert', name:'Gurun Bahasa Arab', subject:['Bahasa Arab'], unlockLevel:3, color:'#d0ad63', boss:'b2', questIds:['q5']},
      {id:'nahu', name:'Kota Nahu', subject:['Nahu'], unlockLevel:4, color:'#8ab0d5', boss:'b3', questIds:['q6']},
      {id:'tafsir', name:'Menara Tafsir', subject:['Tafsir'], unlockLevel:5, color:'#b391d2', boss:'b4', questIds:['q7']},
      {id:'palace', name:'Istana Kebijaksanaan', subject:['Campuran'], unlockLevel:6, color:'#d88b8b', boss:'b5', questIds:['q8']}
    ];

    */

    /* const quests = {
      q1:{id:'q1', area:'kampung', title:'Salam Pengembara Ilmu', description:'Bercakap dengan Pengembara Ilmu dan jawab 2 soalan asas.', objective:{type:'correctAnswers', count:2}, reward:{exp:40,gold:20,item:'Ramuan Kecil'}},
      q2:{id:'q2', area:'kampung', title:'Bekalan Permulaan', description:'Kumpul 80 emas dengan menyelesaikan tugasan ilmu.', objective:{type:'gold', count:80}, reward:{exp:35,gold:15,item:'Kitab Nota'}},
      q3:{id:'q3', area:'library', title:'Halaman Hilang Pertama', description:'Jawab 3 soalan tafsir di Perpustakaan Hikmah.', objective:{type:'subjectCorrect', subject:'Tafsir', count:3}, reward:{exp:60,gold:25,item:'Halaman Hikmah I'}},
      q4:{id:'q4', area:'forest', title:'Jejak Raja Kejahilan', description:'Kalahkan boss pertama di Hutan Pengetahuan.', objective:{type:'defeatBoss', count:1, bossId:'b1'}, reward:{exp:80,gold:35,item:'Kompas Ilmu'}},
      q5:{id:'q5', area:'desert', title:'Kosa Kata Pasir', description:'Jawab 5 soalan Bahasa Arab dengan betul.', objective:{type:'subjectCorrect', subject:'Bahasa Arab', count:5}, reward:{exp:90,gold:40,item:'Halaman Hikmah II'}},
      q6:{id:'q6', area:'nahu', title:'Benteng I\'rab', description:'Capai level 4 dan kuasai 3 soalan nahu.', objective:{type:'subjectCorrect', subject:'Nahu', count:3}, reward:{exp:100,gold:45,item:'Kunci Kota Nahu'}},
      q7:{id:'q7', area:'tafsir', title:'Menara Cahaya', description:'Menang dalam battle menentang Pengacau Tafsir.', objective:{type:'defeatBoss', count:1, bossId:'b4'}, reward:{exp:120,gold:50,item:'Halaman Hikmah III'}},
      q8:{id:'q8', area:'palace', title:'Kitab Hikmah Dipulihkan', description:'Kalahkan Penghapus Ilmu di Istana Kebijaksanaan.', objective:{type:'defeatBoss', count:1, bossId:'b5'}, reward:{exp:160,gold:90,item:'Kitab Hikmah'}},
    };

    */

    /* const bosses = {
      b1:{id:'b1', name:'Raja Kejahilan', hp:110, attack:16, exp:90, gold:35, icon:'👹', questionPool:['math1','science1','an2','ar1','ar3','boss2']},
      b2:{id:'b2', name:'Penyesat Nahu', hp:130, attack:20, exp:110, gold:40, icon:'🦂', questionPool:['nahu1','nahu2','an7','an8','arab2','boss4']},
      b3:{id:'b3', name:'Penggugat I\'rab', hp:145, attack:22, exp:120, gold:45, icon:'🛡️', questionPool:['nahu1','nahu2','arab1','arab3','an14','an15']},
      b4:{id:'b4', name:'Pengacau Tafsir', hp:160, attack:25, exp:140, gold:55, icon:'🔥', questionPool:['ar8','ar9','ar10','ar13','ar18','boss1','boss3']},
      b5:{id:'b5', name:'Penghapus Ilmu', hp:190, attack:28, exp:180, gold:80, icon:'🐉', questionPool:['ar19','ar20','an12','an17','an18','boss1','boss2','boss4']}
    };

    */

    /* const maps = {
      kampung:{
        name:'Kampung Permulaan', bg:['#98c66f','#7fb15d','#d4c784'], portals:[{x:12,y:6,to:'library'}], npcs:[
          {id:'npc_pengembara', name:'Pengembara Ilmu', x:3,y:3, color:'#f0c56e', dialog:['Setiap jawapan yang benar akan menambah kekuatanmu.','Ilmu ialah senjata utama dalam perjalanan ini.'], givesQuest:'q1', questionIds:['math1','math2','arab1']},
          {id:'npc_penjaga', name:'Penjaga Kampung', x:8,y:10, color:'#e2a87b', dialog:['Kumpulkan emas dan ramuan sebelum keluar dari kampung.','Pergi ke perpustakaan apabila kamu bersedia.'], givesQuest:'q2', questionIds:['math3','science2']},
        ], boss:null
      },
      library:{
        name:'Perpustakaan Hikmah', bg:['#d7b772','#c89f54','#8a6c44'], portals:[{x:1,y:6,to:'kampung'},{x:12,y:6,to:'forest'}], npcs:[
          {id:'npc_librarian', name:'Penjaga Perpustakaan', x:4,y:5, color:'#d7d089', dialog:['Setiap halaman yang hilang menyimpan cahaya ilmu.','Jawab soalan tafsir untuk menjejak halaman pertama.'], givesQuest:'q3', questionIds:['ar1','ar8','ar11','ar17']},
          {id:'npc_merchant', name:'Pedagang Kitab', x:9,y:3, color:'#9ec2d9', dialog:['Aku menjual ramuan dan nota, tetapi kamu perlu emas yang cukup.','Simpan ilmu dan simpan juga bekalan.'], shop:true, questionIds:['arab2','hadis1']}
        ], boss:null
      },
      forest:{
        name:'Hutan Pengetahuan', bg:['#71a861','#4a7a42','#b9d28c'], portals:[{x:1,y:6,to:'library'},{x:12,y:6,to:'desert'}], npcs:[
          {id:'npc_scholar', name:'Pengembara Ilmu Senior', x:3,y:9, color:'#f1d379', dialog:['Kejahilan bersembunyi di bawah akar hutan ini.','Sains dan tadabbur alam akan membantu kamu.'], givesQuest:'q4', questionIds:['science1','science2','sirah1']}
        ], boss:{id:'b1', x:10, y:4}
      },
      desert:{
        name:'Gurun Bahasa Arab', bg:['#d8b062','#c19347','#9f7738'], portals:[{x:1,y:6,to:'forest'},{x:12,y:6,to:'nahu'}], npcs:[
          {id:'npc_ustaz', name:'Ustaz Bahasa Arab', x:5,y:4, color:'#f6df8f', dialog:['Di gurun ini, setiap huruf membawa air kehidupan.','Kuasai kosa kata sebelum menghadapi Penyesat Nahu.'], givesQuest:'q5', questionIds:['an2','an3','an4','an5','an7','an9']}
        ], boss:{id:'b2', x:10, y:9}
      },
      nahu:{
        name:'Kota Nahu', bg:['#8ab0d5','#6f95be','#d7e5f0'], portals:[{x:1,y:6,to:'desert'},{x:12,y:6,to:'tafsir'}], npcs:[
          {id:'npc_nahu', name:'Guru Nahu', x:4,y:8, color:'#ffde94', dialog:['I\'rab yang tepat menjadikan makna lebih kukuh.','Kota ini hanya terbuka untuk penuntut yang teliti.'], givesQuest:'q6', questionIds:['nahu1','nahu2','arab3']}
        ], boss:{id:'b3', x:9, y:3}
      },
      tafsir:{
        name:'Menara Tafsir', bg:['#ac8fd0','#8b6db6','#d8c8ec'], portals:[{x:1,y:6,to:'nahu'},{x:12,y:6,to:'palace'}], npcs:[
          {id:'npc_tafsir', name:'Guru Tafsir', x:4,y:4, color:'#f3d674', dialog:['Setiap ayat mempunyai hikmah dan susunan yang penuh makna.','Bersedialah untuk menghadapi Pengacau Tafsir.'], givesQuest:'q7', questionIds:['ar9','ar10','ar13','ar18']}
        ], boss:{id:'b4', x:10, y:9}
      },
      palace:{
        name:'Istana Kebijaksanaan', bg:['#d69090','#b46060','#f0d2c0'], portals:[{x:1,y:6,to:'tafsir'}], npcs:[
          {id:'npc_principal', name:'Pengetua Akademi', x:5,y:6, color:'#ffe395', dialog:['Inilah ujian terakhir. Hanya ilmu yang sabar dapat memulihkan Kitab Hikmah.','Satukan semua yang telah kamu pelajari.'], givesQuest:'q8', questionIds:['boss1','boss2','boss4']}
        ], boss:{id:'b5', x:10, y:6}
      }
    };

*/

    const initialState = () => ({
      player:{name:'Pelajar Hikmah', title:'Pengumpul Halaman Kitab Hikmah', level:1, exp:0, expToNext:100, gold:50, hp:100, maxHp:100, streak:0, correctAnswers:0, answeredBySubject:{}, potions:2, inventory:['Pedang Kayu Ilmu','Ramuan Kecil','Peta Dunia'], unlockedAreas:['kampung','library'], defeatedBosses:[], pagesCollected:0},
      currentArea:'kampung',
      position:{x:2,y:6},
      activeQuests:['q1','q2'],
      completedQuests:[],
      discoveredNpcs:[],
      log:'Perjalanan bermula. Kumpulkan ilmu untuk mendapatkan semula halaman Kitab Hikmah.'
    });

    let state = loadSave() || initialState();
    let battleState = null;
    let lastQuestion = null;

    function loadSave(){
      try{const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null;}catch(e){return null;}
    }
    function saveGame(){
      try{localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); setLog('Permainan disimpan dalam localStorage.'); renderAll();}
      catch(e){setLog('Gagal menyimpan permainan. Browser ini mungkin menyekat simpanan.');}
    }
    function resetGame(){ state = initialState(); renderAll(); }

    function setTheme(mode){
      document.documentElement.setAttribute('data-theme', mode);
      document.getElementById('themeToggle').textContent = mode === 'dark' ? '☀' : '☾';
    }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function setLog(text){ state.log = text; document.getElementById('gameLog').textContent = text; }

    function getArea(){ return maps[state.currentArea]; }
    function isUnlocked(areaId){ return state.player.unlockedAreas.includes(areaId); }

    function renderAll(){ renderStats(); renderQuests(); renderInventory(); renderNPCs(); renderAreaPanels(); renderDialogue('Penjaga Kampung', state.log, []); drawMap(); updateTopbar(); }

    function renderStats(){
      const p = state.player;
      document.getElementById('playerName').textContent = p.name;
      document.getElementById('playerTitle').textContent = p.title;
      document.getElementById('statLevel').textContent = p.level;
      document.getElementById('statExp').textContent = `${p.exp} / ${p.expToNext}`;
      document.getElementById('statHp').textContent = `${p.hp} / ${p.maxHp}`;
      document.getElementById('statGold').textContent = p.gold;
      document.getElementById('expBar').style.width = `${Math.min(100, (p.exp / p.expToNext) * 100)}%`;
    }

    function renderQuests(){
      const wrap = document.getElementById('questList');
      wrap.innerHTML = '';
      state.activeQuests.forEach(id => {
        const q = quests[id];
        const progress = getQuestProgress(q);
        const done = isQuestComplete(q);
        const div = document.createElement('div');
        div.className = 'quest-item' + (done ? ' active' : '');
        div.innerHTML = `<strong>${q.title}</strong><div class="mini">${q.description}</div><div class="mini" style="margin-top:.4rem;">Progress: ${progress}</div>`;
        if(done){
          const btn = document.createElement('button');
          btn.className = 'menu-btn';
          btn.style.marginTop = '.75rem';
          btn.textContent = 'Tuntut Ganjaran';
          btn.onclick = () => completeQuest(q.id);
          div.appendChild(btn);
        }
        wrap.appendChild(div);
      });
      if(!state.activeQuests.length){ wrap.innerHTML = '<div class="mini">Tiada quest aktif. Teruskan menjelajah wilayah baharu.</div>'; }
    }

    function renderInventory(){
      const items = [
        ...state.player.inventory.map(item => ({name:item, desc:'Item penting dalam pengembaraan.'})),
        {name:`Ramuan x${state.player.potions}`, desc:'Memulihkan 35 HP ketika bertempur atau di peta.'},
        {name:`Halaman Hikmah ${state.player.pagesCollected}/3`, desc:'Kutip semua halaman untuk membuka istana akhir.'}
      ];
      const wrap = document.getElementById('inventoryList');
      wrap.innerHTML = items.map(item => `<div class="inventory-item"><strong>${item.name}</strong><div class="mini">${item.desc}</div></div>`).join('');
    }

    function renderNPCs(){
      const wrap = document.getElementById('npcList');
      wrap.innerHTML = state.discoveredNpcs.length
        ? state.discoveredNpcs.map(n => `<div class="npc-item"><strong>${n}</strong><div class="mini">Sudah ditemui.</div></div>`).join('')
        : '<div class="mini">Belum ada NPC ditemui.</div>';
    }

    function renderAreaPanels(){
      const subjectWrap = document.getElementById('subjectPills');
      const area = areas.find(a => a.id === state.currentArea);
      subjectWrap.innerHTML = area.subject.map(s => `<span class="pill">${s}</span>`).join('');
      document.getElementById('locationTitle').textContent = area.name;

      const areaList = document.getElementById('areaList');
      const fullAreaList = document.getElementById('fullAreaList');
      const html = areas.map(area => {
        const open = isUnlocked(area.id);
        const bossDone = !area.boss || state.player.defeatedBosses.includes(area.boss);
        return `<div class="area-card ${open ? '' : 'locked'}"><strong>${area.name}</strong><div class="mini">Subjek: ${area.subject.join(', ')}</div><div class="mini">Status: ${open ? (bossDone ? 'Dibuka' : 'Boss menanti') : 'Terkunci sehingga level ' + area.unlockLevel}</div></div>`;
      }).join('');
      areaList.innerHTML = html;
      fullAreaList.innerHTML = html;
    }

    function updateTopbar(){ document.getElementById('gameLog').textContent = state.log; }

    function renderDialogue(name, text, rewards=[]){
      document.getElementById('dialogName').textContent = name;
      document.getElementById('dialogText').textContent = text;
      document.getElementById('dialogRewards').innerHTML = rewards.map(r => `<span class="reward">${r}</span>`).join('');
    }

    function drawMap(){
      const area = getArea();
      ctx.clearRect(0,0,canvas.width,canvas.height);
      drawTiles(area);
      drawPortals(area.portals || []);
      drawNPCs(area.npcs || []);
      drawBoss(area.boss);
      drawPlayer();
      drawGrid();
    }

    function drawTiles(area){
      for(let y=0;y<MAP_SIZE;y++){
        for(let x=0;x<MAP_SIZE;x++){
          const c1 = area.bg[0], c2 = area.bg[1], c3 = area.bg[2] || area.bg[0];
          const color = y < 5 ? c1 : y < 9 ? c2 : c3;
          ctx.fillStyle = color;
          ctx.fillRect(x*TILE,y*TILE,TILE,TILE);
          ctx.fillStyle = 'rgba(255,255,255,0.05)';
          if((x+y)%2===0) ctx.fillRect(x*TILE,y*TILE,TILE,TILE);
        }
      }
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      for(let i=0;i<10;i++){
        ctx.beginPath();
        ctx.arc((i*61)%canvas.width, (i*89)%canvas.height, 8 + (i%4)*2, 0, Math.PI*2);
        ctx.fill();
      }
    }

    function drawGrid(){
      ctx.strokeStyle = 'rgba(32,24,18,0.12)';
      for(let i=0;i<=MAP_SIZE;i++){
        ctx.beginPath(); ctx.moveTo(i*TILE,0); ctx.lineTo(i*TILE,canvas.height); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,i*TILE); ctx.lineTo(canvas.width,i*TILE); ctx.stroke();
      }
    }

    function drawPlayer(){ drawEntity(state.position.x,state.position.y,'#1c8f74','⬢'); }
    function drawNPCs(npcs){ npcs.forEach(npc => drawEntity(npc.x,npc.y,npc.color || '#e8c16c','◉')); }
    function drawPortals(portals){ portals.forEach(portal => {ctx.fillStyle='#4fa8dd'; ctx.fillRect(portal.x*TILE+8,portal.y*TILE+8,TILE-16,TILE-16); ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.fillRect(portal.x*TILE+18,portal.y*TILE+18,TILE-36,TILE-36);}); }
    function drawBoss(bossData){ if(!bossData || state.player.defeatedBosses.includes(bossData.id)) return; drawEntity(bossData.x,bossData.y,'#c85e67','✦'); }

    function drawEntity(x,y,color,symbol){
      ctx.fillStyle=color; ctx.beginPath(); ctx.roundRect(x*TILE+6,y*TILE+6,TILE-12,TILE-12,10); ctx.fill();
      ctx.fillStyle='#fffdf7'; ctx.font='bold 20px Inter'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(symbol, x*TILE + TILE/2, y*TILE + TILE/2 + 1);
    }

    function move(dx,dy){
      const nx = Math.max(0, Math.min(MAP_SIZE-1, state.position.x + dx));
      const ny = Math.max(0, Math.min(MAP_SIZE-1, state.position.y + dy));
      state.position = {x:nx,y:ny};
      drawMap();
      inspectTile();
    }

    function inspectTile(){
      const area = getArea();
      const npc = (area.npcs || []).find(n => Math.abs(n.x-state.position.x)+Math.abs(n.y-state.position.y) <= 1);
      const portal = (area.portals || []).find(p => Math.abs(p.x-state.position.x)+Math.abs(p.y-state.position.y) <= 0);
      const boss = area.boss && !state.player.defeatedBosses.includes(area.boss.id) && Math.abs(area.boss.x-state.position.x)+Math.abs(area.boss.y-state.position.y) <= 1 ? area.boss : null;
      if(npc){ renderDialogue(npc.name, npc.dialog[0], npc.givesQuest ? ['Quest tersedia'] : []); }
      else if(portal){ renderDialogue('Portal Wilayah', `Portal ke ${maps[portal.to].name} sedia digunakan.`, ['Tekan E untuk masuk']); }
      else if(boss){ renderDialogue(bosses[boss.id].name, 'Aura kejahilan sangat kuat di sini. Tekan E untuk memulakan pertempuran.', ['Boss Battle']); }
    }

    function interact(){
      const area = getArea();
      const npc = (area.npcs || []).find(n => Math.abs(n.x-state.position.x)+Math.abs(n.y-state.position.y) <= 1);
      if(npc){ handleNpc(npc); return; }
      const portal = (area.portals || []).find(p => Math.abs(p.x-state.position.x)+Math.abs(p.y-state.position.y) <= 0);
      if(portal){ travelTo(portal.to); return; }
      const boss = area.boss && !state.player.defeatedBosses.includes(area.boss.id) && Math.abs(area.boss.x-state.position.x)+Math.abs(area.boss.y-state.position.y) <= 1 ? area.boss : null;
      if(boss){ startBattle(boss.id); return; }
      setLog('Tiada interaksi berdekatan. Dekati NPC, portal atau boss.');
    }

    function handleNpc(npc){
      if(!state.discoveredNpcs.includes(npc.name)) state.discoveredNpcs.push(npc.name);
      const rewards = [];
      if(npc.givesQuest && !state.activeQuests.includes(npc.givesQuest) && !state.completedQuests.includes(npc.givesQuest)){
        if(isUnlocked(quests[npc.givesQuest].area)){
          state.activeQuests.push(npc.givesQuest);
          rewards.push('Quest baharu diterima');
        }
      }
      renderDialogue(npc.name, npc.dialog[Math.floor(Math.random()*npc.dialog.length)], rewards);
      if(npc.shop){
        if(state.player.gold >= 15){ state.player.gold -= 15; state.player.potions += 1; rewards.push('Beli 1 Ramuan'); setLog(`${npc.name} menjual ramuan. Emas -15, ramuan +1.`); }
        else setLog(`${npc.name}: Emas kamu belum cukup untuk membeli ramuan.`);
      } else if(npc.questionIds?.length){
        const qid = npc.questionIds[Math.floor(Math.random()*npc.questionIds.length)];
        openQuiz(qid, false);
      }
      renderAll();
    }

    function travelTo(areaId){
      const targetArea = areas.find(a => a.id === areaId);
      if(!isUnlocked(areaId) && state.player.level < targetArea.unlockLevel){
        setLog(`Kawasan ini terkunci. Capai level ${targetArea.unlockLevel} untuk masuk.`); return;
      }
      if(!isUnlocked(areaId)) state.player.unlockedAreas.push(areaId);
      state.currentArea = areaId;
      state.position = {x:2, y:6};
      setLog(`Anda tiba di ${maps[areaId].name}.`);
      renderAll();
    }

    function getQuestionById(id){ return questions.find(q => q.id === id); }

    function randomQuestion(filterFn){
      const pool = questions.filter(filterFn);
      return pool[Math.floor(Math.random() * pool.length)] || questions[0];
    }

    function openQuiz(questionOrId, isSkillTest=false, onResolve=null){
      const q = typeof questionOrId === 'string' ? getQuestionById(questionOrId) : questionOrId;
      lastQuestion = {q, isSkillTest, onResolve};
      document.getElementById('quizTitle').textContent = isSkillTest ? 'Ujian Serangan Hikmah' : `Soalan ${q.subject}`;
      document.getElementById('quizContext').textContent = q.prompt;
      document.getElementById('quizReward').textContent = `Ganjaran: +${q.rewardExp} EXP, +${q.rewardGold} emas`;
      const grid = document.getElementById('answerGrid');
      grid.innerHTML = '';
      q.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<strong>${String.fromCharCode(65+index)}.</strong> ${choice}`;
        btn.onclick = () => answerQuestion(index);
        grid.appendChild(btn);
      });
      document.getElementById('quizModal').classList.add('show');
    }

    function answerQuestion(index){
      const {q, isSkillTest, onResolve} = lastQuestion;
      const correct = index === q.answer;
      if(correct){
        grantRewards(q.rewardExp, q.rewardGold);
        state.player.streak += 1;
        state.player.correctAnswers += 1;
        state.player.answeredBySubject[q.subject] = (state.player.answeredBySubject[q.subject] || 0) + 1;
        if(state.player.streak > 0 && state.player.streak % 3 === 0){
          grantRewards(15, 10);
          setLog(`Jawapan betul berturut-turut! Bonus kombo +15 EXP dan +10 emas.`);
        } else {
          setLog(`Betul! ${q.note}`);
        }
        if(q.subject === 'Boss' || q.id.startsWith('boss')) state.player.pagesCollected = Math.min(3, state.player.pagesCollected + 1);
      } else {
        state.player.streak = 0;
        setLog(`Jawapan kurang tepat. ${q.note}`);
      }
      updateQuestProgress();
      renderAll();
      document.getElementById('quizModal').classList.remove('show');
      if(typeof onResolve === 'function') onResolve(correct, q);
      lastQuestion = null;
    }

    function grantRewards(exp, gold){
      state.player.exp += exp;
      state.player.gold += gold;
      while(state.player.exp >= state.player.expToNext){
        state.player.exp -= state.player.expToNext;
        state.player.level += 1;
        state.player.expToNext = Math.round(state.player.expToNext * 1.2);
        state.player.maxHp += 18;
        state.player.hp = state.player.maxHp;
        setLog(`Tahniah! Anda naik ke level ${state.player.level}. HP penuh dipulihkan.`);
        areas.forEach(area => {
          if(state.player.level >= area.unlockLevel && !state.player.unlockedAreas.includes(area.id)) state.player.unlockedAreas.push(area.id);
        });
      }
    }

    function getQuestProgress(q){
      const p = state.player;
      switch(q.objective.type){
        case 'correctAnswers': return `${p.correctAnswers}/${q.objective.count}`;
        case 'gold': return `${p.gold}/${q.objective.count}`;
        case 'subjectCorrect': return `${p.answeredBySubject[q.objective.subject] || 0}/${q.objective.count}`;
        case 'defeatBoss': return `${p.defeatedBosses.includes(q.objective.bossId) ? 1 : 0}/${q.objective.count}`;
        default: return '0/0';
      }
    }

    function isQuestComplete(q){
      const p = state.player;
      switch(q.objective.type){
        case 'correctAnswers': return p.correctAnswers >= q.objective.count;
        case 'gold': return p.gold >= q.objective.count;
        case 'subjectCorrect': return (p.answeredBySubject[q.objective.subject] || 0) >= q.objective.count;
        case 'defeatBoss': return p.defeatedBosses.includes(q.objective.bossId);
        default: return false;
      }
    }

    function updateQuestProgress(){ renderQuests(); }

    function completeQuest(id){
      const q = quests[id];
      if(!isQuestComplete(q)) return;
      grantRewards(q.reward.exp, q.reward.gold);
      if(q.reward.item && !state.player.inventory.includes(q.reward.item)) state.player.inventory.push(q.reward.item);
      if((q.reward.item || '').includes('Halaman Hikmah')) state.player.pagesCollected = Math.min(3, state.player.pagesCollected + 1);
      state.activeQuests = state.activeQuests.filter(qid => qid !== id);
      state.completedQuests.push(id);
      setLog(`Quest selesai: ${q.title}. Anda menerima ${q.reward.exp} EXP dan ${q.reward.gold} emas.`);
      renderAll();
    }

    function healPlayer(){
      if(state.player.potions <= 0){ setLog('Ramuan sudah habis.'); return; }
      if(state.player.hp === state.player.maxHp){ setLog('HP anda sudah penuh.'); return; }
      state.player.potions -= 1;
      state.player.hp = Math.min(state.player.maxHp, state.player.hp + 35);
      setLog('Ramuan digunakan. HP dipulihkan 35 mata.');
      renderAll();
    }

    function startBattle(bossId){
      const boss = bosses[bossId];
      battleState = {
        bossId,
        playerHp: state.player.hp,
        enemyHp: boss.hp,
        enemyMaxHp: boss.hp,
        log:[`${boss.name} muncul dari kabus kejahilan!`]
      };
      document.getElementById('battleTitle').textContent = `Pertempuran: ${boss.name}`;
      document.getElementById('battleSubtitle').textContent = 'Jawab betul untuk melancarkan kemahiran khas dan teruskan bertahan.';
      document.getElementById('enemyBattleName').textContent = boss.name;
      document.querySelector('.sprite.enemy').textContent = boss.icon;
      document.getElementById('battleModal').classList.add('show');
      renderBattle();
    }

    function renderBattle(){
      if(!battleState) return;
      const boss = bosses[battleState.bossId];
      document.getElementById('playerBattleName').textContent = state.player.name;
      document.getElementById('playerBattleInfo').textContent = `HP ${battleState.playerHp} / ${state.player.maxHp}`;
      document.getElementById('enemyBattleInfo').textContent = `HP ${battleState.enemyHp} / ${battleState.enemyMaxHp}`;
      document.getElementById('playerHpFill').style.width = `${Math.max(0,(battleState.playerHp / state.player.maxHp)*100)}%`;
      document.getElementById('enemyHpFill').style.width = `${Math.max(0,(battleState.enemyHp / battleState.enemyMaxHp)*100)}%`;
      document.getElementById('battleLog').innerHTML = battleState.log.slice(-6).map(line => `<div>${line}</div>`).join('');
    }

    function battleAction(type){
      if(!battleState) return;
      const boss = bosses[battleState.bossId];
      if(type === 'attack'){
        const damage = 14 + state.player.level * 2;
        battleState.enemyHp = Math.max(0, battleState.enemyHp - damage);
        battleState.log.push(`Anda menyerang dan memberi ${damage} damage.`);
        afterPlayerTurn();
      } else if(type === 'skill'){
        const qid = boss.questionPool[Math.floor(Math.random() * boss.questionPool.length)];
        openQuiz(qid, true, (correct, q) => {
          if(!battleState) return;
          if(correct){
            const damage = 36 + state.player.level * 3;
            battleState.enemyHp = Math.max(0, battleState.enemyHp - damage);
            battleState.log.push(`Serangan Hikmah berjaya! ${q.subject} memberi ${damage} damage.`);
          } else {
            battleState.log.push('Serangan Hikmah gagal kerana jawapan kurang tepat.');
          }
          afterPlayerTurn();
        });
      } else if(type === 'item'){
        if(state.player.potions <= 0){ battleState.log.push('Tiada ramuan untuk digunakan.'); renderBattle(); return; }
        state.player.potions -= 1;
        battleState.playerHp = Math.min(state.player.maxHp, battleState.playerHp + 35);
        battleState.log.push('Anda menggunakan ramuan dan memulihkan 35 HP.');
        afterEnemyTurn(false);
      } else if(type === 'run'){
        battleState.log.push('Anda berundur dengan tergesa-gesa.');
        state.player.hp = Math.max(20, battleState.playerHp - 8);
        setLog('Anda berundur dari pertempuran dan kehilangan sedikit HP.');
        document.getElementById('battleModal').classList.remove('show');
        battleState = null;
        renderAll();
      }
    }

    function afterPlayerTurn(){
      if(battleState.enemyHp <= 0){ winBattle(); return; }
      afterEnemyTurn(true);
    }

    function afterEnemyTurn(attack=true){
      const boss = bosses[battleState.bossId];
      if(attack){
        const dmg = Math.max(8, boss.attack + Math.floor(Math.random()*6) - 2);
        battleState.playerHp = Math.max(0, battleState.playerHp - dmg);
        battleState.log.push(`${boss.name} membalas dan memberi ${dmg} damage.`);
      }
      if(battleState.playerHp <= 0){ loseBattle(); return; }
      renderBattle();
    }

    function winBattle(){
      const boss = bosses[battleState.bossId];
      battleState.log.push(`${boss.name} tewas. Cahaya ilmu kembali bersinar!`);
      renderBattle();
      grantRewards(boss.exp, boss.gold);
      state.player.hp = Math.min(state.player.maxHp, battleState.playerHp);
      if(!state.player.defeatedBosses.includes(boss.id)) state.player.defeatedBosses.push(boss.id);
      if(!state.player.inventory.includes(`Trofi ${boss.name}`)) state.player.inventory.push(`Trofi ${boss.name}`);
      if(state.player.pagesCollected < 3) state.player.pagesCollected += 1;
      setLog(`Boss ${boss.name} ditewaskan! Anda menerima ${boss.exp} EXP dan ${boss.gold} emas.`);
      updateQuestProgress();
      renderAll();
      setTimeout(() => { document.getElementById('battleModal').classList.remove('show'); battleState = null; }, 900);
    }

    function loseBattle(){
      battleState.log.push('Anda tewas, tetapi semangat menuntut ilmu masih hidup.');
      renderBattle();
      state.player.hp = Math.max(45, Math.floor(state.player.maxHp * 0.55));
      setLog('Anda tewas dan kembali berehat. HP dipulihkan sebahagian.');
      setTimeout(() => { document.getElementById('battleModal').classList.remove('show'); battleState = null; renderAll(); }, 900);
    }

    document.querySelectorAll('[data-move]').forEach(btn => btn.addEventListener('click', () => {
      const dir = btn.dataset.move;
      if(dir==='up') move(0,-1); if(dir==='down') move(0,1); if(dir==='left') move(-1,0); if(dir==='right') move(1,0);
    }));

    document.addEventListener('keydown', e => {
      if(document.getElementById('quizModal').classList.contains('show')) return;
      if(e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') move(0,-1);
      if(e.key === 'ArrowDown' || e.key.toLowerCase() === 's') move(0,1);
      if(e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') move(-1,0);
      if(e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') move(1,0);
      if(e.key.toLowerCase() === 'e') interact();
    });

    document.getElementById('interactBtn').onclick = interact;
    document.getElementById('healBtn').onclick = healPlayer;
    document.getElementById('themeToggle').onclick = () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    document.getElementById('saveBtn').onclick = saveGame;
    document.getElementById('newGameBtn').onclick = () => { resetGame(); document.getElementById('titleScreen').classList.add('hidden'); document.getElementById('appShell').classList.remove('hidden'); renderAll(); };
    document.getElementById('continueBtn').onclick = () => { state = loadSave() || initialState(); document.getElementById('titleScreen').classList.add('hidden'); document.getElementById('appShell').classList.remove('hidden'); renderAll(); };
    document.getElementById('closeQuizBtn').onclick = () => document.getElementById('quizModal').classList.remove('show');
    document.getElementById('openMapBtn').onclick = () => document.getElementById('mapModal').classList.add('show');
    document.getElementById('closeMapBtn').onclick = () => document.getElementById('mapModal').classList.remove('show');
    document.querySelectorAll('[data-battle]').forEach(btn => btn.addEventListener('click', () => battleAction(btn.dataset.battle)));

    renderAll();