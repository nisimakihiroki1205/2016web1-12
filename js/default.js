var i = Math.floor(0);
var input = Math.floor(100);
var output;

var output = 0;// = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;
document.write("aaaa");
while(){i++;
  if(input[0]){
    output[0] = 0
  }
  
  if(input[i]%3 == 0){
    output[i]=Fizz;
  }
  if(input[i]%5 ==0 ){
    output[i]=Buzz;
  }
  if(input[i]%3 == 0&&input[i]%5 == 0){
    output[i]=FizzBuzz;
  }
  document.write(i+'は'+output[i]);
  document.write("aaaa");
}
