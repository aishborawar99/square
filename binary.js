
/**
* @method decToBin
* @param {number}
* @returns {}
*/
function decToBin(number){
	var result="";
	while(number>0){
		result=number%2 + bin;
		number= parseInt(number/2);
	}
	return result;
}






	
