//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var cardTitle = document.querySelector(".card-title");
var cardBody = document.querySelector(".card-body");
var addNewIdea = document.querySelector('.add-new-button');
var ideaContainer = document.querySelector('.idea-container');
var allIdeaCards = document.querySelectorAll('.idea-container .idea-card');
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
  addNewIdea.style.cursor = 'pointer';
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
    ideaDiv.dataset.ideaId = idea.id; 
    ideaDiv.innerHTML = `
    <div class="idea-box">
      <div class="idea-header">
        <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 5 27 24">
            <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"/>
        </svg>
        <button class="close-btn">&#9587;</button>
      </div>
      <p class="idea-title">${idea.title}</p>
      <p>${idea.body}</p>
    `;
    ideaContainer.appendChild(ideaDiv);

    var closeButton = ideaDiv.querySelector('.close-btn'); 
    closeButton.addEventListener('click', function() {
        var ideaId = ideaDiv.dataset.ideaId; 
        deleteIdea(ideaId);
        ideaDiv.remove(); 
    }); 
}

function deleteIdea(ideaId) {
    var indexToDelete = ideas.findIndex(function(idea) {
        return idea.id === ideaId;
    });

    if (indexToDelete !== -1) {
        ideas.splice(indexToDelete, 1); 
    }
}