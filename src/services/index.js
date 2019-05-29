import { store } from '../store';
import { setError } from '../store/status';

const BASE_URL = 'http://localhost:8086';

const additioinalHeaders = {
  headers: {
    'Content-type': 'application/json; charset=utf-8'
  }
};

export const request = (url, method = 'get', data, settings = {}) => {
  const options = {
    method,
    credentials: 'include',
    ...settings
  };
  const isCheckingUser = url.includes('checkUser');

  if (data) options.body = JSON.stringify(data);

  // const promise = fetch(`${BASE_URL}/${url}`, options)
  //   .then((r) => {
  //     if (r.status < 200 || r.status > 299) {
  //       throw new Error(r.status.text);
  //     }

  //     return r.json();
  //   });

  // return promise;

  const promise = fetch(`${BASE_URL}/${url}`, options)
    .then(r => r.json())
    .then((data) => {
      if (!data.error) return data;

      store.dispatch(setError(data.error));

      throw String(data.error);
    })
    .catch((error) => {
      if (!isCheckingUser) {
        store.dispatch(setError(error));
      }

      throw error;
    });

  return promise;
};

export const server = {
  get(url) {
    return request(url);
  },

  delete(url) {
    return request(url, 'delete');
  },

  post(url, data) {
    return request(url, 'post', data, additioinalHeaders);
  },

  put(url, data) {
    return request(url, 'put', data, additioinalHeaders);
  }
};
