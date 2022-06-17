const languageButton = document.getElementById("buttondiv");
const navbarList = document.querySelectorAll(".nav-link");

// Change index page
languageButton.addEventListener('click', (event) => {
  collectedObject = event.target;
  if (collectedObject.id.includes('english')) {
    window.open("./index_en.html")
  }
  if (collectedObject.id.includes('portuguese')) {
    window.open("./index.html")
  }
})

// Add and remove class 'active'
function liClickHandler(event) {
  const clickedLiObject = event.target;
  navbarList.forEach((element) => element.classList.remove('active'));
  clickedLiObject.classList.add('active');
}

navbarList.forEach((element) => element.addEventListener('click', liClickHandler));
window.onload = listLineClickCreator(navbarList);
