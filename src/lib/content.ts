import type { NavLink, Company, FormField, SocialLink, Stat } from '@/types'

export const SITE = {
  name: 'Networking Experience',
  tagline: 'Networking Experience',
  description:
    'Conectamos empresas líderes do mercado com alunos universitários do Mackenzie, proporcionando networking valioso e experiências inesquecíveis.',
  url: 'https://networkingexperience.com.br',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início',    href: '#hero' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Empresas',  href: '#empresas' },
  { label: 'Contato',   href: '#formulario' },
]

export const CTA_HEADER = {
  label: 'Quero participar',
  href: '#formulario',
}

export const HERO = {
  headline: 'Conecte sua empresa aos talentos do Mackenzie.',
  subheadline:
    'O Networking Experience é um evento organizado pela EJEM que conecta empresas líderes do mercado com alunos universitários — por meio da Feira de Recrutamento e da Semana da Escola de Engenharia.',
  cta: {
    primary:   { label: 'Fale conosco',   href: '#formulario' },
    secondary: { label: 'Como funciona',  href: '#sobre' },
  },
  stats: [
    { value: '2',    label: 'Eventos por ano'        } as Stat,
    { value: '500+', label: 'Alunos inscritos'        } as Stat,
    { value: '30+',  label: 'Empresas participantes'  } as Stat,
  ],
  backgroundImage: '/images/hero-bg.png',
}

export const SOBRE = {
  sectionLabel: 'Sobre nós',
  headline: 'Por que participar do Networking Experience?',
  paragraphs: [
    'O Networking Experience é realizado pela EJEM — Empresa Júnior Engenharia Mackenzie, uma organização sem fins lucrativos formada por graduandos da Escola de Engenharia e da Faculdade de Computação e Informática do Mackenzie, fundada em 2011.',
    'Organizamos dois eventos presenciais por ano dentro do campus Mackenzie: a Feira de Recrutamento e a Semana da Escola de Engenharia. Sua empresa vai direto ao encontro dos candidatos, sem intermediários digitais.',
    'Atendemos todos os eixos — Engenharia, Administração, Contabilidade e Direito — conectando você ao perfil de estagiário que sua empresa precisa.',
  ],
  differentials: [
    {
      icon: '🎯',
      label: 'Público qualificado',
      description: 'Alunos ativos da Universidade Presbiteriana Mackenzie, dos semestres finais e prontos para estágio.',
    },
    {
      icon: '🏛️',
      label: 'Dentro do campus',
      description: 'Os eventos acontecem no próprio Mackenzie — os candidatos já estão lá.',
    },
    {
      icon: '📋',
      label: 'Todos os eixos',
      description: 'Engenharia, Administração, Contabilidade, Direito e Computação.',
    },
    {
      icon: '🤝',
      label: 'Organizado pela EJEM',
      description: 'A Empresa Júnior cuida de toda a logística para que você só precise aparecer.',
    },
  ],
}

export const EMPRESAS_SECTION = {
  sectionLabel: 'Parceiros',
  headline: 'Empresas que já participaram',
  subheadline:
    'De startups a grandes corporações — todos os portes e eixos são bem-vindos.',
}

export const COMPANIES: Company[] = [
  { name: 'Empresa Alpha',   logo: '/logos/empresa-alpha.png',   sector: 'Tecnologia'    },
  { name: 'Empresa Beta',    logo: '/logos/empresa-beta.png',    sector: 'Contabilidade' },
  { name: 'Empresa Gamma',   logo: '/logos/empresa-gamma.png',   sector: 'Engenharia'    },
  { name: 'Empresa Delta',   logo: '/logos/empresa-delta.png',   sector: 'Advocacia'     },
  { name: 'Empresa Epsilon', logo: '/logos/empresa-epsilon.png', sector: 'Administração' },
  { name: 'Empresa Zeta',    logo: '/logos/empresa-zeta.png',    sector: 'Tecnologia'    },
]

export const FORM_SECTION = {
  sectionLabel: 'Contato',
  headline: 'Leve sua empresa ao próximo Networking Experience',
  subheadline:
    'Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 dias úteis.',
  successMessage: 'Mensagem enviada! Entraremos em contato em breve.',
  errorMessage:   'Algo deu errado. Tente novamente ou envie um e-mail direto.',
  submitLabel:    'Enviar',
  recipientEmail: 'networking.experience@ejemmackenzie.com.br',
}

export const FORM_FIELDS: FormField[] = [
  {
    name: 'company',
    label: 'Nome da empresa',
    type: 'text',
    placeholder: 'Ex: Acme Ltda.',
    required: true,
  },
  {
    name: 'name',
    label: 'Seu nome',
    type: 'text',
    placeholder: 'Nome completo',
    required: true,
  },
  {
    name: 'email',
    label: 'E-mail corporativo',
    type: 'email',
    placeholder: 'voce@empresa.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Telefone / WhatsApp',
    type: 'tel',
    placeholder: '(11) 9 0000-0000',
    required: false,
  },
  {
    name: 'sector',
    label: 'Setor da empresa',
    type: 'select',
    placeholder: 'Selecione um setor',
    required: true,
    options: ['Tecnologia', 'Engenharia', 'Contabilidade', 'Advocacia', 'Administração', 'Outro'],
  },
  {
    name: 'message',
    label: 'Mensagem (opcional)',
    type: 'textarea',
    placeholder: 'Conte um pouco sobre sua empresa e o perfil de estagiário que busca.',
    required: false,
  },
]

export const FOOTER = {
  tagline: 'Um evento organizado pela EJEM — Empresa Júnior Engenharia Mackenzie.',
  copyright: `© ${new Date().getFullYear()} Networking Experience. Todos os direitos reservados.`,
  links: [
    { label: 'Início',   href: '#hero'      },
    { label: 'Sobre',    href: '#sobre'     },
    { label: 'Empresas', href: '#empresas'  },
    { label: 'Contato',  href: '#formulario'},
  ] as NavLink[],
  social: [
    { platform: 'Instagram', href: 'https://www.instagram.com/nx.mackenzie/', icon: 'instagram' },
    { platform: 'WhatsApp',  href: 'https://wa.me/5511973832709',             icon: 'whatsapp'  },
  ] as SocialLink[],
  contactEmail: 'networking.experience@ejemmackenzie.com.br',
  address: 'R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907',
}
