import { Request, Response } from 'express';
import  { ICustomer } from '../models/customers.model';
import { FindCustomers, FindCustomersByName } from '../services/customers.service';

export const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
    const search : string  = req.query.search as string;    
    const findAll = search ? FindCustomersByName : FindCustomers;    
    try {
        const customers: ICustomer[] = await findAll(search);
        res.json(customers);
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }    
}

export const getCustomer = async (req: Request, res: Response): Promise<void> => {    
    const id : string  = req.params.id; 
    try {
        const customers: ICustomer[] = await FindCustomers(id);
        res.json(customers);
    } catch (err:any) {
        res.status(500).json({ message: err.message });
    }    
}
