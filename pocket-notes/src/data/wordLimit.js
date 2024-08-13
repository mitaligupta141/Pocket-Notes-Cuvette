function limitWords(textarea, wordLimit) {
    const words = textarea.trim().split(" ").filter(Boolean); 
    if (words.length > wordLimit) {
        words.splice(wordLimit); 
        textarea = words.join(' '); 
    }
    return textarea;
  }
  
  export default limitWords;