import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(2, "Nome obrigatório"),
  document: z.string().min(11, "CPF ou CNPJ inválido"),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  address: z
    .object({
      street: z.string().optional(),
      number: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      zipCode: z.string().optional(),
    })
    .optional(),
});

export const scheduleSchema = z.object({
  customerId: z.string().uuid("Selecione um cliente"),
  description: z.string().min(5, "Descrição obrigatória"),
  amount: z.coerce.number().positive("Valor deve ser maior que zero"),
  dayOfMonth: z.coerce.number().min(1).max(28, "Dia deve ser entre 1 e 28"),
  active: z.boolean().default(true),
});

export const companySchema = z.object({
  name: z.string().min(2, "Razão social obrigatória"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  municipalTaxId: z.string().min(1, "Inscrição municipal obrigatória"),
  serviceCode: z.string().min(1, "Código do serviço obrigatório"),
  taxRegime: z.coerce.number().default(1),
});

export type CustomerForm = z.infer<typeof customerSchema>;
export type ScheduleForm = z.infer<typeof scheduleSchema>;
export type CompanyForm = z.infer<typeof companySchema>;
