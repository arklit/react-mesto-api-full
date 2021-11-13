export const BASE_URL = 'https://api.arklit.nomoredomains.rocks';

function getRes(res) {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
    })
    .then(getRes)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(getRes)
}

export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(getRes)
  }

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
  })
  .then(getRes)
}