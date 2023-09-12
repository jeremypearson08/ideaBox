//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");

//Event Listeners
saveButton.addEventListener("click", saveIdea);

var ideas = [];

//Functions
function createNewIdea (title, body) {
    var newIdea = {
        title: title, 
        body: body,
        id: Date.now()
    };
    return newIdea;
} 

function saveIdea (e) {
    e.preventDefault()
    var title = titleInput.value;
    var body = bodyInput.value;
    var newObject = createNewIdea(title, body);
    ideas.push(newObject);

    titleInput.value = "";
    bodyInput.value = "";
}

//function displayIdeas () {

//}

