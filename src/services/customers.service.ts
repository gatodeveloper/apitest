import { CUSTOMERS } from "../data/data"
import { ICustomer } from "../models/customers.model"

export const FindCustomers = async (id:number|string|null=null): Promise<ICustomer[]> => {    
    return new Promise((resolve) => {
        let responseData = CUSTOMERS
        if(id) responseData = responseData.filter(customer=>customer.id==id)        
        resolve(responseData)
    })
}

export const FindCustomersByName = async (name:string): Promise<ICustomer[]> => {
    return new Promise((resolve) => {
        let responseData = CUSTOMERS
        responseData = responseData.filter(customer=>customer.name==name)
        resolve(responseData)
    })
}
