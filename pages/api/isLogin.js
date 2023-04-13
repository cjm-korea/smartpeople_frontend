import fetch from "node-fetch";

// Client must passed token for use this function
export default async function handler(req, res) {
  const apiUrl = 'http://localhost:8000/auth/isLogin';

  var token = null;
  if(req.headers.authorization){
    token = req.headers.authorization;
    // console.log(token);
  }else{
    throw new Error('token is not valid');
  }

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const status = response.status;
  
  await res.send(status);
}