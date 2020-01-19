const plotlyServer = require("plotly");
var fs = require("fs");

const PLOTLYUSER = "consultoria";
const PLOTLYKEY = "hDxj3cXjfb22oXpM2Mmg";

const plotly = plotlyServer(PLOTLYUSER, PLOTLYKEY);

var trace1 = {
  x: [1, 3, 5, 7],
  y: ["orlando", "orlando camavilca", "chavez", "manito"],
  type: "bar",
  orientation: "h",
  display: "none",
  marker: { color: ["#B26223", "#0C4B61", "#11AB93", "#61A40C"] },
  text: ["uno", "dos", "tres", "cuatro"],
  textposition: "left"
};

var figure = {
  data: [trace1],
  layout: {
    title: "nuevo grafico",
    font: {
      family: "Courier New, monospace",
      size: 10,
      color: "#7f7f7f"
    },
    xaxis: {
      title: "titlexaxis",
      titlefont: {
        size: 10
      },
      tickfont: {
        size: 10
      },
      fixedrange: true,
      range: [0, 10],
      automargin: true
    },
    yaxis: {
      title: "men",
      titlefont: {
        size: 10
      },
      tickfont: {
        size: 10
      },
      automargin: true
    }
  }
};

var imgOpts = {
  format: "png",
  width: 500,
  height: 500
};

plotly.getImage(figure, imgOpts, function(error, imageStream) {
  if (error) return console.log(error);

  var fileStream = fs.createWriteStream("3.png");
  imageStream.pipe(fileStream);
});
