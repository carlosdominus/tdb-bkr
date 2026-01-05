
import React from 'react';
import { PageData } from '../types';
import { CheckIcon, AlertTriangleIcon, ShieldCheckIcon, GiftIcon } from './Icons';

interface Props {
  data: PageData;
}

const VariationDark: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      {/* Top Bar */}
      <div className="bg-red-600 py-3 px-4 text-center text-xs md:text-sm font-black tracking-widest uppercase">
        ⚡ OFERTA EXCLUSIVA - NUNCA MAIS VERÁ ESTE PREÇO
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="bg-red-500/10 p-3 rounded-full border border-red-500/20">
            <AlertTriangleIcon className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight italic">
            {data.title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-lg">
            {data.subtitle}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8 text-center">
          <p className="text-zinc-500 line-through text-lg mb-1">De {data.oldPrice} por apenas</p>
          <div className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-zinc-600 text-3xl">R$</span>{data.newPrice.replace('R$', '')}
          </div>
          
          <a 
            href={data.checkoutUrl}
            className="group block w-full bg-green-500 hover:bg-green-400 text-black py-5 rounded-xl text-xl font-black uppercase tracking-tight transition-all duration-300 animate-pulse-custom shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-95"
          >
            {data.ctaText}
          </a>
        </div>

        {/* Urgency Alert */}
        <div className="w-full bg-red-950/30 border border-red-900/50 text-red-400 px-6 py-4 rounded-xl text-center font-bold text-sm md:text-base mb-10">
          {data.alertText}
        </div>

        {/* Benefits Section */}
        <div className="w-full space-y-4 mb-10">
          {data.benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 items-start bg-zinc-900/50 p-5 rounded-xl border border-zinc-800">
              <div className="mt-1 bg-green-500/20 p-1 rounded">
                <CheckIcon className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-zinc-200 text-sm md:text-base font-semibold leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="w-full mb-10">
          <h3 className="text-xl font-black uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
            <GiftIcon className="w-6 h-6" /> O Que Você Recebe
          </h3>
          <div className="grid gap-3">
            {data.bonusList.map((bonus, i) => (
              <div key={i} className="flex justify-between items-center bg-zinc-900 border-l-4 border-green-500 p-4 rounded-r-xl">
                <div>
                  <span className="text-xs font-bold text-green-500 uppercase tracking-widest block mb-1">Bônus #{i + 1}</span>
                  <p className="text-zinc-100 font-bold">{bonus.title}</p>
                </div>
                <div className="text-zinc-500 line-through font-bold text-sm whitespace-nowrap ml-4">
                  {bonus.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center">
          <ShieldCheckIcon className="w-12 h-12 text-zinc-500 mb-4" />
          <h4 className="text-xl font-black uppercase text-white mb-2">Garantia Blindada de {data.guaranteeDays} Dias</h4>
          <p className="text-zinc-400 text-sm">
            Se você não notar resultados incríveis, nós devolvemos cada centavo do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* Footer Link */}
        <div className="mt-10 mb-20 text-center">
          <a href={data.checkoutUrl} className="text-zinc-600 hover:text-zinc-400 text-xs font-bold underline transition-colors">
            Políticas de Privacidade | Termos de Uso
          </a>
        </div>
      </div>
    </div>
  );
};

export default VariationDark;
