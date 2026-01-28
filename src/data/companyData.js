// ============================================
// NEXUS CNC - DADOS DAS TECNOLOGIAS
// ============================================

export const techData = [
  {
    id: 1,
    name: 'LinuxCNC',
    description: 'Controlo Open-Source',
    fullDescription: 'Sistema de controlo CNC open-source de nível industrial, com suporte para múltiplos eixos, cinemáticas complexas e personalização total.',
    website: 'https://linuxcnc.org',
    category: 'software'
  },
  {
    id: 2,
    name: 'Mesa Electronics',
    description: 'FPGA 7i76E / 7i95T',
    fullDescription: 'Placas FPGA de alta performance para controlo de movimento em tempo real, com I/O isoladas e comunicação Ethernet.',
    website: 'https://mesanet.com',
    category: 'hardware'
  },
  {
    id: 3,
    name: 'Closed-Loop',
    description: 'NEMA34 + Encoders',
    fullDescription: 'Motores stepper com encoder integrado para feedback de posição, eliminando perda de passos e garantindo precisão.',
    website: null,
    category: 'motion'
  },
  {
    id: 4,
    name: 'HGR20 / HGR25',
    description: 'Guias Lineares',
    fullDescription: 'Guias lineares de rolos de alta precisão e capacidade de carga, para movimento suave e livre de folgas.',
    website: null,
    category: 'mechanical'
  },
  {
    id: 5,
    name: 'Ballscrew',
    description: 'SFU1605 / SFU2005',
    fullDescription: 'Fusos de esferas de precisão para conversão de movimento rotativo em linear com alta eficiência.',
    website: null,
    category: 'mechanical'
  },
  {
    id: 6,
    name: 'ATC ISO20/30',
    description: 'Troca Automática',
    fullDescription: 'Sistemas de troca automática de ferramentas com cones ISO padronizados para máxima versatilidade.',
    website: null,
    category: 'tooling'
  },
  {
    id: 7,
    name: 'Probing',
    description: '3D Touch + Tool Setter',
    fullDescription: 'Sistemas de medição integrados para setup automático de peças e compensação de ferramentas.',
    website: null,
    category: 'measurement'
  },
  {
    id: 8,
    name: 'CAD/CAM',
    description: 'Fusion 360 / FreeCAD',
    fullDescription: 'Software de design e manufactura para criação de modelos 3D e geração de trajectórias de maquinação.',
    website: null,
    category: 'software'
  }
];

// --- Estatísticas da Empresa ---
export const statsData = [
  {
    id: 1,
    number: '150+',
    label: 'Máquinas Instaladas',
    suffix: ''
  },
  {
    id: 2,
    number: '12',
    label: 'Anos de Experiência',
    suffix: ''
  },
  {
    id: 3,
    number: '±0.01',
    label: 'Tolerância mm',
    suffix: ''
  },
  {
    id: 4,
    number: '98',
    label: 'Clientes Satisfeitos',
    suffix: '%'
  }
];

// --- Informação de Contacto ---
export const contactInfo = {
  email: 'info@nexuscnc.pt',
  phone: '+351 21 234 5678',
  phoneFormatted: '+351 21 234 5678',
  address: {
    street: 'Zona Industrial de Setúbal',
    city: 'Setúbal',
    country: 'Portugal',
    postal: '2900-000'
  },
  hours: {
    weekdays: 'Seg-Sex 08:00-18:00',
    weekend: 'Encerrado'
  },
  social: {
    linkedin: 'https://linkedin.com/company/nexus-cnc',
    instagram: 'https://instagram.com/nexuscnc',
    youtube: 'https://youtube.com/@nexuscnc',
    facebook: 'https://facebook.com/nexuscnc'
  },
  map: {
    lat: 38.5244,
    lng: -8.8882,
    zoom: 14
  }
};

// --- Dados da Empresa ---
export const companyData = {
  name: 'NEXUS CNC',
  tagline: 'Soluções Industriais de Precisão',
  founded: 2012,
  mission: 'Desenvolver soluções CNC personalizadas que transformam ideias em realidade com precisão micrométrica.',
  vision: 'Ser a referência nacional em engenharia CNC, reconhecida pela qualidade, inovação e serviço ao cliente.',
  values: [
    'Precisão em cada detalhe',
    'Inovação tecnológica contínua',
    'Compromisso com o cliente',
    'Qualidade sem compromisso'
  ]
};

export default { techData, statsData, contactInfo, companyData };
