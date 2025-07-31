import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const idSchema = z.string().uuid("ID must be a valid UUID");

export function validateId(id: any): string {
    const parsedId = idSchema.safeParse(id);

    if (!parsedId.success) {
        throw new AppError(parsedId.error.errors[0].message || 'ID is invalid', 400);
    }

    return parsedId.data;
}

