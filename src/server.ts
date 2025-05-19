import app from './app.ts';
import config from './config/config.ts';
import { dbRun } from './config/db.ts';

app.listen(config.port, async () => {
  await dbRun();
  console.log(`Server running on port ${config.port}`);
});