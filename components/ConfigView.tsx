
import React from 'react';
import { ToggleLeft, ToggleRight, Database, BellRing, UserCircle } from 'lucide-react';

const ConfigView: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-black text-slate-900">Configuración del Sistema</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white p-6 rounded-2xl shadow-sm border space-y-6">
                    <h3 className="font-bold flex items-center gap-2"><BellRing size={18} className="text-blue-500" /> Notificaciones Alerta</h3>
                    
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-sm">WhatsApp Alertas Críticas</p>
                            <p className="text-xs text-gray-400">Envío automático a jefes de área</p>
                        </div>
                        <ToggleRight className="text-emerald-500" size={32} />
                    </div>

                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-sm">Resumen HSEQ Diario</p>
                            <p className="text-xs text-gray-400">Email automático a las 18:00</p>
                        </div>
                        <ToggleLeft className="text-gray-300" size={32} />
                    </div>
                </section>

                <section className="bg-white p-6 rounded-2xl shadow-sm border space-y-6">
                    <h3 className="font-bold flex items-center gap-2"><Database size={18} className="text-orange-500" /> Umbrales HSEQ</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-2">
                                <span>CRÍTICO (Nivel Rojo)</span>
                                <span>&lt; 85%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[85%]"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-2">
                                <span>ADVERTENCIA (Nivel Naranja)</span>
                                <span>85% - 92%</span>
                            </div>
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 w-[92%]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 p-6 rounded-2xl border-dashed border-2 border-gray-300 col-span-1 md:col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <UserCircle size={40} className="text-gray-400" />
                        <div>
                            <p className="font-bold">Perfil de Supervisor</p>
                            <p className="text-xs text-gray-500 italic">ID: 8829-X | Rango de acceso: Total</p>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-white border font-bold text-sm rounded-lg hover:bg-gray-100 transition-colors shadow-sm">Editar Perfil</button>
                </section>
            </div>
        </div>
    );
};

export default ConfigView;
