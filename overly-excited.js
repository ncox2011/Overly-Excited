let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let nextSentence = ["Why", "was", "the", "walrus", "dancing", "at", "all"];

let addExcitement = (theWordArray, punctuation) => {
    let buildMeUp = ""
    let buildPunctuation = punctuation

    for (let i = 1; i <= theWordArray.length; i++) {
      
          if (i % 3 ===0){
            buildMeUp += (theWordArray[i-1] + buildPunctuation + " ")
            buildPunctuation += punctuation
        } else {
            buildMeUp += (theWordArray[i-1] + " ")
        } console.log(buildMeUp)
    } ;
}
addExcitement(sentence, "?")
addExcitement(nextSentence, "!")