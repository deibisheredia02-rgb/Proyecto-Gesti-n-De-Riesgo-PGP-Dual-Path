
import React from 'react';
import { ShieldCheck, Zap, Bell, FileText, Database } from 'lucide-react';

const HelpView: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 animate-fadeIn pb-10">
            <header className="text-center px-4">
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Guía de Funcionamiento PGP</h2>
                <p className="text-gray-500 text-sm md:text-lg">Optimización Dual-Path para Coordinadores.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-lg font-bold">Ruta Normal</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Seguimiento diario de métricas y cumplimiento preventivo HSEQ.
                    </p>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-100 p-2.5 rounded-xl text-red-600">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-lg font-bold">Ruta Alerta</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Activación instantánea ante desviaciones de seguridad o fallas operativas críticas.
                    </p>
                </div>
            </div>

            <section className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-xl mx-4">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Database className="text-blue-400" size={20} /> Componentes Clave
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                        <Bell size={18} className="text-blue-400 mb-2" />
                        <h4 className="font-bold text-sm mb-1">WhatsApp Sync</h4>
                        <p className="text-[11px] text-gray-400">Alertas directas al dispositivo móvil del coordinador.</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                        <FileText size={18} className="text-blue-400 mb-2" />
                        <h4 className="font-bold text-sm mb-1">Trazabilidad</h4>
                        <p className="text-[11px] text-gray-400">Histórico de decisiones bajo protocolo PAC.</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl">
                        <ShieldCheck size={18} className="text-blue-400 mb-2" />
                        <h4 className="font-bold text-sm mb-1">HSEQ Mobile</h4>
                        <p className="text-[11px] text-gray-400">Cálculo de riesgo en tiempo real en campo.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpView;
