/**
 * Servicio de negocio para gestión de tecnologías
 * Implementa el principio de responsabilidad única (SRP)
 */
import type { Technology } from '../types/index';

class TechnologyService {
  /**
   * Obtiene todas las tecnologías utilizadas
   * @returns Array de tecnologías
   */
  getAllTechnologies(): Technology[] {
    return [
      {
        title: 'Sitios Web de Alta Velocidad',
        description:
          'Desarrollamos sitios web que cargan en segundos, mejorando la experiencia del usuario y aumentando la visibilidad en Google.',
        technology: 'Astro',
        icon: 'rocket',
      },
      {
        title: 'Diseño Web Moderno y Accesible',
        description:
          'Creamos interfaces claras, modernas y adaptadas a cualquier dispositivo, enfocadas en transmitir confianza y facilitar el contacto con tus clientes.',
        technology: 'HTML, CSS, JavaScript',
        icon: 'code',
      },
      {
        title: 'Interactividad y Funcionalidades Avanzadas',
        description:
          'Cuando el proyecto lo requiere, incorporamos funcionalidades dinámicas para ofrecer una experiencia más interactiva y profesional.',
        technology: 'React',
        icon: 'target',
      },
      {
        title: 'Sistemas y Soluciones Escalables',
        description:
          'Implementamos soluciones técnicas que permiten integrar formularios avanzados, sistemas internos o futuras ampliaciones sin limitar el crecimiento del negocio.',
        technology: 'Node.js',
        icon: 'chart',
      },
    ];
  }
}

// Exportar instancia singleton
export const technologyService = new TechnologyService();

