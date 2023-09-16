document.addEventListener('DOMContentLoaded', function(event) {

//DOM Elements
var saveButton = document.querySelector(".save-button");
var titleInput = document.querySelector("#title");
var bodyInput = document.querySelector("#body");
var cardTitle = document.querySelector(".card-title");
var cardBody = document.querySelector(".card-body");
var addNewIdea = document.querySelector('.add-new-button');
var ideaContainer = document.querySelector('.idea-container');
var form = document.querySelector('.form-top');
var closeButton = document.querySelector('.close-btn');
var starredIdeaButton = document.querySelector('.favorites-button');

//Event Listeners
form.addEventListener('input', buttonEnabledState);
addNewIdea.addEventListener('click', createIdeaCard); 
ideaContainer.addEventListener('click', deleteCard);

//Global Variables
var ideas = [];
var starredIdeas = [];

// ---------------- Original code 👇 ----------//

//Functions
// function createNewIdea (title, body) {
//   var newIdea = {
//     title: title,
//     body: body,
//     id: Date.now()
//   };
//   return newIdea;
// }
// function renderIdea(idea) {
//   cardTitle.innerHTML = idea.title;
//   cardBody.innerHTML = idea.body;
// }

// function buttonEnabledState() {
//   addNewIdea.removeAttribute('disabled');
//   addNewIdea.style.color = '#EAEAF4';
//   addNewIdea.style.backgroundColor = '#1F1F3C';
//   addNewIdea.style.cursor = 'pointer';
// }

// function buttonDisabledState() {
//   addNewIdea.setAttribute('disabled', true);
//   addNewIdea.style.color = '#1F1F3C';
//   addNewIdea.style.backgroundColor = '#a4a4c0';
//   addNewIdea.style.cursor = 'not-allowed';
// }

// function saveIdea (e) {
//     e.preventDefault()
//     var title = titleInput.value;
//     var body = bodyInput.value;
//     var newObject = createNewIdea(title, body);
//     ideas.push(newObject);
//     createIdeaCard(newObject);
//     titleInput.value = "";
//     bodyInput.value = "";
//     buttonDisabledState();
// }

//   function createIdeaCard(idea) {
//     var ideaDiv = document.createElement('article');
//     ideaDiv.className = 'idea-card';
//     ideaDiv.innerHTML = `
//     <div class="idea-box">
//       <div class="idea-header">
//         <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 5 27 24">
//             <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"/>
//         </svg>
//         <button class="close-btn">&#9587;</button>
//       </div>
//       <p class="idea-title">${idea.title}</p>
//       <p>${idea.body}</p>
//     `;
//     ideaContainer.appendChild(ideaDiv);
// }

// function removeIdea(e) {
//   var clickedButton = e.target;
//   var ideaCard = clickedButton.closest('.idea-card');
//   if (ideaCard) {
//       var cardIndex = Array.from(ideaContainer.children).indexOf(ideaCard);
//       if (cardIndex !== -1) {
//         ideas.splice(cardIndex, 1);
//       }
//   }
// }

// var closeButton = ideaDiv.querySelector('.close-btn'); 
// closeButton.addEventListener('click', function() {
//     var ideaId = ideaDiv.dataset.ideaId; 
//     deleteIdea(ideaId);
//     ideaDiv.remove(); 
//   });

// var indexToDelete = ideas.findIndex(function(idea) {
//   return idea.id === ideaId;
// });

// if (indexToDelete !== -1) {
//   ideas.splice(indexToDelete, 1); 
// }


// --------- Refactored working code 👇 ---------- //
var currentCard;

function createIdea (title, body) {
  var newIdea = {
    title: title,
    body: body,
    id: Date.now(),
    isStarred: false
  };
  return newIdea;
}

function createIdeaCard(e) {
  e.preventDefault();
  currentCard = createIdea(titleInput.value, bodyInput.value);
  ideas.push(currentCard);
  displayCards(currentCard);
  formValueReset();
  buttonDisabledState();
}

function displayCards() {
  ideaContainer.innerHTML = '';
  for (let i = 0; i < ideas.length; i++) {
      ideaContainer.innerHTML += `<article class="idea-card">
      <div class="idea-header">
          <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 5 27 24">
              <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"/>
          </svg>
          <button class="close-btn">&#9587;</button>
      </div>
      <p class="idea-title">${ideas[i].title}</p>
      <p>${ideas[i].body}</p>
      </article>`;
  }
}

//function createIdeaCard(idea) {
//     var ideaDiv = document.createElement('article');
//     ideaDiv.className = 'idea-card';
//     ideaDiv.innerHTML = `
//     <div class="idea-box">
//       <div class="idea-header">
//         <svg class="star-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 5 27 24">
//             <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"/>
//         </svg>
//         <button class="close-btn">&#9587;</button>
//       </div>
//       <p class="idea-title">${idea.title}</p>
//       <p>${idea.body}</p>
//     `;
//     ideaContainer.appendChild(ideaDiv);
// }

function deleteCard(e) {
  if (e.target.className === 'close-btn') {
    var clickedBtn = e.target;
    var ideaCard = clickedBtn.closest('.idea-card');
    if (ideaCard) {
      var cardIndex = Array.from(ideaContainer.children).indexOf(ideaCard);
      if (cardIndex !== -1) {
        ideas.splice(cardIndex, 1);
        displayCards();
      }
    }
  }
}

function buttonEnabledState() {
  addNewIdea.removeAttribute('disabled');
  addNewIdea.style.color = '#EAEAF4';
  addNewIdea.style.backgroundColor = '#1F1F3C';
  addNewIdea.style.cursor = 'pointer';
}

function buttonDisabledState() {
  addNewIdea.setAttribute('disabled', true);
  addNewIdea.style.color = '#1F1F3C';
  addNewIdea.style.backgroundColor = '#a4a4c0';
  addNewIdea.style.cursor = 'not-allowed';
}

function formValueReset() {
  titleInput.value = '';
  bodyInput.value = '';
}

});
