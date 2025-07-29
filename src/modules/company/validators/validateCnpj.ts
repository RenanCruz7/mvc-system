import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const cnpjSchema = z.string().min(14, "CNPJ deve ter no minimo 14 caracteres").min(1, "CNPJ não pode ser vazio");

export function validateCnpj(cnpj: any): string {
    const parsedCnpj = cnpjSchema.safeParse(cnpj);

    if (!parsedCnpj.success) {
        throw new AppError(parsedCnpj.error.errors[0].message || 'CNPJ inválido', 400);
    }

    return parsedCnpj.data;
}

