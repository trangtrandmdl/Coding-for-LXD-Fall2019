/*

--- Leave this here so I could see what I need too build with code ---

<h3>Question 1 of 8</h3>
<hr>
<p>What tag should I use if I want to add an external javascript file</p>
<ol type="A">
	<li><label><input type="radio" name="option">script</label></li>
	<li><label><input type="radio" name="option">javascript</label></li>
	<li><label><input type="radio" name="option">include</label></li>
	<li><label><input type="radio" name="option">style</li>
</ol>
*/


//store the location of the element where I will be inserting stuff into
const questionContainer = document.querySelector("#questionContainer");

//create a variable to store the index of the question I am on
//since i haven't answered any questions yet I am on the first question
//each time I answer a question this will increment.
let currentQuestionIndex = 0;


//header
const header = document.createElement("h3");
//add the question I am on (notice that i add 1 because the first question is in the zero index)
//if i want to know how many questions there are I could just get the array length.
header.innerHTML = `Question ${currentQuestionIndex + 1} of ${activeQuestions.length}`;
questionContainer.appendChild(header);

//add a rule
const rule = document.createElement("hr");
questionContainer.appendChild(rule);

//add questtions then pull out the current question using the currentQuestionIndex variable
const question = document.createElement("p");
question.innerHTML = activeQuestions[currentQuestionIndex].question;
questionContainer.appendChild(question);

//add options and set the type of <ol> to 'A' so it show Alphabet and not 1, 2, 3
const optionList = document.createElement("ol");
optionList.setAttribute("type", "A");
questionContainer.appendChild(optionList);

//store array of options into a variable, that way I don't need to use this really
//long statement later. I could just use 'activeQuestionLists'
let activeQuestionLists = activeQuestions[currentQuestionIndex].response;


//start to loop all the values that will be added into <li> tags and inserted
//into the <ol> we just created. 
//Rememeber activeQuestionLists is actually a variable for activeQuestions[currentQuestionIndex].response
//this keeps your code legible

for(var i=0; i < activeQuestionLists.length; i++){
	
	//create list item add it to the <ol>
	const item = document.createElement("li");
	optionList.appendChild(item);

	//create label and add it to item which is what we named the <li> we just created
	const label = document.createElement("label");
	item.appendChild(label);

	//create radio and add it inside of the <label> we just created
	//we need to add some attributes to make our input look like this
	//<input type=radio name="option">
	const input = document.createElement("input");
	input.setAttribute("type", "radio");
	input.setAttribute("name", "option");
	label.appendChild(input);

	//add option text
	const optionText = document.createTextNode(activeQuestionLists[i].text);
	label.appendChild(optionText);
}