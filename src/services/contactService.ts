/**
 * Servicio de negocio para gestión de contactos
 * Implementa el principio de responsabilidad única (SRP)
 */
class ContactService {
  private readonly whatsappNumber: string = '+573137374108';
  private readonly whatsappMessage: string =
    'Hola, estoy interesado en los servicios de WolfEnterprice';
  private readonly email: string = 'wolfenterprisedev@gmail.com';

  /**
   * Genera la URL de WhatsApp con mensaje predefinido
   * @param message - Mensaje personalizado (opcional)
   * @returns URL de WhatsApp
   */
  getWhatsAppUrl(message?: string): string {
    const text = encodeURIComponent(message || this.whatsappMessage);
    return `https://wa.me/${this.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
  }

  /**
   * Valida un email
   * @param email - Email a validar
   * @returns true si es válido
   */
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valida un teléfono
   * @param phone - Teléfono a validar
   * @returns true si es válido
   */
  validatePhone(phone: string): boolean {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }

  /**
   * Obtiene el email de contacto
   * @returns Email de contacto
   */
  getEmail(): string {
    return this.email;
  }

  /**
   * Genera URL de mailto con asunto y cuerpo
   * @param subject - Asunto del correo
   * @param body - Cuerpo del correo
   * @returns URL de mailto
   */
  getMailtoUrl(subject: string, body: string): string {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${this.email}?subject=${encodedSubject}&body=${encodedBody}`;
  }
}

// Exportar instancia singleton
export const contactService = new ContactService();

