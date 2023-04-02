import express from 'express';
import logger from 'morgan';

import { HealthRouter } from './health';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/health', HealthRouter);

export default app;
