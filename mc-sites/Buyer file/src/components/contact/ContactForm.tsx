import { FormEvent, useId, useState } from "react";
import {
  BUDGET_RANGE_OPTIONS,
  EMPTY_CONTACT_FORM,
  PROJECT_TYPE_OPTIONS,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormFields,
} from "@/constants/contact-form-options";
import { submitContactLead } from "@/services/contact";

type SubmitState = "idle" | "submitting" | "success";

export default function ContactForm() {
  const formId = useId();
  const [fields, setFields] = useState<ContactFormFields>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fieldIds = {
    name: `${formId}-name`,
    company: `${formId}-company`,
    email: `${formId}-email`,
    whatsapp: `${formId}-whatsapp`,
    projectType: `${formId}-project-type`,
    budgetRange: `${formId}-budget-range`,
    message: `${formId}-message`,
    consent: `${formId}-consent`,
  } as const;

  const updateField = <K extends keyof ContactFormFields>(
    key: K,
    value: ContactFormFields[K]
  ) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }
      const next = { ...current };
      delete next[key];
      return next;
    });
    setSubmitError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    const validationErrors = validateContactForm(fields);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitState("submitting");
    setSubmitError(null);

    try {
      await submitContactLead({
        name: fields.name.trim(),
        company: fields.company.trim() || undefined,
        email: fields.email.trim(),
        whatsapp: fields.whatsapp.trim(),
        projectType: fields.projectType,
        budgetRange: fields.budgetRange,
        message: fields.message.trim(),
        consent: fields.consent,
      });

      // TEMPORÁRIO: mensagem de sucesso simulada até integração com backend.
      setSubmitState("success");
      setFields(EMPTY_CONTACT_FORM);
    } catch {
      setSubmitState("idle");
      setSubmitError(
        "Não foi possível enviar agora. Tente novamente em instantes."
      );
    }
  };

  if (submitState === "success") {
    return (
      <div
        className="contact-submit-area rounded-4 wow fadeInUp contact-form-success"
        data-wow-delay=".5s"
        role="status"
        aria-live="polite"
      >
        <h2 className="title pb-3 mb-3 fw-bold">Solicitação recebida.</h2>
        <p className="mb-0 fs-six pra-clr">
          A integração de envio será ativada em uma próxima etapa.
        </p>
      </div>
    );
  }

  return (
    <div className="contact-submit-area rounded-4 wow fadeInUp" data-wow-delay=".5s">
      <h2 className="title pb-3 mb-4 fw-bold">Solicitar projeto</h2>

      <form
        id={formId}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="row g-4 pt-2">
          <div className="col-md-6">
            <label htmlFor={fieldIds.name} className="contact-field-label">
              Nome *
            </label>
            <div className="cont-grp-info">
              <input
                id={fieldIds.name}
                name="name"
                type="text"
                autoComplete="name"
                value={fields.name}
                onChange={(event) => updateField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
              />
            </div>
            {errors.name && (
              <p id={`${fieldIds.name}-error`} className="contact-field-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor={fieldIds.company} className="contact-field-label">
              Empresa
            </label>
            <div className="cont-grp-info">
              <input
                id={fieldIds.company}
                name="company"
                type="text"
                autoComplete="organization"
                value={fields.company}
                onChange={(event) => updateField("company", event.target.value)}
              />
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor={fieldIds.email} className="contact-field-label">
              E-mail *
            </label>
            <div className="cont-grp-info">
              <input
                id={fieldIds.email}
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
              />
            </div>
            {errors.email && (
              <p id={`${fieldIds.email}-error`} className="contact-field-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor={fieldIds.whatsapp} className="contact-field-label">
              WhatsApp *
            </label>
            <div className="cont-grp-info">
              <input
                id={fieldIds.whatsapp}
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(11) 99999-9999"
                value={fields.whatsapp}
                onChange={(event) => updateField("whatsapp", event.target.value)}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={
                  errors.whatsapp ? `${fieldIds.whatsapp}-error` : undefined
                }
              />
            </div>
            {errors.whatsapp && (
              <p
                id={`${fieldIds.whatsapp}-error`}
                className="contact-field-error"
                role="alert"
              >
                {errors.whatsapp}
              </p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor={fieldIds.projectType} className="contact-field-label">
              Tipo de projeto *
            </label>
            <div className="cont-grp-info">
              <select
                id={fieldIds.projectType}
                name="projectType"
                value={fields.projectType}
                onChange={(event) => updateField("projectType", event.target.value)}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={
                  errors.projectType ? `${fieldIds.projectType}-error` : undefined
                }
              >
                {PROJECT_TYPE_OPTIONS.map((option) => (
                  <option key={option.value || "empty"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.projectType && (
              <p
                id={`${fieldIds.projectType}-error`}
                className="contact-field-error"
                role="alert"
              >
                {errors.projectType}
              </p>
            )}
          </div>

          <div className="col-md-6">
            <label htmlFor={fieldIds.budgetRange} className="contact-field-label">
              Faixa de investimento *
            </label>
            <div className="cont-grp-info">
              <select
                id={fieldIds.budgetRange}
                name="budgetRange"
                value={fields.budgetRange}
                onChange={(event) => updateField("budgetRange", event.target.value)}
                aria-invalid={Boolean(errors.budgetRange)}
                aria-describedby={
                  errors.budgetRange ? `${fieldIds.budgetRange}-error` : undefined
                }
              >
                {BUDGET_RANGE_OPTIONS.map((option) => (
                  <option key={option.value || "empty"} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.budgetRange && (
              <p
                id={`${fieldIds.budgetRange}-error`}
                className="contact-field-error"
                role="alert"
              >
                {errors.budgetRange}
              </p>
            )}
            <p className="contact-field-hint">
              Valor indicativo — não representa orçamento final.
            </p>
          </div>

          <div className="col-md-12">
            <label htmlFor={fieldIds.message} className="contact-field-label">
              Conte sobre seu projeto *
            </label>
            <div className="cont-grp-info">
              <textarea
                id={fieldIds.message}
                name="message"
                rows={5}
                placeholder="Objetivo do projeto, público, funcionalidades, referências ou qualquer informação que considere importante."
                value={fields.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
              />
            </div>
            {errors.message && (
              <p id={`${fieldIds.message}-error`} className="contact-field-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <div className="col-md-12">
            <div className="contact-consent-wrap">
              <input
                id={fieldIds.consent}
                name="consent"
                type="checkbox"
                checked={fields.consent}
                onChange={(event) => updateField("consent", event.target.checked)}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? `${fieldIds.consent}-error` : undefined}
              />
              <label htmlFor={fieldIds.consent} className="contact-consent-label">
                Li e concordo com o uso dos meus dados para que o MC-SITES entre em
                contato sobre esta solicitação.{" "}
                <a
                  href="#"
                  className="contact-privacy-link"
                  onClick={(event) => event.preventDefault()}
                  aria-label="Política de Privacidade — página pendente"
                >
                  Política de Privacidade
                </a>
              </label>
            </div>
            {errors.consent && (
              <p id={`${fieldIds.consent}-error`} className="contact-field-error" role="alert">
                {errors.consent}
              </p>
            )}
          </div>

          {submitError && (
            <div className="col-md-12">
              <p className="contact-field-error" role="alert">
                {submitError}
              </p>
            </div>
          )}

          <div className="col-md-12">
            <button
              type="submit"
              className="common_btn gap-2 mt-2 w-100 py-3 rounded-pill d-center px-2 text-nowrap border-0"
              disabled={submitState === "submitting"}
            >
              {submitState === "submitting" ? "Enviando..." : "Solicitar projeto"}
              {submitState !== "submitting" && (
                <img src="assets/img/icon/right-arrow.svg" alt="" />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
