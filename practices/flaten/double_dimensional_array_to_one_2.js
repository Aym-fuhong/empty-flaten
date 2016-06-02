'use strict';

function double_to_one(collection) {
	 var arr = [];
	  for(var i=0;i<collection.length;i++){
	  	arr = arr.concat(collection[i]);  	
	  } 
	  for(var i=0;i<arr.length;i++){
	  	for(var j=1;j<arr.length-i;j++){
	  		if(arr[i] === arr[i+j]){
	  		    arr.splice(i+j,1);
	  			j--;
	  		}
	  	}
	  }
	  return arr;
}

module.exports = double_to_one;
