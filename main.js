//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var cardTitle = document.querySelector(".card-title");
var cardBody = document.querySelector(".card-body");
var addNewIdea = document.querySelector('.add-new');
var ideaContainer = document.querySelector('.ideaContainer');
var allIdeaCards = document.querySelectorAll('.ideaContainer .idea-card');

//Event Listeners
addNewIdea.addEventListener('click', saveIdea); 

//Global Variables
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
//function renderIdea(idea) {
//    cardTitle.innerHTML = idea.title;
//   cardBody.innerHTML = idea.body;
//}

function saveIdea (e) {
    e.preventDefault()
    var title = titleInput.value;
    var body = bodyInput.value;
    var newObject = createNewIdea(title, body);
    ideas.push(newObject);
    createIdeaCard(newObject)
    titleInput.value = "";
    bodyInput.value = "";
}
function createIdeaCard(idea) {
    var ideaDiv = document.createElement('div');
    ideaDiv.className = 'idea-card';
      ideaDiv.innerHTML = `
      <div class="idea-box">
      <p><strong>${idea.title}</strong></p>
      <p>${idea.body}</p>
    `;
    ideaContainer.appendChild(ideaDiv);
  }