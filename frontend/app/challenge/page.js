"use client";
import { useState, useEffect, useContext } from 'react';
import { fetchApi } from '../../utils/api';
import { AuthContext } from '../../context/AuthContext';
import { Trophy, Check, Lock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Challenge() {
  const { user } = useContext(AuthContext);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchApi('/challenge')
        .then(data => setDays(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user]);

  const completeDay = async (dayId) => {
    try {
      await fetchApi(`/challenge/${dayId}/complete`, { method: 'POST' });
      // Refresh
      const data = await fetchApi('/challenge');
      setDays(data);
    } catch (error) {
      alert(error.message);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Challenge'da qatnashish uchun tizimga kiring</h2>
        <Link href="/kirish" className="bg-brand-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800">Kirish</Link>
      </div>
    );
  }

  if (loading) return <div className="p-12 text-center text-gray-500">Yuklanmoqda...</div>;

  const completedCount = days.filter(d => d.isCompleted).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-brand-dark text-white rounded-3xl p-8 mb-12 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl -z-10"></div>
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
            <Trophy className="text-brand-yellow h-10 w-10" />
            30 kunlik xavfsiz yo‘l challenge
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Har kuni kichik vazifalarni bajaring va yo‘l harakati xavfsizligi bo‘yicha bilimlaringizni oshirib boring.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white/20 h-3 rounded-full overflow-hidden">
              <div className="bg-brand-yellow h-full rounded-full transition-all duration-500" style={{ width: `${(completedCount / 30) * 100}%` }}></div>
            </div>
            <span className="font-bold text-brand-yellow">{completedCount} / 30 kun</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {days.map((day, idx) => {
          // A day is accessible if it is the next uncompleted day or already completed
          const isAccessible = day.isCompleted || (idx === 0) || (days[idx - 1]?.isCompleted);

          return (
            <div 
              key={day.id} 
              className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center text-center h-40 transition-all ${
                day.isCompleted 
                  ? 'bg-brand-green/10 border-brand-green/30 cursor-default' 
                  : isAccessible 
                    ? 'bg-white border-brand-yellow hover:border-brand-dark cursor-pointer shadow-sm hover:shadow-md' 
                    : 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
              }`}
              onClick={() => {
                if (isAccessible && !day.isCompleted) {
                  if(confirm(`${day.title}\n\n${day.description}\n\nBuni bajardingizmi?`)) {
                    completeDay(day.id);
                  }
                }
              }}
            >
              <span className={`text-sm font-bold mb-2 ${day.isCompleted ? 'text-brand-green' : 'text-gray-500'}`}>
                Kun {day.dayNumber}
              </span>
              {day.isCompleted ? (
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mb-2">
                  <Check className="w-6 h-6" />
                </div>
              ) : isAccessible ? (
                <div className="w-12 h-12 bg-brand-yellow/20 text-brand-dark rounded-full flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-slate-200 text-slate-400 rounded-full flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5" />
                </div>
              )}
              <span className="text-xs font-medium text-gray-500">+{day.rewardPoints} ball</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
