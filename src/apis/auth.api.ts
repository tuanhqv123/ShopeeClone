import { AuthResponse } from '~/types/auth.type'
import http from '~/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },

  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },

  logout() {
    return http.post('/logout')
  }
}

export default authApi
