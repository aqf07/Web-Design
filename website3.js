document.addEventListener("scroll", check);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function scroll_to(hash) {
  const yOffset = -100;
  const element = document.getElementById(hash);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}


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
