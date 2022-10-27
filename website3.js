document.addEventListener("scroll", check);



function show(id) {
  document.getElementById(id).classList.remove("hide");
  document.getElementById(id).style.display = 'block';
}

function check() {
  var hideList = document.getElementsByClassName('hide');
  for (e of hideList) {
    console.log("Window"  + window.scrollY)
    console.log(e.getBoundingClientRect().top - document.body.getBoundingClientRect().top);
  }
}
