import { CreateEmployeeDTO } from "../../modules/employee/dtos/CreateEmployeeDTO"
import { UpdateEmployeeDTO } from "../../modules/employee/dtos/UpdateEmployeeDTO"
import { Employee } from "../../modules/employee/models/Employee"

export interface EmployeeRepository {
    create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee>
    update(id: string,updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee>
    findById(id: string): Promise<Employee>
    findByCompanyId(companyId: string): Promise<Employee[]>
    delete(id: string): Promise<void>
}