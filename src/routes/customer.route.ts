import { Router } from 'express';
import { getAllCustomers, getCustomer } from '../controllers/customer.controller';

const router: Router = Router();

router.get('/', getAllCustomers)
router.get('/:id', getCustomer)

export default router