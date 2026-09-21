"use client";
import { useState, useEffect } from 'react';
import { fetchApi } from '../../utils/api';
import { BookOpen } from 'lucide-react';

export default function Rules() {
  const [rules, setRules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi('/rules')
      .then(data => {
        setRules(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const categories = [...new Set(rules.map(r => r.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <BookOpen className="text-brand-dark h-8 w-8" />
          Yo‘l harakati qoidalari
        </h1>
        <p className="text-gray-600 text-lg">Asosiy qoidalar va ularning qisqacha izohi bilan tanishing.</p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white p-6 rounded-2xl h-48 border"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {categories.map(category => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rules.filter(r => r.category === category).map(rule => (
                  <div key={rule.id} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-yellow group-hover:bg-brand-dark transition-colors"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{rule.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{rule.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
