let getMenuButton = document.querySelector("#menubutton");
let getToggleMenu = document.querySelector("nav ul");

let showMenu = function () {
  getToggleMenu.style.visibility = "visible";
};

let hideMenu = function () {
  timeOut = setTimeout(function () {
    getToggleMenu.style.visibility = "hidden";
  }, 500);
};

getMenuButton.addEventListener("mouseover", showMenu);

// mouseover menu
getToggleMenu.addEventListener("mouseover", function () {
  showMenu();
  clearTimeout(timeOut);
});

getMenuButton.addEventListener("mouseover", function () {
  showMenu();
  clearTimeout(timeOut);
});

getToggleMenu.addEventListener("mouseleave", hideMenu);
getMenuButton.addEventListener("mouseleave", hideMenu);

//Change background color

let changeToDarkgrey = document.querySelector(".darkgrey");
let changeToCoral = document.querySelector(".coral");
let changeToTurquoise = document.querySelector(".turquoise");
let changeToPurple = document.querySelector(".purple");
let changeToYellowgreen = document.querySelector(".yellowgreen");

//Home - Darkgrey
document.getElementById("darkgrey").checked = true;

let darkgreyBackground = function () {
  document.body.style.backgroundColor = "darkgrey";
  getToggleMenu.style.visibility = "hidden";
  document.getElementById("darkgrey").checked = true;
};

changeToDarkgrey.addEventListener("click", darkgreyBackground);

//Coral
let coralBackground = function () {
  document.body.style.backgroundColor = "coral";
  getToggleMenu.style.visibility = "hidden";
  document.getElementById("coral").checked = true;
};

changeToCoral.addEventListener("click", coralBackground);

// Turquoise
let turquoiseBackground = function () {
  document.body.style.backgroundColor = "turquoise";
  getToggleMenu.style.visibility = "hidden";
  document.getElementById("turquoise").checked = true;
};

changeToTurquoise.addEventListener("click", turquoiseBackground);

//Purple
let purpleBackground = function () {
  document.body.style.backgroundColor = "purple";
  getToggleMenu.style.visibility = "hidden";
  document.getElementById("purple").checked = true;
};

changeToPurple.addEventListener("click", purpleBackground);

// Yellowgreen
let yellowgreenBackground = function () {
  document.body.style.backgroundColor = "yellowgreen";
  getToggleMenu.style.visibility = "hidden";
  document.getElementById("yellowgreen").checked = true;
};

changeToYellowgreen.addEventListener("click", yellowgreenBackground);

//keyboard events

document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    darkgreyBackground();
    document.getElementById("darkgrey").checked = true;
  } else if (e.key === "2") {
    coralBackground();
    document.getElementById("coral").checked = true;
  } else if (e.key === "3") {
    turquoiseBackground();
    document.getElementById("turquoise").checked = true;
  } else if (e.key === "4") {
    purpleBackground();
    document.getElementById("purple").checked = true;
  } else if (e.key === "5") {
    yellowgreenBackground();
    document.getElementById("yellowgreen").checked = true;
  }
});
