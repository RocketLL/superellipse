var sliderA = document.getElementById("sliderA");
var sliderB = document.getElementById("sliderB");
var sliderM = document.getElementById("sliderM");
var sliderN = document.getElementById("sliderN");
var circleButton = document.getElementById("circle");
var ellipseButton = document.getElementById("ellipse");
var astroidButton = document.getElementById("astroid");
var parallelogramButton = document.getElementById("parallelogram");
var squareButton = document.getElementById("square");
var parabolaeButton = document.getElementById("parabolae");
var convexButton = document.getElementById("convex");
var squircleButton = document.getElementById("squircle");
var rectellipseButton = document.getElementById("rectellipse");
var pietheinButton = document.getElementById("piet-hein");
var ellipseevoluteButton = document.getElementById("ellipse-evolute");
var iosappButton = document.getElementById("ios-app");
var eqtn = document.getElementById("eq");
var winH = document.documentElement.clientHeight;
var winW = document.documentElement.clientWidth;
// (document.documentElement.clientWidth >= 500) ? (w=500, h=500) : (w=document.documentElement.clientWidth-100, h=w);

// (winH > winW) ? (w=winW-20) : ((winH > 900) ? (w=470) : ((winH > 800) ? (w=winH-430) : (w=500)))

winH > 900 /* Determine if desktop.*/
  ? winH - 100 > winW /* Desktop, check aspect ratio*/
    ? (w = winW - 40)
    : (w = winH - 430) /* Fill screen wtih plot */
  : winH > winW /* Could be either, check aspect ratio*/
  ? (w = winW - 40) /* Definitely mobile! */
  : (w = 500) /* something else */;

h = w;
document
  .getElementById("plot-parent")
  .setAttribute("style", "width:" + w + "px;");

noUiSlider.create(sliderA, {
  start: [1],
  connect: true,
  range: {
    min: 0.1,
    max: 4
  }
});

noUiSlider.create(sliderB, {
  start: [1],
  connect: true,
  range: {
    min: 0.1,
    max: 4
  }
});

noUiSlider.create(sliderM, {
  start: [1],
  connect: true,
  range: {
    min: 0.1,
    max: 5
  }
});

noUiSlider.create(sliderN, {
  start: [1],
  connect: true,
  range: {
    min: 0.1,
    max: 5
  }
});

function draw() {
  var a = sliderA.noUiSlider.get();
  var b = sliderB.noUiSlider.get();
  var m = sliderM.noUiSlider.get();
  var n = sliderN.noUiSlider.get();
  var ma = 2 / m;
  var na = 2 / n;
  var valmap = math.range(-10, 10, 0.01).toArray();
  var xval = valmap.map(
    t => math.abs(math.pow(math.cos(t), ma)) * a * math.sign(math.cos(t))
  );
  var yval = valmap.map(
    t => math.abs(math.pow(math.sin(t), na)) * b * math.sign(math.sin(t))
  );
  const trace = {
    x: xval,
    y: yval,
    type: "scatter"
  };

  var layout = {
    width: w,
    height: h,
    yaxis: { range: [-4.2, 4.2] },
    xaxis: { range: [-4.2, 4.2] },
    margin: {
      l: 20,
      r: 20,
      b: 20,
      t: 20,
      pad: 4
    }
  };
  const data = [trace];
  Plotly.react("plot", data, layout, { responsive: true, staticPlot: true });
  var eq =
    "\\left\\lvert \\dfrac{x}{" +
    a +
    "}^{" +
    m +
    "} \\right\\rvert" +
    " \\left\\lvert \\dfrac{y}{" +
    b +
    "}^{" +
    n +
    "} \\right\\rvert = 1";
  console.log(eq);
  // document.getElementById('eq').innerHTML = eq;
  // updateMathContent(eq)
  katex.render(eq, eqtn, {
    throwOnError: false
  });
}

sliderA.noUiSlider.on("update", function() {
  draw();
});
sliderB.noUiSlider.on("update", function() {
  draw();
});
sliderM.noUiSlider.on("update", function() {
  draw();
});
sliderN.noUiSlider.on("update", function() {
  draw();
});

function setSliders(button, a, b, m, n) {
  button.addEventListener("click", function() {
    sliderA.noUiSlider.set(a);
    sliderB.noUiSlider.set(b);
    sliderM.noUiSlider.set(m);
    sliderN.noUiSlider.set(n);
  });
}

setSliders(circleButton, 3, 3, 2, 2);
setSliders(ellipseButton, 4, 2, 2, 2);
setSliders(astroidButton, 3, 3, 2 / 3, 2 / 3);
setSliders(parallelogramButton, 4, 2, 1, 1);
setSliders(squareButton, 3, 3, 1, 1);
setSliders(parabolaeButton, 3, 3, 0.5, 0.5);
setSliders(convexButton, 3, 3, 1.5, 1.5);
setSliders(squircleButton, 3, 3, 4, 4);
setSliders(rectellipseButton, 4, 2, 4, 4);
setSliders(pietheinButton, 3, 2.5, 2.5, 2.5);
setSliders(ellipseevoluteButton, 2, 4, 0.5, 0.5);
setSliders(iosappButton, 3, 3, 5, 5);
