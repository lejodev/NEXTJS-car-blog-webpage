import mongoose from "mongoose";

const { MONGO_URI, MONGODB_DB } = process.env;

const connection = { isConnected: false }

export const databaseConnect = async () => {

    // If already connected, do nothing
    if (connection.isConnected) {
        console.log("Connected already")
        return
    }

    // If not connected, conenct
    try {
        const databaseConnection = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("***** First connection *****")

        // Save the connection status
        connection.isConnected = databaseConnection.connections[0].readyState;
    } catch (error) {
        handleError(error);
    }
}