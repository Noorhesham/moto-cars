import mongoose from "mongoose";
let cached = (global as any).mongoose || { conn: null, promise: null };
const connect = async () => {
  if (cached.conn) return cached.conn;
  cached.promise =
    cached.promise ||
    mongoose
<<<<<<< HEAD
      .connect(process.env.MONGO_URI!, { dbName: "learning", bufferCommands: false })
=======
      .connect(process.env.MONGO_URI!, { bufferCommands: false })
>>>>>>> 845e2b7 (meow)
      .then(() => console.log("DB connected succesfully !"))
      .catch((err) => console.log(err));
  cached.conn = await cached.promise;
  return cached.conn;
};
<<<<<<< HEAD
export default connect; 
=======
export default connect;
>>>>>>> 845e2b7 (meow)
