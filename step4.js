var httpreq = require('httpreq');
var request = require('request');

httpreq.post('http://challenge.code2040.org/api/prefix', {
    parameters: {
        token: 'f5dec5fea57ef33e1268030bcbfa7706'
    }
}, function (err, res){
    if (err){
        console.log(err);
    }else{
        var obj = JSON.parse(res.body);
        console.log(obj.prefix);
        console.log(res.body)
;        var arr = [];

        for (var i=0;i<obj.array.length;i++){
        	if(obj.array[i].substring(0,obj.prefix.length) != obj.prefix){
        		arr.push(obj.array[i]);
        	}
        }
        returnArr(arr);
    }
});

function returnArr(val){
    
    request({
        url: 'http://challenge.code2040.org/api/prefix/validate', //URL to hit
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            token: 'f5dec5fea57ef33e1268030bcbfa7706',
            array: val
        }
    }, function(error, response, body){
        if(error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
    }
    });
}