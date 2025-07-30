import { NextFunction, Request, Response } from 'express';
import { EmployeeService } from '../../../interfaces/services/EmployeeService';
import { CreateEmployeeDTO } from '../dtos/CreateEmployeeDTO';
import { UpdateEmployeeDTO } from '../dtos/UpdateEmployeeDTO';
import { validateId } from '../../company/validators/validateId';
import { responseSucess } from '../../../shared/helpers/responseSucess';
import { validateCreateEmployee } from '../validators/validateCreateEmployee';
import { validateUpdateEmployee } from '../validators/validateUpdateEmployee';
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {}

    async create(req: Request, res: Response, next: NextFunction):Promise<Response>{
        const data = await validateCreateEmployee(req.body);
        const employee = this.employeeService.create(data);
        return responseSucess(res, employee, "Funcionário criado com sucesso", 201);
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const data = await validateUpdateEmployee(req.body);
        const employee = this.employeeService.update(data);
        return responseSucess(res, employee, "Funcionário atualizado com sucesso");
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.id);
        const employee = await this.employeeService.findById(id);
        return responseSucess(res, employee, "Funcionário encontrado com sucesso");
    }

    async findByCompanyId(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const companyId = validateId(req.params.companyId);
        const employees = await this.employeeService.findByCompanyId(companyId);
        return responseSucess(res, employees, "Funcionários encontrados com sucesso");
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.id);
        const employee = await this.employeeService.delete(id);
        return responseSucess(res, employee, "Funcionário deletado com sucesso");
    }
}
