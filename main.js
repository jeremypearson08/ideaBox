//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var cardTitle = document.querySelector(".card-title");
var cardBody = document.querySelector(".card-body");

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

function renderIdea(idea) {
    cardTitle.innerHTML = idea.title;
    cardBody.innerHTML = idea.body;
}

function saveIdea (e) {
    e.preventDefault()
    var title = titleInput.value;
    var body = bodyInput.value;
    var newObject = createNewIdea(title, body);
    ideas.push(newObject);
    renderIdea(newObject)
    titleInput.value = "";
    bodyInput.value = "";
}

