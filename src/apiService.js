import api from '@/axios';

const apiService = {
  request(param) {
    return new Promise((resolve, reject) => {
      api(param)
        .then((response) => {
          resolve(response);
        })
        .catch((errors) => {
          reject(errors);
        });
    });
  },
};

export default apiService;
