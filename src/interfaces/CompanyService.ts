import { CreateCompanyDTO } from "../modules/company/dtos/CreateCompanyDTO";

export interface CompanyService {
    createCompany(createCompanyDTO: CreateCompanyDTO): Promise<any>;

    findAllCompanies(): Promise<any>;
}