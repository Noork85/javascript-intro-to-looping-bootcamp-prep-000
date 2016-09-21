var forLoop = function(array) {
  for(var i = 0; i < 25; i++) {
  	if(i === 1) {
  	array.push("I am 1 strange loop.");
  	}else {
  		array.push(`I am ${i} strange loops.`);
  	}
  }
  return array;
}
var whileLoop = function(n) {
  i = n;
	while(i > 0) {
		console.log(i--);
	}
	return 'done';
}
var doWhileLoop = function(array) {
	function maybeTrue() {
  return Math.random() >= 0.5;
}
	do{
	array.pop();
	} while(array.length > 0 && maybeTrue())
	return array;
};
