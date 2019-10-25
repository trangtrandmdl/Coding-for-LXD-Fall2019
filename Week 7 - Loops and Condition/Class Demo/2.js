const topicList = document.querySelector("#topicList");

//create item 
const item = document.createElement("div");
topicList.appendChild(item);

//create rule
const rule = document.createElement("hr");
topicList.appendChild(rule);

//create label
const label = document.createElement("label");
item.appendChild(label);

//create label
const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("name", "topics");
label.appendChild(checkbox);

//create label text
const labelText = document.createTextNode("HTML");
label.appendChild(labelText);