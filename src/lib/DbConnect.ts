
import mongoose from "mongoose";
type ConnectionObject ={
    isConnected? : number;

}
const Connection : ConnectionObject = {


}
async function dbConnect():Promise<void> {
if(Connection.isConnected){
        console.log("already connected");
        return;
}
try{
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("db connected success");
  

    
}
catch(e){
console.log(e);
process.exit(1);
}

}
export default dbConnect;