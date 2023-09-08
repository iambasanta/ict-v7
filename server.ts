import app from "./src/index";
import { port } from "./src/utils/env";
app.listen(port, () => {
  console.info(`=================================`);
  console.info(`======= ENV: ${process.env.NODE_ENV} =======`);
  console.info(`🚀 App listening on the port ${port}`);
  console.info(`=================================`);
});
