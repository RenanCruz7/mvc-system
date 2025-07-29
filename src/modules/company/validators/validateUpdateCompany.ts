import { z } from 'zod';
import { UpdateCompanyDTO } from '../dtos/UpdateCompanyDTO';
import { AppError } from '../../../shared/errors/AppError';


const addressSchema = z.object({
    street: z.string().optional(),
    number: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipcode: z.string().optional(),
});

const updateCompanySchema = z.object({
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    address: addressSchema.required(),
})

export function validateUpdateCompany(input: any): UpdateCompanyDTO {
    const result = updateCompanySchema.safeParse(input);

    if (!result.success) {
        const errorMessage = result.error.issues[0]?.message || 'Invalid input data';
        throw new AppError(errorMessage, 400);
    }

    return result.data;
}