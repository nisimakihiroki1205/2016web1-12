var i = Math.floor(0);
var input = Math.floor(100);
var output;

var output = 0;// = parseInt(window.prompt('正の数字を入力して下さい。'));

var message;
document.write("aaaa");
document.write('<p></p>');
for(i=1;i<=100;i++)
{

  output[i] = i;
   if(i%3 == 0&&i%5 == 0)
  {
    document.write('FizzBuzz');
  }
  else if(i%3 == 0)
  {
    document.write('Fizz') ;
  }
  else if(i%5 ==0 )
  { 
   document.write('Buzz');
  }
 

  else document.write(i);

  document.write('<p></p>');
}
