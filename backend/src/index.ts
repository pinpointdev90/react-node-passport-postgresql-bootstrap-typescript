import app from "./app";
import { createTables } from "./database/createTables";

(() => {
  try {
    createTables() // Initialized database
    app.listen(app.get("port"));
    console.log("Server listening on port", app.get("port"));
  } catch (error) {
    console.error("Error to initialize the server.");
  }
})();
