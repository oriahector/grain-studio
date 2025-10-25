// Form types
export interface ContactFormData {
  name: string
  lastName: string
  email: string
  message: string
}

export interface FormErrors {
  name: boolean
  lastName: boolean
  email: boolean
  message: boolean
}

export type FormStatus = 'idle' | 'sending' | 'ok' | 'error'

// Work types
export interface Work {
  id: string
  title: string
  description: string
  image: string
  category: string
  link?: string
}

// Client types
export interface Client {
  id: string
  name: string
  logo: string
  description?: string
}

// Service types
export interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

// Section types
export type SectionId = 'hero' | 'works' | 'services' | 'clients' | 'about' | 'contact'

// API types
export interface EmailJSPayload {
  service_id: string
  template_id: string
  user_id: string
  template_params: ContactFormData
}

// Component props types
export interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export interface NavBarProps {
  className?: string
}

export interface FooterProps {
  className?: string
}
