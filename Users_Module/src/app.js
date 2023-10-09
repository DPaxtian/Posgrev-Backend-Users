import express from "express";
import userRoutes from "./routes/user.routes.js";



const app = express();

app.use(express.json());
app.use(userRoutes)

export default app;


/*router.get('/testUser', validateUser);
router.get('/testProgram', testProgram);
router.get('/testEvaluation', testEvaluation);
 
module.exports = router;*/