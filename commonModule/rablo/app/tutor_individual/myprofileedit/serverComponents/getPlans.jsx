import Axios from "@/app/Axios/Axios";

export default async function getPlans() {
  const response = Axios.post("/api/plan/display_plans", {
    tutorId: "RABALO02",
  });
  return response;
}
