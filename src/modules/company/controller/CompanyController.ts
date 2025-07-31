import { Request, Response } from 'express';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { CompanyService } from '../../../interfaces/services/CompanyService';
import { responseSucess } from '../../../shared/helpers/responseSucess';
import { validateCnpj } from '../validators/validateCnpj';
import { validateId } from '../validators/validateId';
import { validateUpdateCompany } from '../validators/validateUpdateCompany';

export class CompanyController {
    
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response, next: Function): Promise<Response> {
        const data = validateCreateCompany(req.body);

        const result = await this.companyService.createCompany(data);
        return responseSucess(res, result,"Company created successfully", 201);
    }

    async findAll(req: Request, res: Response, next: Function): Promise<Response> {
        const companies = await this.companyService.findAll()
        return responseSucess(res, companies,"Companies found successfully");
    }
    
    async findById(req: Request, res: Response, next: Function): Promise<Response> {
        const id = validateId(req.params.id);
        const company = await this.companyService.findById(id);
        return responseSucess(res, company, "Company found successfully");
    }

    async findByCnpj(req: Request, res: Response, next: Function): Promise<Response> {
        const cnpj = validateCnpj(req.params.cnpj);

        const company = await this.companyService.findByCnpj(cnpj)
        return responseSucess(res, company, "Company found successfully");
    }

    async delete(req: Request, res: Response, next: Function): Promise<Response> {
        const id = validateId(req.params.id);
        const company = await this.companyService.delete(id);
        return responseSucess(res, company, "Company deleted successfully");
    }

    async update(req: Request, res: Response, next: Function): Promise<Response> {
        const id = validateId(req.params.id);
        const data = validateUpdateCompany(req.body);

        const company = await this.companyService.update(id, data);
        return responseSucess(res, company, "Company updated successfully");
    }
}
