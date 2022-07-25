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

function EmailValidate (email) {
  const Userlist = JSON.parse(localStorage.getItem("NewData"))
  const result = Userlist.find((user)=> user.email === email)
  if(result){
    return{
      massage : "Email already exists" ,
      result: false
    }
  }else{
    return{
      massage : "Successfull" , 
      result: true
    }
  }
}

export {PassWordvalidate , NameValidate , EmailValidate}