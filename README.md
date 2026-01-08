
# Proyecto Gestión de Riesgo PGP Dual-Path 🚀

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![Lucide](https://img.shields.io/badge/Icons-Lucide-FF69B4?logo=lucide)
![Font](https://img.shields.io/badge/Font-Montserrat-000000)

Dashboard industrial de alta fidelidad diseñado para la **Coordinación Operativa PGP**. Este sistema implementa una arquitectura **Dual-Path** que permite conmutar instantáneamente entre una visualización de operación normal y un protocolo de respuesta ante crisis.

## 🛠️ Arquitectura Dual-Path
El sistema está diseñado para dos estados operativos críticos:
- **Ruta Normal (Normal Path)**: Enfoque en KPIs preventivos, cumplimiento HSEQ y cronograma de hitos.
- **Ruta Alerta (Alert Path)**: Priorización de riesgos críticos, matriz de impacto 3x3 y activación de protocolos de emergencia (Webhooks).

## ✨ Características Principales
- **Diseño Mobile-First**: Interfaz totalmente responsiva con navegación lateral colapsable optimizada para dispositivos móviles en campo.
- **Matriz de Riesgos Interactiva**: Visualización dinámica de impactos y probabilidades.
- **Simulador de WhatsApp Bot**: Interfaz de comandos para la gestión de alertas vía mensajería.
- **HSEQ Compliance**: Seguimiento de métricas de seguridad y salud en el trabajo en tiempo real.
- **Tipografía Montserrat**: Implementación de jerarquía visual geométrica para máxima legibilidad.

## 🚀 Tecnologías
- **Core**: React 18 (Hooks, Context, Webhooks simulation).
- **Estilos**: Tailwind CSS con configuración personalizada de temas.
- **Iconografía**: Lucide React para una semántica visual clara.
- **Fuentes**: Montserrat (Google Fonts) con pesos variables.

## 📦 Instalación y Despliegue
Este proyecto está configurado como un módulo ES6 moderno. 

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/PROYECTOSDHCM/Proyecto-Gesti-n-De-Riesgo-PGP-Dual-Path.git
   ```
2. Abrir `index.html` en cualquier servidor local o desplegar en plataformas como Vercel/Netlify.

---
Desarrollado con enfoque en la eficiencia operativa y la seguridad industrial.
