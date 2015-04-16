


var StringCalculator = {
	add: function(param){
		if (param == 0)
		return 0;	
        var number = param.split(",");
        var result =0;
        for(var i =0;i< number.length; i++){
        	result += Number(number [i]);
        }
        return result;

	}
}