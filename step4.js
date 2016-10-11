var httpreq = require('httpreq');

httpreq.post('http://challenge.code2040.org/api/prefix', {
    parameters: {
        token: 'f5dec5fea57ef33e1268030bcbfa7706'
    }
}, function (err, res){
    if (err){
        console.log(err);
    }else{
        var obj = JSON.parse(res.body);
        var arr = [];

        for (var i=0;i<obj.array.length;i++){
        	if(obj.array[i].substring(0,obj.prefix.length) != obj.prefix){
        		arr.push(obj.array[i]);
        	}
        }
        returnArr(arr);
    }
});

function returnArr(val){
	console.log(val);
    httpreq.post('http://challenge.code2040.org/api/prefix/validate', {
        parameters: {
            token: 'f5dec5fea57ef33e1268030bcbfa7706',
            array: val
        }
    }, function (err, res){
        if (err){
            console.log(err);
        }else{
            console.log(res.body);
        }
    });
}