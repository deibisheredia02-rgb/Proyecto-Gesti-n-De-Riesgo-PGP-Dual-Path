
import React from 'react';

const GanttTable: React.FC = () => {
    const stages = [
        { name: 'Planificación', progress: 100, cells: [1, 1, 1, 0, 0, 0, 0, 0] },
        { name: 'Ejecución Fase 1', progress: 100, cells: [0, 0, 1, 1, 1, 0, 0, 0] },
        { name: 'Monitoreo HSEQ', progress: 85, cells: [0, 0, 0, 0, 1, 1, 1, 0] },
        { name: 'Cierre Proyecto', progress: 10, cells: [0, 0, 0, 0, 0, 0, 1, 1] },
    ];

    return (
        <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="min-w-[600px]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="p-3 text-[10px] font-black text-gray-400 uppercase border-b w-1/3">Hito Operativo</th>
                            {[...Array(8)].map((_, i) => (
                                <th key={i} className="p-3 text-[10px] font-black text-center text-gray-400 uppercase border-b border-l">S{i+1}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {stages.map((stage, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                                <td className="p-3 border-b">
                                    <span className="font-bold text-xs md:text-sm block truncate pr-2" title={stage.name}>{stage.name}</span>
                                    <div className="w-full bg-gray-100 h-1 rounded-full mt-2 overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full transition-all duration-500 ${stage.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                                            style={{ width: `${stage.progress}%` }}
                                        ></div>
                                    </div>
                                </td>
                                {stage.cells.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="p-3 border-b border-l text-center">
                                        {cell === 1 && (
                                            <div className={`h-4 md:h-6 w-full rounded-sm shadow-sm transition-all hover:opacity-80 ${
                                                stage.progress === 100 ? 'bg-green-400' : 'bg-blue-400'
                                            }`}></div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GanttTable;
