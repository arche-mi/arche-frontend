// Obtiens tous les éléments de menu
const menuItems = document.querySelectorAll(".header .item");

// Obtiens toutes les questions
const questions = document.querySelectorAll(".question");

// Masque toutes les questions sauf celles qui ont le data-name "01"
questions.forEach(question => {
  if (question.getAttribute("data-name") !== "01") {
    question.style.display = "none";
  }
});

// Ajoute un gestionnaire d'événement "click" à chaque élément de menu
menuItems.forEach(item => {
  item.addEventListener("click", function() {
    // Masque toutes les questions
    questions.forEach(question => {
      question.style.display = "none";
    });

    // Affiche uniquement les questions qui ont la même valeur de data-name que l'élément de menu sélectionné
    const selectedName = this.getAttribute("data-name");
    const selectedQuestions = document.querySelectorAll(`.question[data-name="${selectedName}"]`);
    selectedQuestions.forEach(question => {
      question.style.display = "block";
    });

    // Change la classe active de l'élément de menu sélectionné
    menuItems.forEach(item => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
