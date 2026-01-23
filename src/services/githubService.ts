/**
 * Servicio para consumir la GitHub REST API
 * Obtiene repositorios públicos de un usuario de GitHub
 */

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  archived: boolean;
  private: boolean;
  default_branch: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  language: string | null;
  url: string;
  updatedAt: string;
  previewImage?: string;
}

class GitHubService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly username: string;

  constructor(username: string = 'DavidSolorza') {
    this.username = username;
  }

  /**
   * Obtiene un repositorio específico por nombre completo (usuario/repo)
   * @param repoFullName - Nombre completo del repositorio (ej: "WolfEnterprise/STREAMINGPLUS")
   * @returns Proyecto o null si no se encuentra
   */
  async getSpecificRepo(repoFullName: string): Promise<Project | null> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${repoFullName}`);

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repo: GitHubRepo = await response.json();

      // Verificar que sea público y no archivado
      if (repo.private || repo.archived) {
        return null;
      }

      // Verificar si existe preview.png en el repositorio
      const previewImage = await this.checkPreviewImage(repo.full_name, repo.default_branch);

      return {
        id: repo.id,
        name: this.formatProjectName(repo.name),
        description: repo.description || 'Sin descripción',
        language: repo.language,
        url: repo.html_url,
        updatedAt: repo.updated_at,
        previewImage,
      };
    } catch (error) {
      console.error(`Error fetching GitHub repo ${repoFullName}:`, error);
      return null;
    }
  }

  /**
   * Obtiene todos los repositorios públicos de un usuario
   * @returns Array de repositorios filtrados y ordenados
   * @deprecated Usar getSpecificRepo para proyectos específicos
   */
  async getPublicRepos(): Promise<Project[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?sort=updated&direction=desc&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      const repos: GitHubRepo[] = await response.json();

      // Filtrar repositorios según requisitos
      const filteredRepos = repos.filter(
        (repo) =>
          !repo.private && // Públicos
          repo.description && // Con descripción
          !repo.archived // No archivados
      );

      // Convertir a formato de Project
      const projects: Project[] = await Promise.all(
        filteredRepos.map(async (repo) => {
          // Verificar si existe preview.png en el repositorio
          const previewImage = await this.checkPreviewImage(repo.full_name, repo.default_branch);

          return {
            id: repo.id,
            name: this.formatProjectName(repo.name),
            description: repo.description || 'Sin descripción',
            language: repo.language,
            url: repo.html_url,
            updatedAt: repo.updated_at,
            previewImage,
          };
        })
      );

      // Ordenar por fecha de actualización (más recientes primero)
      return projects.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
      return [];
    }
  }

  /**
   * Verifica si existe una imagen preview.png en el repositorio
   * @param fullName - Nombre completo del repositorio (usuario/repo)
   * @param branch - Rama por defecto
   * @returns URL de la imagen si existe, undefined si no
   */
  private async checkPreviewImage(fullName: string, branch: string): Promise<string | undefined> {
    try {
      const imageUrl = `https://raw.githubusercontent.com/${fullName}/${branch}/preview.png`;
      const response = await fetch(imageUrl, { method: 'HEAD' });

      if (response.ok) {
        return imageUrl;
      }
    } catch (error) {
      // Si no existe, retornar undefined
    }
    return undefined;
  }

  /**
   * Formatea el nombre del proyecto para mostrarlo de forma más legible
   * @param name - Nombre del repositorio
   * @returns Nombre formateado
   */
  private formatProjectName(name: string): string {
    // Convertir kebab-case o snake_case a Title Case
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  /**
   * Obtiene proyectos de múltiples usuarios de GitHub
   * @param usernames - Array de usernames de GitHub
   * @returns Array combinado de proyectos
   */
  async getMultipleUsersRepos(usernames: string[]): Promise<Project[]> {
    const allProjects: Project[] = [];

    for (const username of usernames) {
      const service = new GitHubService(username);
      const projects = await service.getPublicRepos();
      allProjects.push(...projects);
    }

    // Ordenar todos los proyectos por fecha de actualización
    return allProjects.sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }
}

// Exportar instancia singleton con usuario por defecto
export const githubService = new GitHubService('DavidSolorza');

// Exportar también la clase para uso flexible
export { GitHubService };

