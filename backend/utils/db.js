import mongoose from "mongoose";

const DbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.DB}`);
        console.log("DB Connected Successfully...")
    } catch (error) {
        console.log(error)
    }
}

export default DbConnect;