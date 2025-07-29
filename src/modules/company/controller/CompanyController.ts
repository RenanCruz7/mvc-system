import { Request, response, Response } from 'express';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { CompanyService } from '../../../interfaces/CompanyService';
import { responseError } from '../../../shared/helpers/responseError';
import { responseSucess } from '../../../shared/helpers/responseSucess';

export class CompanyController {
    
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response, next: Function): Promise<Response> {
        const data = validateCreateCompany(req.body);

        const result = await this.companyService.createCompany(data);
        return responseSucess(res, result,"Empresa criada com sucesso", 201);
    }

    async findAll(req: Request, res: Response, next: Function): Promise<Response> {}
    
    async findById(req: Request, res: Response, next: Function): Promise<Response> {}

    async findByCnpj(req: Request, res: Response, next: Function): Promise<Response> {}
}
