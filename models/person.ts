export interface Person extends BasePerson {
  id: string
  created_at: string
  updated_at: string
}

export interface BasePerson {
  first_name: string
  last_name: string
  email: string
  phone: string
}
