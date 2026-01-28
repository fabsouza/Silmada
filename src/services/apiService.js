// ============================================
// NEXUS CNC - API SERVICE
// ============================================
// Serviço para comunicação com APIs externas

// --- EmailJS Configuration ---
// Para usar o EmailJS:
// 1. Criar conta em https://www.emailjs.com/
// 2. Criar um email service
// 3. Criar um email template
// 4. Copiar as credenciais abaixo

const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',      // Substituir pelo seu Service ID
  templateId: 'YOUR_TEMPLATE_ID',    // Substituir pelo seu Template ID
  publicKey: 'YOUR_PUBLIC_KEY'       // Substituir pela sua Public Key
};

/**
 * Enviar email através do EmailJS
 * @param {Object} formData - Dados do formulário
 * @returns {Promise} - Resultado do envio
 */
export const sendContactEmail = async (formData) => {
  const { name, email, company, message, phone } = formData;

  // Preparar dados para o template
  const templateParams = {
    from_name: name,
    from_email: email,
    company: company || 'Não especificada',
    phone: phone || 'Não especificado',
    message: message,
    to_name: 'NEXUS CNC',
    reply_to: email
  };

  try {
    // Importar EmailJS dinamicamente
    const emailjs = await import('emailjs-com');
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Mensagem enviada com sucesso!'
      };
    } else {
      throw new Error('Falha no envio');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    
    // Para desenvolvimento, simular sucesso
    if (process.env.NODE_ENV === 'development') {
      console.log('DEV MODE: Simulating email send success');
      console.log('Form Data:', templateParams);
      
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return {
        success: true,
        message: 'Mensagem enviada com sucesso! (DEV MODE)'
      };
    }

    return {
      success: false,
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
    };
  }
};

/**
 * Alternativa: Enviar via Formspree
 * @param {Object} formData - Dados do formulário
 * @returns {Promise} - Resultado do envio
 */
export const sendViaFormspree = async (formData) => {
  const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'; // Substituir pelo seu Form ID

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Mensagem enviada com sucesso!'
      };
    } else {
      throw new Error('Falha no envio');
    }
  } catch (error) {
    console.error('Formspree Error:', error);
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.'
    };
  }
};

/**
 * Validar dados do formulário de contacto
 * @param {Object} data - Dados a validar
 * @returns {Object} - Erros de validação
 */
export const validateContactForm = (data) => {
  const errors = {};

  // Nome
  if (!data.name || !data.name.trim()) {
    errors.name = 'O nome é obrigatório';
  } else if (data.name.trim().length < 2) {
    errors.name = 'O nome deve ter pelo menos 2 caracteres';
  }

  // Email
  if (!data.email || !data.email.trim()) {
    errors.email = 'O email é obrigatório';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Email inválido';
    }
  }

  // Mensagem
  if (!data.message || !data.message.trim()) {
    errors.message = 'A mensagem é obrigatória';
  } else if (data.message.trim().length < 10) {
    errors.message = 'A mensagem deve ter pelo menos 10 caracteres';
  }

  // Telefone (opcional, mas se preenchido deve ser válido)
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[+]?[\d\s-]{9,}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = 'Telefone inválido';
    }
  }

  return errors;
};

export default {
  sendContactEmail,
  sendViaFormspree,
  validateContactForm
};
