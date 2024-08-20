import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware untuk validasi saat membuat alamat
export const validateCreateAddress = [
  body('userId').isInt().withMessage('UserId harus berupa angka'),
  body('address').isString().notEmpty().withMessage('Alamat tidak boleh kosong'),
  body('cityId').isString().notEmpty().withMessage('CityId tidak boleh kosong'),
  body('isPrimary').isBoolean().withMessage('isPrimary harus berupa boolean'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware untuk validasi saat memperbarui alamat
export const validateUpdateAddress = [
  body('address').optional().isString().notEmpty().withMessage('Alamat harus berupa string dan tidak boleh kosong'),
  body('cityId').optional().isString().notEmpty().withMessage('CityId harus berupa string dan tidak boleh kosong'),
  body('isPrimary').optional().isBoolean().withMessage('isPrimary harus berupa boolean'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
