var waitTIme=1000*30*60;
var old=0;
var interval = setInterval(()=>{
    var API_KEY="cyfyyufYydfyTTZZGtgFzTGXHFBVGvg"
    var mobile="7032225550"
    var password="7032225550"
    
    var to="9405439602"
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    
    
    var request = require("request");
    
    var options = { method: 'GET',
      url: 'https://api.coindesk.com/v1/bpi/currentprice/INR.json',
    //   proxy :'http://172.30.0.12:3128',
      headers: 
       { 'cache-control': 'no-cache' } };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    //   console.log(body);
      var bpi = JSON.parse(body);
      var INR = bpi.bpi.INR.rate;
      var message = `Current BitCoin Price is ${INR} INR`;
      console.log(message);
      if(INR!=old)
      {
        old=INR;
        var options = { method: 'GET',
        url: `https://smsapi.engineeringtgr.com/send/?Mobile=${mobile}&Password=${password}&Key=${API_KEY}&Message=${message}&To=${to}`,
        // proxy :'http://172.30.0.12:3128',
        headers: 
         { 'cache-control': 'no-cache' } };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(`${to} : SMS API RESPONSE CODE ${response.statusCode}`);
        });
      }
    });
}, waitTIme);
