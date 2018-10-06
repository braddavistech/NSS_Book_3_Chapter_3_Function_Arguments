let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon", "..."];

function addExcitement (theWordArray) {
    let buildMeUp = "";

    for (let i = 0; i <= theWordArray.length; i++) {
       
      buildMeUp += sentence[i] + " ";

      if (sentence[i] == null){
          return;
      } else if ((i+1) % 3 == 0 ) {
          buildMeUp += "! ";
      };

      console.log(buildMeUp);
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console
    }

}

addExcitement(sentence)