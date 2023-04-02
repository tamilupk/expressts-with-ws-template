import { Router, Request, Response, NextFunction } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('OK');
});

export const HealthRouter: Router = router;
