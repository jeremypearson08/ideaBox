//Global Variables
    var currentCard;
    var ideas = [];
    var favView = false;

//DOM Elements
    var titleInput = document.querySelector('#title');
    var bodyInput = document.querySelector('#body');
    var addNewIdea = document.querySelector('.add-new-button');
    var ideaContainer = document.querySelector('.idea-container');
    var form = document.querySelector('.form-top');
    var favoritesButton = document.querySelector('.favorites-button');

//EventListeners
    form.addEventListener('input', buttonEnabledState);
    addNewIdea.addEventListener('click', createIdeaCard);
    ideaContainer.addEventListener('click', cardInteractions);
    favoritesButton.addEventListener('click', function() {
      toggleFavButtonView();
      toggleIdeasContainer();
    });

//Functions
    function createIdea(title, body) {
      return {
        title: title,
        body: body,
        id: Date.now(),
        isStarred: false
      };
    };

    function createIdeaCard(e) {
      e.preventDefault();
      currentCard = createIdea(titleInput.value, bodyInput.value);
      ideas.push(currentCard);
      displayCards(ideas);
      formValueReset();
      buttonDisabledState();  
    };

    function displayCards(ideas) {
      ideaContainer.innerHTML = '';
      ideas.forEach(function(idea) {
      ideaContainer.innerHTML += 
        `<article class="idea-card">
           <div class="idea-header">
             <img class="star-icon" src="${starIconView(idea)}"</img>
             <button class="close-button">&#9587;</button>
           </div>
           <p class="idea-title">${idea.title}</p>
           <p>${idea.body}</p>
        </article>`;
      });
    };

    function starIconView(idea) {
      if (idea.isStarred) {
        return 'assets/star-active.svg';
      };
      return 'assets/star.svg';
    };

    function cardInteractions(e) {
      var targetElement = e.target;
      if (targetElement.tagName.toLowerCase() === 'path') {
        targetElement = targetElement.parentElement;
      }
      if (targetElement.classList.contains('close-button')) {
        deleteCard(e);
      } else if (targetElement.classList.contains('star-icon')) {
        toggleStar(e);
      };
    };

    function deleteCard(e) {
      var clickedBtn = e.target;
      var ideaCard = clickedBtn.closest('.idea-card');
      if (ideaCard) {
        var cardIndex = Array.from(ideaContainer.children).indexOf(ideaCard);
        if (cardIndex !== -1) {
          ideas.splice(cardIndex, 1);
          displayCards(ideas);
        };
      };
    };

    function toggleStar(e) {
      var clickedStar = e.target;
      var ideaCard = clickedStar.closest('.idea-card');
      if (ideaCard) {
        var cardIndex = Array.from(ideaContainer.children).indexOf(ideaCard);
        if (ideas[cardIndex].isStarred) {
          ideas[cardIndex].isStarred = false;
          clickedStar.classList.remove('favorited');
        } else {
          ideas[cardIndex].isStarred = true;
          clickedStar.classList.add('favorited');
          };
        displayCards(ideas);
      };
    };

    function buttonEnabledState() {
      addNewIdea.removeAttribute('disabled', false);
    };

    function buttonDisabledState() {
      addNewIdea.setAttribute('disabled', true);
    };

    function formValueReset() {
      titleInput.value = '';
      bodyInput.value = '';
    };

    function toggleFavButtonView() {
      if (favView) {
        favView = false;
        favoritesButton.innerText = 'Show Starred Ideas';
      } else {
        favView = true;
        favoritesButton.innerText = 'Show All Ideas';
      };
    };

    function toggleIdeasContainer() {
      ideaContainer.innerHTML = '';
      if (favView) {
        var favIdeas = [];
        for (let i = 0; i < ideas.length; i++) {
          if (ideas[i].isStarred) {
            favIdeas.push(ideas[i]);
          };
        };
        displayCards(favIdeas);
        } else {
        displayCards(ideas);
      };
    };
