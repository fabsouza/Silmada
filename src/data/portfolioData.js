// ============================================
// NEXUS CNC - DADOS DO PORTFÓLIO
// ============================================

export const portfolioData = [
  {
    id: 1,
    title: 'CNC 1500×1000×200mm',
    category: 'Fresadora Industrial',
    categorySlug: 'fresadora',
    client: 'MetalWorks Lda.',
    location: 'Palmela',
    year: 2024,
    shortDescription: 'Fresadora 5 eixos com ATC 12 posições para maquinação de alumínio aeronáutico.',
    fullDescription: `Centro de maquinação vertical de alta precisão desenvolvido para a indústria aeronáutica. 
    Esta fresadora de 5 eixos simultâneos foi projetada para maquinar componentes em alumínio de série 7xxx, 
    com tolerâncias apertadas e acabamentos de superfície de alta qualidade.
    
    O sistema inclui um trocador automático de ferramentas com 12 posições e um spindle de 5.5kW ISO30, 
    permitindo operação contínua sem intervenção do operador. A estrutura em aço soldado e normalizado 
    garante estabilidade térmica e dimensional mesmo em operações prolongadas.`,
    specs: {
      'Área de trabalho': '1500×1000×200mm',
      'Spindle': '5.5kW ISO30 24000rpm',
      'ATC': '12 posições pneumático',
      'Motores': 'Servo AC 2kW closed-loop',
      'Guias': 'HGR25 lineares',
      'Fusos': 'SFU2005 C5',
      'Controlador': 'Mesa 7i76E + LinuxCNC',
      'Precisão': '±0.005mm',
      'Repetibilidade': '±0.002mm'
    },
    features: [
      'Sistema de refrigeração through-spindle',
      'Mesa com rasgos T e furação para fixação',
      'Proteções telescópicas em todos os eixos',
      'Sistema de lubrificação centralizada',
      'Quadro elétrico com ar condicionado'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i76E', 'Servo AC', 'ISO30 ATC', 'HGR25'],
    images: [
      '/images/portfolio/fresadora-5eixos-1.jpg',
      '/images/portfolio/fresadora-5eixos-2.jpg',
      '/images/portfolio/fresadora-5eixos-3.jpg'
    ],
    thumbnail: '/images/portfolio/fresadora-5eixos-thumb.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Mesa 2400×1200mm',
    category: 'Router CNC',
    categorySlug: 'router',
    client: 'MobiliArt',
    location: 'Leiria',
    year: 2024,
    shortDescription: 'Router de grande formato para indústria moveleira com mesa de vácuo zonada.',
    fullDescription: `Router CNC de grande formato especialmente desenvolvido para a indústria moveleira e de decoração. 
    Com uma área de trabalho de 2400×1200mm, esta máquina permite processar painéis de MDF, 
    contraplacado e materiais compósitos de forma eficiente.
    
    O sistema de vácuo zonado permite fixar peças de diferentes tamanhos sem necessidade de grampos, 
    aumentando a produtividade e reduzindo o tempo de setup entre trabalhos.`,
    specs: {
      'Área de trabalho': '2400×1200×200mm',
      'Spindle': '3kW ER20 24000rpm',
      'ATC': '6 posições linear',
      'Motores': 'NEMA34 8.5Nm closed-loop',
      'Guias': 'HGR20 lineares',
      'Fusos': 'SFU1605 + cremalheira X',
      'Controlador': 'Mesa 7i95T + LinuxCNC',
      'Velocidade': '40m/min',
      'Mesa': 'Vácuo zonado 6 zonas'
    },
    features: [
      'Mesa de vácuo com 6 zonas independentes',
      'Sistema de aspiração integrado',
      'Sensor de altura automático',
      'Camera de posicionamento',
      'Software de nesting incluído'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i95T', 'NEMA34', 'Vácuo Zonado', 'ATC Linear'],
    images: [
      '/images/portfolio/router-2412-1.jpg',
      '/images/portfolio/router-2412-2.jpg',
      '/images/portfolio/router-2412-3.jpg'
    ],
    thumbnail: '/images/portfolio/router-2412-thumb.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Modernização Bridgeport',
    category: 'Retrofitting',
    categorySlug: 'retrofitting',
    client: 'Oficina Central',
    location: 'Setúbal',
    year: 2023,
    shortDescription: 'Conversão de fresadora manual Bridgeport para CNC 3 eixos com encoders lineares.',
    fullDescription: `Projeto de retrofitting completo de uma fresadora Bridgeport Series I, 
    convertendo uma máquina manual dos anos 80 num centro de maquinação CNC moderno e preciso.
    
    O projeto preservou a robustez mecânica original da Bridgeport, conhecida pela sua qualidade de construção, 
    enquanto adicionou toda a eletrónica e software necessários para operação CNC. 
    Foram instalados encoders lineares Heidenhain para garantir precisão absoluta de posicionamento.`,
    specs: {
      'Máquina original': 'Bridgeport Series I (1985)',
      'Área de trabalho': '750×350×400mm',
      'Spindle': 'Original 2HP R8',
      'Motores': 'Servo AC 1kW',
      'Encoders': 'Heidenhain lineares',
      'Fusos': 'Ballscrew SFU1605',
      'Controlador': 'Mesa 7i76E + LinuxCNC',
      'Precisão': '±0.01mm',
      'Interface': 'Touchscreen 15"'
    },
    features: [
      'Encoders lineares Heidenhain',
      'Painel touchscreen integrado',
      'Modo manual/CNC comutável',
      'Volantes eletrónicos MPG',
      'Sistema de refrigeração novo'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i76E', 'Heidenhain', 'Servo AC', 'MPG'],
    images: [
      '/images/portfolio/bridgeport-retro-1.jpg',
      '/images/portfolio/bridgeport-retro-2.jpg',
      '/images/portfolio/bridgeport-retro-3.jpg'
    ],
    thumbnail: '/images/portfolio/bridgeport-retro-thumb.jpg',
    featured: true
  },
  {
    id: 4,
    title: 'Mesa Corte 3000×1500mm',
    category: 'Plasma CNC',
    categorySlug: 'plasma',
    client: 'SerraTech',
    location: 'Sines',
    year: 2024,
    shortDescription: 'Sistema de corte plasma com THC automático para chapas até 25mm.',
    fullDescription: `Mesa de corte plasma CNC de grande formato para processamento de chapas de aço e inox. 
    O sistema inclui controlo de altura de tocha (THC) capacitivo que mantém automaticamente 
    a distância ideal durante o corte, garantindo qualidade consistente mesmo em chapas onduladas.
    
    A mesa de água incorporada reduz a emissão de fumos e poeiras, 
    melhorando as condições de trabalho e cumprindo as normas de segurança.`,
    specs: {
      'Área de corte': '3000×1500mm',
      'Espessura máx.': '25mm aço carbono',
      'Fonte plasma': 'Hypertherm Powermax 105',
      'THC': 'Capacitivo automático',
      'Motores': 'NEMA23 stepper',
      'Guias': 'V-slot + rolamentos',
      'Controlador': 'Mesa 7i76E + LinuxCNC',
      'Velocidade': '15m/min',
      'Mesa': 'Água com grelhas amovíveis'
    },
    features: [
      'THC capacitivo de alta precisão',
      'Mesa de água para redução de fumos',
      'Grelhas amovíveis e substituíveis',
      'Sistema de ignição automático',
      'Software de nesting SheetCAM'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i76E', 'Hypertherm', 'THC', 'SheetCAM'],
    images: [
      '/images/portfolio/plasma-3015-1.jpg',
      '/images/portfolio/plasma-3015-2.jpg',
      '/images/portfolio/plasma-3015-3.jpg'
    ],
    thumbnail: '/images/portfolio/plasma-3015-thumb.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'Gravadora PCB',
    category: 'Fresadora Precisão',
    categorySlug: 'fresadora',
    client: 'ElectroLab',
    location: 'Lisboa',
    year: 2023,
    shortDescription: 'Fresadora de precisão para prototipagem de circuitos impressos.',
    fullDescription: `Máquina CNC de alta precisão desenvolvida especificamente para fresagem de circuitos impressos (PCB). 
    Com resolução de 0.001mm e repetibilidade de ±0.005mm, esta máquina permite criar protótipos de PCB 
    com pistas de até 0.15mm de largura.
    
    O sistema inclui troca automática de ferramentas e sensor de altura que compensa 
    automaticamente variações na espessura do cobre, garantindo profundidade de corte consistente.`,
    specs: {
      'Área de trabalho': '300×200×50mm',
      'Spindle': '500W ER11 60000rpm',
      'ATC': '8 posições mini',
      'Motores': 'NEMA17 servo',
      'Guias': 'MGN12 lineares',
      'Fusos': 'SFU1204 C3',
      'Controlador': 'Mesa 7i76E + LinuxCNC',
      'Resolução': '0.001mm',
      'Repetibilidade': '±0.005mm'
    },
    features: [
      'Spindle 60000rpm para micro-fresas',
      'Sensor de altura capacitivo',
      'Mesa de vácuo para PCB',
      'Camera de alinhamento',
      'Software FlatCAM incluído'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i76E', 'Micro-Spindle', 'FlatCAM', 'MGN12'],
    images: [
      '/images/portfolio/pcb-mill-1.jpg',
      '/images/portfolio/pcb-mill-2.jpg',
      '/images/portfolio/pcb-mill-3.jpg'
    ],
    thumbnail: '/images/portfolio/pcb-mill-thumb.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'CNC Pedra 1200×800mm',
    category: 'Router Industrial',
    categorySlug: 'router',
    client: 'GraniStone',
    location: 'Évora',
    year: 2024,
    shortDescription: 'Router CNC reforçado para maquinação de pedra natural e compósitos.',
    fullDescription: `Router CNC de construção robusta especialmente projetado para maquinação de materiais duros 
    como granito, mármore e quartzo. A estrutura reforçada em aço e as guias de grande porte 
    garantem rigidez suficiente para cortes pesados.
    
    O sistema de refrigeração por água é essencial para controlar a temperatura da ferramenta 
    e evacuar os resíduos de corte abrasivos, prolongando a vida útil das ferramentas diamantadas.`,
    specs: {
      'Área de trabalho': '1200×800×150mm',
      'Spindle': '5.5kW water-cooled ISO30',
      'ATC': '8 posições pneumático',
      'Motores': 'Servo AC 2kW',
      'Guias': 'HGR30 lineares',
      'Fusos': 'SFU2510 C5',
      'Controlador': 'Mesa 7i76E + LinuxCNC',
      'Refrigeração': 'Água em circuito fechado',
      'Estrutura': 'Aço soldado 15mm'
    },
    features: [
      'Estrutura reforçada para pedra',
      'Sistema refrigeração água fechado',
      'Tanque decantação incluído',
      'Proteções contra projeções',
      'Ferramentas diamantadas incluídas'
    ],
    technologies: ['LinuxCNC', 'Mesa 7i76E', 'Servo AC', 'ISO30', 'HGR30'],
    images: [
      '/images/portfolio/stone-cnc-1.jpg',
      '/images/portfolio/stone-cnc-2.jpg',
      '/images/portfolio/stone-cnc-3.jpg'
    ],
    thumbnail: '/images/portfolio/stone-cnc-thumb.jpg',
    featured: false
  }
];

// --- Categorias do Portfólio ---
export const portfolioCategories = [
  { slug: 'all', name: 'Todos' },
  { slug: 'fresadora', name: 'Fresadoras' },
  { slug: 'router', name: 'Routers' },
  { slug: 'plasma', name: 'Plasma' },
  { slug: 'retrofitting', name: 'Retrofitting' }
];

export default portfolioData;
