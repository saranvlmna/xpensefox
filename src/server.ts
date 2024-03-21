import {app} from "./app";
const port = process.env.PORT || 4578;

app.listen(port, () => {
  console.log(`[server] is running at http://localhost:${port}`);
});
