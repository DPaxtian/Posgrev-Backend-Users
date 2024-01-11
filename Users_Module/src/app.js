import express from "express";
import userRoutes from "./routes/user.routes.js";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express();

app.use(cors())
app.use(express.json());
app.use(userRoutes)

export default app;


/*router.get('/testUser', validateUser);
router.get('/testProgram', testProgram);
router.get('/testEvaluation', testEvaluation);
 
module.exports = router;*/