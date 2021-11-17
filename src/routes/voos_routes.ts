import { Router, Request, Response } from 'express';
import { validateLocaleAndSetLanguage } from 'typescript';
import { search } from '../controllers/voos_controller'

const voo_router = Router();

voo_router.post('/search', search)

export { voo_router }