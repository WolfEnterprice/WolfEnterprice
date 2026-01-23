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
        subtitle: 'Para empezar y verse profesional',
        description: 'Ideal para emprendedores, negocios locales y marcas personales.',
        idealFor: 'Emprendedores, negocios locales y marcas personales.',
        features: [
          'Sitio web profesional (1–3 secciones)',
          'Diseño responsive',
          'Formulario de contacto',
          'Integración con WhatsApp',
          'Google Maps integrado',
          'SEO básico optimizado',
        ],
        result: 'Presencia digital clara, profesional y confiable.',
        color: 'green',
        cta: 'Comenzar ahora',
      },
      {
        id: 'crecimiento',
        name: 'Plan Crecimiento',
        subtitle: 'Para atraer clientes y escalar',
        description: 'Ideal para negocios en crecimiento que buscan más visibilidad y control.',
        idealFor: 'Negocios en crecimiento que buscan más visibilidad y control.',
        features: [
          'Todo el Plan Emprender +',
          'Web avanzada y escalable',
          'SEO mejorado con estrategia',
          'Correos corporativos',
          'Integraciones personalizadas',
          'Panel de administración',
          'Soporte prioritario',
        ],
        result: 'Más tráfico, más contactos y mejor gestión digital.',
        color: 'yellow',
        cta: 'Solicitar cotización',
        popular: true,
      },
      {
        id: 'empresa',
        name: 'Plan Empresa',
        subtitle: 'Para negocios con procesos definidos',
        description: 'Ideal para empresas que requieren soluciones más robustas y a medida.',
        idealFor: 'Empresas que requieren soluciones más robustas y a medida.',
        features: [
          'Sistemas web personalizados',
          'Arquitectura escalable',
          'Integraciones complejas (APIs, pagos, CRM)',
          'Soporte técnico continuo',
          'Consultoría técnica',
          'Roadmap tecnológico personalizado',
        ],
        result: 'Tecnología alineada con los objetivos del negocio.',
        color: 'blue',
        cta: 'Contactar ventas',
      },
      {
        id: 'personalizado',
        name: 'Plan Personalizado',
        subtitle: 'Diseñado específicamente para tu negocio',
        description: 'Ideal para empresas con necesidades particulares que no encajan en un plan estándar.',
        idealFor: 'Empresas con necesidades particulares que no encajan en un plan estándar.',
        features: [
          'Plataformas web a medida',
          'Automatización de procesos',
          'Paneles administrativos y dashboards',
          'Integraciones personalizadas',
          'Escalabilidad progresiva',
        ],
        result: 'Una solución web hecha a la medida, preparada para crecer.',
        color: 'purple',
        cta: 'Agendar diagnóstico',
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

