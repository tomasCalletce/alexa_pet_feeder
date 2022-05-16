const axios = require('axios');
const { get } = require('request');

const url = "https://api.sinric.pro/api/v1/auth";

async function auth_AccessToken(){

  const res = await axios({
    method: 'POST',
    url: url,
    headers: 
    {   'x-sinric-api-key' : 'b4d269b2-299d-4bba-accf-9f0eb0e0f67f',
        'Content-Type'  : 'application/x-www-form-urlencoded' 
    },
    form: 
    {
        client_id: "android-app"
    } 
  });

  return res.data.accessToken;

}

async function getData(){

  const authToekn = await auth_AccessToken();
  console.log(authToekn)

  try {

    const res = await axios({
      method: 'GET',
      url: 'https://api.sinric.pro/api/v1/devices/62699e6bd0fd258c521bf3d5',
      headers: 
      {   
          'Authorization': `Bearer ${authToekn}`,
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: 
      {
          client_id: "android-app"
      } 
    });

    console.log(res)
    
  } catch (error) {

    console.log(error)
    
  }

}



getData();
