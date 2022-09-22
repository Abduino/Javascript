alert('This is form outside js');
document.write('<h1>helooooooo</h1>');


var ken,seat,selamta;
ken = 20;
document.write('why not');
seat=ken + 10;

document.write('<h2> time </h2>' + ken + '</br>');
document.write('the seat is' + seat + '</br>');
if(ken > seat)
{
	document.write('ken is greater than seat');
}
else
{
	document.write(seat + 'is greater than' + ken);
}
//arrays

var myData = ['hello',123,true];
document.write('first index' + myData[0] + '</br>');
document.write('second index' + myData[1] + '</br>');
document.write('third index' + myData[2] + '</br>');

var state = "my name is abdurehman redi";

var st_one = state.slice(0,10);
var st_two = state.substring(0,10);
document.write('</br>' + st_one + '</br>');
document.write('</br>' + st_two + '</br>');
