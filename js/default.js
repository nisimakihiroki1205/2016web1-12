var i = Math.floor(0);
var input = Math.floor(100);
var output;
document.write("<p>名前:" + name + "</p>");
var output=0;// = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;

for(i=0;i===input;i++){
  if(input[0]){
    output[0]=0
  }
  
  if(input[i]%3===0){
    output[i]=Fizz;
  }
  if(input[i]%5===0){
    output[i]=Buzz;
  }
  if(input[i]%3===0&&input[i]%5===0){
    output[i]=FizzBuzz;
  }
  document.write("<p>"+i+'は'+output[i]+"</p>");
}
