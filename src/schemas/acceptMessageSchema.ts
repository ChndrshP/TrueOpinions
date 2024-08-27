import {z} from 'zod';

export const acceptMessageSchema = z.object({
    acceptmesages: z.boolean(),
})