import axios from "axios";


export class AllTypeOfSearch{

    async search(dataToSearch){
        try{
            const searchData = await axios.get(`/api/search?keyword=${dataToSearch}`);
            return searchData;
        }
        catch(err){
            throw error;
        }

    }
}