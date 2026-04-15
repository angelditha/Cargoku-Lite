"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans flex flex-col">
      
      {/* NAVBAR */}
      <header className="h-20 bg-white flex items-center justify-between px-6 md:px-12 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 shrink-0">
              <Image src="/logo.png" alt="CargoKu Logo" fill className="object-contain" />
            </div>
            <span className="font-black text-xl italic tracking-tight text-slate-800">
              CargoKu <span className="text-[#008f7a]">Lite</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-500">
            <Link href="#" className="hover:text-slate-800">Layanan</Link>
            <Link href="/perusahaan" className="hover:text-slate-800">Perusahaan</Link>
          </nav>
        </div>
        <div>
          <button className="bg-[#bd3232] hover:bg-red-800 text-white font-bold py-2 px-5 rounded-full text-xs shadow-md transition-all active:scale-95">
            Diskon UMKM s/d 55%
          </button>
        </div>
      </header>

      {/* HERO SECTION DENGAN BACKGROUND HIJAU */}
      <section className="relative bg-[#008f7a] pt-20 pb-32 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-white mb-4 max-w-3xl mx-auto leading-tight">
          KIRIM MAKIN MUDAH LEWAT CARGOKU DASHBOARD
        </h1>
        <p className="text-teal-50 text-sm md:text-base font-medium">
          Solusi Logistik Ramah, Cepat, dan Transparan untuk UMKM Indonesia
        </p>
      </section>

      {/* KOTAK PENCARIAN (MELAYANG DI ATAS BACKGROUND HIJAU) */}
      <section className="relative -mt-16 px-6 z-10 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
           {/* TABS */}
           <div className="flex justify-center gap-12 border-b mb-6">
              <button className="pb-3 text-sm font-bold text-[#bd3232] border-b-2 border-[#bd3232]">Cek Resi</button>
              <button className="pb-3 text-sm font-bold text-slate-400 hover:text-slate-600 border-b-2 border-transparent">Cek Ongkir</button>
           </div>
           
           {/* INPUT SEARCH */}
           <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text" 
                placeholder="masukkan nomor resi anda untuk melacak paket..." 
                className="flex-1 border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-[#bd3232] transition-colors"
              />
              <button className="bg-[#bd3232] hover:bg-red-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all active:scale-95 text-sm shrink-0">
                Lacak
              </button>
           </div>
        </div>
      </section>

      {/* SECTION: PILIHAN TEPAT */}
      <section className="py-20 px-6 max-w-5xl mx-auto w-full text-center">
        <h2 className="text-2xl md:text-3xl font-black italic text-slate-800 mb-12">
          Pilihan tepat, pilih <span className="text-[#008f7a]">CargoKu Lite!</span>
        </h2>
        
        {/* 3 Kotak Kosong */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
           <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
           <div className="h-32 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
        </div>
      </section>

      {/* SECTION: LAYANAN PENGIRIMAN */}
      <section className="pb-24 px-6 max-w-5xl mx-auto w-full text-center">
        <h2 className="text-2xl md:text-3xl font-black italic text-slate-800 mb-2">Layanan Pengiriman</h2>
        <p className="text-sm font-medium text-slate-500 mb-12">Solusi lengkap untuk kebutuhan logistik bisnis Anda.</p>
        
        {/* 3 Kotak Kosong Besar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
           <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
           <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100"></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-8 text-center border-t border-slate-200">
        <p className="text-xs font-bold text-slate-400">© 2026 CargoKu Lite Indonesia. All Rights Reserved.</p>
      </footer>

    </div>
  );
}