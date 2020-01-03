import { http } from './config'
import auth from './auth'

/**
 * @author Petherson Moreno
 * Serviço de Cursos
 */
export default {
  getBySlug: (slug) => {
    const { accessToken } = auth.getInfoAuth()
    return http.get(`api/v1/course/slug/${slug}`, { headers: { 'Authorization': `${accessToken}` } })
  }
}
