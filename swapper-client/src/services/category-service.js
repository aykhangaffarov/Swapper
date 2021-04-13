import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/categories";

class CategoryService {
  getCategories() {
    const results=[];
    axios.get(API_URL +"/", { headers: authHeader() })
      .then(
        response => {
            console.log(response.data)
            response.data.forEach(item => {
              results.push(item.name);
            });
        },
        error => {
            console.log(error);
        });
      return results;
  }
}

export default new CategoryService();
