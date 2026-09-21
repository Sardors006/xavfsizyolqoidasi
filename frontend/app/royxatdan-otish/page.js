"use client";
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      return setError('Parollar mos kelmadi.');
    }
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Ro‘yxatdan o‘tish</h2>
          <p className="mt-2 text-sm text-gray-600">O‘z xavfsizligingizni bugundan boshlang</p>
        </div>
        
        {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">{error}</div>}
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ism</label>
            <input type="text" required value={name} onChange={e => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email manzili</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parol</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parolni tasdiqlang</label>
            <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-brand-dark focus:border-brand-dark" />
          </div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-brand-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-colors mt-6">
            Ro‘yxatdan o‘tish
          </button>
        </form>
        <div className="text-center">
          <Link href="/kirish" className="font-medium text-brand-dark hover:underline">
            Allaqachon akkauntingiz bormi? kiring
          </Link>
        </div>
      </div>
    </div>
  );
}
