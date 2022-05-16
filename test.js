const {SinricPro, startSinricPro, raiseEvent, eventNames} = require('sinricpro');

const appKey = "bb2d282c-e628-4ca6-9f31-44f66e664a2e";
const secretKey = "24a81730-7d54-476e-96c1-ecb901a86946-53de2046-11bc-4624-a36d-eb85fed10bf3";
const deviceIds = ["62699e6bd0fd258c521bf3d5"];


async function getData(){

    function setPowerState(deviceid, data) {
        
        return [deviceid,data]
    }
    
    const callbacks = {
        setPowerState
    }
    
    const sinricpro = new SinricPro(appKey, deviceIds, secretKey, true);
    
    
    return res;
}

