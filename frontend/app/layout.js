import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XAVFSIZ YO‘L - Yo‘lda har bir qaror muhim",
  description: "Yo‘l harakati qoidalarini bilish yetarli emas. Real vaziyatlarda to‘g‘ri qaror qilishni mashq qiling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50`}>
        <AuthProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white border-t py-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} XAVFSIZ YO‘L. Barcha huquqlar himoyalangan.</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
