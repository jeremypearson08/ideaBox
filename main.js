//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var cardTitle = document.querySelector(".card-title");
var cardBody = document.querySelector(".card-body");
var addNewIdea = document.querySelector('.add-new');
var ideaContainer = document.querySelector('.ideaContainer');
var allIdeaCards = document.querySelectorAll('.ideaContainer .idea-card');
var form = document.querySelector('.form-top');

//Event Listeners
form.addEventListener('input', buttonEnabledState);
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
function renderIdea(idea) {
   cardTitle.innerHTML = idea.title;
  cardBody.innerHTML = idea.body;
}

function buttonEnabledState() {
    addNewIdea.removeAttribute('disabled');
    addNewIdea.style.color = '#EAEAF4';
    addNewIdea.style.backgroundColor = '#1F1F3C';
    addNewIdea.style.cursor = 'default';
  }

function saveIdea (e) {
    e.preventDefault()
    console.log('saveIdea firing');
    var title = titleInput.value;
    var body = bodyInput.value;
    var newObject = createNewIdea(title, body);
    ideas.push(newObject);
    createIdeaCard(newObject);
    titleInput.value = "";
    bodyInput.value = "";
    buttonDisabledState();

}
function createIdeaCard(idea) {
    var ideaDiv = document.createElement('div');
    ideaDiv.className = 'idea-card';
      ideaDiv.innerHTML = `
      <div class='idea-box'>
      <p>${idea.title}</p>
      <p>${idea.body}</p>
    `;
    ideaContainer.appendChild(ideaDiv);
  }

  function buttonDisabledState() {
    addNewIdea.setAttribute('disabled', true);
    addNewIdea.style.color = '#1F1F3C';
    addNewIdea.style.backgroundColor = '#a4a4c0';
    addNewIdea.style.cursor = 'not-allowed';
  }
 