interface User {
  name: string;
  age: number;
}

function saveUser(params: User) {
  // Save the user

  console.log(params);
}

saveUser({ name: 'Julio', age: 35 });
