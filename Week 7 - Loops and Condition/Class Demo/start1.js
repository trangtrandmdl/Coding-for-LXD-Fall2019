/*

<div>
	<label ><input id="topic1" value="html" name="topics" type="checkbox" name="">
	HTML</label>
	<div class="metadata">Questions Mastered: 32/100</div> 
	<progress value="32" max="100">
</div>
<hr>

*/


const topicList = document.querySelector("#topicList");

for(let topicLisItem in topics){
	console.log(topicLisItem);
	console.log(topics[topicLisItem]);

	//create item 
	const item = document.createElement("div");
	topicList.appendChild(item);

	//create rule
	const rule = document.createElement("hr");
	topicList.appendChild(rule);

	//create label
	const label = document.createElement("label");
	item.appendChild(label);

	//create label h2
	const labelH2 = document.createElement("h2");
	label.appendChild(labelH2);

	//create label
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("name", "topics");
	labelH2.appendChild(checkbox);

	//create label text
	const labelText = document.createTextNode(topicLisItem);
	labelH2.appendChild(labelText);

	//create metadata
	const metadata = document.createElement("div");
	metadata.innerHTML = `Questions Mastered: ${topics[topicLisItem].totalMastered}/${topics[topicLisItem].totalQuestions}`;
	metadata.classList.add("metadata");
	item.appendChild(metadata);

	//create progress
	const progress = document.createElement("progress");
	progress.setAttribute("value", topics[topicLisItem].totalMastered);
	progress.setAttribute("max", topics[topicLisItem].totalQuestions);
	metadata.classList.add("progress");
	item.appendChild(progress);

}













