let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""
    let buildPunctuation = "!"

    for (let i = 1; i <= theWordArray.length; i++) {
      
          if (i % 3 ===0){
            buildMeUp += (sentence[i-1] + buildPunctuation + " ")
            buildPunctuation += "!"
        } else {
            buildMeUp += (sentence[i-1] + " ")
        } console.log(buildMeUp)
    } ;
}
addExcitement(sentence)