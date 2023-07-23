
const theHeadline = "The case of the Ekundayo Shallom versus Jos, Plateau State on acoount of First Degree murder"

const theHeadlineToArray = theHeadline.match(/\S+/g)

const predefinedArray = ['new' ,"case"]

console.log(theHeadlineToArray)

function AddingHashTagToTheHeadline(){
  for(let i = 0; i < theHeadlineToArray.length; i++){
    const theHeadlineToArrayPlusHashTag ="#"+ theHeadlineToArray[i]
   console.log(theHeadlineToArrayPlusHashTag)
  }
}
AddingHashTagToTheHeadline()

function printingOutTheLongestThreeWords(){
  const longest = theHeadlineToArray.sort((x,y)=> y.length - x.length).splice(0,3)
  console.log(longest)
} 
printingOutTheLongestThreeWords()

function forPredefinedheading(){
for(let i = 0; i < theHeadlineToArray.length; i++){
  let matchingWords = false;
  for(let k = 0; k < predefinedArray.length; k++){
    if(theHeadlineToArray[i]=== predefinedArray[k]){
      matchingWords = true;
      console.log(predefinedArray[k])
      break;
    }
  }
  if (!matchingWords){
    console.log("predefined words not found")
    break;
  }
}
}
 forPredefinedheading()

