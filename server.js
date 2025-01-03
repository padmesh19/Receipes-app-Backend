const app = require("./app");
const mongoose = require("mongoose");
const {MONGODB_URI, PORT} = require("./utils/config");


mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB...");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(error => console.log("Error connecting to MongoDB:", error.message));


