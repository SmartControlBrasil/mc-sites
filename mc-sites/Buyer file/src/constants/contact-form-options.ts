export const PROJECT_TYPE_OPTIONS = [
  { value: "", label: "Selecione o tipo de projeto" },
  { value: "site-institucional", label: "Site Institucional" },
  { value: "landing-page", label: "Landing Page" },
  { value: "aplicacao-web", label: "Aplicação Web" },
  { value: "redesign", label: "Redesign de Site" },
  { value: "seo-performance", label: "SEO e Performance" },
  { value: "ux-ui", label: "UX/UI" },
  { value: "outro", label: "Outro" },
] as const;

export const BUDGET_RANGE_OPTIONS = [
  { value: "", label: "Selecione uma faixa de investimento" },
  { value: "ate-3000", label: "Até R$ 3.000" },
  { value: "3000-7000", label: "R$ 3.000 a R$ 7.000" },
  { value: "7000-15000", label: "R$ 7.000 a R$ 15.000" },
  { value: "15000-30000", label: "R$ 15.000 a R$ 30.000" },
  { value: "acima-30000", label: "Acima de R$ 30.000" },
  { value: "nao-defini", label: "Ainda não defini" },
] as const;

export type ContactFormFields = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budgetRange: string;
  message: string;
  consent: boolean;
};

export const EMPTY_CONTACT_FORM: ContactFormFields = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budgetRange: "",
  message: "",
  consent: false,
};

export type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeWhatsappDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidWhatsapp(value: string): boolean {
  const digits = normalizeWhatsappDigits(value);

  if (digits.length < 10 || digits.length > 13) {
    return false;
  }

  if (digits.startsWith("55")) {
    const local = digits.slice(2);
    return local.length >= 10 && local.length <= 11;
  }

  return digits.length >= 10 && digits.length <= 11;
}

export function validateContactForm(fields: ContactFormFields): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (fields.name.trim().length < 2) {
    errors.name = "Informe seu nome.";
  }

  if (!fields.email.trim()) {
    errors.email = "Informe um e-mail válido.";
  } else if (!EMAIL_PATTERN.test(fields.email.trim())) {
    errors.email = "Informe um e-mail válido.";
  }

  if (!isValidWhatsapp(fields.whatsapp)) {
    errors.whatsapp = "Informe um WhatsApp válido.";
  }

  if (!fields.projectType) {
    errors.projectType = "Selecione o tipo de projeto.";
  }

  if (!fields.budgetRange) {
    errors.budgetRange = "Selecione uma faixa de investimento.";
  }

  if (fields.message.trim().length < 20) {
    errors.message = "Conte um pouco mais sobre o projeto.";
  }

  if (!fields.consent) {
    errors.consent = "É necessário aceitar o consentimento para continuar.";
  }

  return errors;
}
