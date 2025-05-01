function countVowels(str){
    let lenVowel = 0;
    for(i=0;i<=str.length;i++){
        vowel = str[i];
        //console.log(vowel);
        if(vowel == 'a' || vowel == 'A' || vowel == 'e' || vowel == 'E' || vowel == 'i' || vowel == 'I' || vowel == 'o' || vowel == 'O' || vowel == 'u' || vowel == 'U' ){
            lenVowel = lenVowel + 1;
        }
    }
    return lenVowel;
}