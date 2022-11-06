
// probably looks clunky, would be cool after clicing action button, even scrolling...
// @media query would be good too

function add_img() {
  var src = "http://example.com/images/loremipsum.jpg";
  show("http://example.com/images/loremipsum.jpg", x, y, z, "alt");
}

function show(src, height, width, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.height = height;
  img.width = width;
  img.alt = alt;
  document.body.AppendChild(img);
}
