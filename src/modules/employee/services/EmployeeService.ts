import { EmployeeRepository } from "../../../interfaces/repositories/EmployeeRepository";
import { CompanyService } from "../../../interfaces/services/CompanyService";
import { EmployeeService } from "../../../interfaces/services/EmployeeService";
import { NotFoundError, ValidationError } from "../../../shared/errors/AppError";
import { DocumentValidator } from "../../../shared/utils/documentValidator";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { Employee } from "../models/Employee";

export class EmployeeServiceImpl implements EmployeeService{

    constructor(private readonly employeeRepository: EmployeeRepository, private readonly companyService: CompanyService){}

    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        if(!DocumentValidator.validateCPF(createEmployeeDTO.cpf)){
            throw new ValidationError('CPF is invalid');
        }

        const company = await this.companyService.findById(createEmployeeDTO.companyId);
        if(!company){
            throw new NotFoundError('Company does not exist');
        }

        const employee = this.employeeRepository.create(createEmployeeDTO)
        return employee
    }
    async update(id: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> {
        const employee = await this.employeeRepository.findById(id)
        if(!employee){
            throw new NotFoundError('Employee doesnt exist')
        }
        
        return await this.employeeRepository.update(id,updateEmployeeDTO)
    }
    async findById(id: string): Promise<Employee> {
        return await this.employeeRepository.findById(id)
    }
    async findByCompanyId(companyId: string): Promise<Employee[]> {
        return await this.employeeRepository.findByCompanyId(companyId)
    }
    async delete(id: string): Promise<void> {
        const employee = await this.employeeRepository.findById(id)
        if(!employee){
            throw new NotFoundError('Employee doesnt exist');
        }
        return await this.employeeRepository.delete(id)
    }
}