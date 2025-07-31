import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const cnpjSchema = z.string().min(14, "CNPJ must have at least 14 characters").min(1, "CNPJ cannot be empty");

export function validateCnpj(cnpj: any): string {
    const parsedCnpj = cnpjSchema.safeParse(cnpj);

    if (!parsedCnpj.success) {
        throw new AppError(parsedCnpj.error.errors[0].message || 'CNPJ is invalid', 400);
    }

    return parsedCnpj.data;
}

