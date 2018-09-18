

function checkSparseOrNot(number){
	if((number & (number>>1))>=1){
		return 'number is sparse';
	}
          
          return 'number not sparse';

}