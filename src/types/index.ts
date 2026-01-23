/**
 * Tipos y interfaces para la aplicación
 */

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  idealFor: string;
  features: string[];
  result: string;
  color: 'green' | 'yellow' | 'blue' | 'purple';
  cta: string;
  popular?: boolean;
  isNew?: boolean;
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

