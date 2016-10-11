var httpreq = require('httpreq');
 
httpreq.post('http://challenge.code2040.org/api/reverse', {
    parameters: {
        token: 'f5dec5fea57ef33e1268030bcbfa7706'
    }
}, function (err, res){
    if (err){
        console.log(err);
    }else{
    	var endString = '';
        for(var i=(res.body).length -1;i>=0;i--){
        	endString += (res.body).charAt(i);
        }
        returnString(endString);
    }
});

function returnString(val){
	httpreq.post('http://challenge.code2040.org/api/reverse/validate', {
	    parameters: {
	        token: 'f5dec5fea57ef33e1268030bcbfa7706',
	        string: val
	    }
	}, function (err, res){
	    if (err){
	        console.log(err);
	    }else{
	        console.log(res.body);
	    }
	});
}