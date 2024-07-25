export  function add(a,b){
        return a+b;
}

const  person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  export {person}


  export function sub(a,b){
    return a-b;
  }

  export function mul(a,b){
    return a*b;
  }

  export default function div1(a,b){
    return a/b;
  }



  export const Num=56;
  export const Num2=88;
  export function multiple(){
    return ("This is multiple wala functiion");
  }