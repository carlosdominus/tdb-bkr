
import React, { useState } from 'react';
import { Variation } from './types';
import { COMMON_DATA } from './constants';
import VariationDark from './components/VariationDark';
import VariationLight from './components/VariationLight';
import VariationHighUrgency from './components/VariationHighUrgency';

const App: React.FC = () => {
  const [currentVariation, setCurrentVariation] = useState<Variation>(Variation.DARK_MODERN);

  const renderVariation = () => {
    switch (currentVariation) {
      case Variation.DARK_MODERN:
        return <VariationDark data={COMMON_DATA} />;
      case Variation.CLEAN_LIGHT:
        return <VariationLight data={COMMON_DATA} />;
      case Variation.HIGH_URGENCY:
        return <VariationHighUrgency data={COMMON_DATA} />;
      default:
        return <VariationDark data={COMMON_DATA} />;
    }
  };

  return (
    <div className="relative">
      {/* Floating Variation Switcher - For Demo Purposes */}
      <div className="fixed bottom-4 left-4 z-50 flex gap-2 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl scale-75 md:scale-100 origin-bottom-left">
        <button 
          onClick={() => setCurrentVariation(Variation.DARK_MODERN)}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${
            currentVariation === Variation.DARK_MODERN ? 'bg-white text-black' : 'text-white hover:bg-white/10'
          }`}
        >
          Dark
        </button>
        <button 
          onClick={() => setCurrentVariation(Variation.CLEAN_LIGHT)}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${
            currentVariation === Variation.CLEAN_LIGHT ? 'bg-black text-white' : 'text-zinc-400 hover:bg-white/10'
          }`}
        >
          Clean
        </button>
        <button 
          onClick={() => setCurrentVariation(Variation.HIGH_URGENCY)}
          className={`px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${
            currentVariation === Variation.HIGH_URGENCY ? 'bg-red-600 text-white' : 'text-white hover:bg-white/10'
          }`}
        >
          Urgency
        </button>
      </div>

      {/* Variation Content */}
      {renderVariation()}
    </div>
  );
};

export default App;
