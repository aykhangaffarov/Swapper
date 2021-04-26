import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/swaps";

class SwapService {
  
  getSwaps() {
    return axios.get(API_URL +"/", { headers: authHeader() });
  }

  postSwapRequest(data) {
    return axios.post(API_URL +"/", data, { headers: authHeader() });
  }
}

export default new SwapService();
