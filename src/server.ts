interface User {
  name: string;
  age: number;
}

function saveUser(params: User) {
  // Save the user

  console.log(params);
}

saveUser({ name: 'Julio', age: 35 });

export const sum = (number1: number, number2: number) => number1 + number2;
