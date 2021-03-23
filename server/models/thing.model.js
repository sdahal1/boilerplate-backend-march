const mongoose = require('mongoose');


const ThingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Thing needs to be filled out!"],
        minLength: [3, "Thing name must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "WEEE NEED Description of the thanggg!"]
    }

})

const Thing = mongoose.model("Thing", ThingSchema)

module.exports = Thing;

