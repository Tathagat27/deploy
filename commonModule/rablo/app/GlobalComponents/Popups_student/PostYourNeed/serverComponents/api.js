import axios from 'axios';

export const postYourNeed = async (data) => {

    try {
        const response = await axios.post('http://localhost:6500/api/postyourneeds/poststudentneeds', data);
         return response.data;
    } catch (error) {
    throw new Error(error);
    }
}