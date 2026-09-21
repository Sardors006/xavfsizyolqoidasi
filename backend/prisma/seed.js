const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with Uzbek road-safety content...');

  // --- ACHIEVEMENTS ---
  const achievements = [
    { title: 'Birinchi test', description: 'Birinchi marta testni muvaffaqiyatli yakunladingiz.', conditionType: 'TESTS_COMPLETED', conditionValue: 1 },
    { title: '10 ta vaziyat', description: '10 ta real yo‘l vaziyatini tahlil qildingiz.', conditionType: 'SCENARIOS_COMPLETED', conditionValue: 10 },
    { title: '100 ball', description: 'Umumiy hisobda 100 ball yig‘dingiz. Barakalla!', conditionType: 'TOTAL_POINTS', conditionValue: 100 },
    { title: '7 kunlik challenge', description: 'Xavfsiz yo‘l challengeida 7 kun qatnashdingiz.', conditionType: 'CHALLENGE_DAYS', conditionValue: 7 },
    { title: 'Mukammal natija', description: 'Testda 100% to‘g‘ri javob berdingiz.', conditionType: 'PERFECT_TEST', conditionValue: 1 }
  ];

  for (const ach of achievements) {
    await prisma.achievement.create({ data: ach });
  }

  // --- RULES (10) ---
  const rules = [
    { title: 'Svetoforning qizil chirog‘i', explanation: 'Qizil chiroq yonganda harakatni darhol to‘xtatish shart. Bu qoida barcha yo‘l harakati qatnashchilari uchun majburiydir.', category: 'Svetofor' },
    { title: 'Piyodalar o‘tish joyi', explanation: 'Tartibga solinmagan piyodalar o‘tish joyiga yaqinlashayotgan haydovchi tezlikni kamaytirishi va piyodaga yo‘l berishi shart.', category: 'Piyodalar xavfsizligi' },
    { title: 'Xavfsizlik kamari', explanation: 'Avtomobil harakatlanayotganda haydovchi va barcha yo‘lovchilar xavfsizlik kamarini taqib olishlari majburiy.', category: 'Haydovchi xavfsizligi' },
    { title: 'Telefon bilan chalg‘ish', explanation: 'Harakat vaqtida telefondan foydalanish diqqatni pasaytiradi va halokat xavfini bir necha barobar oshiradi.', category: 'Haydovchi xavfsizligi' },
    { title: 'Tezlikni me’yoridan oshirmaslik', explanation: 'Belgilangan tezlikdan oshirish tormozlanish masofasini uzaytiradi va baxtsiz hodisalarga sabab bo‘ladi.', category: 'Haydovchi xavfsizligi' },
    { title: 'Velosipedchilar uchun yo‘lak', max: '', explanation: 'Velosipedchilar imkon qadar veloyo‘lakdan, u yo‘q bo‘lganda yo‘lning o‘ng chetidan harakatlanishlari kerak.', category: 'Velosiped va samokat xavfsizligi' },
    { title: 'Qorong‘uda nur qaytaruvchi elementlar', explanation: 'Tunda harakatlanayotgan piyodalar va velosipedchilar kiyimida nur qaytaruvchi elementlar bo‘lishi hayotiylikni saqlaydi.', category: 'Piyodalar xavfsizligi' },
    { title: 'Sariq chiroq', explanation: 'Sariq chiroq ogohlantiruvchi ma’noga ega bo‘lib, chorrahaga kirishni taqiqlaydi, faqat favqulodda to‘xtash imkonsiz bo‘lgandagina ruxsat etiladi.', category: 'Svetofor' },
    { title: 'Asosiy yo‘l belgisi', explanation: 'Asosiy yo‘lda harakatlanayotgan transport vositasi chorrahalarni kesib o‘tishda ustunlikka ega.', category: 'Yo‘l belgilari' },
    { title: 'Samokat xavfsizligi', explanation: 'Elektr samokatlarni boshqarishda dubulg‘a taqish tavsiya etiladi. Tartibga solinmagan chorrahalarda ehtiyot bo‘lish kerak.', category: 'Velosiped va samokat xavfsizligi' }
  ];

  for (const r of rules) {
    if(r.max !== undefined) delete r.max;
    await prisma.rule.create({ data: r });
  }

  // --- SCENARIOS (10) ---
  const scenariosData = [
    {
      category: 'Haydovchi xavfsizligi',
      description: 'Svetofor o‘zgarayotgan paytda (yashil miltillab, sariq yonishni boshlaganda) oldingizdagi vaziyatni ko‘rdingiz. Nima qilasiz?',
      explanation: 'Sariq chiroq ogohlantiruvchi belgi bo‘lib, to‘xtashga tayyorgarlik ko‘rishni talab qiladi. Tezlikni oshirish xavfli va qoidalarga ziddir.',
      options: [
        { text: 'Tezlikni oshirib chorrahadan o‘tib ketaman', isCorrect: false },
        { text: 'Xavfsiz tarzda tezlikni pasaytirib, to‘xtayman', isCorrect: true },
        { text: 'Vaziyatni baholamay oldindagi mashina izidan boraveraman', isCorrect: false }
      ]
    },
    {
      category: 'Piyodalar xavfsizligi',
      description: 'Siz piyodalar o‘tish joyida yo‘lni kesib o‘tmoqchisiz, ammo bitta mashina juda tez yaqinlashmoqda. Nima qilasiz?',
      explanation: 'Garchi sizda ustunlik bo‘lsa ham, mashina to‘liq to‘xtaganiga ishonch hosil qilmasdan yo‘lga chiqish hayotingiz uchun xavfli bo‘lishi mumkin.',
      options: [
        { text: 'Ustunlik menda deb darhol yo‘lga chiqaman', isCorrect: false },
        { text: 'Mashina to‘liq to‘xtaganiga ishonch hosil qilgandan so‘nggina harakatni boshlayman', isCorrect: true },
        { text: 'Yugurib o‘tib ketaman', isCorrect: false }
      ]
    },
    {
      category: 'Velosiped va samokat xavfsizligi',
      description: 'Siz velosipeddasiz va o‘ng tomonga burilmoqchisiz. Harakatingiz qanday bo‘ladi?',
      explanation: 'Boshqa yo‘l qatnashchilarini o‘z maqsadingizdan ogohlantirish uchun burilish haqida signal (qo‘l ishorasi) berishingiz shart.',
      options: [
        { text: 'Hech qanday ishorasiz, birdaniga burilaman', isCorrect: false },
        { text: 'Qo‘lim bilan burilish yo‘nalishini ko‘rsatib, ogohlantirish beraman', isCorrect: true },
        { text: 'Orqamga qaramasdan harakatni davom ettiraman', isCorrect: false }
      ]
    },
    {
      category: 'Haydovchi xavfsizligi',
      description: 'Yomg‘irli ob-havoda avtomobil boshqaryapsiz. Yo‘l sirti sirpanchiq. Nima qilasiz?',
      explanation: 'Yomg‘irli ob-havoda tormozlanish masofasi uzayadi. Tezlikni kamaytirish va oraliq masofani saqlash eng xavfsiz qarordir.',
      options: [
        { text: 'Odatdagi tezlikda harakatlanishda davom etaman', isCorrect: false },
        { text: 'Tezlikni sezilarli darajada kamaytirib, oldindagi mashina bilan masofani oshiraman', isCorrect: true }
      ]
    },
    {
      category: 'Yo‘l belgilari',
      description: 'Yo‘l chetida "To‘xtash taqiqlangan" belgisini ko‘rdingiz, lekin do‘konga bir daqiqaga kirib chiqishingiz kerak. Nima qilasiz?',
      explanation: 'Belgiga qat’iy amal qilish kerak. To‘xtash qoidasini buzish boshqa ishtirokchilarga xalaqit berishi mumkin.',
      options: [
        { text: 'Mashinani "avariyka" (ogohlantiruvchi chiroqlar) yoqib qoldiraman', isCorrect: false },
        { text: 'Ruxsat etilgan boshqa joy qidirib, mashinani o‘sha joyga qo‘yaman', isCorrect: true }
      ]
    },
    {
      category: 'Piyodalar xavfsizligi',
      description: 'Tungi vaqtda ko‘cha chetida ketyapsiz. Yo‘lak yo‘q.',
      explanation: 'Piyodalar yo‘lkasi bo‘lmaganda, qorong‘uda nur qaytaruvchi elementlar kiyib, transport harakatiga qarama-qarshi tomondan yurish xavfsiz.',
      options: [
        { text: 'Mashinalar harakati yo‘nalishi bo‘ylab, o‘ng tomondan yuraman', isCorrect: false },
        { text: 'Mashinalar harakatiga qarama-qarshi tomondan (chapdan) yuraman', isCorrect: true }
      ]
    },
    {
      category: 'Haydovchi xavfsizligi',
      description: 'Siz asosiy yo‘lda ketyapsiz. O‘ng tomondagi ikkilamchi yo‘ldan mashina chiqib kelmoqda. Nima qilasiz?',
      explanation: 'Asosiy yo‘lda bo‘lsangiz ham, xavfsizlik uchun hushyorlikni yo‘qotmaslik va agar u yo‘l bermasa to‘qnashuvni oldini olish muhimdir.',
      options: [
        { text: 'Faqat o‘z ustunligimni o‘ylab, tezlikni pasaytirmayman', isCorrect: false },
        { text: 'Ustunlik menda bo‘lsa ham, vaziyatni kuzatib ehtiyot chorasini ko‘raman', isCorrect: true }
      ]
    },
    {
      category: 'Velosiped va samokat xavfsizligi',
      description: 'Samokatda piyodalar gavjum bo‘lgan xiyobon orqali o‘tishingiz kerak.',
      explanation: 'Piyodalar yo‘lagida piyodalar ustunlikka ega. Tezlikni pasaytirish yoki samokatni yetaklab o‘tish talab etiladi.',
      options: [
        { text: 'Signal chalib, tezlikni pasaytirmay odamlar orasidan o‘taman', isCorrect: false },
        { text: 'Tezlikni piyodalar tezligigacha pasaytiraman yoki samokatni yetaklab o‘taman', isCorrect: true }
      ]
    },
    {
      category: 'Haydovchi xavfsizligi',
      description: 'Harakat paytida telefoningizga muhim xabar keldi.',
      explanation: 'Rulda telefondan foydalanish eng xavfli odatlardan biridir. Bu sizning e’tiboringizni yo‘ldan chalg‘itadi.',
      options: [
        { text: 'Yo‘lga qarab turib xabarni tezda o‘qib olaman', isCorrect: false },
        { text: 'Avtomobilni xavfsiz joyda to‘xtatgandan so‘ng xabarni o‘qiyman', isCorrect: true }
      ]
    },
    {
      category: 'Svetofor',
      description: 'Chorrahada yashil chiroq yondi, biroq chorraha o‘rtasida tirbandlik tufayli mashinalar turibdi.',
      explanation: 'Chorrahada tiqilinch bo‘lsa, yashil chiroq yongan taqdirda ham chorrahaga kirish taqiqlanadi.',
      options: [
        { text: 'Yashil chiroq bo‘lgani uchun darhol chorrahaga kiraman', isCorrect: false },
        { text: 'Chorraha bo‘shamaguncha kutib turaman, chunki kirish taqiqlangan', isCorrect: true },
        { text: 'Tirbandlik orasidan o‘tib ketishga harakat qilaman', isCorrect: false }
      ]
    }
  ];

  for (const sd of scenariosData) {
    await prisma.scenario.create({
      data: {
        category: sd.category,
        description: sd.description,
        explanation: sd.explanation,
        options: {
          create: sd.options
        }
      }
    });
  }

  // --- QUESTIONS (20) ---
  const questionsData = [
    { text: 'Piyodalar o‘tish joyiga yaqinlashganda haydovchi qanday harakat qilishi kerak?', options: [ {text: 'Tezlikni oshirish', isCorrect: false}, {text: 'Tezlikni kamaytirish va piyodaga yo‘l berish', isCorrect: true}, {text: 'Signal chalish', isCorrect: false} ], category: 'Piyodalar', explanation: 'Piyodalar o‘tish joyida har doim ehtiyot bo‘lish va piyodaga ustunlik berish kerak.' },
    { text: 'Yashil chiroq miltillashni boshlasa nima qilish kerak?', options: [ {text: 'Tezlikni oshirish', isCorrect: false}, {text: 'To‘xtashga tayyorgarlik ko‘rish', isCorrect: true}, {text: 'Orqaga qaytish', isCorrect: false} ], category: 'Svetofor', explanation: 'Yashil chiroqning miltillashi ruxsat beruvchi vaqt tugayotganini bildiradi.' },
    { text: 'Xavfsizlik kamarini qachon taqish kerak?', options: [ {text: 'Faqat uzoq safarlarda', isCorrect: false}, {text: 'Avtomobil harakatlanishni boshlashdan oldin', isCorrect: true}, {text: 'Tirbandlikda', isCorrect: false} ], category: 'Haydovchi', explanation: 'Kamar doim taqilgan bo‘lishi majburiydir.' },
    { text: 'Tunda velosiped boshqarishda eng muhimi nima?', options: [ {text: 'Yorqin rangli kiyim', isCorrect: false}, {text: 'Nur qaytaruvchi elementlar va chiroqlar', isCorrect: true}, {text: 'Qora kiyim', isCorrect: false} ], category: 'Velosiped', explanation: 'Nur qaytaruvchi vositalar ko‘rinishni ta’minlaydi.' },
    { text: 'Asosiy yo‘l belgisi nimani anglatadi?', options: [ {text: 'Ustunlikka ega bo‘lish', isCorrect: true}, {text: 'Yo‘l berish kerakligi', isCorrect: false}, {text: 'Tezlikni cheklash', isCorrect: false} ], category: 'Belgilar', explanation: 'Asosiy yo‘l boshqa yo‘llarga nisbatan chorrahada ustunlik beradi.' },
    { text: 'Sariq chiroq yonganda nima qilinadi?', options: [ {text: 'Harakatni boshlash mumkin', isCorrect: false}, {text: 'Chorrahaga kirish taqiqlanadi', isCorrect: true}, {text: 'Piyodalarga yo‘l bermaslik mumkin', isCorrect: false} ], category: 'Svetofor', explanation: 'Sariq chiroq ruxsat etuvchi emas, to‘xtashga chorlaydi.' },
    { text: 'Yo‘lda telefon bilan gaplashish qanday oqibatga olib keladi?', options: [ {text: 'Diqqat pasayadi, xavf oshadi', isCorrect: true}, {text: 'Vaqt tejaladi', isCorrect: false}, {text: 'Reaksiya tezlashadi', isCorrect: false} ], category: 'Xavfsizlik', explanation: 'Diqqat chalg‘ishi eng og‘ir baxtsiz hodisalarga sabab bo‘ladi.' },
    { text: 'Tartibga solinmagan chorrahada kim ustunlikka ega?', options: [ {text: 'Chap tomondan kelayotgan mashina', isCorrect: false}, {text: 'O‘ng tomondan kelayotgan mashina (o‘ng qo‘l qoidasi)', isCorrect: true}, {text: 'Tezroq kelayotgan mashina', isCorrect: false} ], category: 'Qoidalar', explanation: 'Bunday hollarda o‘ngdagi to‘siq qoidasi ishlaydi.' },
    { text: 'Piyodalar yo‘lkasi bo‘lmasa, piyoda yo‘lning qaysi qismidan yurishi kerak?', options: [ {text: 'Avtomobillar harakati yo‘nalishida', isCorrect: false}, {text: 'Avtomobillar harakatiga qarama-qarshi', isCorrect: true} ], category: 'Piyodalar', explanation: 'Qarama-qarshi tomondan yurilganda mashinani erta ko‘rish mumkin.' },
    { text: 'Bolalarni avtomobilda qanday tashish kerak?', options: [ {text: 'Maxsus avtomobil o‘rindig‘ida', isCorrect: true}, {text: 'Old o‘rindiqda', isCorrect: false}, {text: 'Kattalar tizzasida', isCorrect: false} ], category: 'Xavfsizlik', explanation: 'Kichik yoshdagi bolalar uchun maxsus bolalar o‘rindig‘i hayotni saqlaydi.' },
    { text: 'Qaysi holatda oldindagi mashinani quvib o‘tish taqiqlanadi?', options: [ {text: 'Chorrahalarda', isCorrect: true}, {text: 'To‘g‘ri va keng yo‘lda', isCorrect: false}, {text: 'Faqat tunda', isCorrect: false} ], category: 'Qoidalar', explanation: 'Chorrahalarda quvib o‘tish juda xavfli va qoidalar bilan taqiqlangan.' },
    { text: 'Velosipedchilarga yo‘lda yonma-yon yurish ruxsat etiladimi?', options: [ {text: 'Ha, suhbatlashish uchun', isCorrect: false}, {text: 'Yo‘q, ular bir qatorda harakatlanishi kerak', isCorrect: true} ], category: 'Velosiped', explanation: 'Xavfsizlik uchun velosipedlar faqat bitta qatorda harakatlanishi shart.' },
    { text: 'Samokatda yo‘lning qatnov qismiga chiqish mumkinmi?', options: [ {text: 'Istalgan vaqtda mumkin', isCorrect: false}, {text: 'Faqat maxsus ajratilgan yo‘lak bo‘lmaganda va muayyan qoidalar asosida', isCorrect: true} ], category: 'Velosiped', explanation: 'Samokatlar iloji boricha veloyo‘laklar yoki xavfsiz qismlardan yurishi lozim.' },
    { text: 'Avtomobil tormoz yo‘liga qaysi omil ta’sir qilmaydi?', options: [ {text: 'Yo‘l qoplamasi namligi', isCorrect: false}, {text: 'Shinalarning holati', isCorrect: false}, {text: 'Radiodagi ovoz balandligi', isCorrect: true} ], category: 'Fizika', explanation: 'Tormoz yo‘li tezlik, shina, og‘irlik va yo‘l sirtiga bog‘liq.' },
    { text: 'Avtomobil oynalarini qoraytirish qanday xavf tug‘diradi?', options: [ {text: 'Mashina qiziqib ketadi', isCorrect: false}, {text: 'Ko‘rinuvchanlikni, ayniqsa tunda, pasaytiradi', isCorrect: true} ], category: 'Xavfsizlik', explanation: 'Tunda va yomg‘irda qoraytirilgan oynalar orqali vaziyatni nazorat qilish qiyinlashadi.' },
    { text: 'Tirbandlikda tez-tez qatorni o‘zgartirish nima deyiladi?', options: [ {text: 'To‘g‘ri harakat', isCorrect: false}, {text: 'Xavfli va tajovuzkor haydash', isCorrect: true} ], category: 'Haydovchi', explanation: 'Tirbandlikda ortiqcha harakat qilish faqatgina asablarni buzadi va avariyaga olib keladi.' },
    { text: 'Tormoz pedalini keskin bosishning xavfi nima?', options: [ {text: 'Mashinaning sirpanib, boshqaruvni yo‘qotishiga sabab bo‘lishi', isCorrect: true}, {text: 'Benzin tejashi', isCorrect: false} ], category: 'Haydovchi', explanation: 'Keskin tormozlanish g‘ildiraklar qulflanishiga va sirpanishga sabab bo‘ladi.' },
    { text: 'Yo‘l chetidagi qizil uchburchak shaklidagi belgilar qanday ma’noni anglatadi?', options: [ {text: 'Ogohlantiruvchi belgilar', isCorrect: true}, {text: 'Taqiqlovchi belgilar', isCorrect: false} ], category: 'Belgilar', explanation: 'Uchburchak belgilar odatda haydovchini yaqinlashayotgan xavfdan ogohlantiradi.' },
    { text: 'Avtomobil g‘ildiraklari bosimi past bo‘lsa nima bo‘ladi?', options: [ {text: 'Boshqaruv yomonlashadi va yonilg‘i sarfi oshadi', isCorrect: true}, {text: 'Mashina tezlashadi', isCorrect: false} ], category: 'Texnik holat', explanation: 'Past bosimli shinalar bilan mashinani boshqarish qiyinlashadi.' },
    { text: 'Yomg‘ir yog‘ishni boshlagan ilk daqiqalarda yo‘l nega xavfli bo‘ladi?', options: [ {text: 'Chunangdagi chang va moy qoldiqlari suv bilan aralashib sirpanchiq plyonka hosil qiladi', isCorrect: true}, {text: 'Mashina og‘irlashadi', isCorrect: false} ], category: 'Ob-havo', explanation: 'Yomg‘ir boshida yo‘l juda silliq va xavfli holatga keladi.' }
  ];

  for (const q of questionsData) {
    await prisma.question.create({
      data: {
        text: q.text,
        category: q.category,
        explanation: q.explanation,
        options: {
          create: q.options
        }
      }
    });
  }

  // --- CHALLENGE DAYS (30) ---
  const challengeDays = [];
  for(let i = 1; i <= 30; i++) {
    challengeDays.push({
      dayNumber: i,
      title: `${i}-kun: Yo‘l xavfsizligi qadamlari`,
      description: `Bugungi vazifangiz: ${i % 3 === 0 ? 'Yangi yo‘l qoidasini o‘qing va 5 ta savolga javob bering.' : (i % 2 === 0 ? 'Bittadan real vaziyatni tahlil qiling va qaror qabul qiling.' : 'Eski xatolaringizni takrorlang va xavfsiz harakatlanish haqida maqola o‘qing.')}`,
      rewardPoints: 10 + (i % 5 === 0 ? 10 : 0) // Bonus points every 5 days
    });
  }

  for (const cd of challengeDays) {
    await prisma.challengeDay.create({ data: cd });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
