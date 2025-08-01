import { CreateCompanyDTO } from "../../modules/company/dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../../modules/company/dtos/UpdateCompanyDTO";
import { Company } from "../../modules/company/models/Company";


export interface CompanyService {
    createCompany(createCompanyDTO: CreateCompanyDTO): Promise<Company>;
    findAll(): Promise<Company[]>;
    findByCnpj(cnpj: string): Promise<Company>;
    findById(id: string): Promise<Company>;
    delete(id: string): Promise<void>;
    update(id:string, data: Partial<UpdateCompanyDTO>): Promise<Company>;

}