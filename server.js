import {connectDB} from './db/db.js';
import {app} from './app.js';

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server is running...");
})