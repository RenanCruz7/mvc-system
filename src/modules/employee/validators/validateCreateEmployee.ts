import z from "zod";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { AppError } from "../../../shared/errors/AppError";

const createEmployeeSchema = z.object({
    name: z.string().nonempty("Name cant be empty"),
    cpf: z.string().nonempty("CPF must have 11 characters"),
    email: z.string().email("Invalid email"),
    position: z.string().nonempty("Position cannot be empty"),
    salary: z.number().nonnegative("Salary must be a positive number"),
    companyId: z.string().nonempty("Company ID cannot be empty").uuid(),
});

export async function validateCreateEmployee(data: any): Promise<CreateEmployeeDTO> {
    const parsedData = createEmployeeSchema.safeParse(data);

    if (!parsedData.success) {
        throw new AppError(parsedData.error.errors[0].message || "Invalid data", 400);
    }

    return parsedData.data
}