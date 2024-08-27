// import { Request, Response, NextFunction } from 'express';
// import { User, Role } from '@/utils/interface';

// export function superAdminOnly(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   if (req.user?.role !== 'superadmin') {
//     return res.status(403).json({ error: 'Access denied' });
//   }
//   next();
// }

// export function storeAdminOnly(
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) {
//   if (req.user?.role !== 'storeadmin') {
//     return res.status(403).json({ error: 'Access denied' });
//   }
//   next();
// }
