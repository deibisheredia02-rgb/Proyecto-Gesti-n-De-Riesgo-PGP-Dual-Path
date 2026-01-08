
export type DashboardPath = 'normal' | 'alerta' | 'whatsapp' | 'config' | 'help';

export interface Riesgo {
    id: string;
    nivel: 'Alto' | 'Medio' | 'Bajo';
    hseq: number;
    descripcion: string;
}

export interface KpiProps {
    title: string;
    value: string | number;
    color: 'green' | 'red' | 'blue' | 'orange';
}
