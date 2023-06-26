import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api/v1',
  headers: {
    "Content-Type": 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDk1MWFkZmZjYmE5OWUwODZkNGU5YWEiLCJlbWFpbCI6Im9kZWtvZGVrQGdtYWlsLmNvbSIsImlhdCI6MTY4Nzc2ODMxMCwiZXhwIjoxNjg3ODU0NzEwfQ.f-gRcu46XiRzbS86WSmhOPzsqse3u4HUUCz2BQsAfTQ',
  },
});

export default api;
