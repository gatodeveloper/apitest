import { Request, Response, Router } from 'express';
import customersRoutes from './customer.route'

const router = Router();

router.get('/', (req: Request, res: Response) => {res.status(200).send('Healthy OK.')});
router.use('/api/v1/customers', customersRoutes);


export default router;