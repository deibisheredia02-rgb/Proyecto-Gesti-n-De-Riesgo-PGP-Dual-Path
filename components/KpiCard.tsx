
import React from 'react';
import { KpiProps } from '../types';

const KpiCard: React.FC<KpiProps> = ({ title, value, color }) => {
    const colorMap = {
        green: 'bg-green-50 border-green-200 text-green-700',
        red: 'bg-red-50 border-red-200 text-red-700',
        blue: 'bg-blue-50 border-blue-200 text-blue-700',
        orange: 'bg-orange-50 border-orange-200 text-orange-700'
    };

    const valueColorMap = {
        green: 'text-green-600',
        red: 'text-red-600',
        blue: 'text-blue-600',
        orange: 'text-orange-600'
    };

    return (
        <div className={`p-5 md:p-6 rounded-2xl border-2 transition-all active:scale-[0.98] ${colorMap[color]}`}>
            <h3 className="font-black text-[10px] uppercase tracking-widest mb-2 opacity-70 truncate">{title}</h3>
            <div className={`text-3xl md:text-4xl font-black ${valueColorMap[color]}`}>{value}</div>
        </div>
    );
};

export default KpiCard;
