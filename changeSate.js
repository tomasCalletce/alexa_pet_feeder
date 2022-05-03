const axios = require('axios');

async function TurnON(){
    const res = await axios({
        method: 'post',
        url: 'https://ifttt.sinric.pro/v1/actions',
        data: {
            "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
            "device_id": "62699e6bd0fd258c521bf3d5",
            "action": "setPowerState",
            "value": { "state": "On" }
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
            "value": { "state": "Off" }
            }
      });
      console.log(res);
}


async function getSetPowerSate(){
    const res = await axios({
        method: 'get',
        url: 'https://ifttt.sinric.pro/v1/actions',
        data: {
            "api_key" : "b4d269b2-299d-4bba-accf-9f0eb0e0f67f",
            "device_id": "62699e6bd0fd258c521bf3d5"
            }
      });
      console.log(res);
}

TurnOFF();