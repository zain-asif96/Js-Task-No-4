function edit_word() {
    let user = prompt("Enter Any Word");
    let wordIndex = prompt("Enter Index Number on which you have to change letter") - 1;
    let replacedLetter = prompt("Enter a letter which should be replaced");
    if (wordIndex < user.length) {
        let array = user.split("");
        let updatedWord = (array[wordIndex] = replacedLetter);
        alert(array.join(""));
    } else {
        alert("index number not found");
    }
}
edit_word();