import { z } from 'zod';
import { CarSchema } from './car.model';

export const DriverSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, 'O nome é obrigatório'),
  document: z
    .string()
    .min(11, 'O campo documento está incorreto')
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Este não é um documento válido.'),
  carId: z.string().optional(),
  lastUpdate: z.date().optional(),
  isSelected: z.boolean().default(false),
  car: CarSchema.optional().nullable(),
});

export type Driver = z.infer<typeof DriverSchema>;
export type DriverZod = typeof DriverSchema;
