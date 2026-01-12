/**
 * Servicio de negocio para gestión de planes
 * Implementa el principio de responsabilidad única (SRP)
 */
import type { Plan } from '../types/index';

class PlanService {
  /**
   * Obtiene todos los planes disponibles
   * @returns Array de planes ordenados por prioridad
   */
  getAllPlans(): Plan[] {
    return [
      {
        id: 'emprender',
        name: 'Plan Emprender',
        description: 'Ideal para emprendedores que inician su presencia digital',
        price: '$850.000',
        priceNote: '+ $100.000/mes',
        features: [
          'Web profesional',
          'Diseño responsive',
          'Formulario de contacto',
          'Integración WhatsApp',
          'Google Maps integrado',
          'SEO básico optimizado',
        ],
        color: 'green', // Verde lima
        cta: 'Comenzar ahora',
      },
      {
        id: 'crecimiento',
        name: 'Plan Crecimiento',
        description: 'Para empresas en expansión que buscan escalar',
        price: 'Desde $1.500.000',
        features: [
          'Web avanzada y escalable',
          'SEO mejorado y estrategia',
          'Correos corporativos',
          'Integraciones personalizadas',
          'Panel de administración',
          'Soporte prioritario',
        ],
        color: 'yellow', // Amarillo/dorado
        cta: 'Solicitar cotización',
        popular: true,
      },
      {
        id: 'empresa',
        name: 'Plan Empresa',
        description: 'Soluciones a medida para grandes necesidades',
        price: 'Cotización personalizada',
        features: [
          'Sistemas a medida',
          'Arquitectura escalable',
          'Integraciones complejas',
          'Soporte 24/7',
          'Consultoría técnica',
          'Roadmap personalizado',
        ],
        color: 'blue', // Azul del lobo
        cta: 'Contactar ventas',
      },
    ];
  }

  /**
   * Obtiene un plan por su ID
   * @param planId - ID del plan
   * @returns Plan encontrado o undefined
   */
  getPlanById(planId: string): Plan | undefined {
    return this.getAllPlans().find((plan) => plan.id === planId);
  }

  /**
   * Obtiene el plan más popular
   * @returns Plan marcado como popular
   */
  getPopularPlan(): Plan | undefined {
    return this.getAllPlans().find((plan) => plan.popular);
  }
}

// Exportar instancia singleton
export const planService = new PlanService();

