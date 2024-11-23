import Listing from "../models/listing.model.js";
export const search = async (req,res,next) =>
{
    const { searchQuery } = req.query;
    try {
        let query = {};
        
        if (searchQuery) {
          query = {
            $or: [
              { name: { $regex: searchQuery, $options: 'i' } },
              { city: { $regex: searchQuery, $options: 'i' } },
              { pinCode: { $regex: searchQuery, $options: 'i' } }
            ]
          };
          const properties = await Listing.find(query);
           return res.json(properties);
        }
        else
        {
            res.json({message: 'Could not find'});
        }
    
        
      } catch (err) {
        console.log(searchQuery);
        console.error('Server error:', err);
        next(err);
        res.status(302).json({ message: 'Error fetching properties' });
      }

};