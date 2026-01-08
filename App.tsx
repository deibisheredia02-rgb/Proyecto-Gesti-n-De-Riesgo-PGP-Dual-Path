
import React, { useState, useCallback } from 'react';
import { LayoutDashboard, AlertTriangle, MessageSquare, Settings, CheckCircle, Clock, Menu, X } from 'lucide-react';
import { DashboardPath, Riesgo } from './types';
import Sidebar from './components/Sidebar';
import KpiCard from './components/KpiCard';
import RiesgoCard from './components/RiesgoCard';
import GanttTable from './components/GanttTable';
import RiesgoMatriz from './components/RiesgoMatriz';
import HelpView from './components/HelpView';
import WhatsAppView from './components/WhatsAppView';
import ConfigView from './components/ConfigView';

const App: React.FC = () => {
    const [path, setPath] = useState<DashboardPath>('normal');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [riesgos] = useState<Riesgo[]>([
        { id: 'R1', nivel: 'Alto', hseq: 85, descripcion: 'Falla crítica en sistema de bombeo sector 4' },
        { id: 'R2', nivel: 'Bajo', hseq: 95, descripcion: 'Inspección rutinaria pendiente' }
    ]);

    const triggerWebhook = useCallback(async () => {
        try {
            await fetch('https://tu-n8n.webhook/riesgos-update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ event: 'PATH_ALERTA_ACTIVATED', timestamp: new Date().toISOString() })
            });
            alert('🚀 Alerta notificada a n8n!');
        } catch (e) {
            alert('🚀 Simulación de Webhook ejecutada (Ver consola)');
        }
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handlePathChange = (newPath: DashboardPath) => {
        setPath(newPath);
        setIsSidebarOpen(false);
    };

    const renderMainContent = () => {
        switch(path) {
            case 'normal':
                return (
                    <div className="space-y-6 md:space-y-8 animate-fadeIn">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="text-green-600 shrink-0" size={24} />
                            <h2 className="text-xl md:text-2xl font-black text-green-800 uppercase tracking-tight">Operación Normal</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <KpiCard title="Avance de Proyecto" value="92%" color="green" />
                            <KpiCard title="Riesgos Mitigados" value="12" color="blue" />
                            <KpiCard title="HSEQ Compliance" value="95%" color="green" />
                        </div>

                        <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <Clock className="text-blue-600" size={20} />
                                    Cronograma
                                </h3>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Vista Mensual</span>
                            </div>
                            <GanttTable />
                        </section>
                    </div>
                );
            case 'alerta':
                return (
                    <div className="space-y-6 md:space-y-8 animate-fadeIn">
                        <div className="flex items-center gap-3">
                            <AlertTriangle className="text-red-600 shrink-0" size={24} />
                            <h2 className="text-xl md:text-2xl font-black text-red-800 uppercase tracking-tight">Path Alerta</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {riesgos.filter(r => r.nivel === 'Alto').map(r => (
                                <RiesgoCard key={r.id} riesgo={r} />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                            <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                <h3 className="text-lg font-bold mb-4">Matriz de Riesgos 3x3</h3>
                                <div className="overflow-x-auto pb-4">
                                    <RiesgoMatriz />
                                </div>
                            </section>
                            
                            <section className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 flex flex-col justify-center items-center text-center">
                                <MessageSquare size={40} className="text-red-500 mb-4" />
                                <h3 className="text-lg font-black text-red-800 mb-2 uppercase tracking-tight">Protocolo Emergencia</h3>
                                <p className="text-sm text-red-600 mb-6 font-medium">Notificación automática activa a supervisores.</p>
                                <button 
                                    onClick={triggerWebhook}
                                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-3 px-8 rounded-xl transition-all shadow-lg active:scale-95 uppercase text-sm tracking-wide"
                                >
                                    Reconfirmar Alerta
                                </button>
                            </section>
                        </div>
                    </div>
                );
            case 'whatsapp': return <WhatsAppView />;
            case 'config': return <ConfigView />;
            case 'help': return <HelpView />;
            default: return null;
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans relative">
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <div className={`fixed inset-y-0 left-0 z-40 lg:relative transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <Sidebar path={path} setPath={handlePathChange} onTriggerWebhook={triggerWebhook} />
            </div>

            <main className="flex-1 flex flex-col min-w-0 overflow-auto">
                <header className="bg-white border-b px-4 md:px-8 py-3 md:py-4 flex justify-between items-center sticky top-0 z-20">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={toggleSidebar}
                            className="p-2 -ml-2 hover:bg-gray-100 rounded-lg lg:hidden text-gray-600"
                        >
                            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="min-w-0">
                            <h2 className="hidden md:block text-[10px] font-black text-gray-400 uppercase tracking-widest">Coordinación Operativa</h2>
                            <h1 className="text-base md:text-2xl font-black text-pgp-blue truncate tracking-tighter">Gestión Integral PGP</h1>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-black shadow-sm border bg-white">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${path === 'normal' ? 'bg-green-500' : 'bg-red-500'}`} />
                            <span className="hidden sm:inline uppercase">{path === 'normal' ? 'Operación' : 'Alerta'}</span>
                        </div>
                        <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-pgp-blue flex items-center justify-center text-white text-xs md:text-sm font-black ring-4 ring-blue-50">
                            92%
                        </div>
                    </div>
                </header>

                <div className="p-4 md:p-8">
                    {renderMainContent()}
                </div>
            </main>
        </div>
    );
};

export default App;
