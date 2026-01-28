// ============================================
// NEXUS CNC - HOOK: useForm
// ============================================
// Hook para gestão de formulários com validação

import { useState, useCallback } from 'react';

/**
 * Hook para gestão de formulários
 * @param {Object} initialValues - Valores iniciais do formulário
 * @param {Function} validate - Função de validação (opcional)
 * @param {Function} onSubmit - Função chamada no submit (opcional)
 * @returns {Object} - Estado e handlers do formulário
 */
export const useForm = (initialValues = {}, validate = null, onSubmit = null) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Handler para mudança de valor
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: newValue
    }));

    // Limpar erro do campo quando o utilizador começa a escrever
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  // Handler para blur (marca campo como touched)
  const handleBlur = useCallback((e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    // Validar campo individual no blur
    if (validate) {
      const validationErrors = validate(values);
      if (validationErrors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: validationErrors[name]
        }));
      }
    }
  }, [validate, values]);

  // Definir valor de um campo programaticamente
  const setValue = useCallback((name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Definir múltiplos valores
  const setMultipleValues = useCallback((newValues) => {
    setValues((prev) => ({
      ...prev,
      ...newValues
    }));
  }, []);

  // Definir erro de um campo
  const setError = useCallback((name, error) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  }, []);

  // Validar todo o formulário
  const validateForm = useCallback(() => {
    if (!validate) return true;

    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Marcar todos os campos como touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return Object.keys(validationErrors).length === 0;
  }, [validate, values]);

  // Handler para submit
  const handleSubmit = useCallback(async (e) => {
    if (e) {
      e.preventDefault();
    }

    // Validar formulário
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      setSubmitStatus('success');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm, onSubmit, values]);

  // Reset do formulário
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setSubmitStatus(null);
  }, [initialValues]);

  // Verificar se um campo tem erro e foi touched
  const getFieldError = useCallback((name) => {
    return touched[name] && errors[name] ? errors[name] : '';
  }, [touched, errors]);

  // Props para input field
  const getFieldProps = useCallback((name) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': touched[name] && errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${name}-error` : undefined
  }), [values, handleChange, handleBlur, touched, errors]);

  return {
    // Estado
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    
    // Handlers
    handleChange,
    handleBlur,
    handleSubmit,
    
    // Utilitários
    setValue,
    setMultipleValues,
    setError,
    validateForm,
    resetForm,
    getFieldError,
    getFieldProps,
    
    // Computed
    isValid: Object.keys(errors).length === 0,
    isDirty: JSON.stringify(values) !== JSON.stringify(initialValues)
  };
};

// --- Validações Comuns ---

export const validators = {
  required: (value, message = 'Este campo é obrigatório') => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return message;
    }
    return '';
  },

  email: (value, message = 'Email inválido') => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : message;
  },

  minLength: (min, message) => (value) => {
    if (!value) return '';
    return value.length >= min ? '' : message || `Mínimo ${min} caracteres`;
  },

  maxLength: (max, message) => (value) => {
    if (!value) return '';
    return value.length <= max ? '' : message || `Máximo ${max} caracteres`;
  },

  phone: (value, message = 'Telefone inválido') => {
    if (!value) return '';
    const phoneRegex = /^[+]?[\d\s-]{9,}$/;
    return phoneRegex.test(value) ? '' : message;
  },

  url: (value, message = 'URL inválido') => {
    if (!value) return '';
    try {
      new URL(value);
      return '';
    } catch {
      return message;
    }
  }
};

// --- Criar função de validação combinada ---
export const createValidator = (rules) => (values) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = values[field];

    for (const rule of fieldRules) {
      const error = typeof rule === 'function' ? rule(value) : '';
      if (error) {
        errors[field] = error;
        break; // Para no primeiro erro
      }
    }
  });

  return errors;
};

export default useForm;
