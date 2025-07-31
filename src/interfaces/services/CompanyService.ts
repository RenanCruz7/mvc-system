import { CreateCompanyDTO } from "../../modules/company/dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../../modules/company/dtos/UpdateCompanyDTO";


export interface CompanyService {
    createCompany(createCompanyDTO: CreateCompanyDTO): Promise<any>;
    findAll(): Promise<any[]>;
    findByCnpj(cnpj: string): Promise<any>
    findById(id: string): Promise<any>
    delete(id: string): Promise<any>
    update(id:string, data: Partial<UpdateCompanyDTO>): Promise<any>

}