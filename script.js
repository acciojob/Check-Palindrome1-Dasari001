// complete the given function

function palindrome(str){
	// flag = true;
 //   for(var i=0; i<str.length/2; i++){
	//    if(str.charAt(i)!=str.charAt(str.length-1-i)){
	// 	   flag = false;
	//        break;
	//    }
 //   }
	// if(flag==false){
	// 	return false;
	// }
	// else{
	// 	return true;
	// }



	str = str.toLowerCase().replace(/[\W_]/g, '');
  
  // Reverse the string
  let reversedStr = str.split('').reverse().join('');
  
  // Compare the original string with the reversed string
  return str === reversedStr;
}
module.exports = palindrome
