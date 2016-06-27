var i = Math.floor(0);
var input = Math.floor(0);
var output;

var output = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;

for(i=0;i===input;i++){
  
  if(input[i]%3===0){
    output[i]=Fizz;
  }
  if(input[i]%5===0){
    output[i]=Buzz;
  }
  if(input[i]%3===0&&input[i]%5===0){
    output[i]=FizzBuzz;
  }
  document.write(i+'は'+output[i]);
}
