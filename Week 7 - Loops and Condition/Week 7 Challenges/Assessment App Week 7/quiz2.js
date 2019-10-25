
const questionHeader = document.querySelector("#currentQuestionHeader");
let currentQuestion = 1;
let currentQuestionData = activeQuestions[currentQuestion-1];
questionHeader.innerHTML = `Question ${currentQuestion} of ${activeQuestions.length}`;

//grab the question text from the data for the current question
const currentQuestionText = document.querySelector("#questionText");
currentQuestionText.innerHTML = currentQuestionData.question;

/*For the options you will need to `for(){}` loop the response array and create and 
append the list items inside of the `<ol>`.*/
for(let x=0; x<currentQuestionData.response.length; x++){
	const listItems = document.querySelector("#listItems");
	const optionList = document.createElement("li");
	listItems.appendChild(optionList);

	const label = document.createElement("label");
	optionList.appendChild(label);

	const radioButton = document.createElement("input");
	radioButton.setAttribute("type", "radio");
	radioButton.setAttribute("name", "options");
	label.appendChild(radioButton);

	const labelText = document.createTextNode(activeQuestions[currentQuestion-1].response[x]);
	label.appendChild(labelText);
}

//Add dots
for(let i=0; i<activeQuestions.length; i++){
	const progress = document.querySelector("#progressDots");
	const dot = document.createElement("div");
	progress.appendChild(dot);
	dot.classList.add("dots");
}



