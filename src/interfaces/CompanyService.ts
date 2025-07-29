import { CreateCompanyDTO } from "../modules/company/dtos/CreateCompanyDTO";

export interface CompanyService {
    createCompany(createCompanyDTO: CreateCompanyDTO): Promise<any>;
    findAll(): Promise<any[]>;
    findByCnpj(cnpj: string): Promise<any>
    findById(id: string): Promise<any>
    delete(id: string): Promise<any>
    update(id:string, data: Partial<CreateCompanyDTO>): Promise<any>

}