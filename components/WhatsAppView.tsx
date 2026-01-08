
import React from 'react';
import { Send, User, Bot, Clock } from 'lucide-react';

const WhatsAppView: React.FC = () => {
    const messages = [
        { type: 'bot', text: 'SISTEMA PGP: Alerta Crítica en Sector 4 detectada.', time: '08:45 AM' },
        { type: 'user', text: '/status sector 4', time: '08:46 AM' },
        { type: 'bot', text: 'Reporte: Presión 450 PSI, Válvula de alivio activada. HSEQ: 85%', time: '08:46 AM' },
        { type: 'user', text: '/notificar brigada', time: '08:47 AM' },
        { type: 'bot', text: '✅ Brigada notificada. Protocolo PAC R1 activado.', time: '08:47 AM' },
    ];

    return (
        <div className="max-w-2xl mx-auto h-[70vh] flex flex-col bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-fadeIn">
            <header className="bg-emerald-600 p-4 text-white flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={24} />
                </div>
                <div>
                    <h3 className="font-bold">WhatsApp Bot Comandos</h3>
                    <p className="text-xs opacity-80">Online | Gestión Integral PGP</p>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm relative ${
                            m.type === 'user' 
                            ? 'bg-emerald-100 border border-emerald-200 rounded-tr-none' 
                            : 'bg-white border border-gray-200 rounded-tl-none'
                        }`}>
                            <p className="text-sm font-medium">{m.text}</p>
                            <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 justify-end">
                                <Clock size={10} /> {m.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 bg-white border-t flex gap-2">
                <input 
                    type="text" 
                    placeholder="Escribe un comando (/ayuda, /riesgos...)" 
                    className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                />
                <button className="bg-emerald-600 text-white p-2 rounded-xl hover:bg-emerald-700 transition-colors">
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
};

export default WhatsAppView;
