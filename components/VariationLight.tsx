
import React from 'react';
import { PageData } from '../types';
import { CheckIcon, AlertTriangleIcon, ShieldCheckIcon, GiftIcon } from './Icons';

interface Props {
  data: PageData;
}

const VariationLight: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white">
      {/* Top Bar */}
      <div className="bg-zinc-950 text-white py-2 text-center text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase border-b border-white/10">
        Oferta de Contingência Ativada • Disponibilidade Limitada
      </div>

      <div className="max-w-xl mx-auto px-6 pt-16 pb-24">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Acesso Restrito
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-zinc-950 mb-6 tracking-tight leading-[1.1]">
            Não saia de mãos <span className="text-red-600 underline">vazias</span>.
          </h1>
          <p className="text-zinc-500 font-medium text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Pricing Info */}
        <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-200 mb-8 shadow-sm">
          <div className="flex flex-col items-center">
            <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest mb-2">Preço Final Hoje</span>
            <div className="flex items-baseline gap-2 mb-8">
               <span className="text-2xl font-bold text-zinc-400 line-through italic">{data.oldPrice}</span>
               <span className="text-6xl font-black text-zinc-950">{data.newPrice}</span>
            </div>
            
            <a 
              href={data.checkoutUrl}
              className="group relative w-full bg-zinc-950 text-white py-5 rounded-2xl text-center overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative text-lg font-black uppercase tracking-tight">
                {data.ctaText}
              </span>
            </a>
            
            <p className="mt-6 flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
              <span className="animate-ping block w-2 h-2 rounded-full bg-red-600"></span>
              {data.alertText}
            </p>
          </div>
        </div>

        {/* Features list */}
        <div className="grid gap-6 mb-12">
          {data.benefits.map((b, i) => (
            <div key={i} className="flex gap-4 p-2">
              <div className="bg-zinc-100 p-2 rounded-lg">
                <CheckIcon className="w-5 h-5 text-zinc-900" />
              </div>
              <p className="text-zinc-600 font-medium leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="space-y-4 mb-12">
          <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-6">Bônus Exclusivos Inclusos</h3>
          {data.bonusList.map((bonus, i) => (
            <div key={i} className="group flex items-center justify-between p-5 bg-white border border-zinc-200 rounded-2xl hover:border-zinc-400 transition-colors cursor-default">
              <div className="flex items-center gap-4">
                <div className="bg-zinc-50 p-2 rounded-xl group-hover:bg-zinc-100 transition-colors">
                  <GiftIcon className="w-5 h-5 text-zinc-400" />
                </div>
                <span className="font-bold text-zinc-800">{bonus.title}</span>
              </div>
              <span className="text-zinc-300 text-sm font-bold italic">{bonus.price}</span>
            </div>
          ))}
        </div>

        {/* Guarantee Seal */}
        <div className="border-t border-zinc-100 pt-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
            <ShieldCheckIcon className="w-8 h-8 text-zinc-300" />
          </div>
          <h4 className="text-lg font-bold text-zinc-950 mb-2">Garantia Total de Satisfação</h4>
          <p className="text-zinc-500 text-sm max-w-xs">
            Teste por {data.guaranteeDays} dias. Se não gostar, basta um e-mail para receber seu dinheiro de volta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VariationLight;
