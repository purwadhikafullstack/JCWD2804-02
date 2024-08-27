import { RequestHandler } from 'express';
import { User, Role } from '@/utils/interface';

export const superAdminOnly: RequestHandler = (req, res, next) => {
  const user = req.user as User;

  if (user?.role !== Role.SUPERADMIN) {
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
};

export const storeAdminOnly: RequestHandler = (req, res, next) => {
  const user = req.user as User;

  if (user?.role !== Role.STOREADMIN) {
    return res.status(403).json({ error: 'Access denied' });
  }

  next();
};

