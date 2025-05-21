import cluster from "cluster";
import os from "os";
import logger from "./helpers/logger.helper";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  logger.info(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    logger.info(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  import("./app").then(({ default: app }) => {
    const PORT = parseInt(process.env.PORT || "8080", 10);
    const HOST = process.env.HOST || "0.0.0.0";

    app.listen(PORT, HOST, () => {
      logger.success(`Worker ${process.pid} started on ${HOST}:${PORT}`);
    });
  });
}
