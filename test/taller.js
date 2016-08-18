module.exports = function(entrada){
	
	if(entrada === null) return 1;
	if(entrada === false) return 100;
	if(entrada === true) return false;

	switch(typeof(entrada)){
		case 'string':
		if(entrada == 'make clean'){
			return 'All done';
		} else {
			if(entrada.match(/a/)){
				return 4;
			}
			return  5;
		}

		case 'number':
		if(entrada < 0){
			return 50;
		}
		return true;

		case 'object':
		if(entrada.a){
			return 10;
		}
		return 11;

		case 'function':
		return 'OK';
		default:
		return 15;
	}
}