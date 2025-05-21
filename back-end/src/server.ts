import logger from "./helpers/logger.helper";
import app from "./app";

const PORT = parseInt(process.env.PORT || "8080", 10);
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
  logger.success(`Server started on ${HOST}:${PORT}`);
});
