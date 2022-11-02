document.addEventListener("scroll", check);



function show(e) {
  e.classList.remove("hide");
  e.style.opacity = getComputedStyle(e).getPropertyValue('--opac');
  e.classList.add("animate")
}

function check() {
  var hideList = document.getElementsByClassName('hide');
  console.log("Window"  + window.scrollY);
  for (e of hideList) {
    if (window.scrollY >= e.getBoundingClientRect().top)
      show(e);
  }
}
