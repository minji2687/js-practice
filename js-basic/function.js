function add(num1, num2) {
  return num1 + num2;
}

function devide(num1, num2) {
  return num1 / num2;
}

function surprise(operator) {
  const result = operator(4, 5);
  console.log(result);
}

surprise(devide);
