import { z } from 'zod';
import { CreateCompanyDTO } from '../dtos/CreateCompanyDTO';

const createCompanySchema = z.object({
    name: z.string().nonempty('Name is required'),
    cnpj: z.string().nonempty('CNPJ is required'),
    email: z.string().email('Invalid email format').optional(),
    phone: z.string().optional(),
    address: z.object({
        street: z.string().nonempty('Street is required'),
        number: z.string().nonempty('Number is required'),
        city: z.string().nonempty('City is required'),
        state: z.string().nonempty('State is required'),
        zipcode: z.string().nonempty('Zipcode is required'),
    })
})