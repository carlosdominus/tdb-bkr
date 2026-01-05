
import React from 'react';
import { COMMON_DATA } from './constants';
import VariationHighUrgency from './components/VariationHighUrgency';

const App: React.FC = () => {
  return (
    <div className="relative">
      {/* Renderiza apenas a versão Urgency solicitada */}
      <VariationHighUrgency data={COMMON_DATA} />
    </div>
  );
};

export default App;
