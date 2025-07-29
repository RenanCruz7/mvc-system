import { Request, Response } from 'express';
import { EmployeeService } from '../../../interfaces/services/EmployeeService';
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) {}


}
