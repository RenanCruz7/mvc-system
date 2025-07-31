export interface Company{
    id: string;
    name: string;
    cnpj: string;
    email: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        state: string;
        zipcode: string;
    }
    createdAt: Date;
    updatedAt: Date;
}