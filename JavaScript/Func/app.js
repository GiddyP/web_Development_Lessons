// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }

// function titleCase(string) {
//     var sentence = string.toLowerCase().split(" ");
//     for(var i = 0; i< sentence.length; i++){
//        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     }
// document.write(sentence.join(" "));
//  return sentence;
//  }

// DEFINE YOUR FUNCTION BELOW:
function returnDay(x){
    if(typeof x === 'number' && 0 < x && x <= 7){
        let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        let ans = daysOfWeek[x-1];
        return ans;
    }
    return null;
    
}


function capitalize(string){
    if (typeof string === 'string'){
        
        let sentence = string.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
document.write(sentence.join(" "));
 return sentence;
  
    }
    return false;
}

 // titleCase("tutorix is one of best e-platforms");


 
// DEFINE YOUR FUNCTION BELOW:

// function lastElement([]){
//     return lastElement.length;
    // if(lastElement.length > 1){
    //     let last = lastElement[lastElement.length-1];
    //     return last;
    // } else if(lastElement.length === 1){
    //         return lastElement.length;
    // }
    // return null;
    
// }



// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

