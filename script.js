const text = 'Sam is good at codingschool';

const replacedText = document.getElementById('replaceInHtml');

const replacedTextA = text.replace("good at codingschool", "bad at school");
const replacedTextB = text.replace("codingschool", "school");
const replacedTextC = text.replace("codingschool", "tennis");


console.log(replacedTextA,'\n',replacedTextB,'\n',replacedTextC);

replacedText.innerHTML = `<h3>Pasted using 'innerHTML':</h3> <p>${replacedTextA}</p> <p>${replacedTextB}</p> <p>${replacedTextC}</p>`; // eher element tags statt <br>!!

// oder so:
document.write(`<h3>Pasted using 'document.write':</h3> <br> ${replacedTextA} <br> ${replacedTextB} <br> ${replacedTextC}`)




/* Verwende den Befehl replace(), um die gewünschten Zeichenketten zu erhalten.

const text = “Sam is good at codingschool”;

Zeige mit der Methode "replace" diese Ausgabe in einem HTML-Dokument an:

Sam is bad at school
Susi is good at school 
Sam is good at tennis

Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis anzuzeigen.
myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.
 */