/**
* @ method checkSparseOrNot
* @param {number} 
* @returns {number is sparse} {number is not sparse}
*/
function checkSparseOrNot(number){
	if((number & (number>>1))>=1){
		return 'number is sparse';
	}
          
          return 'number not sparse';

}