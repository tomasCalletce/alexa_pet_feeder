const request = require("request");

function Getdevicedata(token,device){
    var request = require("request");
    var options = { 
      method: 'GET',
      url: `https://api.sinric.pro/api/v1/devices/${device}`,
      headers: 
      {   'Authorization': `Bearer <${token}>`,
          'Content-Type': 'application/x-www-form-urlencoded' 
      } 
    };

    request(options, async function (error, response, body) {
        if (error) throw new Error(error);
        const obj = await JSON.parse(body);
        console.log(obj)
    });
}

module.exports = Getdevicedata;