const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"place" },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
    checkIn: { type: Date, require: true },
    checkOut: { type: Date, require: true },
    name: { type: String, require: true },
    phone: { type: String, require: true },
    price: Number
})

const bookingModel = mongoose.model("Booking", bookingSchema)

module.exports = bookingModel