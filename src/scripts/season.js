(function () {
  var month = new Date().getMonth() + 1;
  var season = "default";

  if (month >= 9 && month <= 11) {
    season = "autumn";
  } else if (month === 12 || month <= 2) {
    season = "winter";
  } else if (month <= 5) {
    season = "spring";
  } else {
    season = "summer";
  }

  document.documentElement.dataset.season = season;
})();
