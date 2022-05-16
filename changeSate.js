const axios = require('axios');

async function TurnON(){
    const res = await axios({
        method: 'post',
        url: 'https://ifttt.sinric.pro/v1/actions',
        data: {
            "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
            "device_id": "62699e6bd0fd258c521bf3d5",
            "action": "setPowerState",
            "value": { "state" : "On" }
            }
      });
      console.log(res);
}


async function TurnOFF(){
    const res = await axios({
        method: 'post',
        url: 'https://ifttt.sinric.pro/v1/actions',
        data: {
            "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
            "device_id": "62699e6bd0fd258c521bf3d5",
            "action": "setPowerState",
            "value": { "state" : "Off" }
            }
      });
      console.log(res);
}


async function getSetPowerSate(){
    try {
        const res = await axios({
            method: 'GET',
            url: 'https://api.sinric.pro/api/v1/activitylogs/device/5c5e726095bd1817e07ab3ac',
            headers: 
            {   
                'x-sinric-api-key' : 'b4d269b2-299d-4bba-accf-9f0eb0e0f67f',
                'Content-Type': 'application/x-www-form-urlencoded' 
            }
          });
          console.log(res)
        
    } catch (error) {
        console.log(error);
    }
    
}

getSetPowerSate();