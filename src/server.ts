import server from "./app";
import Env from "./config/Env";
import Logger from "./config/Logger";

const port = Env.getNumeric("PORT");
server.listen(port, () => {
  Logger.log(`server listening on port: ${port}`);
});
