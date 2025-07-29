import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const idSchema = z.string().uuid("ID deve ser um UUID válido");

export function validateId(id: any): string {
    const parsedId = idSchema.safeParse(id);

    if (!parsedId.success) {
        throw new AppError(parsedId.error.errors[0].message || 'ID inválido', 400);
    }

    return parsedId.data;
}

