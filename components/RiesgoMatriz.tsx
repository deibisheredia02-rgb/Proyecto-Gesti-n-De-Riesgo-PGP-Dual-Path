
import React from 'react';

const RiesgoMatriz: React.FC = () => {
    // 0: Verde, 1: Naranja, 2: Rojo
    const matrix = [
        [1, 2, 2], // Impacto Alto [Baja Prob, Med Prob, Alta Prob]
        [0, 1, 2], // Impacto Medio
        [0, 0, 1], // Impacto Bajo
    ];

    const getBgColor = (val: number) => {
        if (val === 2) return 'bg-red-500 text-white';
        if (val === 1) return 'bg-orange-400 text-white';
        return 'bg-green-400 text-white';
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-1">
                {/* Eje Y: Impacto */}
                <div className="w-8 flex flex-col justify-around text-[10px] font-bold text-gray-400 uppercase [writing-mode:vertical-lr] rotate-180">
                    Impacto Critico
                </div>
                
                <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-2 p-2 bg-gray-100 rounded-xl">
                    {matrix.map((row, rIdx) => (
                        row.map((cell, cIdx) => (
                            <div 
                                key={`${rIdx}-${cIdx}`}
                                className={`flex items-center justify-center rounded-lg shadow-sm font-black text-lg transition-transform hover:scale-105 cursor-pointer h-24 ${getBgColor(cell)}`}
                            >
                                {rIdx === 0 && cIdx === 1 ? 'R1' : ''}
                                {rIdx === 2 && cIdx === 0 ? 'R2' : ''}
                            </div>
                        ))
                    ))}
                </div>
            </div>
            
            {/* Eje X: Probabilidad */}
            <div className="ml-8 mt-2 flex justify-around text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Baja Probabilidad</span>
                <span>Media</span>
                <span>Alta Probabilidad</span>
            </div>
        </div>
    );
};

export default RiesgoMatriz;
