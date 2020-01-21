const plotlyServer = require("plotly");
var fs = require("fs");

const PLOTLYUSER = "consultoria";
const PLOTLYKEY = "hDxj3cXjfb22oXpM2Mmg";

const plotly = plotlyServer(PLOTLYUSER, PLOTLYKEY);

var trace1 = {
  x: [1, 4, 6, 7],
  y: [10, 15, 13, 17],
  type: "bar",
  orientation: "h",
  marker: { color: ["#B26223", "#0C4B61", "#11AB93", "#61A40C"] },
  text: ["Text A", "Text B", "Text C", "Text D"],
  textposition: 'auto',
  hoverinfo: 'none',
};

var figure = { data: [trace1] };

var imgOpts = {
  format: "png",
  width: 500,
  height: 500
};

plotly.getImage(figure, imgOpts, function (error, imageStream) {
  if (error) return console.log(error);

  var fileStream = fs.createWriteStream("6.png");
  imageStream.pipe(fileStream);
});
