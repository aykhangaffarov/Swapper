import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/items";

class ItemService {
  
  getItems() {
    return axios.get(API_URL +"/", { headers: authHeader() });
  }
  getWhItems() {
    return axios.get(API_URL +"/warehouse/", { headers: authHeader() });
  }
  getMyItems(userId) {
    return axios.get(API_URL +"/userId/"+userId, { headers: authHeader() });
  }
  sendWhItem(userId) {
      return axios.get(API_URL +"/sendwh/"+userId, { headers: authHeader() });
  }
  takeWhItem(id, item) {
    return axios.put(API_URL +"/take/"+id, item, { headers: authHeader() });
  }
  addItem(itemData) {
    return axios.post(API_URL +"/", itemData, { headers: authHeader() });
  }

}

export default new ItemService();
