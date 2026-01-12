/**
 * Servicio de negocio para gestión de servicios
 * Implementa el principio de responsabilidad única (SRP)
 */
import type { Service } from '../types/index';

class ServiceService {
  /**
   * Obtiene todos los servicios disponibles
   * @returns Array de servicios
   */
  getAllServices(): Service[] {
    return [
      {
        id: 'web-development',
        title: 'Desarrollo Web Profesional',
        description:
          'Creamos sitios web modernos, rápidos y optimizados que convierten visitantes en clientes. Diseñamos experiencias digitales que no solo se ven increíbles, sino que generan resultados reales para tu negocio.',
        icon: 'code',
      },
      {
        id: 'seo-optimization',
        title: 'Optimización SEO',
        description:
          'Mejoramos tu visibilidad en Google con estrategias técnicas y de contenido probadas. Te ayudamos a aparecer en los primeros resultados de búsqueda y atraer clientes que realmente buscan lo que ofreces.',
        icon: 'rocket',
      },
      {
        id: 'digital-growth',
        title: 'Soporte y Crecimiento Digital',
        description:
          'Acompañamos tu crecimiento con mantenimiento continuo, actualizaciones regulares y estrategias de mejora. No solo construimos tu sitio, lo cuidamos para que siga funcionando perfectamente.',
        icon: 'chart',
      },
    ];
  }

  /**
   * Obtiene un servicio por su ID
   * @param serviceId - ID del servicio
   * @returns Servicio encontrado o undefined
   */
  getServiceById(serviceId: string): Service | undefined {
    return this.getAllServices().find((service) => service.id === serviceId);
  }
}

// Exportar instancia singleton
export const serviceService = new ServiceService();

