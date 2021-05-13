import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/swaps";

class SwapService {
  
  getMySwaps(data) {
    return axios.get(API_URL +"/myrequests/"+data, { headers: authHeader() });
  }

  getItemSwaps(data) {
    return axios.get(API_URL +"/requesteditem/"+data, { headers: authHeader() });
  }

  postSwapRequest(data) {
    return axios.post(API_URL +"/", data, { headers: authHeader() });
  }

  deleteSwapRequest(data) {
    return axios.delete(API_URL +"/"+data, { headers: authHeader() });
  }

  performSwapRequest(data) {
    return axios.get(API_URL +"/confirm/"+data, { headers: authHeader() });
  }
}

export default new SwapService();
