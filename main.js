let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"]

newDogs = dog_names.map(myFunction)

function myFunction (dn) {
  let x = dog_string.includes(dn)
  if (x == true) {
    return "matched"
  } else if(x==false){
    return "no match"
  }
  
}
console.log(newDogs) 

myArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
  const newArg = []
  for (i=0; i<=arr.length-1;i++){
    if (i % 2 == 1){
      newArg.push(arr[i])
    } else {
      newArg.push("even index")
    }
  }
  return newArg
}
console.log(replaceEvens(myArr))


