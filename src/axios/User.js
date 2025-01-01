import axios from "axios";

export class AuthService {

    constructor() {
        const user = localStorage.getItem('user');
        this.user = user ? JSON.parse(user) : null;
    }

    setUser(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    }

    clearUser() {
        this.user = null;
        localStorage.removeItem('user');
    }


    // user methods
    async createAccount({name, email, mobileNo, password}) {
        try {
         const userAccount = await axios.post("/api/user/register", {name, password, email, mobileNo,});
         this.setUser(userAccount.data.data);
         
         if(userAccount){
             return this.login({email, password});
            }
            else {
                throw new Error("User account creation failed");
            }
        } catch (error) {
            console.log("AuthService :: createAccount :: error", error);
            throw error;
        }
    }
    
    
    async login({email, password}){
        try {
            const response =  await axios.post("/api/user/login", {email, password});
            this.setUser(response.data.data);
            return response.data.data;
             
         } catch (error) {
             console.log("AuthService :: login :: error", error);
             throw error;
         }
     }
 
     async logout(){
         try {
             await  axios.post("api/user/logout", {withCredentials: true});
                this.clearUser();
         } catch (error) {
             console.log("AuthService :: logout :: error", error);
             throw error;
         }
     }

    
    async getUser(){
        try {
            return await axios.get("/api/user/getUserDetails", {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: getUser :: error", error);
            throw error;
        }
    }

    async updateUserDetails({email, name, mobileNo}){
        try {
            return await axios.put("/api/user/updateDetails", {name, email, mobileNo}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: updateUser :: error", error);
            throw error;
        }
    }

    async changePassword({oldPassword, newPassword}){
        try {
            return await axios.put("/api/user/updatePassword", {oldPassword, newPassword}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: changePassword :: error", error);
            throw error;
        }
    }

    async updateProfilePhoto({profilePicture}){
        try {
            return await axios.put("/api/user/updateProfilePhoto", {profilePicture}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: updateProfilePicture :: error", error);
            throw error;
        }
    }


    async createMentor({name, email, description, linkedIn, profilePhoto, coverPhoto}){
        try {
            return await axios.post("/api/mentor/createMentor", {name, email, description, linkedIn, profilePhoto, coverPhoto}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: createMentor :: error", error);
            throw error;
        }
    }

    async getMentor(){
        try {
            const response =  await axios.get("/api/mentors/getMentors");
            // console.log(response)
            return response.data.data;
        } catch (error) {
            console.log("AuthService :: getMentor :: error", error);
            throw error;
        }
    }


    async getMentorById({mentorId}){
        try {
            return await axios.get(`/api/mentor/getMentorById/${mentorId}`);
        } catch (error) {
            console.log("AuthService :: getMentorById :: error", error);
            throw error;
        }
    }


    async createService({title, description, coverPhoto}){
        try {
            return await axios.post("/api/services/createService", {title, description, coverPhoto}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: createService :: error", error);
            throw error;
        }
    }


    async getServices(){
        try {
            return await axios.get("/api/services/getServices");
        } catch (error) {
            console.log("AuthService :: getServices :: error", error);
            throw error;
        }
    }


    async getTestimonials(){
        try {
            const response =  await axios.get("/api/testimonials/getAllTestimonials");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            console.log("AuthService :: getTestimonials :: error", error);
            throw error;
        }
    }

    async getCollaborators(){
        try {
            const response =  await axios.get("/api/collaborators/getCollaborators");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            console.log("AuthService :: getCollaborators :: error", error);
            throw error;
        }
    }

    async getBanners(){
        try {
            const response =  await axios.get("/api/banner/getAllBannerImages");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            console.log("AuthService :: getBannerImages :: error", error);
            throw error;
        }
    }

    async getCourses(){
        try {
            const response =  await axios.get("/api/courses/getCourse");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            console.log("AuthService :: getCourses :: error", error);
            throw error;
        }
    }

    async getCourseDetails(courseId){
        try {
            const response =  await axios.post(`/api/courses/getCourseDetails`, {courseId}, {withCredentials: true});
            return response.data.data;
        } catch (error) {
            console.log("AuthService :: getCourseDetails :: error", error);
            throw error;
        }
    }



}