import fetch from "node-fetch";

// Client must passed token for use this function
export default async function handler(req, res) {
  const apiUrl = 'http://localhost:8000/auth/isLogin';
  const token = req.headers.cookie?.split('=')[1];

  if (typeof token !== 'undefined') {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    await res.json(response.status);

  } else {
    await res.json(401)
  }
}