import React from 'react';

class Calculator extends React.Component{
 constructor(){
     super()
     this.state ={
          firstOperand: 0,
          operator:'+',
          secondOperand: 0,
          result: '0'
     }
     
 }

 onFirstOperandChange = (event) => {
     const newValue = event.target.value;
     this.setState({
         firstOperand: newValue
     });
 }

onSecondOperandChange = (event) => {
     const secondOperand = event.target.value;
     this.setState({
      secondOperand
     });
    
}

onOperatorChange = (event)=>{
     const operator = event.target.value;
     this.setState({
     operator
     });
};
Calculate = ()=>{
     let result = 0
     const{firstOperand,secondOperand,operator} = this.state
     switch (operator) {
          case '+':
               result = parseInt(firstOperand) + parseInt(secondOperand)
               break;
          case '-' : 
               result = parseInt(firstOperand) - parseInt(secondOperand)
               break;
          case'/' :
               result = parseInt(firstOperand) / parseInt(secondOperand)
               break;
          case '*' : 
               result = parseInt(firstOperand) * parseInt(secondOperand)   
               break;
     }
     this.setState({
          result
          });
}


render () {
     return(
          <div>
          
          <input type= "number" onChange={this.onFirstOperandChange} />
             <select onChange={this.onOperatorChange}>
              <option>+</option>
              <option>/</option>
              <option>-</option>
              <option>*</option>
          </select>
         
          <input type ="number" onChange={this.onSecondOperandChange} />
  
          <button onClick={this.Calculate}>=</button>
          <input value = {this.state.result} type="text" disable />
        
        </div >
     )
}


}



export default Calculator