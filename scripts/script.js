// for (let i = 1; i < 11; i++) {
//     console.log(2**i)
// }

// let i = 1;
// while (i < 11) {
//     console.log(Math.pow(2, i)); //2**i
//     i++;
// }

// let userInput;
// let numberedInput;
// do{
//     userInput = prompt("what is your name?");
//     numberedInput = Number(userInput);
//     console.log(Number (userInput));
// } while (!isNaN(numberedInput));

// alert(`Hello ${userInput}`)

// let fruits = ['Apple', 'Banana'];
// fruits.push('Orange');

// fruits.unshift('Mango');
// console.log(fruits)

// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i]);
// }
// // Another method to loop through loops // 
// for (let item of fruits )
// {
//     console.log(item);
// } 

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];
let counter = 0
for (let student of students) {
    if(student.program === "CIT" && student.GPA > 3) {
        console.log(student)
        counter = counter +1 ;
    }
}
console.log(counter)

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${hobbies[0]} and ${hobbies[1]} `)


// fruits.pop()
// fruits.unshift('Mango')
// fruits.shift()
// console.log(fruits)







