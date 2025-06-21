import axios from "axios";


export class AllTypeOfSearch{

    async search(dataToSearch, flag){
        // console.log("dataToSearch ka flag ye hai ", flag);
        try{
            const searchData = await axios.get(`/api/search?keyword=${dataToSearch}&flag=${flag}`);
            return searchData;
        }
        catch(error){
            throw error;
        }
    }

    async getSuggestions(keyword) {
        try {
            const suggestionData = await axios.get(`/api/course-suggestions?keyword=${keyword}`);
            return suggestionData;
        } catch (error) {
            throw error;
        }
    }
}