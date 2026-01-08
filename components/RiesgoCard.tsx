
import React from 'react';
import { Riesgo } from '../types';
import { ShieldAlert, ExternalLink } from 'lucide-react';

interface RiesgoCardProps {
    riesgo: Riesgo;
}

const RiesgoCard: React.FC<RiesgoCardProps> = ({ riesgo }) => {
    const isAlto = riesgo.nivel === 'Alto';

    return (
        <div className={`p-6 rounded-2xl border-4 shadow-xl transition-all transform hover:scale-[1.02] ${
            isAlto ? 'border-red-500 bg-red-50' : 'border-orange-500 bg-orange-50'
        }`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${isAlto ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}>
                    <ShieldAlert size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                    isAlto ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'
                }`}>
                    Riesgo {riesgo.nivel}
                </span>
            </div>
            
            <h3 className="text-xl font-black text-gray-900 mb-1">Riesgo {riesgo.id}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{riesgo.descripcion}</p>
            
            <div className="flex items-center justify-between pt-4 border-t border-red-200 mt-auto">
                <div>
                    <span className="text-xs text-gray-400 font-bold uppercase block">HSEQ Compliance</span>
                    <span className={`text-lg font-black ${riesgo.hseq < 90 ? 'text-red-600' : 'text-green-600'}`}>
                        {riesgo.hseq}%
                    </span>
                </div>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition-colors">
                    Reportar PAC <ExternalLink size={14} />
                </button>
            </div>
        </div>
    );
};

export default RiesgoCard;
