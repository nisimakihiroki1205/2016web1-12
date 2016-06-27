var i = Math.floor(0);
var input = Math.floor(100);
var output;

var output = 0;// = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;
document.write("aaaa");
for(i=0;i<100;i++)
{
  document.write("aaaa");

 
  
    output[i] = i;
  
  
  if(input[i]%3 == 0){
    document.write('Fizz') ;
  }
  if(input[i]%5 ==0 ){
   document.write('Buzz');
  }
  if(input[i]%3 == 0&&input[i]%5 == 0){
    document.write('FizzBuzz');
  }

  var name;

name = '鈴木';
document.write("<p>名前:" + name + "</p>");
 document.write(''+i+'');
  document.write(''+output[i]+'');
  
}
