var i = Math.floor(0);
var input = Math.floor(100);
var output;

var output = 0;// = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;
document.write("aaaa");
for(i=0;i<100;i++)
{
  document.write("aaaa");

  i++;
  
    output[i] = i;
  
  
  if(input[i]%3 == 0){
    output[i]=Fizz;
  }
  if(input[i]%5 ==0 ){
    output[i]=Buzz;
  }
  if(input[i]%3 == 0&&input[i]%5 == 0){
    output[i]=FizzBuzz;
  }
  if(i==100){
    break;
  }
  document.write(i+'は'+output[i]);
  document.write("aaaa");
}
