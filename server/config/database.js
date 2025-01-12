import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        maxPoolSize: 10, // Connection Pooling size (adjust according to your needs)
    })
    .then((c) => {
        console.log(`MongoDB connected to : ${c.connection.host}`);
    })
    .catch((e) => {
        console.log(e);
    });
};
