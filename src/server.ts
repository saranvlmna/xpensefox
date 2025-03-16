import "dotenv/config";
import {app} from "./app";
const port = process.env.APP_PORT || 3002;

app.listen(port, () => {
  console.log(`[server] is running at http://localhost:${port}`);
});
