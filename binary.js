
/**
* @method decToBin
* @param {number}
* @returns {}
*/
function decToBin(number){
	var bin="";
	while(number>0){
		bin=number%2 + bin;
		number= parseInt(number/2);
	}
	return bin;
}






	
