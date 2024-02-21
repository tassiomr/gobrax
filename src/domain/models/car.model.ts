import { z } from 'zod';

export const CarSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(3, 'O nome do carro é obrigatório'),
  plate: z
    .string()
    .min(8, 'O campo placa está incorreto')
    .regex(/^[A-Za-z]{3}-\d{4}$/, 'Está placa é inválida.'),
  uesrId: z.string().uuid().optional(),
  lastUpdate: z.date().optional(),
});

export type Car = z.infer<typeof CarSchema>;
export type CarZod = typeof CarSchema;
