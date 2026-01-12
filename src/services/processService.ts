/**
 * Servicio de negocio para gestión del proceso de trabajo
 * Implementa el principio de responsabilidad única (SRP)
 */
import type { ProcessStep } from '../types/index';

class ProcessService {
  /**
   * Obtiene todos los pasos del proceso de trabajo
   * @returns Array de pasos ordenados
   */
  getProcessSteps(): ProcessStep[] {
    return [
      {
        number: 1,
        title: 'Análisis',
        description:
          'Analizamos tus necesidades, objetivos y mercado para crear la mejor estrategia digital.',
      },
      {
        number: 2,
        title: 'Propuesta',
        description:
          'Te presentamos un plan detallado con tiempos, costos y alcance del proyecto.',
      },
      {
        number: 3,
        title: 'Desarrollo',
        description:
          'Desarrollamos tu solución con metodologías ágiles y comunicación constante.',
      },
      {
        number: 4,
        title: 'Entrega',
        description:
          'Realizamos pruebas exhaustivas y te entregamos un producto listo para crecer.',
      },
      {
        number: 5,
        title: 'Soporte',
        description:
          'Te acompañamos con mantenimiento, actualizaciones y optimizaciones continuas.',
      },
    ];
  }
}

// Exportar instancia singleton
export const processService = new ProcessService();

