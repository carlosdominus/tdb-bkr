
import React, { useEffect, useState } from 'react';
import { PageData } from '../types';
import { AlertTriangleIcon, ShieldCheckIcon, CheckIcon, GiftIcon } from './Icons';

interface Props {
  data: PageData;
}

const VariationHighUrgency: React.FC<Props> = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(450); // 7:30 conforme imagem

  useEffect(() => {
    // Timer
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Bloqueio de clique direito
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Bloqueio de atalhos de teclado (Ctrl+C, Ctrl+U, F12, etc)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'a')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-none pb-10">
      {/* Banner de Urgência no Topo - Mais fino para economizar espaço */}
      <div className="bg-red-600 py-2 px-4 text-center sticky top-0 z-40 shadow-lg border-b border-red-700">
        <p className="text-[10px] md:text-xs font-black tracking-widest uppercase text-white flex items-center justify-center gap-2">
          <span>🚨</span> OFERTA DE 50% OFF - ÚLTIMA CHANCE <span>🚨</span>
        </p>
      </div>

      <main className="max-w-xl mx-auto px-4 py-4 md:py-6">
        {/* Headline Compacta */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-black italic uppercase leading-none mb-2 text-white tracking-tighter">
            {data.title}
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-bold max-w-sm mx-auto opacity-80 uppercase tracking-tight">
            {data.subtitle}
          </p>
        </div>

        {/* Card de Oferta Central - Compactado conforme imagem */}
        <div className="relative bg-white text-zinc-900 rounded-[2rem] overflow-hidden mb-8 shadow-[0_15px_60px_-10px_rgba(220,38,38,0.6)] border-4 border-red-600">
          {/* Badge 50% OFF */}
          <div className="absolute top-0 right-0 bg-red-600 text-white px-5 py-2 font-black italic uppercase text-[10px] md:text-xs rounded-bl-2xl z-10 shadow-md">
            50% OFF
          </div>
          
          <div className="pt-8 pb-6 px-6 md:px-10 text-center">
            <p className="text-zinc-500 font-black uppercase tracking-[0.1em] text-[10px] mb-2 opacity-80">
              O cronômetro já começou:
            </p>
            
            {/* Timer Grande */}
            <div className="text-7xl md:text-8xl font-black font-mono text-red-600 mb-6 tracking-tighter leading-none drop-shadow-sm">
              {formatTime(timeLeft)}
            </div>

            {/* Preços */}
            <div className="mb-6">
                <p className="text-zinc-400 text-xl line-through font-black mb-1 opacity-50 italic">
                  {data.oldPrice}
                </p>
                <div className="flex justify-center items-center gap-1">
                    <span className="text-3xl font-black mt-2">R$</span>
                    <span className="text-8xl md:text-9xl font-black tracking-tighter leading-none">
                      {data.newPrice.replace('R$', '')}
                    </span>
                </div>
            </div>

            {/* Botão Principal - Visível Above the Fold */}
            <a 
              href={data.checkoutUrl}
              className="block w-full bg-[#22a44a] hover:bg-green-500 text-white py-5 rounded-2xl text-xl md:text-2xl font-black uppercase tracking-tight transition-all active:scale-95 shadow-[0_8px_25px_rgba(34,164,74,0.4)] animate-pulse-custom leading-tight"
            >
              SIM, QUERO MEU<br/>DESCONTO AGORA
            </a>
          </div>
          
          {/* Alerta de Vagas - Parte inferior do card */}
          <div className="bg-zinc-50 py-4 px-6 border-t border-zinc-200">
             <div className="flex items-center justify-center gap-3 text-red-600 font-black text-[11px] md:text-xs uppercase tracking-tight text-center">
                <AlertTriangleIcon className="w-4 h-4 shrink-0" />
                <span>APENAS 3 VAGAS PROMOCIONAIS RESTANTES!</span>
             </div>
          </div>
        </div>

        {/* Seções Adicionais - Compactadas */}
        <div className="grid gap-4">
          {/* O que você vai receber */}
          <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-sm font-black uppercase italic text-zinc-400 mb-4 border-l-3 border-red-600 pl-3 tracking-widest">
              O QUE VOCÊ VAI RECEBER:
            </h3>
            <ul className="space-y-3">
              {[
                "Passo a passo completo com dosagens exatas",
                "Formas de preparo e mistura correta",
                "Rotina para ereções firmes e controle total"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckIcon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 font-bold text-xs leading-tight">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Bônus */}
          <div className="space-y-2">
            {data.bonusList.map((bonus, i) => (
              <div key={i} className="bg-white flex items-center justify-between p-4 rounded-xl border-l-4 border-red-600 shadow-sm">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black text-red-600 uppercase tracking-widest">BÔNUS #{i + 1}</span>
                  <span className="font-black text-zinc-950 text-xs uppercase leading-none">{bonus.title}</span>
                </div>
                <span className="text-zinc-400 line-through font-bold text-[10px] italic ml-2 shrink-0">{bonus.price}</span>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div className="flex items-center gap-4 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800">
            <ShieldCheckIcon className="w-8 h-8 text-green-500 shrink-0" />
            <div className="leading-tight">
                <p className="font-black uppercase text-[10px] tracking-widest text-white">Garantia Blindada</p>
                <p className="text-zinc-500 text-[10px]">Satisfação em {data.guaranteeDays} dias ou seu dinheiro de volta.</p>
            </div>
          </div>
        </div>

        {/* Rodapé Slim */}
        <div className="mt-12 text-center">
           <p className="text-[9px] text-zinc-800 uppercase font-black tracking-[0.2em] mb-4">Pagamento Seguro via PerfectPay</p>
           <div className="flex justify-center gap-3 opacity-10 grayscale invert h-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
           </div>
        </div>
      </main>
    </div>
  );
};

export default VariationHighUrgency;
