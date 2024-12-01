import Favourite from "../models/favourite.model.js";
import { errorHandler } from "../utils/error.js";

export const deleteFav = async (req, res, next) => {
    try {
        await Favourite.findByIdAndDelete(req.params.id);
        res.status(200).json('Favourite has been deleted!');
    } catch (error) {
        next(error);
    }
};
export const getFav = async (req, res, next) => {
    try {
        const Userid = req.params.id;
        const result = await Favourite.find({userId:Userid});
        res.status(200).json(result);
    } catch (error) {
        next (error);
    }
};
export const createFav = async (req, res, next) => {
    try {
        const Fav = await Favourite.create(req.body.form1);
        res.status(201).json(Fav);
    } catch (error) {
        next(error);
    }
};
export const isFav = async (req,res,next) => {
    try{
        if (!req.user.id)
        {
            res.status(204).json('User not Logged In!');
            return;
        }
        const listingId = req.params.id;
        const userId = req.user.id;
        const fav = await Favourite.findOne({userId, listingId});
        if(!fav) res.status(204).json('No Favourite Found!');
        else res.status(200).json(fav);
    }
    catch (error) {
        next(error);
    }
};