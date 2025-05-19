
import axios from 'axios';

class VisitorService {
  getVisitors() {
    return axios.get("http://localhost:3090/visitors");
  }
}

const visitorService = new VisitorService();
export default visitorService;

