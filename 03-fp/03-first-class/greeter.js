const greeter = (target) => {
  return () => console.log(`Hi, ${target}!`);
}

const greet = greeter('Step Jun');
greet(); // Hi, Step Jun!