import mongoose from "mongoose";
import app from "./app.js";

const PORT = 8080;
const database_URL = "mongodb+srv://yednap02:memememe6969@cluster0.syogk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))

mongoose.connect(database_URL)
.then(() => console.log("Database Connected Successfully"))
.catch(error => console.log("Error in connecting to database"+ error))