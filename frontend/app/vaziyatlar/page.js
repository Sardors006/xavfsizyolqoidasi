"use client";
import { useState, useEffect, useContext, Suspense } from 'react';
import { fetchApi } from '../../utils/api';
import { AuthContext } from '../../context/AuthContext';
import { useSearchParams } from 'next/navigation';
import { AlertTriangle, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

function ScenariosContent() {
  const { user } = useContext(AuthContext);
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [scenarios, setScenarios] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  
  const [fastMode, setFastMode] = useState(false); // Quick Decision Mini-Game flag

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        const url = initialCategory ? `/scenarios?category=${initialCategory}` : '/scenarios';
        const data = await fetchApi(url);
        // Shuffle scenarios to make it interesting
        setScenarios(data.sort(() => 0.5 - Math.random()));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchScenarios();
  }, [initialCategory]);

  const handleAnswer = async (optionId) => {
    if (!user) {
      alert("Natijalaringizni saqlash uchun tizimga kiring!");
      // Proceed without saving to let guest experience it
      // but without API validation we can't show explanation securely.
      // For MVP, we force login for scenarios, or we just allow playing but result is fetched from backend.
    }
    
    try {
      const data = await fetchApi(`/scenarios/${scenarios[currentIndex].id}/answer`, {
        method: 'POST',
        body: JSON.stringify({ optionId })
      });
      setResult(data);
    } catch (error) {
      if(error.message === "Tizimga kirishingiz kerak.") {
        alert("Vaziyatlarni ishlash uchun tizimga kirishingiz kerak.");
      }
    }
  };

  const nextScenario = () => {
    setResult(null);
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex(curr => curr + 1);
    }
  };

  if (loading) return <div className="p-12 text-center text-gray-500">Yuklanmoqda...</div>;
  if (!scenarios.length) return <div className="p-12 text-center text-gray-500">Vaziyatlar topilmadi.</div>;

  const current = scenarios[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Vaziyatlar
          </h1>
          <p className="text-gray-500 mt-2">Vaziyat #{currentIndex + 1} / {scenarios.length} • {current.category}</p>
        </div>
        <button 
          onClick={() => setFastMode(!fastMode)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${fastMode ? 'bg-brand-red text-white' : 'bg-brand-yellow text-brand-dark'}`}
        >
          <Zap className="w-4 h-4" /> 1 soniyalik qaror
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-12">
        <div className="mb-8">
          <div className="h-48 md:h-64 bg-slate-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border-2 border-slate-200">
            {current.imageUrl ? (
              <img src={current.imageUrl} alt={current.category} className="w-full h-full object-cover" />
            ) : (
              <span className="text-slate-400 font-medium">Bu yerda vaziyat tasviri bo'ladi</span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {current.description}
          </h2>
        </div>

        {result ? (
          <div className={`p-8 rounded-2xl border-2 ${result.isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            <div className="flex items-start gap-4">
              {result.isCorrect ? (
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              )}
              <div>
                <h3 className={`text-xl font-bold mb-2 ${result.isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {result.isCorrect ? `To'g'ri qaror! (+${result.earnedPoints} ball)` : 'Xavfli qaror'}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">{result.explanation}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              {currentIndex < scenarios.length - 1 ? (
                <button onClick={nextScenario} className="flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800 font-medium">
                  Keyingi vaziyat <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <Link href="/profil" className="flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800 font-medium">
                  Natijalarni ko'rish <ChevronRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className={`grid gap-4 ${fastMode ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {current.options.map((opt) => (
              <button 
                key={opt.id}
                onClick={() => handleAnswer(opt.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all group ${
                  fastMode 
                  ? 'text-center font-bold text-xl hover:bg-brand-dark hover:text-white hover:border-brand-dark' 
                  : 'hover:border-brand-dark hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={fastMode ? 'mx-auto' : 'text-lg text-gray-800 font-medium'}>{fastMode ? (opt.text.length > 20 ? 'DAVOM ETISH' : 'TO‘XTASH') : opt.text}</span>
                  {!fastMode && <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-dark" />}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Scenarios() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-gray-500">Yuklanmoqda...</div>}>
      <ScenariosContent />
    </Suspense>
  );
}
