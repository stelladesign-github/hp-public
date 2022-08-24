startFade($("#fadeImg1"), ["images/pic022.jpg", "images/pic02.jpg"]);
function startFade(img, urls) {
  img.addClass("fade");
  let count = 0;
  setInterval(function () {
    if (count == urls.length) count = 0;
    img.attr("src", urls[count]);
    count++;
  }, 5000);
}
