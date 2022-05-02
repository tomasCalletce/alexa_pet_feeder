const { on } = require("events");
const request = require("request");
const Getdevicedata = require('./getdevicedata')
const url = "https://api.sinric.pro/api/v1/auth";

const options = { 
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
};

request(options,async function (error, response, body) {
  if (error) throw new Error(error);
  const obj = await JSON.parse(body);

  console.log(obj.accessToken);
  Getdevicedata(obj.accessToken,"62699e6bd0fd258c521bf3d5");
});