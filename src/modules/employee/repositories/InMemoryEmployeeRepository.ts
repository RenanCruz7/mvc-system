import { EmployeeRepository } from "../../../interfaces/repositories/EmployeeRepository";
import { NotFoundError } from "../../../shared/errors/AppError";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { Employee } from "../models/Employee";
import { v4 as uuidv4 } from 'uuid';


let employees: Employee[] = [];
export class InMemoryEmployeeRepository implements EmployeeRepository{
    constructor() {
    }

    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const newEmployee ={
            ...createEmployeeDTO,
            id: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        employees.push(newEmployee);
        return newEmployee;
    }

    async update(id: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> {
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        if(employeeIndex === -1){
            throw new NotFoundError('Employee does not exist');
        }
        const updatedEmployee ={
            ...employees[employeeIndex],
            ...updateEmployeeDTO,
            updatedAt: new Date()
        }
        employees[employeeIndex] = updatedEmployee;
        return updatedEmployee;
    }

    async findById(id: string): Promise<Employee> {
        const employee = employees.find(employee => employee.id === id);
        if(!employee){
            throw new NotFoundError('Employee does not exist');
        }
        return employee;
    }
    async findByCompanyId(companyId: string): Promise<Employee[]> {
        return employees.filter(employee => employee.companyId === companyId);
    }
    async delete(id: string): Promise<void> {
        const employeeIndex = employees.findIndex(employee => employee.id === id);
        if(employeeIndex === -1){
            throw new NotFoundError('Employee does not exist');
        }
        employees.splice(employeeIndex, 1);
    }
    
}