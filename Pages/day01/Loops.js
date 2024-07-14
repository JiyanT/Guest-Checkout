
for (let i = 0; i < 5; i++) {

console.log('Wooden Spoon');
    
}

console.log('----------------------------------');

 result = '';
for (let i = 5; i <= 15; i++) {
  
   result += i + " ";
    
}
console.log(result) ;

console.log('----------------------------------');

for (let i = 0; i < 7; i++) {

    console.log('Hello Jiyan');
    console.log('Hello World');
     
}

console.log('----------------------------------');

for (let i = 0; i < 6; i++) {
    console.log(i);
    if(i==3){
      break; // exits the current loop
    }
}

console.log('----------------------------------');

for (let i = 0; i < 11; i++) {
    if(i===3 || i===7){
  continue; //skips
    }
    console.log(i);
    
}

console.log('----------------------------------');

// create a loop with 10 iterations starting from 10 to 20
for (let i = 0; i <= 20; i++) {
    console.log(i);

}

console.log('----------------------------------');

// create an array of string and add 10 students names to it
let students= [];
for (let i = 0; i < 10; i++) {
    
    students.push('Student' + " " + (i+1));

}
console.log(students);