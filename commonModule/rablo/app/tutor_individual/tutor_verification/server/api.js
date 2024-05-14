import Axios from "../../../Axios/Axios";

export  async function updateQualification(data,tutorId) {  
  try {
      const response = await Axios.post(`api/tutor/updateTutorEducation/${tutorId}`,data);

      if(response.status===200){
        return response.data;
      }
  } catch (error) {
     throw new Error(error);
  }
}
export  async function updatePreference(data,tutorId) {  
    try {
        const response = await Axios.post(`/api/tutor/updateTutorPreference/${tutorId}`,data);
  
        if(response.status===200){
          return response.data;
        }
    } catch (error) {
       throw new Error(error);
    }
  }
export  async function updateVerification(data,tutorId) {
    try {
        const response = await Axios.post(`api/tutor/updateTutorVerification/${tutorId}`,data);
  
        if(response.status===200){
          return response.data;
        }
    } catch (error) {
       throw new Error(error);
    }
}  