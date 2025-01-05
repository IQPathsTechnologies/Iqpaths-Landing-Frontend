
import { AuthService } from "../../axios/User";
import { redirect } from "react-router-dom";
export const checkForLoginLoader = async()=>{
    const apiClass = new AuthService();
    try {
        const response = await apiClass.getUserForLogin();
        return redirect("/");
      } catch (error) {
        return null;
    } 
    
}

export const IsuserLogedinAndValid = async()=>{
  const apiClass = new AuthService();
  try {
      const response = await apiClass.getUserForLogin();
      return null
    } catch (error) {
      return redirect("/");
  } 
}



