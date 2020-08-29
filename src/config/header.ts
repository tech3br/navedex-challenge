import axios from 'axios';

const global = () => {
  const token = localStorage.getItem('userKey');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else{
    delete axios.defaults.headers.common['Authorization']
  }

};

export { global }
