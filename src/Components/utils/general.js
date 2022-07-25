const InputChanger = (event , updatedFunction )=>{
 const Data = event.target.value;
 updatedFunction(Data);
};

export default InputChanger;
