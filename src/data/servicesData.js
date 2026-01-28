// ============================================
// NEXUS CNC - DADOS DOS SERVIÇOS
// ============================================

export const servicesData = [
  {
    id: 1,
    icon: '◈',
    title: 'CNC Personalizado',
    shortDescription: 'Projeto e construção de máquinas CNC à medida das suas necessidades.',
    fullDescription: `Desenvolvemos máquinas CNC completamente personalizadas, desde a conceção até à instalação final. 
    Cada projeto é único e adaptado às especificações técnicas do cliente, garantindo a solução perfeita para cada desafio industrial.`,
    features: [
      'Fresadoras 3, 4 e 5 eixos',
      'Routers de grande formato',
      'Mesas de corte plasma e laser',
      'Sistemas de gravação e marcação',
      'Máquinas híbridas multi-processo'
    ],
    specs: {
      'Área de trabalho': 'Até 4000×2000×500mm',
      'Precisão': '±0.01mm (repetibilidade)',
      'Velocidade': 'Até 60m/min',
      'Eixos': '3 a 5 eixos simultâneos'
    },
    image: '/images/services/cnc-custom.jpg'
  },
  {
    id: 2,
    icon: '⬡',
    title: 'Retrofitting',
    shortDescription: 'Modernização de equipamentos existentes com tecnologia de ponta.',
    fullDescription: `Transformamos máquinas convencionais em equipamentos CNC de alta performance. 
    O retrofitting permite recuperar o investimento em maquinaria existente, adicionando controlo numérico, 
    servomotores e sistemas de feedback de última geração.`,
    features: [
      'Conversão de fresadoras manuais',
      'Upgrade de tornos convencionais',
      'Instalação de encoders lineares',
      'Integração de sistemas ATC',
      'Modernização de controladores obsoletos'
    ],
    specs: {
      'Tempo médio': '4-8 semanas',
      'ROI típico': '< 2 anos',
      'Aumento produtividade': '300-500%',
      'Garantia': '2 anos'
    },
    image: '/images/services/retrofitting.jpg'
  },
  {
    id: 3,
    icon: '◇',
    title: 'Automação ATC',
    shortDescription: 'Sistemas de troca automática de ferramentas para máxima produtividade.',
    fullDescription: `Implementamos sistemas ATC (Automatic Tool Changer) que eliminam tempos mortos na produção. 
    Desde magazines lineares simples até carrosséis rotativos de alta capacidade, 
    garantimos a solução ideal para cada aplicação.`,
    features: [
      'Magazines lineares 6-12 posições',
      'Carrosséis rotativos até 24 posições',
      'Sistemas pneumáticos de precisão',
      'Sensores de presença e orientação',
      'Integração com LinuxCNC'
    ],
    specs: {
      'Tempo de troca': '< 3 segundos',
      'Cones suportados': 'ISO20, ISO30, BT30, BT40',
      'Repetibilidade': '±0.002mm',
      'Vida útil': '> 1 milhão de ciclos'
    },
    image: '/images/services/atc-automation.jpg'
  },
  {
    id: 4,
    icon: '△',
    title: 'Integração CAD/CAM',
    shortDescription: 'Workflow digital completo do desenho à peça acabada.',
    fullDescription: `Configuramos todo o fluxo de trabalho digital, desde o software CAD/CAM até aos pós-processadores 
    otimizados para cada máquina. Garantimos que a transição do modelo 3D para o G-code seja fluida e eficiente.`,
    features: [
      'Configuração Fusion 360 / FreeCAD',
      'Pós-processadores personalizados',
      'Bibliotecas de ferramentas',
      'Templates de maquinação',
      'Simulação e verificação'
    ],
    specs: {
      'Software suportado': 'Fusion 360, FreeCAD, SolidWorks CAM',
      'Simulação': 'CAMotics, NCViewer',
      'Formatos': 'G-code, STEP, IGES, DXF',
      'Tempo setup': '1-2 dias'
    },
    image: '/images/services/cadcam-integration.jpg'
  },
  {
    id: 5,
    icon: '○',
    title: 'Manutenção',
    shortDescription: 'Contratos de manutenção preventiva e assistência técnica.',
    fullDescription: `Oferecemos programas de manutenção que garantem o funcionamento contínuo das suas máquinas. 
    A manutenção preventiva reduz paragens não planeadas e prolonga a vida útil do equipamento.`,
    features: [
      'Manutenção preventiva programada',
      'Assistência técnica remota e presencial',
      'Calibração e alinhamento',
      'Substituição de componentes',
      'Relatórios de condição'
    ],
    specs: {
      'Tempo de resposta': '< 24 horas',
      'Cobertura': 'Portugal Continental',
      'Disponibilidade': 'Seg-Sex 08:00-20:00',
      'SLA disponível': 'Sim'
    },
    image: '/images/services/maintenance.jpg'
  },
  {
    id: 6,
    icon: '□',
    title: 'Formação',
    shortDescription: 'Cursos de operação, programação e manutenção CNC.',
    fullDescription: `Capacitamos as equipas dos nossos clientes com formação especializada em operação CNC, 
    programação G-code e manutenção básica. Operadores bem formados maximizam a produtividade e reduzem erros.`,
    features: [
      'Operação de máquinas CNC',
      'Programação G-code manual',
      'Utilização de CAM software',
      'Manutenção de primeiro nível',
      'Segurança industrial'
    ],
    specs: {
      'Duração': '8-40 horas (modular)',
      'Local': 'In-loco ou nas nossas instalações',
      'Certificação': 'Incluída',
      'Máx. participantes': '6 por sessão'
    },
    image: '/images/services/training.jpg'
  }
];

export default servicesData;
