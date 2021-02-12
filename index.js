class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let minorWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let finalArray = [];
    let wordArray = sentence.split(" ")
    for (let i= 0; i< wordArray.length; i++) {
      if (i== 0) {
        finalArray.push(this.capitalize(wordArray[i]) )
      } 
      else {
        if (minorWords.includes(wordArray[i]) ) {
          finalArray.push(wordArray[i])
        } 
        else {
          finalArray.push(this.capitalize(wordArray[i]) )
        }
      }

    }
    return finalArray.join(" ");
  }
}

