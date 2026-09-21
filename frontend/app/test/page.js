"use client";
import { useState, useEffect, useContext } from 'react';
import { fetchApi } from '../../utils/api';
import { AuthContext } from '../../context/AuthContext';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import Link from 'next/link';

export default function Test() {
  const { user } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // [{ questionId, optionId }]
  const [result, setResult] = useState(null);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const data = await fetchApi('/test');
      setQuestions(data);
    } catch (error) {
      if(error.message === "Tizimga kirishingiz kerak.") {
        alert("Test ishlash uchun tizimga kiring.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchQuestions();
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleSelect = (optionId) => {
    const newAnswers = [...answers, { questionId: questions[currentIndex].id, optionId }];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitTest(newAnswers);
    }
  };

  const submitTest = async (finalAnswers) => {
    try {
      setLoading(true);
      const data = await fetchApi('/test/submit', {
        method: 'POST',
        body: JSON.stringify({ answers: finalAnswers })
      });
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const restartTest = () => {
    setResult(null);
    setAnswers([]);
    setCurrentIndex(0);
    fetchQuestions();
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Test ishlash uchun tizimga kiring</h2>
        <Link href="/kirish" className="bg-brand-dark text-white px-6 py-3 rounded-xl hover:bg-gray-800">Kirish</Link>
      </div>
    );
  }

  if (loading) return <div className="p-12 text-center text-gray-500">Yuklanmoqda...</div>;
  if (!questions.length && !result) return <div className="p-12 text-center text-gray-500">Savollar topilmadi.</div>;

  if (result) {
    const percentage = Math.round((result.score / result.totalQuestions) * 100);
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-sm border p-8 md:p-12 text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Natija</h1>
          <div className="text-6xl font-black mb-4" style={{ color: percentage >= 80 ? '#10B981' : percentage >= 50 ? '#F59E0B' : '#EF4444' }}>
            {percentage}%
          </div>
          <p className="text-xl font-medium text-gray-600 mb-8">
            {result.score} / {result.totalQuestions} to'g'ri javob
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={restartTest} className="flex items-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold hover:bg-yellow-400">
              <RotateCcw className="w-5 h-5" /> Qayta ishlash
            </button>
            <Link href="/profil" className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-50">
              Profilga qaytish
            </Link>
          </div>
        </div>

        {result.mistakes && result.mistakes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Xatolar tahlili</h2>
            {result.mistakes.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm">
                <p className="font-bold text-gray-900 mb-4">{m.questionText}</p>
                <div className="flex items-start gap-3 mb-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider block mb-1">Sizning javobingiz:</span>
                    <span className="font-medium">{m.selectedOptionText}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-4 text-green-700 bg-green-50 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider block mb-1">To'g'ri javob:</span>
                    <span className="font-medium">{m.correctOptionText}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 p-4 bg-slate-50 rounded-lg border">
                  <strong>Izoh:</strong> {m.explanation}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8 flex justify-between items-center text-sm font-medium text-gray-500">
        <span>Savol {currentIndex + 1} / {questions.length}</span>
        <span>{currentQ.category}</span>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
          {currentQ.text}
        </h2>
        
        <div className="space-y-3">
          {currentQ.options.map((opt) => (
            <button 
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              className="w-full text-left p-4 rounded-xl border-2 hover:border-brand-dark hover:bg-slate-50 transition-colors font-medium text-gray-700"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
