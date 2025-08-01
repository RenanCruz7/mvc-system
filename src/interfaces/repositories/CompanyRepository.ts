import { CreateCompanyDTO } from "../../modules/company/dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../../modules/company/dtos/UpdateCompanyDTO";
import { Company } from "../../modules/company/models/Company";

export interface CompanyRepository {
    findAll(): Promise<Company[]>;
    create(companyData: CreateCompanyDTO): Promise<Company>;
    update(id: string, companyData: UpdateCompanyDTO): Promise<Company>;
    findById(id: string): Promise<Company>;
    delete(id: string): Promise<void>;
    findByCnpj(cnpj: string): Promise<Company>;
}