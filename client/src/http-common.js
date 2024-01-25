import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:5000/api', //port server
  headers: {
    'Content-Type': 'application/json'
  }
})