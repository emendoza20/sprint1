const arrayOFunctions = [];

const functionFilled = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};
for (let i = 0; i < 10; i++) {
  arrayOFunctions.push(functionFilled());
}

for (let j = 0; j < 10; j++) {
  functionFilled();
}
