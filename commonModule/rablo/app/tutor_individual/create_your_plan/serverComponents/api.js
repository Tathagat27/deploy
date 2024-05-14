import Axios from "../../../Axios/Axios";

export  async function getPlans() {  
  try {
      const response = await Axios.get(`/api/plan/display_plans/${"RABALO02"}`);

      if(response.status===200){
        return response.data;
      }
  } catch (error) {
     throw new Error(error);
  }
}
export  async function deletePlans(data){
   try {
     const response=await Axios.delete('/api/plan/delete_plans',{data:data})
     if(response.status===200){
      return response.data;
     }
   } catch (error) {
     throw new Error(error.response.data.message)
   }  
}
export  async function updatePlans(data){
   try {
     const response= Axios.patch('/api/plan/update_plans',data);
     if(response.status===200){
       return response.data;
     }
   } catch (error) {
      throw new Error(error.message);
   }
}
export  async function createPlans(data){
  try {
    const response= await Axios.post('/api/plan/post_plans',data);
    if(response.status===200){
      return response.data;
    }
  } catch (error) {
      throw  new Error(error.message);
  }       
}
export async function UpdatePlanCount(data){
  try {
    const response= await Axios.patch('/api/plan/update_plan_count',data);
    if(response.status===200){
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

// /api/plan/send-email
export async function sendEmail(data){
  try {
    const response= await Axios.post('/api/plan/send-mail',data);
    if(response.status===200){
      return response.data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}