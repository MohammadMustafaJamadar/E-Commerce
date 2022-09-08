
function PassWordvalidate (pass) {
 if(pass.length < 4){
  return{
  massage : "Passowrd Too Short",
  result : false 
  }
 }else{
  return{
    massage:"SuccessFull",
    result: true
  }
 }
};

function NameValidate (name) {
if(name.length < 3){
  return{
  massage : "Name must be atleast 3 charechter ",
  result : false
  } 
}else{
  return{
    massage:"SuccessFull",
    result: true
  }
}
};


export {PassWordvalidate , NameValidate }