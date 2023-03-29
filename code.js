let array = [];

for (let i = 0; i < 10; i++) {
  let innerArray = [];
  
  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.round(Math.random()));
  }
  
  array.push(innerArray);
  console.log(innerArray)
}

