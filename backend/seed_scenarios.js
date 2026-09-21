const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const scenariosData = [
  {
    "id": 1,
    "topic": "piyodalar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Quloqchin va kapyushon",
    "situation": "Yomg‘ir yog‘moqda. Sardor qulog‘iga shovqinni to‘suvchi naushnik taqib, boshiga kapyushon kiyib olgan. U tartibga solinmagan piyodalar o‘tish joyiga keldi va ikki tomonga qaramasdan yo‘lga chiqdi.",
    "question": "Sardor YHQ bo‘yicha qaysi qoidani buzdi?",
    "options": [
      {"id": "A", "text": "Qoida buzilmadi, zebrada piyoda mutlaq ustunlikka ega"},
      {"id": "B", "text": "Piyoda yo‘lga chiqishdan oldin yaqinlashayotgan transportlar masofasi va tezligini to‘g‘ri baholashi, o‘tish xavfsiz ekaniga ishonch hosil qilishi shart"},
      {"id": "C", "text": "Quloqchin faqat svetofor bor joyda taqiqlanadi"},
      {"id": "D", "text": "Yomg‘irda piyodalar harakati taqiqlanadi"}
    ],
    "correct_answer": "B",
    "explanation": "Zebrada ustunlik berilgani fizikani bekor qilmaydi. Qoidada: piyoda yo‘lga chiqishdan oldin harakat xavfsizligiga shaxsan ishonch hosil qilishi shart deb belgilangan."
  },
  {
    "id": 2,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Samokatdagi shoshqaloq",
    "situation": "Jasur elektr samokatda 20 km/soat tezlikda kelyapti. Zebraga yetgach, tezlikni pasaytirmasdan yo‘lning narigi tomoniga o‘tish uchun yo‘lga uchib chiqdi.",
    "question": "Jasur qanday qoidabuzarlik sodir etdi?",
    "options": [
      {"id": "A", "text": "Samokat chirog‘ini yoqmagan"},
      {"id": "B", "text": "Piyodalar o‘tish joyidan faqat piyoda yurib o‘tish shart: samokat yoki velosipeddan tushib, uni qo‘lda yetaklash kerak"},
      {"id": "C", "text": "Qo‘ng‘iroq chalmasdan yo‘lga chiqqan"},
      {"id": "D", "text": "Samokatda faqat orqaga qarab o‘tish kerak"}
    ],
    "correct_answer": "B",
    "explanation": "Piyodalar o'tish joyida tezlik bilan harakatlanuvchi moslamalarda o'tish qat'iyan man etiladi. Transportdan tushib, piyoda sifatida yetaklab o'tilishi shart."
  },
  {
    "id": 3,
    "topic": "piyodalar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Tirbandlik va yashirin xavf",
    "situation": "Ikki qatorli yo‘lda o‘ng qatorda katta yuk mashinasi to‘xtab turibdi. Piyoda zebradan tashqarida uning oldidan kesib o‘tib, chap qatorga chiqmoqchi.",
    "question": "Bu vaziyatdagi eng katta xavf nimada?",
    "options": [
      {"id": "A", "text": "Katta mashina to‘sib turgani sababli chap qatordagi haydovchi piyodani, piyoda esa kelayotgan mashinani ko‘ra olmaydi"},
      {"id": "B", "text": "Piyoda yo‘l qoplamasini ifloslantiradi"},
      {"id": "C", "text": "Yuk mashinasi orqaga harakatlanishi mumkin"},
      {"id": "D", "text": "Tirbandlikda piyodalar yurishi qat’iyan taqiqlanadi"}
    ],
    "correct_answer": "A",
    "explanation": "To'xtab turgan transport ko'rish maydonini to'sadi (ko'r zona hosil qiladi), natijada piyoda ham, parallel qatordagi haydovchi ham bir-birini kech ko'radi."
  },
  {
    "id": 4,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Qorong‘i tunda qora kiyim",
    "situation": "Shahar tashqarisidagi yoritilmagan yo‘lda piyoda boshdan-oyoq qora kiyingan holda ketmoqda. Yaqinni yorituvchi chiroqda haydovchi uni 25 metrdan ko‘radi, to‘xtash masofasi esa 45 metr.",
    "question": "Piyoda xavfsizlikni ta’minlash uchun nima qilishi shart?",
    "options": [
      {"id": "A", "text": "Faqat tez yugurishi kerak"},
      {"id": "B", "text": "Ustida nur qaytaruvchi elementlar bo‘lishi yoki chiroq yoqib yurishi kerak"},
      {"id": "C", "text": "Yo‘lning o‘rtasidagi ajratuvchi chiziq ustidan yurishi kerak"},
      {"id": "D", "text": "Mashina ko‘ringanda yerga yotib olishi kerak"}
    ],
    "correct_answer": "B",
    "explanation": "Yoritilmagan yo'llarda va qorong'i vaqtda piyodalar nur qaytargich yoki yorug'lik manbalaridan foydalanishi ularni uzoq masofadan ko'rinishini ta'minlaydi."
  },
  {
    "id": 5,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Qaysi tomondan yurish kerak?",
    "situation": "Yo‘l yoqasi bor, lekin trotuar yo‘q. Sherzod mashinalar harakati bilan bir xil yo‘nalishda (orqasini qilib), Otabek esa transport oqimiga yuzma-yuz (qarama-qarshi) bormoqda.",
    "question": "Kim to‘g‘ri harakatlanmoqda?",
    "options": [
      {"id": "A", "text": "Sherzod, chunki mashinalarga qaramaslik xotirjamlik beradi"},
      {"id": "B", "text": "Otabek, chunki piyodalar yo‘l chetida transport harakatiga qarama-qarshi yurishi shart"},
      {"id": "C", "text": "Har ikkisi ham qoidani buzmoqda"},
      {"id": "D", "text": "Ikkisi ham to‘g‘ri, farqi yo‘q"}
    ],
    "correct_answer": "B",
    "explanation": "Piyodalar yo'l yoqasida harakatlanganda kelayotgan xavfni ko'rib qochishga ulgurishi uchun transport oqimiga qarama-qarshi yurishi shart."
  },
  {
    "id": 6,
    "topic": "piyodalar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Favqulodda xizmat mashinasi",
    "situation": "Zebradan o‘tayotganingizda sirena va ko‘k-qizil mayoqchasini yoqqan 'Tez yordam' yaqinlashib keldi. Siz yo‘lning o‘rtasidasiz.",
    "question": "To‘g‘ri harakat qaysi?",
    "options": [
      {"id": "A", "text": "O‘tish joyida ustunlikka ega ekaningizni ko‘rsatib, harakatni davom ettirish"},
      {"id": "B", "text": "Zudlik bilan yo‘lni bo‘shatish, xavfsiz joyga o‘tish yoki to‘xtab transportni o‘tkazib yuborish"},
      {"id": "C", "text": "Yo‘l o‘rtasida qotib turish"},
      {"id": "D", "text": "Signal berib mashinaga e’tiroz bildirish"}
    ],
    "correct_answer": "B",
    "explanation": "Ko'k yoki ko'k-qizil mayoqcha va maxsus ovozli signalini yoqqan transport vositalariga hatto zebrada bo'lgan piyodalar ham zudlik bilan yo'l berishi shart."
  },
  {
    "id": 7,
    "topic": "piyodalar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "To‘xtab turgan avtobus",
    "situation": "Bekatda turgan avtobusdan tushdingiz. Yaqin atrofda zebra yo‘q. Yo‘lning narigi tomoniga o‘tmoqchisiz.",
    "question": "Eng xavfsiz yo‘l tutish qoidasi qaysi?",
    "options": [
      {"id": "A", "text": "Avtobusning oldidan yugurib o‘tish"},
      {"id": "B", "text": "Avtobusning orqasidan aylanib o‘tish"},
      {"id": "C", "text": "Avtobus bekatdan jo‘nab ketgach, yo‘l ikki tomondan aniq ko‘ringanda o‘tish"},
      {"id": "D", "text": "Avtobus tagidan emaklab o‘tish"}
    ],
    "correct_answer": "C",
    "explanation": "Avtobus ketgach ko'rish doirasi ochiladi va har ikki yo'nalishdagi transport vositalarini bemalol baholab o'tish imkoni tug'iladi."
  },
  {
    "id": 8,
    "topic": "piyodalar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Oq hassa ko‘targan piyoda",
    "situation": "Chorrahada zebra yo‘q, biroq bir kishi ko‘tarilgan oq hassa bilan qatnov qismiga qadam qo‘ydi.",
    "question": "Haydovchilar nima qilishi shart?",
    "options": [
      {"id": "A", "text": "Ko‘zi ojiz piyodaga barcha joylarda to‘xtab yo‘l berish shart"},
      {"id": "B", "text": "Signal chalib, tartibni buzayotganini bildirish"},
      {"id": "C", "text": "Faqat zebra bor joyda yo‘l berish"},
      {"id": "D", "text": "Tezlikni oshirib o‘tib ketish"}
    ],
    "correct_answer": "A",
    "explanation": "Oq hassa bilan ishora berayotgan ko'zi ojiz shaxslarni har qanday joyda (hatto o'tish joylaridan tashqarida ham) o'tkazib yuborish haydovchining qat'iy burchidir."
  },
  {
    "id": 9,
    "topic": "piyodalar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Yashil chiroq miltillay boshladi",
    "situation": "6 qatorli yo‘lda svetoforning piyodalar uchun yashil chirog‘i miltillashni boshladi. Piyoda hali yo‘lga chiqmagan.",
    "question": "To‘g‘ri harakat:",
    "options": [
      {"id": "A", "text": "Katta tezlikda narigi tomonga yugurish"},
      {"id": "B", "text": "Yo‘lga chiqmasdan, keyingi ruxsat beruvchi signalni kutish"},
      {"id": "C", "text": "Qatnov qismiga chiqib, o‘rtada to‘xtash"},
      {"id": "D", "text": "Mashinalarga to‘xtash ishorasini qilib o‘tish"}
    ],
    "correct_answer": "B",
    "explanation": "Yashil miltillashi uning vaqti tugayotgani va tezda taqiqlovchi signal yonishini bildiradi; keng yo'lga ulgurmay o'rtada qolib ketish xavfi bor."
  },
  {
    "id": 10,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "O‘rtada qolib ketish",
    "situation": "Keng shohko‘chada o‘tish vaqtida qizil chiroq yonib qoldi. Piyoda yo‘l o‘rtasidagi xavfsizlik orolchasiga yetib ulgurdi.",
    "question": "U nima qilishi kerak?",
    "options": [
      {"id": "A", "text": "Tavakkal qilib yugurib o‘tib ketish"},
      {"id": "B", "text": "Xavfsizlik orolchasida (yoki ajratuvchi chiziqda) qimirlamay yashil chiroqni kutish"},
      {"id": "C", "text": "Qaytadan orqaga yugurish"},
      {"id": "D", "text": "Birinchi kelgan mashinani to‘xtatish"}
    ],
    "correct_answer": "B",
    "explanation": "Yo'lni kesib o'tishga ulgurmagan piyodalar xavfsizlik orolchasida yoki qarama-qarshi yo'nalishlarni ajratuvchi chiziqda to'xtab turishi kerak."
  },
  {
    "id": 11,
    "topic": "piyodalar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Telefon va yo‘l",
    "situation": "Piyoda qo‘lidagi telefonda video ko‘rib, darchaga tikilgancha piyodalar o‘tish joyiga chiqdi.",
    "question": "Qoidaga muvofiq piyodaning xatti-harakati:",
    "options": [
      {"id": "A", "text": "Ruxsat etilgan, diqqatni jamlash shart emas"},
      {"id": "B", "text": "Taqiqlangan, yo‘ldan o‘tishda diqqatni chalg‘ituvchi vositalardan foydalanish mumkin emas"},
      {"id": "C", "text": "Faqat telefonda gaplashish taqiqlangan, video ko‘rish mumkin"},
      {"id": "D", "text": "Agar tez yursa ruxsat etiladi"}
    ],
    "correct_answer": "B",
    "explanation": "YHQ bo'yicha qatnov qismini kesib o'tishda piyodalarning telefon, gadjetlar va quloqchinlardan foydalanib diqqatni chalg'itishi taqiqlangan."
  },
  {
    "id": 12,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Bolalar bilan yo‘ldan o‘tish",
    "situation": "Yosh bola bilan yo‘ldan o‘tayotgan katta yoshli kishi harakatlanmoqda.",
    "question": "YHQ bo‘yicha kattalarning burchi qanday?",
    "options": [
      {"id": "A", "text": "Bolaning kiyimiga tayanib yurishi mumkin"},
      {"id": "B", "text": "Bolani qo‘lidan mahkam ushlab o‘tishi shart"},
      {"id": "C", "text": "Bolaga erkin yugurishiga ruxsat berishi kerak"},
      {"id": "D", "text": "Bolani orqada qoldirishi mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Kattalar yosh bolalarni qatnov qismidan olib o'tishda ularni qo'lidan mahkam ushlab harakatlanishi shart."
  },
  {
    "id": 13,
    "topic": "piyodalar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "O‘tish joyi bo‘lmagan yo‘l",
    "situation": "Ko‘rish doirasida piyodalar o‘tish joyi ham, chorraha ham yo‘q. Ajratuvchi polosasi va to‘sig‘i bo‘lmagan yo‘ldan o‘tish kerak.",
    "question": "Bunday yo‘ldan qanday tartibda o‘tiladi?",
    "options": [
      {"id": "A", "text": "Istalgan burchak ostida diagonal o‘tish"},
      {"id": "B", "text": "Yo‘l qatnov qismiga nisbatan to‘g‘ri burchak ostida (eng qisqa yo‘l bilan) ikki tomonni tekshirib o‘tish"},
      {"id": "C", "text": "Faqat yugurib o‘tish"},
      {"id": "D", "text": "Bunday yo‘ldan o‘tish mutlaqo taqiqlanadi"}
    ],
    "correct_answer": "B",
    "explanation": "O'tish joyi bo'lmaganda yo'lning qatnov qismiga to'g'ri burchak ostida, yo'l yaxshi ko'rinadigan joydan ikki tomonni tekshirib o'tishga ruxsat beriladi."
  },
  {
    "id": 14,
    "topic": "piyodalar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Tramvay yo‘li",
    "situation": "Yo‘l qatnov qismi bilan bir sathda joylashgan tramvay yo‘lidan piyoda o‘tmoqda. Tramvay yaqinlashyapti.",
    "question": "Kim ustunlikka ega?",
    "options": [
      {"id": "A", "text": "Piyoda"},
      {"id": "B", "text": "Tramvay"},
      {"id": "C", "text": "Kim birinchi signal bersa, o‘sha"},
      {"id": "D", "text": "Har doim yengil avtomobillar"}
    ],
    "correct_answer": "B",
    "explanation": "Maxsus tartibga solinmagan holatlarda tramvay yo'lida relsli transport har doim ustunlikka ega hisoblanadi."
  },
  {
    "id": 15,
    "topic": "piyodalar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Mashinalar orasi bilan o‘tish",
    "situation": "Qatnov qismida to‘xtab turgan mashinalar orasidan yo‘lga chiqmoqchi bo‘lgan piyoda harakatlanmoqda.",
    "question": "Piyoda nima qilishi shart?",
    "options": [
      {"id": "A", "text": "To‘xtab turgan mashina orqasidan birdan chiqishi kerak"},
      {"id": "B", "text": "Mashinalar orasidan sekin chiqib, boshqa qatorda harakat yo‘qligiga to‘liq ishonch hosil qilgandan so‘nggina yo‘lni davom ettirishi kerak"},
      {"id": "C", "text": "Faqat sakrab o‘tishi kerak"},
      {"id": "D", "text": "Qo‘llarini ko‘tarib yugurishi kerak"}
    ],
    "correct_answer": "B",
    "explanation": "To'siqlar ortidan ehtiyotkorlik bilan mo'ralab, ko'rish cheklangan hududda yaqinlashayotgan transport yo'qligini tekshirish shart."
  },
  {
    "id": 16,
    "topic": "piyodalar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Temir yo‘l kesishmasi",
    "situation": "Shlagbaum tushirilgan, lekin poyezd ko‘rinmayapti. Piyoda shlagbaum ostidan o‘tib ketsa bo‘ladimi?",
    "question": "Qoidaga muvofiq javob:",
    "options": [
      {"id": "A", "text": "Poyezd ko‘rinmasa o‘tish mumkin"},
      {"id": "B", "text": "Qat’iyan man etiladi"},
      {"id": "C", "text": "Kun yorug‘ida ruxsat etiladi"},
      {"id": "D", "text": "Faqat yugurib o‘tish mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Shlagbaum yopiq yoki taqiqlovchi signal ishlab turganda temir yo'l kesishmasiga chiqish qat'iyan taqiqlanadi."
  },
  {
    "id": 17,
    "topic": "piyodalar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Qorli va muzlama yo‘l",
    "situation": "Yo‘l muzlagan. Zebrada mashina 40 km/soat tezlikda yaqinlashmoqda. Piyoda o‘z ustunligiga tayanib darhol yo‘lga qadam qo‘ydi.",
    "question": "Xato qayerda?",
    "options": [
      {"id": "A", "text": "Muzlamada tormoz masofasi bir necha barobar ortadi; mashina darhol to‘xtay olmasligini inobatga olmaslik xavfli xatodir"},
      {"id": "B", "text": "Xato yo‘q, muzlama bo‘lsa ham haydovchi aybdor bo‘ladi"},
      {"id": "C", "text": "Muzlamada piyodalar yurishi man etilgan"},
      {"id": "D", "text": "Piyoda tezroq sirpanib o‘tishi kerak edi"}
    ],
    "correct_answer": "A",
    "explanation": "Muzlama sharoitida avtomobilning sirpanish va tormoz masofasi keskin ortadi. Piyoda buni hisobga olib, mashina to'xtashiga ishonch hosil qilishi kerak."
  },
  {
    "id": 18,
    "topic": "piyodalar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Tartibga soluvchi (DAN xodimi) ishorasi",
    "situation": "Svetoforda qizil yonib turibdi, biroq tartibga soluvchi piyodaga yo‘lni kesib o‘tishga ishora qildi.",
    "question": "Piyoda nimaga amal qiladi?",
    "options": [
      {"id": "A", "text": "Svetoforning qizil chirog‘iga"},
      {"id": "B", "text": "Tartibga soluvchining ishorasiga"},
      {"id": "C", "text": "Ikkalasiga ham amal qilmay kutadi"},
      {"id": "D", "text": "Haydovchilarning harakatiga"}
    ],
    "correct_answer": "B",
    "explanation": "Tartibga soluvchining ishoralari svetofor signallari va yo'l belgilaridan ustun turadi."
  },
  {
    "id": 19,
    "topic": "piyodalar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Bolalar guruhining harakati",
    "situation": "Bolalar guruhini yo‘l cheti yoki piyodalar yo‘lkasidan olib ketilmoqda.",
    "question": "Bolalar guruhi qanday tartibda harakatlanishi shart?",
    "options": [
      {"id": "A", "text": "Faqat tungi vaqtda harakatlanish kerak"},
      {"id": "B", "text": "Faqat kattalar kuzatuvida, qizil bayroqchalar bilan va faqat kunduzi harakatlanishga ruxsat beriladi"},
      {"id": "C", "text": "Yo‘l qatnov qismi bo‘ylab 4 qator bo‘lib yurish kerak"},
      {"id": "D", "text": "Qoidada hech qanday cheklov yo‘q"}
    ],
    "correct_answer": "B",
    "explanation": "Bolalar guruhlari faqat yo'lka va yo'l yoqalarida, faqat kattalar hamrohligida va kunduzi qizil bayroqchalar bilan olib yurilishi shart."
  },
  {
    "id": 20,
    "topic": "piyodalar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Yashirin ko‘rinish hududi",
    "situation": "Burilish burchagida qurilish to‘sig‘i o‘rnatilgan bo‘lib, ko‘rish maydoni to‘silgan. Piyoda yo‘lga chiqmoqchi.",
    "question": "To‘g‘ri harakat:",
    "options": [
      {"id": "A", "text": "Boshini sekin chiqarib, xavfsizlikni to‘liq ko‘rgandan keyin qadam bosish"},
      {"id": "B", "text": "Mashinalar to‘xtaydi degan umidda to‘g‘ri yurib ketish"},
      {"id": "C", "text": "Tez yugurib o‘tish"},
      {"id": "D", "text": "Qo‘shiq aytib o‘tish"}
    ],
    "correct_answer": "A",
    "explanation": "Ko'rish maydoni to'silgan joylarda shoshilmasdan vaziyatni to'liq baholab, so'ng harakatlanish xavfsizlikning oltin qoidasidir."
  },
  {
    "id": 21,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Ko‘rinmaydigan piyoda",
    "situation": "1-qatordagi mashina zebraga yetib to‘xtadi. 2-qatorda kelayotgan haydovchi piyodani ko‘rmayapti.",
    "question": "2-qatordagi haydovchi nima qilishi shart?",
    "options": [
      {"id": "A", "text": "Tezlikni oshirib o‘tib ketish"},
      {"id": "B", "text": "Tezlikni pasaytirishi yoki to‘xtashi, o‘tish joyida piyoda yo‘qligiga ishonch hosil qilgach harakatlanishi shart"},
      {"id": "C", "text": "Signal berib o‘tish"},
      {"id": "D", "text": "1-qatordagi mashinani aylanib o‘tib ketish"}
    ],
    "correct_answer": "B",
    "explanation": "Qo'shni qatordagi transport piyodalar o'tish joyi oldida sekinlashsa yoki to'xtasa, boshqa qatordagi haydovchi ham to'xtashi shart."
  },
  {
    "id": 22,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Qatorni almashtirish va 'ko‘r zona'",
    "situation": "Haydovchi o‘ng tomonga qator almashtirmoqchi. Ko‘zguga qaradi — yo‘l bo‘sh. Burilish paytida o‘ng tomondan parallel kelayotgan mashina bilan to‘qnashuv yuz berdi.",
    "question": "Haydovchi qaysi xatoga yo‘l qo‘ydi?",
    "options": [
      {"id": "A", "text": "Burilish chirog‘ini yoqmagan"},
      {"id": "B", "text": "Ko‘zgu aks ettirmaydigan 'ko‘r zona'ni boshini biroz burib tekshirmagan"},
      {"id": "C", "text": "Tezlikni kamaytirmagan"},
      {"id": "D", "text": "Oyna toza emas edi"}
    ],
    "correct_answer": "B",
    "explanation": "Ko'zgu qamrab ololmaydigan ko'r zonalarni manyovrdan oldin boshni biroz burib tekshirish to'qnashuvlarning oldini oladi."
  },
  {
    "id": 23,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Distansiya (oraliq masofa)",
    "situation": "Yomg‘irli ob-havoda 60 km/soat tezlikda ketayotgan haydovchi oldidagi avtomobil bilan quruq yo‘ldagidek bir xil (15 metr) masofani saqlab bormoqda.",
    "question": "Bu nima uchun xato?",
    "options": [
      {"id": "A", "text": "Yomg‘irda tormoz yo‘li uzayadi, oraliq masofani kamida 2 barobar oshirish kerak"},
      {"id": "B", "text": "Yomg‘irda oldingi mashinaga yaqinroq yurish kerak"},
      {"id": "C", "text": "Oraliq masofa faqat yuk mashinalari uchun muhim"},
      {"id": "D", "text": "60 km/soatda oraliq masofaning ahamiyati yo‘q"}
    ],
    "correct_answer": "A",
    "explanation": "Ho'l yo'lda sirpanish koeffitsiyenti kamaygani sababli tormoz yo'li cho'ziladi, shuning uchun masofa oshirilishi lozim."
  },
  {
    "id": 24,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Kutilmagan tormozlanish",
    "situation": "Oldindagi mashina to‘satdan favqulodda tormoz berdi. Orqadagi haydovchi unga urildi.",
    "question": "YHQ bo‘yicha kim aybdor deb topiladi?",
    "options": [
      {"id": "A", "text": "Oldinda keskin to‘xtagan haydovchi"},
      {"id": "B", "text": "Xavfsiz oraliq masofani (distansiyani) ta’minlamagan orqadagi haydovchi"},
      {"id": "C", "text": "Yo‘l qurilishi tashkiloti"},
      {"id": "D", "text": "Ikkala haydovchi ham aybsiz"}
    ],
    "correct_answer": "B",
    "explanation": "Har bir haydovchi oldindagi transport keskin to'xtaganda ham to'qnashuvga yo'l qo'ymaydigan oraliq masofani saqlashi shart."
  },
  {
    "id": 25,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "O‘ngga burilishda velosipedchi",
    "situation": "Haydovchi chorrahada o‘ngga burilmoqchi. O‘ng tomonidagi veloyo‘lkadan to‘g‘riga velosipedchi kelyapti.",
    "question": "Kim kimga yo‘l berishi kerak?",
    "options": [
      {"id": "A", "text": "Velosipedchi haydovchiga"},
      {"id": "B", "text": "Haydovchi yo‘lni kesib o‘tayotgan velosipedchiga yo‘l berishi shart"},
      {"id": "C", "text": "Qaysi biri birinchi signal bersa, o‘sha o‘tadi"},
      {"id": "D", "text": "Katta transport har doim ustun"}
    ],
    "correct_answer": "B",
    "explanation": "Burilayotgan har qanday haydovchi o'zi kesib o'tayotgan yo'l qismidagi piyoda va velosipedchilarga yo'l berishi shart."
  },
  {
    "id": 26,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Qizil chiroq va o‘ngga yashil strelka",
    "situation": "Asosiy svetofor qizil, lekin o‘ngga burilishga ruxsat beruvchi qo‘shimcha yashil strelka yonib turibdi. Siz o‘ngga burilmoqchisiz.",
    "question": "Sizning harakatingiz qanday bo‘lishi kerak?",
    "options": [
      {"id": "A", "text": "To‘xtovsiz, hammadan ustun bo‘lib burilaman"},
      {"id": "B", "text": "Harakatning boshqa yo‘nalishlaridan kelayotgan transportlar va yo‘lni kesib o‘tayotgan piyodalarga yo‘l berib, keyin burilaman"},
      {"id": "C", "text": "Qo‘shimcha strelka yonganda piyodalar yo‘ldan qochishi kerak"},
      {"id": "D", "text": "Asosiy chiroq yashil bo‘lishini kutib turaman"}
    ],
    "correct_answer": "B",
    "explanation": "Qo'shimcha seksiyaning yashil signali asosiy qizil bilan yonganda faqat boshqa yo'nalishdagi barcha transport va piyodalarga yo'l berilgach burilishga ruxsat etiladi."
  },
  {
    "id": 27,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Katta mashinaning orqasidan ergashish xatosi",
    "situation": "Oldingizda katta avtobus ketyapti. U svetoforning yashil chirog‘ida chorrahaga kirdi. Siz unga juda yaqin ergashib kirdingiz, lekin u o‘tib ketgach, siz kirmasingizdanoq qizil yondi va chorrahada qolib ketdingiz.",
    "question": "Asosiy xato nimada?",
    "options": [
      {"id": "A", "text": "Avtobus sekin yurgani uchun"},
      {"id": "B", "text": "Oldindagi katta transport ortidan svetofor signallarini va vaziyatni to‘liq ko‘rmay, ko‘r-ko‘rona kirib borganingizda"},
      {"id": "C", "text": "Avtobusga signal bermaganingizda"},
      {"id": "D", "text": "Tezlikni 100 km/soatga oshirmaganingizda"}
    ],
    "correct_answer": "B",
    "explanation": "Katta transport vositalari orqasida oraliq masofani shunday saqlash kerakki, svetofor signallari va yo'l harakati to'liq ko'rinib tursin."
  },
  {
    "id": 28,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Aylanma harakat (Krug) qoidasi",
    "situation": "Maxsus belgilar ('Yo‘l bering' yoki 'To‘xtamasdan harakatlanish taqiqlangan') bo‘lmagan teng ahamiyatli aylanma harakat chorrahasiga kirdingiz.",
    "question": "Kim ustunlikka ega?",
    "options": [
      {"id": "A", "text": "Har doim krug ichidagilar"},
      {"id": "B", "text": "O‘ng qo‘l qoidasiga ko‘ra aylanaga kirib kelayotgan haydovchi (agar belgilar bilan boshqacha tartib belgilanmagan bo‘lsa)"},
      {"id": "C", "text": "Tezroq kirib olgan haydovchi"},
      {"id": "D", "text": "Chap tomondan kelayotgan haydovchi"}
    ],
    "correct_answer": "B",
    "explanation": "Agar aylanma chorraha oldida ustunlik belgilari (2.4 yoki 2.5) o'rnatilmagan bo'lsa, umumiy o'ng qo'l qoidasi amal qiladi."
  },
  {
    "id": 29,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Qatorlar orasidagi 'quvib o‘tish' (Obgon)",
    "situation": "Ikki tomonlama, har yo‘nalishda bir qatorli yo‘l. Oldinda traktor sekin ketyapti. Qarama-qarshi yo‘nalishga chiqish chizig‘i — yo‘lning o‘rtasida uzluksiz oq chiziq (1.1).",
    "question": "Traktorni quvib o‘tish mumkinmi?",
    "options": [
      {"id": "A", "text": "Ha, traktor sekin ketayotgan bo‘lsa o‘tib ketsa bo‘ladi"},
      {"id": "B", "text": "Yo‘q, uzluksiz chiziqni bosib qarama-qarshi yo‘nalishga chiqish qat’iyan man etiladi"},
      {"id": "C", "text": "Faqat kunduz kuni ruxsat beriladi"},
      {"id": "D", "text": "Signal berib quvib o‘tish mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "1.1 uzluksiz chiziqni bosib qarama-qarshi yo'nalishga chiqish har qanday holatda ham qat'iyan taqiqlanadi."
  },
  {
    "id": 30,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Qorong‘ida uzoqni yorituvchi chiroq (Dalniy)",
    "situation": "Tunda yoritilmagan yo‘lda ketyapsiz. Qarama-qarshi tomondan mashina yaqinlashmoqda.",
    "question": "Qachon chiroqni yaqinni yorituvchi rejimga (blijniy) o‘tkazish shart?",
    "options": [
      {"id": "A", "text": "Mashina yonma-yon kelganda"},
      {"id": "B", "text": "To‘qnashuvga 50 metr qolganda"},
      {"id": "C", "text": "Qarshidagi mashinaga kamida 150 metr qolganda yoki u chirog‘ini o‘chirib-yoqib ko‘r qilayotganingizni bildirsa, undan ham oldinroq"},
      {"id": "D", "text": "O‘tkazish shart emas"}
    ],
    "correct_answer": "C",
    "explanation": "Qarama-qarshi haydovchining ko'zini qamashtirmaslik uchun kamida 150 metr qolganda uzoqni yorituvchi chiroq yaqinga o'tkazilishi shart."
  },
  {
    "id": 31,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Ko‘z qamashib qolganda harakat",
    "situation": "Qarshidan kelayotgan mashina uzoqni yorituvchi chirog‘ini o‘chirmadi va ko‘zingiz butunlay qamashib, yo‘lni ko‘rmay qoldingiz.",
    "question": "YHQ bo‘yicha to‘g‘ri harakat qaysi?",
    "options": [
      {"id": "A", "text": "Qarama-qarshi yo‘nalishga yoki yo‘l chetiga chiqib ketish"},
      {"id": "B", "text": "Avariya chirog‘ini (avariyka) yoqish, qatordan chiqmasdan tezlikni asta-sekin pasaytirib to‘xtash"},
      {"id": "C", "text": "Signalni bosib gazni bosish"},
      {"id": "D", "text": "Qasos uchun o‘zingiz ham uzoqni yorituvchi chiroqni yoqish"}
    ],
    "correct_answer": "B",
    "explanation": "Ko'z qamashganda avariya signali yoqiladi va bo'lakdan chiqmagan holda tezlik pasaytirilib to'xtatiladi."
  },
  {
    "id": 32,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Rulda telefondan foydalanish",
    "situation": "Haydovchi tirbandlikda yoki svetoforning qizil chirog‘ida to‘xtab turganda qo‘lida telefondan foydalanmoqda.",
    "question": "Bu qoidaga to‘g‘rimi?",
    "options": [
      {"id": "A", "text": "Ha, mashina harakatlanmay turibdi-ku"},
      {"id": "B", "text": "Yo‘q, harakat vaqtida ham, svetoforda to‘xtab turganda ham quloqchin yoki 'hands-free'siz telefondan qo‘lda foydalanish taqiqlanadi"},
      {"id": "C", "text": "Faqat xabar yozish taqiqlangan, qo‘ng‘iroq qilish mumkin"},
      {"id": "D", "text": "DAN xodimi ko‘rmasa ruxsat"}
    ],
    "correct_answer": "B",
    "explanation": "Transport vositasini boshqarish vaqtida telefondan qo'lda foydalanish (shu jumladan svetoforda to'xtab turganda ham) man etiladi."
  },
  {
    "id": 33,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Favqulodda to‘xtash belgisi (Avariyniy znak)",
    "situation": "Aholi punktida avtomobilingiz nosozlik tufayli yo‘l o‘rtasida to‘xtab qoldi. Avariya chirog‘ini yoqdingiz.",
    "question": "Qizil uchburchakli to‘xtash belgisini mashinadan qancha masofaga qo‘yish kerak?",
    "options": [
      {"id": "A", "text": "Mashinaning orqa oynasi tagiga"},
      {"id": "B", "text": "Mashinadan kamida 15 metr masofaga (aholi punktidan tashqarida esa kamida 30 metr)"},
      {"id": "C", "text": "Mashinadan 2 metr orqaga"},
      {"id": "D", "text": "Belgini qo‘yish umuman shart emas"}
    ],
    "correct_answer": "B",
    "explanation": "Avariya to'xtash belgisi aholi punktlarida kamida 15 metr, aholi punktidan tashqarida kamida 30 metr masofada o'rnatiladi."
  },
  {
    "id": 34,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Bolalarni tashish tartibi",
    "situation": "8 yoshli bolani yengil avtomobilning old o‘rindig‘ida olib ketish kerak.",
    "question": "Buning uchun nima talab qilinadi?",
    "options": [
      {"id": "A", "text": "Faqat oddiy xavfsizlik kamarini taqish kifoya"},
      {"id": "B", "text": "Bolani kattalar tizzasida ushlab o‘tirishi kerak"},
      {"id": "C", "text": "Maxsus bolalar o‘rindig‘i (avtokreslo) yoki maxsus ushlab turuvchi moslamalar bo‘lishi shart"},
      {"id": "D", "text": "Old o‘rindiqda 12 yoshgacha bolalarni tashish qat’iyan man etiladi"}
    ],
    "correct_answer": "C",
    "explanation": "12 yoshga to'lmagan bolalarni old o'rindiqda faqat bolalar xavfsizlik o'rindig'i (avtokreslo) bo'lgandagina tashishga ruxsat beriladi."
  },
  {
    "id": 35,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "G‘ildirak sirpanishi (Akvaplaning)",
    "situation": "Kuchli yomg‘irdan so‘ng yo‘lda ko‘lmaklar hosil bo‘lgan. Katta tezlikda ko‘lmakka kirganingizda mashina ruli yengillashib, boshqaruvni yo‘qotdi.",
    "question": "Nima qilish kerak?",
    "options": [
      {"id": "A", "text": "Rulni tezda u yoqdan-bu yoqqa burash"},
      {"id": "B", "text": "Tormoz tepkisini bor kuch bilan bosish"},
      {"id": "C", "text": "Gazni asta qo‘yib yuborish, rulni to‘g‘ri ushlab, shinalar yo‘l bilan yana tishlashishini kutish"},
      {"id": "D", "text": "Qo‘l tormozini (ruchkoy) ko‘tarish"}
    ],
    "correct_answer": "C",
    "explanation": "Akvaplaningda keskin tormoz bosish mashinani ag'darishi yoki aylantirib yuborishi mumkin; gaz sekin qo'yib yuboriladi va rul tekis saqlanadi."
  },
  {
    "id": 36,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Umumiy foydalanishdagi transport (Avtobus ustunligi)",
    "situation": "Aholi punktida bekatdan marshrut bo‘yicha yo‘lga chiqmoqchi bo‘lib, chap burilish chirog‘ini yoqqan avtobus harakatlanmoqda.",
    "question": "Haydovchilar nima qilishi kerak?",
    "options": [
      {"id": "A", "text": "Tezlikni oshirib o‘tib ketishi kerak"},
      {"id": "B", "text": "Avtobusga yo‘l berishi shart"},
      {"id": "C", "text": "Signal chalib to‘xtatishi kerak"},
      {"id": "D", "text": "Faqat tramvayga yo‘l beriladi"}
    ],
    "correct_answer": "B",
    "explanation": "Aholi punktlarida belgilangan bekatdan harakatni boshlayotgan yo'nalishli avtobus va trolleybuslarga boshqa haydovchilar yo'l berishi shart."
  },
  {
    "id": 37,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Qayrilib olishdagi xato (Razvorot)",
    "situation": "Haydovchi piyodalar o‘tish joyi ustida (zebrada) mashinani orqaga burib (razvorot qilib) olmoqchi bo‘ldi.",
    "question": "Bu harakat to‘g‘rimi?",
    "options": [
      {"id": "A", "text": "Agar piyoda bo‘lmasa mumkin"},
      {"id": "B", "text": "Zebrada, ko‘priklarda, tunnellarda va ko‘rinish 100 metrdan kam joylarda qayrilib olish qat’iyan man etiladi"},
      {"id": "C", "text": "Tunda ruxsat beriladi"},
      {"id": "D", "text": "Avariyka yoqilsa bo‘ladi"}
    ],
    "correct_answer": "B",
    "explanation": "Piyodalar o'tish joyida orqaga qayrilib olish (razvorot) har qanday holatda ham qat'iyan man etiladi."
  },
  {
    "id": 38,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Orqaga harakatlanish (Zadniy xod)",
    "situation": "Haydovchi orqaga manyovr qilmoqchi.",
    "question": "Qaysi joyda orqaga harakatlanish mutlaqo taqiqlangan?",
    "options": [
      {"id": "A", "text": "Hovlida"},
      {"id": "B", "text": "Tor ko‘chada"},
      {"id": "C", "text": "Chorrahalarda va piyodalar o‘tish joylarida"},
      {"id": "D", "text": "Bir tomonlama yo‘llarda"}
    ],
    "correct_answer": "C",
    "explanation": "Chorrahada va piyodalar o'tish joylarida orqaga harakatlanish qat'iyan taqiqlangan."
  },
  {
    "id": 39,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Spirtli ichimlik va ruxsat berilgan me’yor",
    "situation": "Haydovchilikda spirtli ichimlik qabul qilish masalasi.",
    "question": "O‘zbekiston Respublikasi YHQ bo‘yicha haydovchining qonida qancha spirt miqdori bo‘lishiga ruxsat etiladi?",
    "options": [
      {"id": "A", "text": "0.3 promille"},
      {"id": "B", "text": "0.5 promille"},
      {"id": "C", "text": "Mutlaqo ruxsat etilmaydi (0.0 promille, nol tolerantlik)"},
      {"id": "D", "text": "Bir qadah pivo ichsa bo‘ladi"}
    ],
    "correct_answer": "C",
    "explanation": "O'zbekiston Respublikasi qonunchiligida haydovchilar uchun alkogol me'yori nolga teng (mutlaqo taqiqlangan)."
  },
  {
    "id": 40,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Xavfsizlik kamari",
    "situation": "Avtomobilda harakatlanish vaqtida xavfsizlik kamari.",
    "question": "Kimlar xavfsizlik kamarini taqishi shart?",
    "options": [
      {"id": "A", "text": "Faqat haydovchi"},
      {"id": "B", "text": "Faqat haydovchi va old o‘rindiqdagi yo‘lovchi"},
      {"id": "C", "text": "Konstruksiyasida xavfsizlik kamarlari ko‘zda tutilgan barcha o‘rindiqlardagi yo‘lovchilar va haydovchi"},
      {"id": "D", "text": "Shahar ichida kamarni taqish shart emas"}
    ],
    "correct_answer": "C",
    "explanation": "Avtomobil konstruksiyasida ko'zda tutilgan barcha o'rindiqlardagi yo'lovchilar va haydovchi kamar taqishi shart."
  },
  {
    "id": 41,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Shatakka olish (Buksir)",
    "situation": "Muzlama yo‘lda egiluvchan ulovchi (tros) yordamida boshqa mashinani shatakka olish holati.",
    "question": "Bu harakat mumkinmi?",
    "options": [
      {"id": "A", "text": "Ha, juda sekin yursa bo‘ladi"},
      {"id": "B", "text": "Yo‘q, yaxmalak (muzlama) paytida egiluvchan ulovchi bilan shatakka olish taqiqlanadi"},
      {"id": "C", "text": "Faqat yengil mashinalarga mumkin"},
      {"id": "D", "text": "Tros uzunligi 2 metr bo‘lsa mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Muzlama paytida egiluvchan ulovchi bilan shatakka olish taqiqlanadi (faqat qattiq ulagich bilan ruxsat beriladi)."
  },
  {
    "id": 42,
    "topic": "haydovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Tovush signali (Gudok)",
    "situation": "Aholi punktida tovush signali ishlatilishi.",
    "question": "Aholi punktida qachon signal berish mumkin?",
    "options": [
      {"id": "A", "text": "Tanishni ko‘rib qolganda salomlashish uchun"},
      {"id": "B", "text": "Svetoforda oldingi haydovchi kechiksa uni shoshiltirish uchun"},
      {"id": "C", "text": "Faqat yo‘l-transport hodisasining (avariya) oldini olish zarur bo‘lgan hollarda"},
      {"id": "D", "text": "To‘y karvonlarida ko‘ngilxushlik uchun"}
    ],
    "correct_answer": "C",
    "explanation": "Aholi punktlarida tovush signallaridan faqatgina yo'l-transport hodisasining oldini olish uchungina foydalanishga ruxsat etiladi."
  },
  {
    "id": 43,
    "topic": "haydovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "O‘ng qatordan quvib o‘tish",
    "situation": "O‘ng tomondan quvib o‘tish (yo‘l chetiga yoki qarama-qarshiga chiqmasdan, o‘z yo‘nalishidagi bo‘sh o‘ng qatordan o‘tib ketish).",
    "question": "Bu manyovr qanday baholanadi?",
    "options": [
      {"id": "A", "text": "Bu 'quvib o‘tish' (obgon) emas, balki 'oldinlab ketish' (operejeniye) hisoblanadi va ruxsat etiladi"},
      {"id": "B", "text": "Har qanday holatda qat’iyan man etiladi"},
      {"id": "C", "text": "O‘ngdan o‘tish jarimaga sabab bo‘ladi"},
      {"id": "D", "text": "Faqat yuk mashinalariga ruxsat beriladi"}
    ],
    "correct_answer": "A",
    "explanation": "Qarama-qarshi yo'lga chiqmasdan o'z yo'nalishidagi qo'shni qatordan ilgarilab ketish quvib o'tish hisoblanmaydi va ruxsat etiladi."
  },
  {
    "id": 44,
    "topic": "haydovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Yo‘lni to‘sib qo‘yish (Zatorga kirish)",
    "situation": "Svetofor yashil yondi, lekin chorrahadan keyin tirbandlik bo‘lib, mashinalar qimirlamay turibdi.",
    "question": "Siz nima qilishingiz kerak?",
    "options": [
      {"id": "A", "text": "Yashil yonib turibdi-ku deb chorrahaga kirib, to‘xtab turish"},
      {"id": "B", "text": "Chorrahaga kirmasdan to‘xtash chizig‘i (stop-liniya) oldida kutish, toki ko‘ndalang yo‘nalishdagi harakatga xalaqit bermaslik uchun"},
      {"id": "C", "text": "Signalni bosib turish"},
      {"id": "D", "text": "Yo‘l chetidagi piyodalar yo‘lkasiga chiqib ketish"}
    ],
    "correct_answer": "B",
    "explanation": "Agar chorrahadan keyin tirbandlik yuzaga kelgan bo'lsa va bu ko'ndalang yo'nalishga to'sqinlik qilsa, yashil yongan taqdirda ham chorrahaga kirish taqiqlanadi."
  },
  {
    "id": 45,
    "topic": "haydovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Temir yo‘l kesishmasida to‘xtash",
    "situation": "Shlagbaumi bo‘lmagan temir yo‘l kesishmasida poyezd kelayotgan bo‘lsa to'xtash masofasi.",
    "question": "Haydovchi eng yaqin relsdan kamida qancha masofada to‘xtashi shart?",
    "options": [
      {"id": "A", "text": "1 metr"},
      {"id": "B", "text": "Kamida 10 metr masofada"},
      {"id": "C", "text": "50 metr masofada"},
      {"id": "D", "text": "Rels ustiga chiqib to‘xtaydi"}
    ],
    "correct_answer": "B",
    "explanation": "Shlagbaum bo'lmagan temir yo'l kesishmasida yaqinlashayotgan poyezd oldidan kamida 10 metr masofada to'xtash lozim."
  },
  {
    "id": 46,
    "topic": "velosiped_samokat",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Velosipedchining yoshi",
    "situation": "Velosipedda umumiy yo‘l qatnov qismining o‘ng chetida harakatlanish.",
    "question": "Bunga necha yoshdan ruxsat etiladi?",
    "options": [
      {"id": "A", "text": "10 yoshdan"},
      {"id": "B", "text": "14 yoshdan"},
      {"id": "C", "text": "16 yoshdan"},
      {"id": "D", "text": "18 yoshdan"}
    ],
    "correct_answer": "B",
    "explanation": "Yo'lning qatnov qismida velosipedni boshqarishga 14 yoshdan ruxsat etiladi."
  },
  {
    "id": 47,
    "topic": "velosiped_samokat",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Rulni qo‘yib yuborish",
    "situation": "Velosiped yoki samokat haydovchisi rulni ushlamasdan ketmoqda.",
    "question": "Bunga ruxsat bormi?",
    "options": [
      {"id": "A", "text": "Ha, agar balansi yaxshi bo‘lsa"},
      {"id": "B", "text": "Yo‘q, rulni kamida bitta qo‘l bilan ushlamasdan haydash taqiqlanadi"},
      {"id": "C", "text": "Faqat tekis yo‘lda mumkin"},
      {"id": "D", "text": "Telefonni ushlab ketayotganda mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Rulni ushlamasdan yoki xavfli uslubda harakatlanish qat'iyan taqiqlanadi; rul doimo nazoratda bo'lishi kerak."
  },
  {
    "id": 48,
    "topic": "velosiped_samokat",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Chapga burilishdagi qat’iy taqiq",
    "situation": "Bir yo‘nalishda 2 yoki undan ortiq qatori bo‘lgan keng yo‘lda velosipedchi to‘g‘ridan-to‘g‘ri velosipedda chapga burilmoqchi.",
    "question": "Bu mumkinmi?",
    "options": [
      {"id": "A", "text": "Ha, chap qatorga o‘tib buriladi"},
      {"id": "B", "text": "Yo‘q, bunday yo‘llarda chapga burilish yoki orqaga qayrilib olish taqiqlanadi; u velosipeddan tushib, piyodalar o‘tish joyidan yetaklab o‘tishi shart"},
      {"id": "C", "text": "Faqat tezligi 30 km/soatdan baland bo‘lsa mumkin"},
      {"id": "D", "text": "Signal berib burilsa bo‘ladi"}
    ],
    "correct_answer": "B",
    "explanation": "Ikki yoki undan ortiq tasmali yo'llarda velosipedchilarning chapga burilishi taqiqlanadi — tushib piyoda sifatida o'tish lozim."
  },
  {
    "id": 49,
    "topic": "velosiped_samokat",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Quloqchin (naushnik) va samokat",
    "situation": "Samokat yoki velosiped haydash vaqtida ikkala quloqqa shovqin to‘suvchi naushnik taqib harakatlanish holati.",
    "question": "Bu harakat qanday baholanadi?",
    "options": [
      {"id": "A", "text": "Xavfsiz, musiqa charchoqni oladi"},
      {"id": "B", "text": "Juda xavfli va taqiqlanadi — atrofdagi signal, mashina ovozi va yaqinlashayotgan xavfni eshitmay qolish oqibatida fojiaga sabab bo‘ladi"},
      {"id": "C", "text": "Faqat sekin yurganda mumkin"},
      {"id": "D", "text": "Qoidada hech narsa deyilmagan"}
    ],
    "correct_answer": "B",
    "explanation": "Atrofdagi tovush signallarini eshitish imkoniyatidan mahrum bo'lish samokat va velosipedchilarni favqulodda vaziyatda himoyasiz qoldiradi."
  },
  {
    "id": 50,
    "topic": "velosiped_samokat",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Kechasi majburiy jihozlar",
    "situation": "Tungi vaqtda velosiped va elektr samokatning jihozlanishi.",
    "question": "Ular qanday chiroqlar bilan ta’minlangan bo‘lishi shart?",
    "options": [
      {"id": "A", "text": "Hech narsa kerak emas"},
      {"id": "B", "text": "Oldinda oq chiroq (fonar), orqada qizil chiroq (yoki nur qaytargich), yon tomonlarda esa to‘q sariq qaytargichlar bo‘lishi shart"},
      {"id": "C", "text": "Faqat qo‘lda telefon chirog‘i bo‘lsa kifoya"},
      {"id": "D", "text": "Faqat shox-qo‘ng‘iroq bo‘lsa yetadi"}
    ],
    "correct_answer": "B",
    "explanation": "Qorong'i vaqtda velosiped va mopedlar oldida oq, orqasida qizil chiroq yoki nur qaytargich bo'lishi shart."
  },
  {
    "id": 51,
    "topic": "velosiped_samokat",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Piyodalar yo‘lkasidagi samokat",
    "situation": "Elektr samokat haydovchisi piyodalar yo‘lkasida (trotuarda) harakatlanmoqda. Piyodalar ko‘p bo‘lgan joy.",
    "question": "U qanday tezlikda yurishi yoki nima qilishi kerak?",
    "options": [
      {"id": "A", "text": "40 km/soat tezlikda yo‘lni yorib o‘tishi kerak"},
      {"id": "B", "text": "Piyodalarga xalaqit bermasdan, ularning tezligiga mos ravishda (piyodalar xavfsizligini ta'minlab) ehtiyotkorlik bilan harakatlanishi shart"},
      {"id": "C", "text": "Yo‘l o‘rtasidan ovoz kuchaytirgichda baqirib borishi kerak"},
      {"id": "D", "text": "Trotuarda samokat haydash mutlaqo taqiqlangan"}
    ],
    "correct_answer": "B",
    "explanation": "Trotuarda harakatlanganda piyodalar har doim ustunlikka ega va tezlik ularga xavf tug'dirmasligi shart."
  },
  {
    "id": 52,
    "topic": "velosiped_samokat",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Yo‘lovchi (odam) tashish",
    "situation": "Oddiy velosipedda yoki elektr samokatda boshqa bir odamni birga mindirib olish holati.",
    "question": "Bunga qachon ruxsat etiladi?",
    "options": [
      {"id": "A", "text": "Har doim ruxsat etiladi"},
      {"id": "B", "text": "Faqatgina konstruksiyasida maxsus qo‘shimcha o‘rindiq (masalan, bolalar o‘rindig‘i) nazarda tutilgan bo‘lsagina"},
      {"id": "C", "text": "Agar orqadagi odam og‘ir bo‘lmasa mumkin"},
      {"id": "D", "text": "Hech qachon ruxsat etilmaydi"}
    ],
    "correct_answer": "B",
    "explanation": "Samokat va velosipedda konstruksiyasida ko'zda tutilmagan yo'lovchilarni tashish qat'iyan taqiqlanadi."
  },
  {
    "id": 53,
    "topic": "velosiped_samokat",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Yuk tashish qoidalari",
    "situation": "Velosiped yoki mopedda gabaritdan tashqariga chiqib ketgan katta yuk tashish.",
    "question": "Qoidalar bo‘yicha me’yor qanday?",
    "options": [
      {"id": "A", "text": "Ruxsat etiladi, agar shoshilinch bo‘lsa"},
      {"id": "B", "text": "Taqiqlanadi — agar yuk boshqalarga xalaqit bersa yoki chetga 0.5 metrdan ortiq chiqib ketsa taqiqlanadi"},
      {"id": "C", "text": "Faqat kechasi ruxsat etiladi"},
      {"id": "D", "text": "Maxsus ruxsatnoma bilan mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Gabaritdan eni yoki uzunligi bo'yicha 0.5 metrdan ortiq chiqib ketgan yoki boshqaruvga xalal beruvchi yuklarni velosipedda tashish taqiqlanadi."
  },
  {
    "id": 54,
    "topic": "velosiped_samokat",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Velosipedchilar kolonnasining harakati",
    "situation": "Bir nechta velosipedchilar guruh bo‘lib yo‘lda harakatlanmoqda.",
    "question": "Ular qanday tartibda yurishlari shart?",
    "options": [
      {"id": "A", "text": "To‘rt qator bo‘lib keng yo‘lni egallab olishi kerak"},
      {"id": "B", "text": "Bir qator bo‘lib, bir-birining ortidan (ustun shaklida) harakatlanishi kerak"},
      {"id": "C", "text": "Istalgan tartibda tartibsiz uchaverishi kerak"},
      {"id": "D", "text": "Faqat qarama-qarshi yo‘nalishda yurishi shart"}
    ],
    "correct_answer": "B",
    "explanation": "Qatnov qismida velosipedchilar faqat bir qator bo'lib, bir-birining ortidan saf shaklida harakatlanishi kerak."
  },
  {
    "id": 55,
    "topic": "velosiped_samokat",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Tirkama (Pritsep) ulash",
    "situation": "Velosipedga yuk tirkamasini ulash talabi.",
    "question": "Qanday tirkamalarni ulash mumkin?",
    "options": [
      {"id": "A", "text": "Har qanday tirkamani ulash mumkin"},
      {"id": "B", "text": "Faqatgina velosiped konstruksiyasiga moslashtirilgan va zavodda ishlab chiqarilgan maxsus tirkamalarni ulashga ruxsat etiladi"},
      {"id": "C", "text": "Tirkama ulash qat’iyan man etiladi"},
      {"id": "D", "text": "Faqat yuk tashish mashinasining tirkamasini ulash mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Velosipedda faqat ushbu transport turiga maxsus mo'ljallangan va xavfsiz ulangan tirkamalardangina foydalanish mumkin."
  },
  {
    "id": 56,
    "topic": "velosiped_samokat",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Avtomagistral va velosiped",
    "situation": "'Avtomagistral' (5.1) belgisi o‘rnatilgan yuqori tezlikdagi trassa.",
    "question": "Velosiped yoki samokatda ushbu yo‘lga chiqish mumkinmi?",
    "options": [
      {"id": "A", "text": "Ha, yo‘l chetidan yursa bo‘ladi"},
      {"id": "B", "text": "Qat’iyan man etiladi — avtomagistrallarda velosiped, samokat va piyodalarning harakatlanishi taqiqlanadi"},
      {"id": "C", "text": "Faqat kunduzi ruxsat etiladi"},
      {"id": "D", "text": "Agar tezligi 50 km/soatdan oshsa mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Avtomagistralda velosiped, moped, samokat va piyodalar harakati to'liq taqiqlangan."
  },
  {
    "id": 57,
    "topic": "velosiped_samokat",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Tartibga solinmagan chorrahadagi ustunlik",
    "situation": "Velosipedchi ikkinchi darajali yo‘ldan asosiy yo‘lga chiqmoqda. Asosiy yo‘lda mashina kelyapti.",
    "question": "Kim yo‘l berishi kerak?",
    "options": [
      {"id": "A", "text": "Mashina velosipedchiga yo‘l berishi shart"},
      {"id": "B", "text": "Velosipedchi asosiy yo‘ldan kelayotgan transportga yo‘l berishi shart"},
      {"id": "C", "text": "Qaysi biri dadilroq bo‘lsa, o‘sha o‘tadi"},
      {"id": "D", "text": "Velosipedchilar doimo ustun"}
    ],
    "correct_answer": "B",
    "explanation": "Ikkinchi darajali yo'ldan kelayotgan har qanday harakat ishtirokchisi (shu jumladan velosipedchi) asosiy yo'ldagilarga yo'l berishi shart."
  },
  {
    "id": 58,
    "topic": "velosiped_samokat",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Yo‘l ta’mirlanayotgan qismdan o‘tish",
    "situation": "Yo‘lning qatnov qismi to‘silgan va ta’mirlanmoqda.",
    "question": "Velosipedchi nima qilishi lozim?",
    "options": [
      {"id": "A", "text": "To‘siqdan sakrab o‘tib ketaverish kerak"},
      {"id": "B", "text": "Agar xavfsizlik kafolatlanmasa, velosipeddan tushib, piyoda sifatida qoidaga amal qilgan holda chetlab o‘tish shart"},
      {"id": "C", "text": "Ishchilarga signal berib haydab o‘tish kerak"},
      {"id": "D", "text": "Yo‘lni yopishga haqqi yo‘q, haydab ketaverish kerak"}
    ],
    "correct_answer": "B",
    "explanation": "Xavfli va ta'mirlanadigan tor joylarda xavfsizlikni ta'minlash uchun velosipeddan tushib piyoda sifatida harakatlanish tavsiya etiladi."
  },
  {
    "id": 59,
    "topic": "velosiped_samokat",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Himoya vositalari (Shlem)",
    "situation": "Velosiped va samokat haydashda bosh himoya vositalari.",
    "question": "Dubulg‘a (shlem) taqish bo‘yicha qoidalar qanday?",
    "options": [
      {"id": "A", "text": "Taqish umuman shart emas"},
      {"id": "B", "text": "Xavfsizlikni ta’minlash maqsadida maxsus himoya shlemini taqish tavsiya etiladi (va xavfsizlik uchun qat’iy muhim)"},
      {"id": "C", "text": "Faqat kechasi taqish shart"},
      {"id": "D", "text": "Faqat 5 yoshli bolalar taqishi shart"}
    ],
    "correct_answer": "B",
    "explanation": "Bosh miya jarohatlarining oldini olish uchun shlem taqish hayotiy ahamiyatga ega va qoidalarda qat'iy tavsiya etiladi."
  },
  {
    "id": 60,
    "topic": "velosiped_samokat",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Mast holda boshqarish",
    "situation": "Spirtli ichimlik yoki giyohvand moddalar ta’sirida velosiped yoki elektr samokatni boshqarish holati.",
    "question": "Ushbu holat qanday baholanadi?",
    "options": [
      {"id": "A", "text": "Hech qanday jarimasi yo‘q, chunki mashina emas"},
      {"id": "B", "text": "Qat’iyan man etiladi va qonunbuzarlik ҳisoblanib, tegishli ma’muriy javobgarlikka sabab bo‘ladi"},
      {"id": "C", "text": "Faqat hovlida mumkin"},
      {"id": "D", "text": "Sekin haytsa ruxsat beriladi"}
    ],
    "correct_answer": "B",
    "explanation": "Har qanday transport vositasini (shu jumladan samokat va velosipedni) mast holda boshqarish qonunan taqiqlanadi va javobgarlikka sabab bo'ladi."
  },
  {
    "id": 61,
    "topic": "yolovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Minish va tushish qoidasi",
    "situation": "Yo‘lovchi avtobusdan yoki yengil mashinadan tushmoqda.",
    "question": "U qaysi tomondan tushishi va chiqishi kerak?",
    "options": [
      {"id": "A", "text": "Faqatgina transport to‘xtagandan so‘ng, trotuar yoki yo‘l yoqasi tomoniga tushish va chiqish kerak"},
      {"id": "B", "text": "Mashina yurib ketayotgan paytda sakrab tushish mumkin"},
      {"id": "C", "text": "Har doim chap tomondan — qatnov qismiga tushish kerak"},
      {"id": "D", "text": "Farqi yo‘q, qaysi eshik yaqin bo‘lsa o‘sha yerdan"}
    ],
    "correct_answer": "A",
    "explanation": "Yo'lovchilar faqat transport to'liq to'xtagandan keyin, yo'lka yoki yo'l yoqasi tomonidan tushishi va chiqishi shart."
  },
  {
    "id": 62,
    "topic": "yolovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Harakat vaqtida eshikni ochish",
    "situation": "Avtomobil harakatlanib ketayotgan paytda yo‘lovchining eshikni ochishi.",
    "question": "Bu harakat to‘g‘rimi?",
    "options": [
      {"id": "A", "text": "Havo almashtirish uchun ruxsat etiladi"},
      {"id": "B", "text": "Qat’iyan man etiladi — bu jiddiy avariya va fojiaga sabab bo‘lishi mumkin"},
      {"id": "C", "text": "Faqat orqa o‘rindiqdagi yo‘lovchiga mumkin"},
      {"id": "D", "text": "Agar tezlik 20 km/soatdan kam bo‘lsa ruxsat"}
    ],
    "correct_answer": "B",
    "explanation": "Harakatlanish paytida transport eshiklarini ochish yoki to'liq yopilmagan eshik bilan yurish taqiqlanadi."
  },
  {
    "id": 63,
    "topic": "yolovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Haydovchining diqqatini chalg‘itish",
    "situation": "Yo‘lovchining rulda o‘tirgan haydovchi bilan qattiq janjallashishi yoki uning diqqatini boshqaruvdan chalg‘itishi.",
    "question": "Bu xatti-harakat qanday baholanadi?",
    "options": [
      {"id": "A", "text": "Yo‘lovchining huquqi"},
      {"id": "B", "text": "Qat’iyan taqiqlanadi, chunki bu halokatga olib kelishi mumkin"},
      {"id": "C", "text": "Faqat uzoq masofali yo‘lda mumkin"},
      {"id": "D", "text": "Qonunda hech qanday cheklov yo‘q"}
    ],
    "correct_answer": "B",
    "explanation": "Yo'lovchilarga transport harakati vaqtida haydovchini boshqarishdan chalg'itish taqiqlangan."
  },
  {
    "id": 64,
    "topic": "yolovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Yuk mashinasining kuzovida odam tashish",
    "situation": "Bortli yuk mashinasining kuzovida odamlarni tashish tartibi.",
    "question": "Bunga qachon ruxsat beriladi?",
    "options": [
      {"id": "A", "text": "Istalgan yuk mashinasida odamlarni tashish mumkin"},
      {"id": "B", "text": "Faqatgina odam tashish uchun moslashtirilgan (jihozlangan) maxsus bortli mashinalardagina, qat’iy belgilangan qoidalarga ko‘ra ruxsat etiladi"},
      {"id": "C", "text": "Har qanday yuk mashinasi odam tashishi mumkin"},
      {"id": "D", "text": "Odam tashish mutlaqo taqiqlangan"}
    ],
    "correct_answer": "B",
    "explanation": "Yuk mashinalarida odam tashish faqat o'rindiqlar va tegishli himoya moslamalari bilan jihozlangan holdagina ruxsat etiladi."
  },
  {
    "id": 65,
    "topic": "yolovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Xavfsizlik kamarini taqish majburiyati",
    "situation": "Yengil avtomobilning orqa o‘rindig‘ida o‘tirgan yo‘lovchi harakatlanmoqda.",
    "question": "U xavfsizlik kamarini taqishi shartmi?",
    "options": [
      {"id": "A", "text": "Shart emas, kamar faqat oldingilar uchun"},
      {"id": "B", "text": "Agar mashina konstruksiyasida orqa kamar nazarda tutilgan bo‘lsa, taqishi shart"},
      {"id": "C", "text": "Faqat shahar tashqarisida taqiladi"},
      {"id": "D", "text": "Faqat haydovchi xohlasa taqadi"}
    ],
    "correct_answer": "B",
    "explanation": "Avtomobil konstruksiyasida xavfsizlik kamarlari bo'lgan barcha o'rinlarda yo'lovchilar kamarni taqishi shart."
  },
  {
    "id": 66,
    "topic": "yolovchilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Mototsiklda yo‘lovchi bo‘lishi",
    "situation": "Mototsiklda orqada o‘tirgan yo‘lovchi holati.",
    "question": "U nima qilishi shart?",
    "options": [
      {"id": "A", "text": "Qo‘shiq aytib ketishi kerak"},
      {"id": "B", "text": "Maxsus motoshlem (himoya dubulg‘asi) kiyishi va maxsus tutqichdan ushlab o‘tirishi shart"},
      {"id": "C", "text": "Oyoqlarini ikkala tomonga osiltirib o‘tirishi shart"},
      {"id": "D", "text": "Haydovchining yelkasiga chiqib olishi kerak"}
    ],
    "correct_answer": "B",
    "explanation": "Mototsiklda ketayotgan barcha shaxslar mahkamlangan motoshlem kiyishi majburiydir."
  },
  {
    "id": 67,
    "topic": "yolovchilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Yo‘l o‘rtasida transport kutish",
    "situation": "Yo‘lovchi taksi yoki avtobus to‘xtatish uchun yo‘lning qatnov qismiga chiqib turibdi.",
    "question": "Bu harakat mumkinmi?",
    "options": [
      {"id": "A", "text": "Ruxsat etiladi"},
      {"id": "B", "text": "Taqiqlanadi — yo‘lovchilar faqat trotuarda, yo‘l yoqasida yoki maxsus kutish maydonchalarida (bekatlarda) turishi shart"},
      {"id": "C", "text": "Faqat taksi kutganda ruxsat beriladi"},
      {"id": "D", "text": "Kechasi mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Yo'nalishli transport vositalarini va taksilarni faqatgina trotuarlar, yo'l yoqalari va bekatlarda kutish shart."
  },
  {
    "id": 68,
    "topic": "yolovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Jamoat transporti eshigiga osilish",
    "situation": "Avtobus yoki yo‘nalishli taksi to‘lib ketgan paytda eshigiga osilib ketish holati.",
    "question": "Bu vaziyat qanday baholanadi?",
    "options": [
      {"id": "A", "text": "Shoshayotgan bo‘lsa ruxsat etiladi"},
      {"id": "B", "text": "Qat’iyan man etiladi — bu yo‘lovchining hayoti uchun o‘ta xavflidir"},
      {"id": "C", "text": "Faqat bekatgacha mumkin"},
      {"id": "D", "text": "Yo‘lovchilar soni cheklanmagan"}
    ],
    "correct_answer": "B",
    "explanation": "Avtomobil eshiklariga osilib ketish, o'rindiqlar va maydonchadan tashqarida yurish jiddiy xavf tug'diradi va qat'iyan man etiladi."
  },
  {
    "id": 69,
    "topic": "yolovchilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Nogironlar aravachasidagi shaxslar",
    "situation": "Yo‘lda harakatlanayotgan dvigatelsiz nogironlar aravachasidagi shaxslar.",
    "question": "Ular qaysi qoidalarga amal qilishi kerak?",
    "options": [
      {"id": "A", "text": "Ular faqat velosiped yo‘lidan yurishi shart"},
      {"id": "B", "text": "Ular piyodalar uchun belgilangan qoidalarga amal qilishi va yo‘l cheti yoki trotuardan yurishi kerak"},
      {"id": "C", "text": "Mashinalar yo‘lining o‘rtasidan ketishi shart"},
      {"id": "D", "text": "Ularga hech qanday qoida qo‘llanilmaydi"}
    ],
    "correct_answer": "B",
    "explanation": "Dvigatelsiz nogironlar aravachasida harakatlanuvchilar YHQ bo'yicha piyodalarga tenglashtiriladi."
  },
  {
    "id": 70,
    "topic": "yolovchilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Haydovchiga xalaqit beruvchi yuklar bilan chiqish",
    "situation": "Yo‘lovchining salonga haydovchining ko‘rishiga xalaqit beradigan katta va hajmli buyumlarni olib kirishi.",
    "question": "Bunga ruxsat bormi?",
    "options": [
      {"id": "A", "text": "Ruxsat etiladi"},
      {"id": "B", "text": "Taqiqlanadi — haydovchining ko‘rish doirasini to‘sadigan yoki boshqaruvga xalaqit qiladigan buyumlarni tashish man etiladi"},
      {"id": "C", "text": "Faqat bagajda joy bo‘lmasa mumkin"},
      {"id": "D", "text": "Chipta haqi to‘langan bo‘lsa ruxsat"}
    ],
    "correct_answer": "B",
    "explanation": "Haydovchining ko'rish maydonini to'sadigan yoki boshqarishga to'sqinlik qiladigan har qanday yuklarni salonda olib yurish taqiqlanadi."
  },
  {
    "id": 71,
    "topic": "svetofor_belgilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Asosiy svetofor va qo‘shimcha strelka",
    "situation": "Svetoforning qizil asosiy chirog‘i yonib turibdi, lekin yon tomonda o‘ngga yo‘naltiruvchi yashil strelka yonmoqda.",
    "question": "Siz qaysi yo‘nalishga harakatlana olasiz?",
    "options": [
      {"id": "A", "text": "Faqat yashil strelka ko‘rsatgan tomonga (boshqa yo‘nalishdagi transportlarga yo‘l berib)"},
      {"id": "B", "text": "Hamma yo‘nalishga"},
      {"id": "C", "text": "Hech qayerga harakatlana olmaysiz"},
      {"id": "D", "text": "Faqat orqaga"}
    ],
    "correct_answer": "A",
    "explanation": "Qo'shimcha seksiya yoqilgan yo'nalishga boshqa harakat qatnashchilariga xalaqit bermagan holda burilish mumkin."
  },
  {
    "id": 72,
    "topic": "svetofor_belgilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Miltillovchi sariq chiroq",
    "situation": "Svetoforning sariq chirog‘i doimiy miltillab yonmoqda yoki svetofor o‘chgan.",
    "question": "Haydovchilar qanday qoidaga amal qilishi kerak?",
    "options": [
      {"id": "A", "text": "To‘xtamasdan o‘tib ketish"},
      {"id": "B", "text": "Ustuvorlik belgilariga yoki 'teng ahamiyatli chorraha' qoidalariga (o‘ng qo‘l qoidasiga) amal qilib harakatlanish"},
      {"id": "C", "text": "Chorrahada to‘xtab politsiya kutish"},
      {"id": "D", "text": "Signal berib o‘tish"}
    ],
    "correct_answer": "B",
    "explanation": "Miltillovchi sariq signal chorraha tartibga solinmaganligini bildiradi; bunday hollarda yo'l belgilari yoki o'ng qo'l qoidasiga amal qilinadi."
  },
  {
    "id": 73,
    "topic": "svetofor_belgilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Qizil va sariq chiroq birga yonganda",
    "situation": "Svetoforning qizil va sariq chiroqlari bir vaqtning o‘zida yonmoqda.",
    "question": "Bu nimani anglatadi?",
    "options": [
      {"id": "A", "text": "Tez orada yashil chiroq yonishini bildiradi va harakatga tayyorlanish kerak"},
      {"id": "B", "text": "Darhol orqaga qayrilish kerak"},
      {"id": "C", "text": "Svetofor buzilgan, o‘tib ketaverish kerak"},
      {"id": "D", "text": "Shoshilinch tormoz berish kerak"}
    ],
    "correct_answer": "A",
    "explanation": "Bir vaqtda yongan qizil va sariq signallar harakatlanishni taqiqlaydi va tez orada yashil yonishi haqida xabardor qiladi."
  },
  {
    "id": 74,
    "topic": "svetofor_belgilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "To‘xtash chizig‘i (Stop-liniya) va qizil chiroq",
    "situation": "Svetoforning qizil chirog‘ida yo‘ldagi oq to‘xtash chizig‘idan (stop-liniyadan) o‘tib ketib to‘xtash holati.",
    "question": "Bu harakat to‘g‘rimi?",
    "options": [
      {"id": "A", "text": "Mumkin, agar piyodaga xalaqit bermasa"},
      {"id": "B", "text": "Qoidabuzarlik hisoblanadi — to‘xtash chizig‘i yoki svetofor qarshisidagi chiziqdan o‘tib ketish taqiqlanadi"},
      {"id": "C", "text": "Faqat tunda ruxsat etiladi"},
      {"id": "D", "text": "Jarima solinmaydi"}
    ],
    "correct_answer": "B",
    "explanation": "Taqiqlovchi signallarda to'xtash chizig'i (5.33 yotiq chizig'i) oldida to'xtash shart, uni bosib o'tish qoidabuzarlikdir."
  },
  {
    "id": 75,
    "topic": "svetofor_belgilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Yo‘nalishli svetofor (strelkali oq chiroqlar)",
    "situation": "Qora fon ustida strelkalar bilan ifodalangan qo‘shimcha seksiyali svetofor.",
    "question": "Bu chiroqlar nimani bildiradi?",
    "options": [
      {"id": "A", "text": "Faqat tramvaylar uchun mo‘ljallangan"},
      {"id": "B", "text": "Muayyan yo‘nalishlar bo‘yicha harakatlanish tartibini tartibga soladi"},
      {"id": "C", "text": "Kechki payt ishlamaydi"},
      {"id": "D", "text": "Faqat piyodalar uchun"}
    ],
    "correct_answer": "B",
    "explanation": "Strelkali signallar harakat faqat ko'rsatilgan yo'nalishlar bo'yicha ruxsat etilganligini anglatadi."
  },
  {
    "id": 76,
    "topic": "svetofor_belgilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Qizil hoshiyali oq doira (3.2 'Harakatlanish taqiqlangan')",
    "situation": "Ichida hech qanday chizmasi bo‘lmagan, qizil hoshiyali dumaloq oq belgi o‘rnatilgan ko‘chaga kirish.",
    "question": "Belgining talabi nima?",
    "options": [
      {"id": "A", "text": "Barcha transportlar uchun mutlaqo ochiq"},
      {"id": "B", "text": "Umumiy transport vositalarining harakatlanishi taqiqlanadi (belgilangan zonada yashovchi/ishlovchi fuqarolar va xizmat transportlaridan tashqari)"},
      {"id": "C", "text": "Faqat yuk mashinalariga taqiqlanadi"},
      {"id": "D", "text": "Faqat tunda kirish mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "3.2 belgisi barcha transport vositalari harakatini taqiqlaydi, faqat ushbu hududda yashovchilar, xizmat ko'rsatuvchi va yo'nalishli transportlar mustasno."
  },
  {
    "id": 77,
    "topic": "svetofor_belgilar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "'G‘isht' belgisi (3.1 'Kirish taqiqlangan')",
    "situation": "Qizil doira ichida oq gorizontal to‘rtburchak turgan belgi ostidan kirish.",
    "question": "Bu belgi nimani bildiradi?",
    "options": [
      {"id": "A", "text": "Barcha haydovchilar uchun ushbu yo‘nalishda kirish qat’iyan man etiladi (belgilangan yo‘nalishli jamoat transportidan tashqari)"},
      {"id": "B", "text": "Sekin tezlikda kirish mumkin"},
      {"id": "C", "text": "Faqat yengil mashinalarga ruxsat"},
      {"id": "D", "text": "Belgini aylanib o‘tish sharti bilan mumkin"}
    ],
    "correct_answer": "A",
    "explanation": "3.1 belgisi o'rnatilgan yo'nalishga kirish barcha transport vositalari uchun (yo'nalishli transportlardan tashqari) taqiqlanadi."
  },
  {
    "id": 78,
    "topic": "svetofor_belgilar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Moviy doira ichidagi oq strelka (4.1.1 'Harakatlanish to‘g‘riga')",
    "situation": "Chorraha oldiga moviy doirada to‘g‘riga ko‘rsatilgan oq strelka belgisi qo‘yilgan.",
    "question": "Ushbu chorrahada qaysi harakat taqiqlanadi?",
    "options": [
      {"id": "A", "text": "To‘g‘riga yurish"},
      {"id": "B", "text": "O‘ngga va chapga burilish hamda qayrilib olish taqiqlanadi"},
      {"id": "C", "text": "To‘xtab turish"},
      {"id": "D", "text": "Tezlikni oshirish"}
    ],
    "correct_answer": "B",
    "explanation": "4.1.1 buyuruvchi belgisi faqat ko'rsatilgan yo'nalishda (to'g'riga) harakatlanishni buyuradi, boshqa burilishlar man etiladi."
  },
  {
    "id": 79,
    "topic": "svetofor_belgilar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Ustuvorlik belgilari va svetofor to‘qnashuvi",
    "situation": "Chorrahada 'Bosh yo‘l' belgisi turibdi, biroq svetofor qizil chiroqni ko‘rsatmoqda.",
    "question": "Haydovchi qaysi biriga bo‘ysunadi?",
    "options": [
      {"id": "A", "text": "Bosh yo‘l belgisiga amal qilib o‘tib ketadi"},
      {"id": "B", "text": "Svetoforning qizil chirog‘iga bo‘ysunadi — ishlayotgan svetofor ustuvorlik belgilarini bekor qiladi"},
      {"id": "C", "text": "O‘ng tomondagi haydovchiga qarab harakatlanadi"},
      {"id": "D", "text": "Signal berib o‘tadi"}
    ],
    "correct_answer": "B",
    "explanation": "Ishlayotgan svetofor ustuvorlik belgilarining talabini bekor qiladi; haydovchilar svetoforga bo'ysunishi shart."
  },
  {
    "id": 80,
    "topic": "svetofor_belgilar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "'To‘xtamasdan harakatlanish taqiqlangan' (STOP)",
    "situation": "2.5 'STOP' belgisi oldiga kelgan haydovchi holati.",
    "question": "Haydovchining majburiyati nima?",
    "options": [
      {"id": "A", "text": "Agar yo‘lda hech kim bo‘lmasa, sekinlashib to‘xtamasdan o‘tish"},
      {"id": "B", "text": "To‘xtash chizig‘i (yoki kesishayotgan qatnov qismi cheti) oldida har qanday holatda to‘liq to‘xtash, xavfsizlikka ishonch hosil qilib keyin harakatlanish"},
      {"id": "C", "text": "Faqat piyoda bo‘lsa to‘xtash"},
      {"id": "D", "text": "Chap tomonga signal chalish"}
    ],
    "correct_answer": "B",
    "explanation": "2.5 belgisi har qanday sharoitda (yo'l bo'sh bo'lsa ham) to'liq to'xtashni va yo'l berishni talab qiladi."
  },
  {
    "id": 81,
    "topic": "chorraha_burilish",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Chapga burilishdagi qarama-qarshi oqim",
    "situation": "Yashil chiroqda chapga burilayotgan yengil avtomobil harakatlanmoqda.",
    "question": "U kimga yo‘l berishi shart?",
    "options": [
      {"id": "A", "text": "Hech kimga, birinchi bo‘lib burilib oladi"},
      {"id": "B", "text": "Qarama-qarshi tomondan to‘g‘riga va o‘ngga harakatlanayotgan transport vositalariga"},
      {"id": "C", "text": "Faqat orqasidan kelayotgan mashinaga"},
      {"id": "D", "text": "Faqat oraliq masofadagi taksiga"}
    ],
    "correct_answer": "B",
    "explanation": "Chapga burilayotganda ro'paradan to'g'riga va o'ngga harakatlanayotgan transport vositalarini o'tkazib yuborish shart."
  },
  {
    "id": 82,
    "topic": "chorraha_burilish",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "'O‘ng qo‘l qoidasi' (Teng ahamiyatli chorraha)",
    "situation": "Belgilar va svetofor bo‘lmagan teng ahamiyatli chorrahada ikki mashina to‘g‘ri harakatlanmoqda.",
    "question": "Kim birinchi o‘tadi?",
    "options": [
      {"id": "A", "text": "Katta o‘lchamli mashina"},
      {"id": "B", "text": "O‘ng tomonida to‘sig‘i (o‘ng tomondan kelayotgan transporti) bo‘lmagan haydovchi"},
      {"id": "C", "text": "Chap tomondan kelayotgan mashina"},
      {"id": "D", "text": "Tezroq gazni bosgan haydovchi"}
    ],
    "correct_answer": "B",
    "explanation": "Teng ahamiyatli yo'llar kesishuvida o'ng tomondan kelayotgan transport vositasiga yo'l beriladi."
  },
  {
    "id": 83,
    "topic": "chorraha_burilish",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "T-simon chorrahada ustunlik",
    "situation": "Hech qanday belgi bo‘lmagan T-simon chorrahaga to‘g‘ri yo‘nalishdan va tutashgan yo‘ldan ikki haydovchi keldi.",
    "question": "Tartib qanday belgilanadi?",
    "options": [
      {"id": "A", "text": "To‘g‘ri yo‘l har doim avtomatik bosh yo‘l hisoblanadi"},
      {"id": "B", "text": "Belgilar bo‘lmasa, bu ham teng ahamiyatli chorraha bo‘lib, 'o‘ng qo‘l qoidasi'ga amal qilinadi"},
      {"id": "C", "text": "Qimmatroq mashina birinchi o‘tadi"},
      {"id": "D", "text": "Signal bergan transport o‘tadi"}
    ],
    "correct_answer": "B",
    "explanation": "Ustunlik belgilari bo'lmagan har qanday chorrahada (shu jumladan T-simonda ham) teng ahamiyatli chorraha qoidalari amal qiladi."
  },
  {
    "id": 84,
    "topic": "chorraha_burilish",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Tramvay va avtomobil chorrahada",
    "situation": "Teng sharoitda (ikkalasiga ham yashil chiroq yonganda yoki ikkalasi ham teng ahamiyatli yo‘lda bo‘lganda) tramvay va yengil avtomobil harakat yo‘nalishlari kesishdi.",
    "question": "Kim ustunlikka ega?",
    "options": [
      {"id": "A", "text": "Yengil avtomobil (chunki u manevrchanroq)"},
      {"id": "B", "text": "Tramvay — harakatlanish yo‘nalishidan qat’i nazar birinchi bo‘lib o‘tadi"},
      {"id": "C", "text": "O‘ng tomonda bo‘lgani"},
      {"id": "D", "text": "Katta tezlikda kelayotgani"}
    ],
    "correct_answer": "B",
    "explanation": "Teng sharoitda relsli transport (tramvay) harakat yo'nalishidan qat'i nazar relssiz transportlardan ustunlikka ega."
  },
  {
    "id": 85,
    "topic": "chorraha_burilish",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Chap burilishdagi manyovr trayektoriyasi",
    "situation": "Chorrahada chapga burilayotgan avtomobil harakatlanmoqda.",
    "question": "Manyovrni tugatayotganda qaysi talabga rioya qilinishi shart?",
    "options": [
      {"id": "A", "text": "Qarama-qarshi harakatlanish bo‘lagiga (vstrechkaga) chiqib ketmasligi shart"},
      {"id": "B", "text": "Faqat chetki chap qatorda to‘xtashi kerak"},
      {"id": "C", "text": "Piyodalar yo‘lkasiga chiqib olishi kerak"},
      {"id": "D", "text": "Mashinani orqaga harakatlantirishi shart"}
    ],
    "correct_answer": "A",
    "explanation": "Burilish shunday amalga oshirilishi kerakki, qatnov qismlari kesishuvidan chiqishda transport vositasi qarama-qarshi harakat bo'lagiga tushib qolmasin."
  },
  {
    "id": 86,
    "topic": "chorraha_burilish",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Qayrilib olishda o‘ng tomondan kelayotgan xavf",
    "situation": "Chorrahada qayrilib (razvorot qilib) olayotgan haydovchi o‘ng tomondan parallel kelib o‘ngga burilayotgan mashinaga nisbatan vaziyati.",
    "question": "Qayrilib olayotgan haydovchi nima qilishi kerak?",
    "options": [
      {"id": "A", "text": "Birinchi o‘tadi"},
      {"id": "B", "text": "Manyovr davomida unga nisbatan o‘ng tomondan yaqinlashayotgani sababli unga yo‘l berishi shart"},
      {"id": "C", "text": "To‘xtovsiz harakatlanadi"},
      {"id": "D", "text": "Signal berib uni to‘xtatadi"}
    ],
    "correct_answer": "B",
    "explanation": "Qayrilib olish paytida boshqa transport vositasi sizga o'ng tomondan xavf tug'dirsa, o'ng qo'l qoidasiga ko'ra unga yo'l berishingiz shart."
  },
  {
    "id": 87,
    "topic": "chorraha_burilish",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Bosh yo‘l yo‘nalishini o‘zgartirganda",
    "situation": "7.13 'Bosh yo‘lning yo‘nalishi' lavhasi bilan birga o‘rnatilgan chorrahada bosh yo‘lda kelayotgan ikki mashina yo‘llari kesishmoqda.",
    "question": "Ular o‘zaro qanday o‘tadi?",
    "options": [
      {"id": "A", "text": "O‘zaro teng sharoitda bo‘lgani uchun 'o‘ng qo‘l qoidasi' asosida"},
      {"id": "B", "text": "Katta tezlikdagi haydovchi o‘tadi"},
      {"id": "C", "text": "To‘g‘riga ketayotgani doim ustun"},
      {"id": "D", "text": "Birinchi kelgani o‘tadi"}
    ],
    "correct_answer": "A",
    "explanation": "Bosh yo'l yo'nalishini o'zgartirganda, bosh yo'lda bo'lgan haydovchilar o'zaro teng ahamiyatli chorraha qoidalariga amal qiladilar."
  },
  {
    "id": 88,
    "topic": "chorraha_burilish",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Ikkinchi darajali yo‘ldan chiqish",
    "situation": "2.4 'Yo‘l bering' belgisi ostida kelgan haydovchi chorrahaga yaqinlashdi.",
    "question": "Uning vazifasi nima?",
    "options": [
      {"id": "A", "text": "Bosh yo‘ldan harakatlanayotgan barcha transport vositalariga (ularning keyingi yo‘nalishidan qat’i mindan qat’i nazar) yo‘l berishi shart"},
      {"id": "B", "text": "Faqat chap tomondan kelayotganga yo‘l beradi"},
      {"id": "C", "text": "To‘xtamasdan katta tezlikda o‘tib ketishi kerak"},
      {"id": "D", "text": "Piyodalar bo‘lmasa ketaveradi"}
    ],
    "correct_answer": "A",
    "explanation": "2.4 belgisi kesib o'tilayotgan yo'ldan kelayotgan barcha transport vositalariga yo'l berishni talab qiladi."
  },
  {
    "id": 89,
    "topic": "chorraha_burilish",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Qatordan burilish qoidasi",
    "situation": "Maxsus harakatlanish qatorlari belgilari bo‘lmagan yo‘lda o‘ngga burilish amalga oshirilmoqda.",
    "question": "Burilish qaysi qatordan amalga oshirilishi shart?",
    "options": [
      {"id": "A", "text": "Istalgan qatordan"},
      {"id": "B", "text": "Faqat chetki o‘ng qatordan va burilishdan oldin imkon qadar o‘ng chetga yaqinlashgan holda"},
      {"id": "C", "text": "Faqat o‘rta qatordan"},
      {"id": "D", "text": "Chap qatordan keng burchak bilan"}
    ],
    "correct_answer": "B",
    "explanation": "Burilishdan oldin haydovchi tegishli yo'nalishdagi chetki qatorni egallashi shart (o'ngga burilish uchun chetki o'ng qator)."
  },
  {
    "id": 90,
    "topic": "chorraha_burilish",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Tartibga soluvchining qo‘llari yonga cho‘zilgan holati",
    "situation": "Tartibga soluvchi xodim qo‘llarini ikki yonga yoygan yoki tushirgan holda sizga ko‘kragi yoki orqasi bilan turibdi.",
    "question": "Siz nima qilasiz?",
    "options": [
      {"id": "A", "text": "To‘g‘riga sekin harakatlanasiz"},
      {"id": "B", "text": "O‘ngga burilasiz"},
      {"id": "C", "text": "Harakatlanish qat’iyan man etiladi (ko‘krak va orqa — qizil devor)"},
      {"id": "D", "text": "Barcha yo‘nalishlarda harakatlanish ruxsat etiladi"}
    ],
    "correct_answer": "C",
    "explanation": "Tartibga soluvchining ko'krak va orqa tomoni har doim harakatni taqiqlovchi 'qizil devor' vazifasini bajaradi."
  },
  {
    "id": 91,
    "topic": "real_vaziyatlar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Kutilmagan to‘siq va quvib o‘tish",
    "situation": "1 qatorli yo‘lda nosoz mashina to‘xtab qolgan. Qarama-qarshi yo‘nalishdan mashinalar uzluksiz kelyapti. Yo‘l o‘rtasida uzluksiz chiziq.",
    "question": "Sizning harakatingiz qanday bo‘lishi kerak?",
    "options": [
      {"id": "A", "text": "Qarama-qarshi yo‘lga tavakkal otilib, ro‘paradagi mashinalarni chetga qochishga majburlash"},
      {"id": "B", "text": "Qarama-qarshi yo‘nalishdagi mashinalarni to‘liq o‘tkazib yuborib, xavfsizlikka to‘liq ishonch hosil qilgach, to‘siqni aylanib o‘tish"},
      {"id": "C", "text": "Nosoz mashinani orqasidan turtib yo‘ldan chiqarish"},
      {"id": "D", "text": "Rulni trotuarga burib yuborish"}
    ],
    "correct_answer": "B",
    "explanation": "To'siqni chetlab o'tish faqat qarama-qarshi oqimga hech qanday xavf va to'sqinlik yaratmagan holdagina amalga oshiriladi."
  },
  {
    "id": 92,
    "topic": "real_vaziyatlar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Qalin tuman (Ko‘rinish 20 metr)",
    "situation": "Trassada qalin tuman tushgan. Ko‘rinish juda cheklangan.",
    "question": "Eng to‘g‘ri va xavfsiz haydash uslubi qaysi?",
    "options": [
      {"id": "A", "text": "Uzoqni yorituvchi (dalniy) chiroqlarni yoqish (chunki ular kuchliroq)"},
      {"id": "B", "text": "Tuman chiroqlarini va yaqinni yorituvchi (blijniy) chiroqlarni yoqish, tezlikni keskin tushirish va masofani sezilarli darajada oshirish"},
      {"id": "C", "text": "Avariyka yoqib 100 km/soatda uchish"},
      {"id": "D", "text": "Oldindagi mashinaga 2 metr yaqinlashib orqasidan ergashish"}
    ],
    "correct_answer": "B",
    "explanation": "Uzoqni yorituvchi chiroq tumanda oq devor hosil qilib ko'zni qamashtiradi; shuning uchun yaqin chiroqlar va tuman chiroqlaridan foydalanish shart."
  },
  {
    "id": 93,
    "topic": "real_vaziyatlar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Sirpanchiq burilish (Muzlama)",
    "situation": "Muzlagan yo‘lda burilishga yaqinlashyapsiz. Mashina sirpana boshladi.",
    "question": "Qaysi harakat falokatga sabab bo‘ladi?",
    "options": [
      {"id": "A", "text": "Burilish oldidan tezlikni asta-sekin tushirib olish"},
      {"id": "B", "text": "Aynan burilish ustida gazni keskin qo‘yib yuborish yoki tormoz tepkisini qattiq bosish"},
      {"id": "C", "text": "Rulni silliq boshqarish"},
      {"id": "D", "text": "Xavfsiz oraliq masofa saqlash"}
    ],
    "correct_answer": "B",
    "explanation": "Muzlagan burilishda keskin tormoz yoki keskin gaz boshqaruvni butunlay yo'qotish va mashinaning aylanib ketishiga sabab bo'ladi."
  },
  {
    "id": 94,
    "topic": "real_vaziyatlar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "Yashirin 'o‘lik zona'dagi piyoda",
    "situation": "Bekatda turgan katta avtobus orqasidan to‘satdan 10 yoshli bola yugurib yo‘lga chiqdi. Siz ikkinchi qatorda 50 km/soat tezlikda kelyapsiz.",
    "question": "Bunday fojianing oldini olish uchun haydovchi bekat yonidan o‘tayotganda nima qilishi shart edi?",
    "options": [
      {"id": "A", "text": "To‘xtab turgan jamoat transporti yonidan o‘tishda har doim tezlikni pasaytirib, yashirin xavfga tayyor bo‘lishi shart edi"},
      {"id": "B", "text": "Faqat signal berib ketaverishi kerak edi"},
      {"id": "C", "text": "Tezlikni oshirib o‘tib ketishi kerak edi"},
      {"id": "D", "text": "Chap qatorga o‘tib gazni bosish kerak edi"}
    ],
    "correct_answer": "A",
    "explanation": "To'xtab turgan jamoat transporti har doim kutilmagan piyodalar chiqib qolish xavfini tug'diradi va oldindan sekinlashishni talab qiladi."
  },
  {
    "id": 95,
    "topic": "real_vaziyatlar",
    "difficulty": "asosiy",
    "badge": "🟢",
    "title": "Tormoz tizimining to‘satdan ishlamay qolishi",
    "situation": "Mashina harakatlanib ketayotganda oyoq tormozi to‘satdan ishlamay qoldi.",
    "question": "Haydovchi qanday qilib xavfsiz to‘xtashi kerak?",
    "options": [
      {"id": "A", "text": "Mashinadan sakrab tushish"},
      {"id": "B", "text": "Dvigatel yordamida sekinlashtirish (uzatmalarni ketma-ket pasaytirish) va asta-sekin to‘xtatgich (ruchkoy) tormozidan ehtiyotkorlik bilan foydalanish"},
      {"id": "C", "text": "Zudlik bilan orqa uzatmaga (zadniy) tiqish"},
      {"id": "D", "text": "Ko‘zni yumib rulni qo‘yib yuborish"}
    ],
    "correct_answer": "B",
    "explanation": "Tormoz ishlamay qolganda dvigatel yordamida pasaytiruvchi uzatmalarga o'tish va qo'l tormozini ehtiyotkorlik bilan tortish to'xtashga yordam beradi."
  },
  {
    "id": 96,
    "topic": "real_vaziyatlar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Avtomagistralda orqaga qaytish zarurati",
    "situation": "Avtomagistralda ketyapsiz va kerakli burilishdan o‘tib ketdingiz. Keyingi burilish 15 km uzoqlikda.",
    "question": "Qoidaga ko‘ra nima qilish kerak?",
    "options": [
      {"id": "A", "text": "Yo‘l yoqasiga o‘tib orqaga haydash"},
      {"id": "B", "text": "Ajratuvchi zonadagi texnologik uzilish orqali qayrilib olish"},
      {"id": "C", "text": "Qoidalarga rioya qilib, keyingi ruxsat etilgan qayrilib olish joyigacha harakatni davom ettirish"},
      {"id": "D", "text": "To‘xtab qarama-qarshi oqim bo‘ylab haydash"}
    ],
    "correct_answer": "C",
    "explanation": "Avtomagistralda orqaga qaytish yoki texnologik uzilishlardan burilish qat'iyan man etiladi — faqat ruxsat etilgan yo'l o'tkazgichgacha borish shart."
  },
  {
    "id": 97,
    "topic": "real_vaziyatlar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "G‘ildirakning portlashi (Katta tezlikda)",
    "situation": "90 km/soat tezlikda ketayotgan paytda oldingi o‘ng g‘ildirak portlab ketdi va mashina o‘ngga qarab torta boshladi.",
    "question": "To‘g‘ri harakat qanday bo‘lishi kerak?",
    "options": [
      {"id": "A", "text": "Vahimaga tushib bor kuch bilan tormozni bosish"},
      {"id": "B", "text": "Rulni ikkala qo‘l bilan mahkam ushlab yo‘nalishni to‘g‘ri saqlash, gazni asta qo‘yib, tezlik pasaygach ehtiyotkorlik bilan yo‘l chetiga to‘xtash"},
      {"id": "C", "text": "Rulni chapga keskin burish"},
      {"id": "D", "text": "Dvigatelni kalitdan darhol o‘chirib qulflash"}
    ],
    "correct_answer": "B",
    "explanation": "G'ildirak portlaganda keskin tormozlash mashinani muqarrar ag'daradi. Rulni to'g'ri mahkam ushlab, tabiiy sekinlashuvga erishish lozim."
  },
  {
    "id": 98,
    "topic": "real_vaziyatlar",
    "difficulty": "orta",
    "badge": "🟡",
    "title": "Turar joy zonasi (Hovli ichi harakati)",
    "situation": "5.38 'Turar joy dahasi' belgisi o‘rnatilgan hududda avtomobil harakatlanmoqda.",
    "question": "Tezlik va ustunlik qoidasi qanday?",
    "options": [
      {"id": "A", "text": "Maksimal 50 km/soat tezlikda yura oladi"},
      {"id": "B", "text": "Tezligi 20 km/soatdan oshmasligi kerak va bu hududda piyodalar qatnov qismida ham mutlaq ustunlikka ega"},
      {"id": "C", "text": "Piyodalarga yo‘l berishi shart emas"},
      {"id": "D", "text": "Faqat tunda yurishi mumkin"}
    ],
    "correct_answer": "B",
    "explanation": "Turar joy zonalarida ruxsat etilgan yuqori tezlik 20 km/soat bo'lib, piyodalar yo'lning butun eni bo'ylab ustunlikka ega."
  },
  {
    "id": 99,
    "topic": "real_vaziyatlar",
    "difficulty": "qiyin",
    "badge": "🟠",
    "title": "Sirena ovozi bor, lekin mashina ko‘rinmayapti",
    "situation": "Chorrahaga yaqinlashyapsiz. Maxsus transport sirenasi ovozi juda yaqin eshitilmoqda, ammo binolar sababli qayerdan kelayotgani ko‘rinmayapti.",
    "question": "Nima qilasiz?",
    "options": [
      {"id": "A", "text": "Menga yashil yonib turibdi-ku deb chorrahaga tez kirish"},
      {"id": "B", "text": "Tezlikni keskin pasaytirib, chorraha oldida to‘xtashga tayyor turish va transportning kelish yo‘nalishini aniqlab, unga yo‘l berish"},
      {"id": "C", "text": "Muzikani balandlatib o‘tib ketish"},
      {"id": "D", "text": "Signal berib oldinga chiqish"}
    ],
    "correct_answer": "B",
    "explanation": "Maxsus tovush signallari eshitilganda haydovchi o'z yo'nalishidagi yashil chiroqqa qaramasdan sekinlashib, yo'l berishga tayyor turishi shart."
  },
  {
    "id": 100,
    "topic": "real_vaziyatlar",
    "difficulty": "real_scenario",
    "badge": "🔴",
    "title": "'Men haqman, demak yo‘l bermayman' psixologiyasi",
    "situation": "Siz bosh yo‘ldasiz. Ikkinchi darajali yo‘ldan bir mashina to‘xtamasdan, qo‘pol ravishda oldingizga chiqib kelyapti. Sizda to‘xtash uchun yetarli vaqt va masofa bor.",
    "question": "YHQning 3-bandi (harakat xavfsizligi) va sog‘lom aql bo‘yicha to‘g‘ri qaror qaysi?",
    "options": [
      {"id": "A", "text": "Gazni bosib unga urilish, chunki qonun bo‘yicha u aybdor bo‘ladi"},
      {"id": "B", "text": "Harakat xavfsizligini ta’minlash va ehtimoliy halokatning oldini olish uchun tezlikni pasaytirib, to‘qnashuvdan qochish"},
      {"id": "C", "text": "Rulni qarama-qarshi yo‘nalishga tashlash"},
      {"id": "D", "text": "Oynani tushirib baqirish"}
    ],
    "correct_answer": "B",
    "explanation": "YHQning 3-bandiga muvofiq, harakat ishtirokchilari xavf tug'dirmasliklari va halokatning oldini olish uchun barcha choralarni ko'rishlari shart."
  }
];

async function seed() {
  console.log('Seeding scenarios...');
  // Delete existing scenario options to avoid orphans, Prisma cascade might handle it if we delete scenarios
  await prisma.scenarioOption.deleteMany({});
  await prisma.scenario.deleteMany({});

  for (const s of scenariosData) {
    const description = `${s.badge} ${s.title}\n\n${s.situation}\n\nSavol: ${s.question}`;
    
    await prisma.scenario.create({
      data: {
        category: s.topic,
        description: description,
        explanation: s.explanation,
        points: 10,
        options: {
          create: s.options.map(opt => ({
            text: opt.text,
            isCorrect: opt.id === s.correct_answer
          }))
        }
      }
    });
  }
  
  console.log('Successfully seeded scenarios!');
}

seed().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
