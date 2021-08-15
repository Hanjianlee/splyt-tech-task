/** Express **/
import express from "express";
/** ENV Constants **/
import { port, client } from "./utils/env";
/** Libraries **/
import cors from "cors";
/** Routers **/
import router from "./routes";
const app = express();
app.use(express.json());

/** Enable Cross Origin **/
const allowedOrigins = [`http://localhost:${client}`];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
/** Server Front End React SPA Production Version **/
app.use(express.static(__dirname + "/build"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

/** Use Routers **/
app.use("/", router);

/** Listening To Port **/
app.listen(port, () => {
  console.log(`Backend Server running on http://localhost:${port} !`);
});

export default app;
