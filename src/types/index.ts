/**
 * Tipos y interfaces para la aplicación
 */

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  color: 'green' | 'yellow' | 'blue';
  cta: string;
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Technology {
  title: string;
  description: string;
  technology: string; // Tecnología interna
  icon: string; // ID del icono SVG
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

