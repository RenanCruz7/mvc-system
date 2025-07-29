import { Request, response, Response } from 'express';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { CompanyService } from '../../../interfaces/CompanyService';
import { responseError } from '../../../shared/helpers/responseError';
import { responseSucess } from '../../../shared/helpers/responseSucess';
import { validateCnpj } from '../validators/validateCnpj';

export class CompanyController {
    
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response, next: Function): Promise<Response> {
        const data = validateCreateCompany(req.body);

        const result = await this.companyService.createCompany(data);
        return responseSucess(res, result,"Empresa criada com sucesso", 201);
    }

    async findAll(req: Request, res: Response, next: Function): Promise<Response> {
        const companies = await this.companyService.findAll()
        return responseSucess(res, companies,"Empresa encontradas com sucesso");
    }
    
    async findById(req: Request, res: Response, next: Function): Promise<Response> {
        const company = await this.companyService.findById(req.params.id);
        return responseSucess(res, company, "Empresa encontrada com sucesso");
    }

    async findByCnpj(req: Request, res: Response, next: Function): Promise<Response> {
        const cnpj = validateCnpj(req.params.cnpj);

        const company = await this.companyService.findByCnpj(cnpj)
        return responseSucess(res, company, "Empresa encontrada com sucesso");
    }

    async delete(req: Request, res: Response, next: Function): Promise<Response> {
        const company = await this.companyService.delete(req.params.id);
        return responseSucess(res, company, "Empresa deletada com sucesso");
    }
}
