//challenge 2: picture generator
var integer=0;
var integer_copy=0;

function generateSurprise(){
  var image=document.createElement('img');
  var div=document.getElementById('generatedSurprise');
  image.setAttribute('id','surprise');
  image.src='img/keanu.gif';
  div.appendChild(image);
  integer++;
  integer_copy++;
  console.log('integer is now '+integer);
}

function minusOne(){
  document.getElementById('surprise').remove();
  integer--;
  integer_copy--;
  console.log('integer is now '+integer);
}

function reset(){
  for(i=0;i<integer;i++){
    document.getElementById('surprise').remove();
  }

  for(j=0;j<integer;j++){
    console.log(integer_copy);
    integer_copy--;
  }

  integer=integer_copy;
  console.log('reset: integer is now '+integer_copy);
}
