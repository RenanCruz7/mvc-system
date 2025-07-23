import { Request, response, Response } from 'express';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { CompanyService } from '../../../interfaces/CompanyService';
import { responseError } from '../../../shared/helpers/responseError';
import { responseSucess } from '../../../shared/helpers/responseSucess';

export class CompanyController {
    
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = validateCreateCompany(req.body);

            const result = await this.companyService.createCompany(data);
            return responseSucess(res, result,"Empresa criada com sucesso", 201);
        } catch (error: any) {
            const status = error.status || 500;
            const message = error.message || 'Internal Server Error';
            return responseError(res, status, message);
        }
    }
}
