const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/category-crud');
    } catch (err) {
        console.log('DB Connection Err', err)
    }
}

connect() 