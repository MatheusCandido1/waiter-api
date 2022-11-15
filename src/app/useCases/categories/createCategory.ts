import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const category = await Category.create({ name, icon});

    return res.status(201).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error!' });
  }
}
