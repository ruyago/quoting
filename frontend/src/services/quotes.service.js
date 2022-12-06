import axios from 'axios';

class QuotesService {
  
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request!!!!
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/my-quotes
  createOne = (requestBody) => {
    return this.api.post('/api/my-quotes', requestBody);
  }

  // GET /api/my-quotes
  getAll = () => {
    return this.api.get('/api/my-quotes');
  }

  // GET /api/my-quotes/:id
  getOne = (id) => {
    return this.api.get(`/api/my-quotes/${id}`);
  }

  // PUT /api/my-quotes/:id
  updateOne = (id, requestBody) => {
    return this.api.put(`/api/my-quotes/${id}`, requestBody);
  }

  // DELETE /api/my-quotes/:id
  deleteQuote = (id) => {
    return this.api.delete(`/api/my-quotes/${id}`);
  } 


}

// Create one instance (object) of the service
const quotesService = new QuotesService();

export default quotesService;