import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/items";

class ItemService {
  
  getItems() {
    return axios.get(API_URL +"/", { headers: authHeader() });
  }
}

export default new ItemService();
