// Sparse Array --> Sparse arrays are arrays where only a few locations in the array have any data,
//  most of the locations are considered as “empty”.

const b = [1, 2, , , 5];
console.log(b);

const c = [1, 2];
c[4] = 5;
console.log(c);

const d = [1, 2];
d.length = 5;
console.log(d);

const e = [1, 2, 3, 4, 5];
delete e[2]; 
console.log(e);

const arr7=[1, 2, , , 5];
console.log(arr7[3]);   //empty slots behave as if they are filled with undefined

for (const i of arr7) {
    console.log(i);
  };  //empty slots behave as if they are filled with undefined

// in some array iteration methods empty slots are skipped
// For each

arr7.forEach(element => {
    console.log(element);
});

let x= arr7.map((i)=> {
    i+1;
})
console.log(x);

let filtered= arr7.filter(()=>true);
console.log(filtered);

const keys = Object.keys(arr); 
for (const key in arr) {
  console.log(key);}


//   Multi-dimensional arrays

const arr1=[
                [1,2,9,0,1],
                [3,4,7,6,1],
                [5,6,6,8,0]
            ]
for(let i=0; i<3;i++){
    for(let j=0; j<5; j++){
        // console.log(arr1[i][j]);
        console.log("Elements::",arr1[1][2]);
    }
}


const arr2=new Array(5);
for (let i = 0; i < 5; i++) {
    arr2[i] = new Array(5);
    for (let j = 0; j < 5; j++) {
      arr2[i][j] = `[${i}, ${j}]`;
    }
  }
console.log(arr2);

// Using arrays to store other properties

const arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property);

const arr3= [{name:"Rita",age:"44", gender:"F"},
            {name:"Pari",age:"44", gender:"F"},
            {name:"Sida",age:"44", gender:"F"}
            ]
for(let i=0; i<arr3.length; i++){
    console.log(arr3[i].name);
}
console.log(arr3);

arr4=[1,2,3,4,5]
arr4.push(22);
console.log(arr4);