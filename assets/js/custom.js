startFade($("#fadeImg1"), ["images/pic02.jpg", "images/pic022.jpg"]);
function startFade(img, urls) {
  img.addClass("fade");
  let count = 0;
  setInterval(function () {
    count++;
    if (count == urls.length) count = 0;
    img.removeClass("fade");
    img.css("opacity", 0);

    setTimeout(function () {
      img.addClass("fade");
      img.css("opacity", 0);
      img.attr("src", urls[count]);
    }, 100);
  }, 5000);
}
