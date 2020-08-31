function confirmEnding(str,target){
 
 var sliced = str.slice(str.length - target.length);
 
 return sliced === target;
 
 }
 
 confirmEnding(Bastian,n);
