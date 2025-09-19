import axios from "axios";
import { notifyError } from "../utility/Tostify/Tosts"

export class AuthService {

    // constructor() {
    //     const user = localStorage.getItem('user');
    //     this.user = user ? JSON.parse(user) : null;
    // }

    // setUser(user) {
    //     this.user = user;
    //     localStorage.setItem('user', JSON.stringify(user));
    // }

    // clearUser() {
    //     this.user = null;
    //     localStorage.removeItem('user');
    // }

    // user methods
    async createAccount({name, email, mobileNo, password}) {
        try {
         const userAccount = await axios.post("/api/user/register", {name, password, email, mobileNo,});
        //  this.setUser(userAccount.data.data);
         
         if(userAccount){
             return this.login({email, password});
            }
            else {
                throw new Error("User account creation failed");
            }
        } catch (error) {
            // console.log("AuthService :: createAccount :: error", error);
            throw error;
        }
    }
    
    async CheckNewsLetterStatus(){
        try{
            const response =  await axios.get("/api/user/getNewsLetterStatus",{withCredentials:true});
            return response.data.data;
        }catch (error) {
            // console.log("AuthService :: Check News Letter :: error", error);
            throw error;
        }

    }
    async login({email, password}){
        try {
            const response =  await axios.post("/api/user/login", {email, password});
            // this.setUser(response.data.data);
            // console.log(response);
            return response.data.data;
             
         } catch (error) {
             console.log("AuthService :: login :: error", error.message);
             throw error;
         }
     }
 
