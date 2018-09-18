function printTrailingZeroes(number){
	var count=0;
    for(i=5; number/i >= 1;i *= 5){
		count += number/i;
	} 
	return count;
    }
    
