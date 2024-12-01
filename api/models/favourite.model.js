import mongoose from "mongoose";

const visitFavourite = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        listingId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        bedrooms: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        parking: {
            type: Boolean,
            required: true,
        },
    }, {timestamps: true}
);

const Favourite = mongoose.model('Favourite', visitFavourite);

export default Favourite;