     async logout(){
         try {
             const response = await  axios.post("api/user/logout",{withCredentials: true});
            //  console.log(response);
             return response;
         } catch (error) {
            //  console.log("AuthService :: logout :: error", error);
             throw error;
         }
     }
    async getUser(){
        try {
            return await axios.get("/api/user/getUserDetails", {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: getUser :: error", error);
            throw error;
        }
    }

    async updateUserDetails({email, name, mobileNo, bio}){
        try {
            return await axios.post("/api/user/updateDetails", {name, email, mobileNo, bio}, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: updateUser :: error", error);
            throw error;
        }
    }

    async changePassword({oldPassword, newPassword}){
        try {
            return await axios.post("/api/user/updatePassword", {oldPassword, newPassword}, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: changePassword :: error", error);
            throw error;
        }
    }

    async updateProfilePhoto(profilePhoto){
        try {
            // console.log("profilePhoto user file me aya",profilePhoto);
            const formData = new FormData();
            formData.append("profilePhoto", profilePhoto);
            // console.log("profilePhoto user file me aya form data",formData);

            return await axios.post("/api/user/updateProfilePhoto", formData, { headers: {"Content-Type": "multipart/form-data"}, withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: updateProfilePicture :: error", error);
            throw error;
        }
    }


    async deleteUser(){
        try {
            return await axios.delete("/api/user/delete", {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: deleteUser :: error", error);
            throw error;
        }
    }



    async getUserDetails(){
        try {
            const response =  await axios.get("/api/user/getUserDetails", {withCredentials: true});
            return response.data.data;
        } catch (error) {
            // console.log("AuthService :: getUserDetails :: error", error);
            throw error;
        }
    }


    async createMentor({name, email, description, linkedIn, profilePhoto, coverPhoto}){
        try {
            return await axios.post("/api/mentor/createMentor", {name, email, description, linkedIn, profilePhoto, coverPhoto}, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: createMentor :: error", error);
            throw error;
        }
    }

    async getMentor(){
        try {
            const response =  await axios.get("/api/mentors/getMentors");
            // console.log(response)
            return response.data.data;
        } catch (error) {
            // console.log("AuthService :: getMentor :: error", error);
            throw error;
        }
    }


    async getMentorById({mentorId}){
        try {
            return await axios.get(`/api/mentor/getMentorById/${mentorId}`);
        } catch (error) {
            // console.log("AuthService :: getMentorById :: error", error);
            throw error;
        }
    }


    async createService({title, description, coverPhoto}){
        try {
            return await axios.post("/api/services/createService", {title, description, coverPhoto}, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: createService :: error", error);
            throw error;
        }
    }


    async getServices(){
        try {
            return await axios.get("/api/services/getServices");
        } catch (error) {
            // console.log("AuthService :: getServices :: error", error);
            throw error;
        }
    }


    async getTestimonials(){
        try {
            const response =  await axios.get("/api/testimonials/getAllTestimonials");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getTestimonials :: error", error);
            throw error;
        }
    }

    async getCollaborators(){
        try {
            const response =  await axios.get("/api/collaborators/getCollaborators");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getCollaborators :: error", error);
            throw error;
        }
    }

    async getBanners(){
        try {
            const response =  await axios.get("/api/banner/getAllBannerImages");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getBannerImages :: error", error);
            throw error;
        }
    }

    async getCourses(){
        try {
            const response =  await axios.get("/api/courses/getCourse");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getCourses :: error", error);
            throw error;
        }
    }
    async getInternshipPositions(){
        try {
            const response =  await axios.get("/api/internships/getInternships");
            // console.log(response)
            return response.data.data;
        } catch (error) {
            // console.log(error)
            throw error;
        }
    }

      
    async getPurchasedCourseDetails(courseId){
        try {
            const response =  await axios.post(`/api/courses/getPurchasedCourseDetails`, {courseId}, {withCredentials: true});
            return response.data.data;
        } catch (error) {
            // console.log("AuthService :: getCourseDetails :: error", error);
            throw error;
        }
    }


    async useCoupon({couponCode, courseId}){
        try {
            return await axios.post("/api/coupon/useCoupon", {couponCode, courseId}, {withCredentials: true});
        } catch (error) {
            console.log("AuthService :: useCoupon :: error", error);
            notifyError("Please enter a valid coupon.");
            throw error;
        }
    }

    async getUserCourses(){
        try {
            const response =  await axios.get(`/api/mylearnings/users/getCourseDetails`, {withCredentials: true});
            // console.log("data dikha ooo mekooo",response)
            return response.data.data;
        } catch (error) {
            // console.log("AuthService :: getMyCourses :: error", error);
            throw error;
        }
    }

    async getChapterLectureByChapterId(chapterId){
        try {
            return await axios.post(`/api/chapters/getChapterDetails`, {chapterId}, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: getChapterLectureByChapterId :: error", error);
            throw error;
        }
    }


    async updateNewsletterSubscription(){

        try {
            return await axios.get(`/api/user/updateNewsLetter`, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: setNewsletterSubscription :: error", error);
            throw error;
        }
    }


    async addToWishlist(courseId){
        try {
            return await axios.get(`/api/wishlist/toggleWishlist/${courseId} `,{withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: getMyWishlist :: error", error);
            throw error;
        }
    }


    // async getNextPrevLecture(lectureId, chapterId){
    //     try{
    //         const response = await axios.post(`/api/lectures/getNextPreLecture`, {lectureId, chapterId}, {withCredentials: true});
    //         return response.data.data;
    //     }
    //     catch(error){
    //         // console.log("AuthService :: getNextPrevLecture :: error", error);
    //         throw error;
    //     }
    // }

    async getNextLecture(lectureId){
        try{
            const response = await axios.post(`/api/lectures/getNextLecture`, {lectureId}, {withCredentials: true});
            return response.data.data;
        }
        catch(error){
            // console.log("AuthService :: getNextPrevLecture :: error", error);
            throw error;
        }
    }

    async getPrevLecture(lectureId){
        try{
            const response = await axios.post(`/api/lectures/getPreLecture`, {lectureId}, {withCredentials: true});
            return response.data.data;
        }
        catch(error){
            // console.log("AuthService :: getNextPrevLecture :: error", error);
            throw error;
        }
    }


    async getLectureDetails(lectureId){
        try {
            const response =  await axios.post(`/api/lectures/getLectureDetails`, {lectureId}, {withCredentials: true});
            return response.data.data;

        } catch (error) {
            // console.log("AuthService :: getLectureDetails :: error", error);
            throw error;
        }
    }

    async isCoursePurchase(courseId){
        try {
            return await axios.get(`/api/user/getPurchasedCourseById/${courseId}`, {withCredentials: true});
        } catch (error) {
            // console.log("AuthService :: isCoursePurchase :: error", error);
            throw error;
        }
    }

    async getRoadmap(courseId){
        try {
            return await axios.get(`/api/roadmap/getRoadmapById/${courseId}`);
        } catch (error) {
            // console.log("AuthService :: getRoadmap :: error", error);
            throw error;
        }
    }

    async getUserForLogin(){
        try{
            return await axios.get("/api/user/getUser", {withCredentials: true});
        }
        catch(error){
            // console.log("AuthService :: getUser :: error", error);
            throw error;
        }
    }


    async getReviews(id){
        try {
            const response =  await axios.get(`/api/reviews/getReviewById/${id}`);
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getReviews :: error", error);
            throw error;
        }
    }


    async contactUsFormSubmit(data){
        try {
            const response =  await axios.post("/api/contactUs/bookAppointment", data, {withCredentials: true});
            return response

        } catch (error) {
            throw error;
        }
    }
    async internshipFormSubmit(data){
        try {
            const response =  await axios.post("/api/internshipapplication/applyforinternship", data, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
            return response
    
        } catch (error) {
            throw error;
        }
    }

    async careerFormSubmit(data){
        try {
            const response =  await axios.post("/api/internship/apply", data, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });
            return response

        } catch (error) {
            throw error;
        }
    }


    async getInternshipCourses(){
        try {
            const response =  await axios.get("/api/internships/getInternships");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getInternshipCourses :: error", error);
            throw error;
        }
    }


    async getPlacementCourses(){
        try {
            const response =  await axios.get("/api/placementPreparation/getPlacementPrepration");
            // console.log(response.data.data)
            return response.data.data
        } catch (error) {
            // console.log("AuthService :: getPlacementCourses :: error", error);
            throw error;
        }
    }


    async getCertificate(id){
        try {
            const response = await axios.post("/api/certificate/getCertificate", {id});
            return response.data.data;
        } catch (error) {
            console.log("Failed to get certificate", error);
            throw error;
        }
    }


    async grantAccess(lectureId){
        try {
            console.log("lecture id ye jaa rahi ", lectureId)
            const response = await axios.post("/api/access/grantaccess", {lectureId});
            return response.data;
        } catch (error) {
            console.log("Failed to grant notes access", error)
            
        }
    }
    async removeAccess(lectureId){
        try {
            const response = await axios.post("/api/access/removeaccess", lectureId);
            return response.data;
        } catch (error) {
            console.log("Failed to remove notes access", error)
            
        }
    }

}