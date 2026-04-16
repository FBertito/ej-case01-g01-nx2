export interface NavLink {
  label: string
  href: string
}

export interface Company {
  
  name: string
  
  logo: string
  
  sector: string
  
  website?: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  placeholder: string
  required: boolean
  options?: string[] 
}

export interface SocialLink {
  platform: string
  href: string
  
  icon: string
}

export interface Stat {
  value: string
  label: string
}
