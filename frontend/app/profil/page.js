"use client";
import { useState, useEffect, useContext } from 'react';
import { fetchApi } from '../../utils/api';
import { AuthContext } from '../../context/AuthContext';
import { User, Star, Award, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchApi('/profile')
        .then(res => setData(res))
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Profilni ko‘rish uchun tizimga kiring.</h2>
        <Link href="/kirish" className="bg-brand-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800">Kirish</Link>
      </div>
    );
  }

  if (loading) return <div className="p-12 text-center text-gray-500">Yuklanmoqda...</div>;
  if (!data) return <div className="p-12 text-center text-gray-500">Ma'lumot topilmadi.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Column: User Info & Main Stats */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-brand-dark"></div>
            <div className="w-24 h-24 bg-brand-yellow text-brand-dark rounded-full mx-auto flex items-center justify-center text-4xl font-bold border-4 border-white relative z-10 mb-4 shadow-md">
              <User size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{data.user.name}</h2>
            <p className="text-gray-500 mb-6">{data.user.email}</p>
            
            <div className="inline-block bg-brand-green/10 text-brand-green px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-brand-green/20">
              Daraja: {data.user.level}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t pt-6">
              <div>
                <p className="text-gray-500 text-sm font-medium">Umumiy ball</p>
                <p className="text-3xl font-black text-brand-dark">{data.user.points}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">To'g'ri javoblar</p>
                <p className="text-3xl font-black text-brand-dark">{data.stats.correctPercentage}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border">
            <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">Statistika</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-700 font-medium">
                <span>Ishlangan testlar:</span>
                <span className="bg-slate-100 px-3 py-1 rounded-lg">{data.stats.testsCompleted}</span>
              </li>
              <li className="flex justify-between text-gray-700 font-medium">
                <span>Tahlil qilingan vaziyatlar:</span>
                <span className="bg-slate-100 px-3 py-1 rounded-lg">{data.stats.scenariosCompleted}</span>
              </li>
              <li className="flex justify-between text-gray-700 font-medium">
                <span>Challenge kunlari:</span>
                <span className="bg-slate-100 px-3 py-1 rounded-lg">{data.stats.challengeDaysCompleted} / 30</span>
              </li>
            </ul>
          </div>
          
          <button onClick={logout} className="w-full text-center text-red-500 hover:text-red-700 font-medium p-4 bg-white rounded-2xl border shadow-sm transition-colors">
            Tizimdan chiqish
          </button>
        </div>

        {/* Right Column: Achievements & Activity */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="text-brand-yellow" />
              Yutuqlar
            </h3>
            {data.achievements.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {data.achievements.map(ach => (
                  <div key={ach.id} className="flex items-start gap-4 p-4 border rounded-2xl bg-gradient-to-br from-yellow-50 to-white border-yellow-200">
                    <div className="bg-brand-yellow text-brand-dark p-2 rounded-xl flex-shrink-0">
                      <Star size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{ach.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <Shield className="mx-auto text-slate-300 mb-2 w-12 h-12" />
                <p className="text-gray-500 font-medium">Hozircha yutuqlar yo'q. Vaziyatlarni ishlang va ball yig'ing!</p>
              </div>
            )}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-brand-green" />
              So'nggi faollik
            </h3>
            {data.recentActivity.length > 0 ? (
              <ul className="space-y-4">
                {data.recentActivity.map((act, i) => (
                  <li key={i} className="flex justify-between items-center p-4 border rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-xs font-bold rounded-lg ${act.type === 'TEST' ? 'bg-blue-100 text-blue-700' : act.type === 'SCENARIO' ? 'bg-purple-100 text-purple-700' : 'bg-brand-yellow/30 text-brand-dark'}`}>
                        {act.type}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {new Date(act.date).toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <span className="font-bold text-brand-green">+{act.score} ball</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center py-4">Hozircha faollik yo'q.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
