import z from "zod";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { AppError } from "../../../shared/errors/AppError";

const createEmployeeSchema = z.object({
    name: z.string().nonempty("Nome não pode ser vazio"),
    cpf: z.string().nonempty("CPF deve ter 11 caracteres"),
    email: z.string().email("Email inválido"),
    position: z.string().nonempty("Cargo não pode ser vazio"),
    salary: z.number().nonnegative("Salário deve ser um número positivo"),
    companyId: z.string().nonempty("ID da empresa não pode ser vazio").uuid(),
});

export async function validateCreateEmployee(data: any): Promise<CreateEmployeeDTO> {
    const parsedData = createEmployeeSchema.safeParse(data);

    if (!parsedData.success) {
        throw new AppError(parsedData.error.errors[0].message || "Dados inválidos", 400);
    }

    return parsedData.data
}