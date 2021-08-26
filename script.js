
const quotes = [
	'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
	'There is nothing more deceptive than an obvious fact.',
	'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
	'I never make exceptions. An exception disproves the rule.',
	'What one man can invent another can discover.',
	'Nothing clears up a case so much as stating it to another person.',
	'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
]

const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("type-value");

let words = [];
let wordIndex = 0;

document.getElementById("start").addEventListener("click", function() {
	console.log("clicking");

	const quoteIndex = Math.floor(Math.random() * quotes.length);
	const quote = quotes[quoteIndex];
	wordIndex = 0;

	quoteElement.innerText = quote;
	words = quote.split(' ');

	const spanWords = words.map(function(word) { return `<span>${word} </span>`});
	quoteElement.innerHTML = spanWords.join("");

	for(const wordElement of quoteElement.childNodes) {
		wordElement.className = "";
	}
	quoteElement.childNodes[0].className = 'highlight';
	messageElement.innerText = "";
	typedValueElement.value = "";
	typedValueElement.focus();
	document.getElementById("type-value").value = "";
});

document.getElementById("type-value").addEventListener("input", function() {
	console.log("typing...");

	const typedValue = typedValueElement.value;
	console.log(typedValue);
	
	console.log("word: ",words[wordIndex]);
	if (wordIndex == words.length - 1 && typedValue == words[wordIndex]) {
		quoteElement.childNodes[wordIndex].className = "";
		typedValueElement.value = "";
		typedValueElement.className = ""

		messageElement.innerText = "Press \"Start\" to replay";
	}
	else if (typedValue.endsWith(" ") && typedValue.trim() == words[wordIndex]){
		quoteElement.childNodes[wordIndex + 1].className = "highlight";
		quoteElement.childNodes[wordIndex].className = "";
		typedValueElement.value = "";
		wordIndex++;
	}
	else if (words[wordIndex].startsWith(typedValue)) {
		quoteElement.childNodes[wordIndex].className = "highlight";
		typedValueElement.className = ""
	}
	else {
		quoteElement.childNodes[wordIndex].className = "error";
		typedValueElement.className = "error";
	}
})
