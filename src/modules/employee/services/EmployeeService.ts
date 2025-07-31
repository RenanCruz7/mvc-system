import { EmployeeRepository } from "../../../interfaces/repositories/EmployeeRepository";
import { EmployeeService } from "../../../interfaces/services/EmployeeService";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { Employee } from "../models/Employee";

export class EmployeeServiceImpl implements EmployeeService{

    constructor(private readonly employeeRepository: EmployeeRepository){}

    create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const employee = this.employeeRepository.create(createEmployeeDTO)
        return employee
    }
    update(updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    findByCompanyId(companyId: string): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}