import { Request, Response } from 'express';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { CompanyService } from '../../../interfaces/CompanyService';

export class CompanyController {
    
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const data = validateCreateCompany(req.body);

            const result = await this.companyService.createCompany(data);
            return res.status(201).json(result);
        } catch (error) {
            const err = error as any;
            return res.status(err.statusCode || 500).json({
                message: err.message || 'Internal Server Error',
            });
        }
    }
}
