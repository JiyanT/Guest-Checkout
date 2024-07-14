let score = 80;

if (score >= 60) {
  console.log("Contract!");
}

console.log("--------------------------------------");

if (score >= 60) {
  console.log("Passed");
} else {
  //otherwise
  console.log("Failed");
}

console.log("--------------------------------------");

let grade = 100;

if (grade >= 80) {
  console.log('Grade:A');
}else if(grade>=90){
    console.log('Grade:B');
}else{
    console.log('Grade:C');
}

console.log("--------------------------------------");

let grade1 = 100;

let result= "Grade: ";

if (grade1 >= 200) {
  result += 'A';
}else if(grade>=90){
    result += 'B';
}else{
    result += 'C';
}

console.log(result);

console.log("--------------------------------------");

score=80;

if(score>=0 && score<= 100){

    if(score>=60){
     // pass or failed
     console.log('Passed');
    }else{
    //otherwise
    console.log('Failed');

}
}else{
    console.log('Invalid');

}


