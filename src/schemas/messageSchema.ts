import {z} from 'zod';

export const messageSchema = z.object({
    content: z
        .string()
        .min(5, "Message must be at least 5 character")
        .max(300, "Message must be at most 300 characters")
})