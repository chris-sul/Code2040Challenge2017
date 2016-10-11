var httpreq = require('httpreq');
 
httpreq.post('http://challenge.code2040.org/api/haystack', {
    parameters: {
        token: 'f5dec5fea57ef33e1268030bcbfa7706'
    }
}, function (err, res){
    if (err){
        console.log(err);
    }else{
        var obj = JSON.parse(res.body);
        for(var i=0;i<obj.haystack.length;i++){
            if (obj.haystack[i] == obj.needle){
                returnNum(i);
                break;
            }
        }
    }
});

function returnNum(val){
    httpreq.post('http://challenge.code2040.org/api/haystack/validate', {
        parameters: {
            token: 'f5dec5fea57ef33e1268030bcbfa7706',
            needle: val
        }
    }, function (err, res){
        if (err){
            console.log(err);
        }else{
            console.log(res.body);
        }
    });
}