function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
  };
  
  console.log(calc(2, 2, sum));
  
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  
  function gretting(name,name1) {
    console.log(`Hola ${name}`);
    console.log(`Hola ${name1}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar','haroru');