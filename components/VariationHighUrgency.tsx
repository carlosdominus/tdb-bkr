
import React, { useEffect, useState } from 'react';
import { PageData } from '../types';
import { AlertTriangleIcon, ShieldCheckIcon, CheckIcon, GiftIcon } from './Icons';

interface Props {
  data: PageData;
}

const VariationHighUrgency: React.FC<Props> = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-600 selection:text-white pb-20">
      {/* Banner de Urgência no Topo */}
      <div className="bg-red-600 animate-pulse py-4 px-4 text-center sticky top-0 z-40 shadow-lg">
        <p className="text-xs md:text-sm font-black tracking-widest uppercase text-white flex items-center justify-center gap-2">
          <span>🚨</span> PARE TUDO! VOCÊ ESTÁ PRESTES A PERDER ESTA OPORTUNIDADE ÚNICA! <span>🚨</span>
        </p>
      </div>

      <main className="max-w-2xl mx-auto px-5 py-10">
        {/* Headline Principal */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black italic uppercase leading-tight mb-4 text-white tracking-tighter">
            {data.title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Card de Oferta Central */}
        <div className="relative bg-white text-zinc-950 rounded-[2.5rem] overflow-hidden mb-12 shadow-[0_20px_80px_-15px_rgba(220,38,38,0.5)] border-4 border-red-600 transform hover:scale-[1.01] transition-transform">
          <div className="absolute top-0 right-0 bg-red-600 text-white px-8 py-3 font-black italic uppercase text-sm rounded-bl-3xl z-10">
            50% OFF
          </div>
          
          <div className="p-8 md:p-14 text-center">
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-3">O cronômetro já começou:</p>
            <div className="text-6xl font-black font-mono text-red-600 mb-10 tracking-tighter">
              {formatTime(timeLeft)}
            </div>

            <div className="mb-10">
                <p className="text-zinc-400 text-2xl line-through font-bold mb-1 opacity-60 italic">{data.oldPrice}</p>
                <div className="flex justify-center items-end gap-1">
                    <span className="text-4xl font-bold mb-4">R$</span>
                    <span className="text-9xl md:text-[10rem] font-black tracking-tighter leading-none">{data.newPrice.replace('R$', '')}</span>
                </div>
            </div>

            <a 
              href={data.checkoutUrl}
              className="block w-full bg-green-600 hover:bg-green-500 text-white py-7 rounded-2xl text-2xl md:text-3xl font-black uppercase tracking-tight transition-all active:scale-95 shadow-[0_15px_40px_rgba(22,163,74,0.4)] animate-pulse-custom"
            >
              {data.ctaText}
            </a>
          </div>
          
          <div className="bg-zinc-50 p-6 flex flex-col items-center gap-3 border-t border-zinc-200">
             <div className="flex items-center gap-3 text-red-600 font-black text-sm uppercase tracking-wide">
                <AlertTriangleIcon className="w-5 h-5" />
                <span>Apenas 3 vagas promocionais restantes!</span>
             </div>
          </div>
        </div>

        {/* Seção: O que você vai receber */}
        <div className="bg-zinc-900 rounded-3xl p-8 mb-8 border border-zinc-800 shadow-xl">
          <h3 className="text-xl md:text-2xl font-black uppercase italic text-white mb-8 border-l-4 border-red-600 pl-4 tracking-tight">
            O QUE VOCÊ VAI RECEBER:
          </h3>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="bg-green-600/10 p-1.5 rounded-lg shrink-0">
                <CheckIcon className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-zinc-200 font-bold text-sm md:text-base leading-tight">
                Passo a passo completo do truque do bicarbonato com as dosagens exatas
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-green-600/10 p-1.5 rounded-lg shrink-0">
                <CheckIcon className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-zinc-200 font-bold text-sm md:text-base leading-tight">
                Formas de preparo necessárias para fazer a mistura com bicarbonato e outros 2 ingredientes naturais
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <div className="bg-green-600/10 p-1.5 rounded-lg shrink-0">
                <CheckIcon className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-zinc-200 font-bold text-sm md:text-base leading-tight">
                Rotina desenvolvida para tomar a bebida corretamente, melhorar ereções, manter o pênis firme e prevenir ejaculação precoce
              </p>
            </li>
          </ul>
        </div>

        {/* Bônus Exclusivos */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GiftIcon className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-black uppercase tracking-widest text-zinc-400">Bônus Exclusivos Liberados</h3>
          </div>
          
          {data.bonusList.map((bonus, i) => (
            <div key={i} className="bg-white group flex items-center justify-between p-6 rounded-2xl border-l-8 border-red-600 shadow-lg transition-transform hover:translate-x-1">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">PRESENTE #{i + 1}</span>
                <span className="font-black text-zinc-950 text-sm md:text-base uppercase leading-tight">{bonus.title}</span>
              </div>
              <span className="text-zinc-400 line-through font-bold text-sm italic ml-4">{bonus.price}</span>
            </div>
          ))}
        </div>

        {/* Benefícios Adicionais */}
        <div className="bg-zinc-900 border-2 border-dashed border-zinc-700 p-8 rounded-3xl mb-12">
          <h3 className="text-lg font-black uppercase italic mb-6 text-zinc-500 tracking-wider">Por que garantir agora:</h3>
          <ul className="space-y-5">
            {data.benefits.map((b, i) => (
              <li key={i} className="flex gap-4 items-start">
                 <div className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0"></div>
                 <p className="text-zinc-400 font-bold leading-tight uppercase text-xs md:text-sm">{b}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Garantia de Blindada */}
        <div className="flex flex-col md:flex-row gap-6 items-center bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
           <div className="shrink-0 bg-zinc-800 p-5 rounded-2xl border border-zinc-700">
              <ShieldCheckIcon className="w-10 h-10 text-green-500" />
           </div>
           <div>
              <p className="font-black uppercase text-lg tracking-tight mb-1">Garantia Blindada de {data.guaranteeDays} Dias</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Risco Zero absoluto. Se você não tiver o resultado prometido, nós devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
           </div>
        </div>

        {/* CTA Negativo */}
        <div className="mt-12">
           <a 
            href={data.checkoutUrl}
            className="block w-full text-center text-zinc-700 hover:text-zinc-500 font-black uppercase text-[10px] tracking-[0.3em] transition-colors underline underline-offset-4"
          >
            Não, eu prefiro continuar com o problema e perder o desconto
          </a>
        </div>

        {/* Rodapé de Segurança */}
        <div className="mt-20 text-center space-y-6">
           <p className="text-[10px] text-zinc-800 uppercase font-black tracking-[0.3em]">Ambiente 100% Seguro & Criptografado</p>
           <div className="flex justify-center gap-4 opacity-5 grayscale invert">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" />
           </div>
        </div>
      </main>
    </div>
  );
};

export default VariationHighUrgency;
