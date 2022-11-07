import "dotenv/config";
import express from "express";
import cors from "cors";

import router from "./routes";

const PORT = <string>process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`SERVER CONNECTED TO ${PORT}`))