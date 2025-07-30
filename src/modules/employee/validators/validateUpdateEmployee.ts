import z from "zod";
import { AppError } from "../../../shared/errors/AppError";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";

const updateEmployeeSchema = z.object({
    position: z.string().optional(),
    salary: z.number().nonnegative("Salário deve ser um número positivo").optional(),
})

export async function validateUpdateEmployee(data: any): Promise<UpdateEmployeeDTO> {
    const parsedData = updateEmployeeSchema.safeParse(data);

    if (!parsedData.success) {
        throw new AppError(parsedData.error.errors[0].message || "Dados inválidos", 400);
    }

    return parsedData.data;
}