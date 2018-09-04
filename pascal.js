/**
* @ method printPascalTriangle
* @param {number} noOfLevels
* @returns {undefined}
*/
function printPascalTriangle(noOfLevels){
	

	for(var currentLevel=1; currentLevel<=noOfLevels; currentLevel++){
	var levelValue = "";
	var startValue = 1;
	for(var column = 1; column<=currentLevel;column++){
	 levelValue = levelValue + startValue;
	}
	console.log(levelValue);
	}
	return;
}