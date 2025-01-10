startFade($("#fadeImg1"), ["images/pic02.jpg", "images/pic022.jpg"]);
startFade($("#fadeImg2"), [
  "images/pic12.jpg",
  "images/pic05.jpg",
  "images/pic052.jpg",
]);
startFade($("#fadeImg3"), ["images/pic06_1.jpg", "images/pic06_2.jpg"]);
startFade($("#fadeImg4"), ["images/pic07.jpg", "images/pic11.jpg"]);
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

const mailUser = "stelladg164";
const mailDomain = "gmail.com";
$(".maillink").on("click", function () {
  location.href = "mailto:" + mailUser + "@" + mailDomain;
  return false;
});

$("#company_modal").hide();
$("#company").on("click", function () {
  $("#company_modal").fadeIn();
  return false;
});
$("#company_close, #company_close_btn").on("click", function () {
  $("#company_modal").fadeOut();
  return false;
});
