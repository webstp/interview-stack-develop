import { Model } from 'objection';
import db from './api/db';

import { app } from './app';

Model.knex(db);

// Start the app
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`*:${port} - Listening on port ${port}`))