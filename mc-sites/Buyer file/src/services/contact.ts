export type ContactLeadPayload = {
  name: string;
  company?: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budgetRange: string;
  message: string;
  consent: boolean;
};

/**
 * Envia lead de contato para o backend MC-SITES.
 * TODO: integrar com backend MC-SITES quando o endpoint estiver disponível.
 */
export async function submitContactLead(
  payload: ContactLeadPayload
): Promise<void> {
  void payload;
  // Simulação temporária de desenvolvimento — substituir por fetch real.
  await Promise.resolve();
}
