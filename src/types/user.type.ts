type Role = 'User' | 'Admin'
export interface User {
  _id: string
  roles: Role[]
  email: string
  name?: string
  date_of_birth?: string //ISO 8610
  address?: string
  avatar?: string
  phone?: string
  createdAt: string
  updatedAt: string
}
