var httpreq = require('httpreq');
var moment = require('moment');
 
httpreq.post('http://challenge.code2040.org/api/dating', {
    parameters: {
        token: 'f5dec5fea57ef33e1268030bcbfa7706'
    }
}, function (err, res){
    if (err){
        console.log(err);
    }else{
        var obj = JSON.parse(res.body);
        var date = moment(obj.datestamp);
        date.add(obj.interval,'s');
        var str= (date.toISOString());
        str = str.slice(0, 19) + str.slice(23);
        returnString(str);
    }
});

function returnString(val){
    httpreq.post('http://challenge.code2040.org/api/dating/validate', {
        parameters: {
            token: 'f5dec5fea57ef33e1268030bcbfa7706',
            datestamp: val
        }
    }, function (err, res){
        if (err){
            console.log(err);
        }else{
            console.log(res.body);
        }
    });
}