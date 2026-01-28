// ============================================
// NEXUS CNC - PÁGINA: Contacts
// ============================================

import React, { useState } from 'react';
import Button from '../../components/ui/button/Button';
import { useForm, validators, createValidator } from '../../hooks';
import { sendContactEmail, validateContactForm } from '../../services/apiService';
import { contactInfo, companyData } from '../../data/companyData';
import './contacts.scss';

/**
 * Página Contacts - Formulário de contacto
 */
const Contacts = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    submitStatus,
    handleChange,
    handleBlur,
    handleSubmit,
    getFieldError,
    resetForm
  } = useForm(initialValues, validateContactForm, async (formData) => {
    const result = await sendContactEmail(formData);
    if (!result.success) {
      throw new Error(result.message);
    }
    return result;
  });

  return (
    <div className="contacts-page">
      {/* Hero Section */}
      <section className="contacts-page__hero">
        <div className="contacts-page__container">
          <span className="contacts-page__eyebrow">Contacto</span>
          <h1 className="contacts-page__title">
            Vamos <em>conversar</em><br />
            sobre o seu projeto
          </h1>
          <p className="contacts-page__intro">
            Cada projeto começa com uma conversa. Partilhe connosco a sua visão 
            e descubra como podemos transformá-la em realidade.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contacts-page__main">
        <div className="contacts-page__container">
          <div className="contacts-page__grid">
            {/* Contact Info */}
            <div className="contacts-page__info">
              <h2 className="contacts-page__info-title">Informação de Contacto</h2>
              
              <div className="contacts-page__info-list">
                <div className="contacts-page__info-item">
                  <span className="contacts-page__info-label">Email</span>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="contacts-page__info-value"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="contacts-page__info-item">
                  <span className="contacts-page__info-label">Telefone</span>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="contacts-page__info-value"
                  >
                    {contactInfo.phoneFormatted}
                  </a>
                </div>

                <div className="contacts-page__info-item">
                  <span className="contacts-page__info-label">Morada</span>
                  <address className="contacts-page__info-value contacts-page__address">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.postal} {contactInfo.address.city}<br />
                    {contactInfo.address.country}
                  </address>
                </div>

                <div className="contacts-page__info-item">
                  <span className="contacts-page__info-label">Horário</span>
                  <span className="contacts-page__info-value">
                    {contactInfo.hours.weekdays}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contacts-page__form-wrapper">
              <h2 className="contacts-page__form-title">Envie-nos uma mensagem</h2>

              {submitStatus === 'success' ? (
                <div className="contacts-page__success">
                  <span className="contacts-page__success-icon">✓</span>
                  <h3>Mensagem enviada com sucesso!</h3>
                  <p>
                    Obrigado pelo seu contacto. Responderemos o mais brevemente possível.
                  </p>
                  <Button variant="outline" onClick={resetForm}>
                    Enviar Nova Mensagem
                  </Button>
                </div>
              ) : (
                <form 
                  className="contacts-page__form" 
                  onSubmit={handleSubmit}
                  noValidate
                >
                  {/* Name Field */}
                  <div className="form-field">
                    <label htmlFor="name" className="form-field__label">
                      Nome <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-field__input ${getFieldError('name') ? 'form-field__input--error' : ''}`}
                      placeholder="O seu nome"
                      aria-invalid={!!getFieldError('name')}
                      aria-describedby={getFieldError('name') ? 'name-error' : undefined}
                    />
                    {getFieldError('name') && (
                      <span id="name-error" className="form-field__error" role="alert">
                        {getFieldError('name')}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-field">
                    <label htmlFor="email" className="form-field__label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-field__input ${getFieldError('email') ? 'form-field__input--error' : ''}`}
                      placeholder="seu@email.com"
                      aria-invalid={!!getFieldError('email')}
                      aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                    />
                    {getFieldError('email') && (
                      <span id="email-error" className="form-field__error" role="alert">
                        {getFieldError('email')}
                      </span>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="form-field">
                    <label htmlFor="phone" className="form-field__label">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-field__input ${getFieldError('phone') ? 'form-field__input--error' : ''}`}
                      placeholder="+351 912 345 678"
                    />
                    {getFieldError('phone') && (
                      <span id="phone-error" className="form-field__error" role="alert">
                        {getFieldError('phone')}
                      </span>
                    )}
                  </div>

                  {/* Company Field */}
                  <div className="form-field">
                    <label htmlFor="company" className="form-field__label">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-field__input"
                      placeholder="Nome da empresa (opcional)"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="form-field form-field--full">
                    <label htmlFor="message" className="form-field__label">
                      Mensagem <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows="5"
                      className={`form-field__input form-field__textarea ${getFieldError('message') ? 'form-field__input--error' : ''}`}
                      placeholder="Descreva o seu projeto ou questão..."
                      aria-invalid={!!getFieldError('message')}
                      aria-describedby={getFieldError('message') ? 'message-error' : undefined}
                    />
                    {getFieldError('message') && (
                      <span id="message-error" className="form-field__error" role="alert">
                        {getFieldError('message')}
                      </span>
                    )}
                  </div>

                  {/* Submit Error */}
                  {submitStatus === 'error' && (
                    <div className="contacts-page__error" role="alert">
                      Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-field form-field--full">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      fullWidth
                    >
                      {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
