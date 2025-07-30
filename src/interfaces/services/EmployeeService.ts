import { CreateEmployeeDTO } from "../../modules/employee/dtos/CreateEmployeeDTO"
import { UpdateEmployeeDTO } from "../../modules/employee/dtos/UpdateEmployeeDTO"

export interface EmployeeService {
    create(createEmployeeDTO: CreateEmployeeDTO): Promise<void>
    update(updateEmployeeDTO: UpdateEmployeeDTO): Promise<void>
    findById(id: string): Promise<void>
    findByCompanyId(companyId: string): Promise<void[]>
    delete(id: string): Promise<void>
}