import app from "./app.js";
import config from "./config/config.js";
import { dbRun } from "./config/db.js";
app.listen(config.port, async () => {
    await dbRun();
    console.log(`Server running on port ${config.port}`);
});
