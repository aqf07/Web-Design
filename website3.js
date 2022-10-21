document.addEventListener("scroll", check);

function show(id) {
  document.getElementById(id).classList.remove("hide");
  document.getElementById(id).style.display = 'block';
}

function check() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 600) {
    show('hidden1');
    show('hidden2');
  }
}
