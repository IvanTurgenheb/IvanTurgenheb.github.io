export interface InformationType {
  title: string
  subTitle: string
  description: string
}

export interface ContactType {
  email: string
  github: string
  phone: string
}

export interface PrizeType {
  title: string
  date?: string
  institution: string
}

// 혹시 타입 달라질 수 도 있어서 Prize랑 Certificates 따로 타입 선언
export interface CertificatesType {
  title: string
  date?: string
  institution: string
}

export interface SkillsType {
  title: string
}
