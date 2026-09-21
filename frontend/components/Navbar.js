"use client";
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-brand-yellow p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-brand-dark" />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-dark hidden sm:block">XAVFSIZ YO‘L</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="text-gray-600 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">Bosh sahifa</Link>
              <Link href="/qoidalar" className="text-gray-600 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">Qoidalar</Link>
              <Link href="/vaziyatlar" className="text-gray-600 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">Vaziyatlar</Link>
              <Link href="/test" className="text-gray-600 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">Test</Link>
              <Link href="/challenge" className="text-gray-600 hover:text-brand-dark px-3 py-2 text-sm font-medium transition-colors">Challenge</Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-4">
                <Link href="/profil" className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-dark">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">{user.name}</span>
                </Link>
                <button onClick={logout} className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors">Chiqish</button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link href="/kirish" className="text-sm font-medium text-gray-700 hover:text-brand-dark px-3 py-2">Kirish</Link>
                <Link href="/royxatdan-otish" className="text-sm font-medium bg-brand-dark text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Ro‘yxatdan o‘tish</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - simple scrollable row for MVP */}
      <div className="md:hidden border-t overflow-x-auto">
        <div className="flex space-x-4 px-4 py-3 min-w-max">
          <Link href="/" className="text-gray-600 text-sm font-medium">Bosh sahifa</Link>
          <Link href="/qoidalar" className="text-gray-600 text-sm font-medium">Qoidalar</Link>
          <Link href="/vaziyatlar" className="text-gray-600 text-sm font-medium">Vaziyatlar</Link>
          <Link href="/test" className="text-gray-600 text-sm font-medium">Test</Link>
          <Link href="/challenge" className="text-gray-600 text-sm font-medium">Challenge</Link>
        </div>
      </div>
    </nav>
  );
}
