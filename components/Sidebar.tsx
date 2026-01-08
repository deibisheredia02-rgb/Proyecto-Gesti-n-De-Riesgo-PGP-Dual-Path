
import React from 'react';
import { LayoutDashboard, AlertTriangle, MessageSquare, Settings, Shield, Info } from 'lucide-react';
import { DashboardPath } from '../types';

interface SidebarProps {
    path: DashboardPath;
    setPath: (path: DashboardPath) => void;
    onTriggerWebhook: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ path, setPath, onTriggerWebhook }) => {
    const navItemClass = (itemPath: DashboardPath, activeColor: string) => `
        w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200 
        active:scale-95
        ${path === itemPath 
            ? `${activeColor} text-white shadow-lg scale-100` 
            : 'text-gray-400 hover:bg-slate-800 hover:text-white'
        }
    `;

    return (
        <aside className="w-[280px] h-full bg-slate-900 text-white flex flex-col shadow-2xl font-sans">
            <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-900/40">
                        <Shield size={24} />
                    </div>
                    <h1 className="text-xl font-black tracking-tight uppercase leading-none">Gestión<br/><span className="text-blue-400">Integral PGP</span></h1>
                </div>

                <nav className="space-y-3">
                    <button 
                        onClick={() => setPath('normal')}
                        className={navItemClass('normal', 'bg-green-600 shadow-green-900/50')}
                    >
                        <LayoutDashboard size={20} />
                        <div className="text-left">
                            <p className="font-bold text-sm tracking-tight">Dashboard MCPE</p>
                            <p className="text-[10px] opacity-70 uppercase font-semibold">Ruta Normal</p>
                        </div>
                    </button>

                    <button 
                        onClick={() => setPath('alerta')}
                        className={navItemClass('alerta', 'bg-red-600 shadow-red-900/50')}
                    >
                        <AlertTriangle size={20} />
                        <div className="text-left">
                            <p className="font-bold text-sm tracking-tight">Riesgos Críticos</p>
                            <p className="text-[10px] opacity-70 uppercase font-semibold">Acción Inmediata</p>
                        </div>
                    </button>

                    <div className="pt-8 border-t border-slate-800 space-y-2 mt-6">
                        <p className="px-4 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Herramientas</p>
                        
                        <button 
                            onClick={() => setPath('whatsapp')}
                            className={navItemClass('whatsapp', 'bg-emerald-600 shadow-emerald-900/50')}
                        >
                            <MessageSquare size={20} />
                            <span className="font-bold text-sm tracking-tight">WhatsApp Bot</span>
                        </button>

                        <button 
                            onClick={() => setPath('config')}
                            className={navItemClass('config', 'bg-slate-700 shadow-slate-900/50')}
                        >
                            <Settings size={20} />
                            <span className="font-bold text-sm tracking-tight">Configuración</span>
                        </button>

                        <button 
                            onClick={() => setPath('help')}
                            className={navItemClass('help', 'bg-indigo-600 shadow-indigo-900/50')}
                        >
                            <Info size={20} />
                            <span className="font-bold text-sm tracking-tight">Funcionamiento</span>
                        </button>
                    </div>
                </nav>
            </div>

            <div className="p-6 md:p-8 bg-slate-950/50 border-t border-slate-800">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Coordinador App</div>
                <div className="text-xs text-blue-400 font-black tracking-wide">SISTEMA DUAL-PATH v2.5</div>
            </div>
        </aside>
    );
};

export default Sidebar;
