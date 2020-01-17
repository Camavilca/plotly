const plotlyServer = require("plotly");
var fs = require("fs");

const PLOTLYUSER = "consultoria";
const PLOTLYKEY = "hDxj3cXjfb22oXpM2Mmg";

const plotly = plotlyServer(PLOTLYUSER, PLOTLYKEY);

var trace1 = {
  x: ["1 %", "2 %", "3 %", "4 %"],
  y: [10, 15, 13, 17],
  type: "bar",
  orientation: "h",
  display: "none",
  marker: { color: ["#B26223", "#0C4B61", "#11AB93", "#61A40C"] }
};

var figure = { data: [trace1] };

var imgOpts = {
  format: "png",
  width: 1000,
  height: 500
};

plotly.getImage(figure, imgOpts, function(error, imageStream) {
  if (error) return console.log(error);

  var fileStream = fs.createWriteStream("2.png");
  imageStream.pipe(fileStream);
});
