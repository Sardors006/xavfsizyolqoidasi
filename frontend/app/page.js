"use client";
import Link from 'next/link';
import { ArrowRight, Car, ShieldAlert, PhoneOff, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchApi } from '../utils/api';

export default function Home() {
  const [dailyRule, setDailyRule] = useState(null);

  useEffect(() => {
    fetchApi('/rules/daily').then(data => setDailyRule(data)).catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-brand-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block bg-brand-yellow/20 text-brand-yellow font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            O‘zbekiston yo‘llari uchun maxsus
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Yo‘lda har bir <span className="text-brand-yellow">qaror muhim.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Yo‘l harakati qoidalarini bilish yetarli emas. Real vaziyatlarda to‘g‘ri qaror qilishni mashq qiling va xavfsizligingizni ta'minlang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/vaziyatlar" className="w-full sm:w-auto bg-brand-yellow text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
              Vaziyatni boshlash <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/test" className="w-full sm:w-auto bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition flex items-center justify-center gap-2 text-lg border border-white/20">
              Testni boshlash
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 w-full space-y-20">
        
        {/* User Type Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Siz qanday yo‘l foydalanuvchisiz?</h2>
            <p className="text-gray-500 mt-2">O‘zingizga mos yo‘nalishni tanlang va vaziyatlarni ko‘ring</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Piyoda', 'Haydovchi', 'Velosipedchi', 'Samokatchi'].map((type, i) => (
              <Link href={`/vaziyatlar?category=${type === 'Piyoda' ? 'Piyodalar xavfsizligi' : type === 'Haydovchi' ? 'Haydovchi xavfsizligi' : 'Velosiped va samokat xavfsizligi'}`} key={i} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors text-3xl">
                  {i === 0 ? '🚶' : i === 1 ? '🚗' : i === 2 ? '🚲' : '🛴'}
                </div>
                <span className="font-semibold text-gray-800">{type}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Daily Rule & Mistakes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Daily Rule */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-brand-green/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-green/20 p-2 rounded-lg">
                <Zap className="text-brand-green w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Bugungi qoida</h3>
            </div>
            {dailyRule ? (
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-brand-dark">{dailyRule.title}</h4>
                <p className="text-gray-600 leading-relaxed">{dailyRule.explanation}</p>
                <Link href="/qoidalar" className="inline-block mt-4 text-brand-green font-medium hover:underline">
                  Barcha qoidalarni ko‘rish &rarr;
                </Link>
              </div>
            ) : (
              <div className="animate-pulse h-24 bg-slate-100 rounded-xl w-full"></div>
            )}
          </section>

          {/* Dangerous Mistakes */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-brand-red/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-red/20 p-2 rounded-lg">
                <ShieldAlert className="text-brand-red w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Yo‘ldagi xavfli xatolar</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneOff className="text-brand-red w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Telefon bilan chalg‘ish</h4>
                  <p className="text-sm text-gray-500">Diqqatni yo‘ldan uzish eng ko‘p baxtsiz hodisalarga sabab bo‘ladi.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Car className="text-brand-red w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-800">Tezlikni oshirish</h4>
                  <p className="text-sm text-gray-500">Yuqori tezlik tormozlanish vaqtini va masofasini keskin oshiradi.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
