function printBadges(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(`Welcome ${employees[i]}! You are employee #${i + 1}.`);
  }
  return employees;
}

 function tailsNeverFails() {
  let number = 0;

   while (Math.random() >= 0.5) {
    number++;
  }
  return `You got ${number} tails in a row!`;
}
