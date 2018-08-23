/** 
* @method printSquareRoot
* @param {number}
* @returns {m}
*/
function printSquareRoot(num){
	var num,m,n=0.01;
	for(m=0;m<num;m=m+n)
	{
	if((m*m)>num)
	{
	m=m-n;
	break;
	}
	}
	return m;
}
