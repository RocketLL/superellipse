var sliderA = document.getElementById('sliderA'),
    sliderB = document.getElementById('sliderB'),
    sliderM = document.getElementById('sliderM'),
    sliderN = document.getElementById('sliderN'),
    circleButton = document.getElementById('circle'),
    ellipseButton = document.getElementById('ellipse'),
    astroidButton = document.getElementById('astroid'),
    parallelogramButton = document.getElementById('parallelogram'),
    squareButton = document.getElementById('square'),
    parabolaeButton = document.getElementById('parabolae'),
    convexButton = document.getElementById('convex'),
    squircleButton = document.getElementById('squircle'),
    rectellipseButton = document.getElementById('rectellipse'),
    pietheinButton = document.getElementById('piet-hein'),
    ellipseevoluteButton = document.getElementById('ellipse-evolute'),
    iosappButton = document.getElementById('ios-app'),
    eqtn = document.getElementById('eq');

var w, h

(document.documentElement.clientHeight >= 930) ? (w = 600, h = 600) : ((document.documentElement.clientWidth >= 930) ? (h = document.documentElement.clientHeight - 300, w = h) : (w = document.documentElement.clientWidth, h = w)) 


document.getElementById('plot-parent').setAttribute("style","width:"+w+"px;");

noUiSlider.create(sliderA, {
    start: [1],
    connect: true,
    range: {
        'min': 0.1,
        'max': 4
    }
});

noUiSlider.create(sliderB, {
    start: [1],
    connect: true,
    range: {
        'min': 0.1,
        'max': 4
    }
});

noUiSlider.create(sliderM, {
    start: [1],
    connect: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});

noUiSlider.create(sliderN, {
    start: [1],
    connect: true,
    range: {
        'min': 0.1,
        'max': 5
    }
});

function draw() {
    var a = sliderA.noUiSlider.get(),
        b = sliderB.noUiSlider.get(),
        m = sliderM.noUiSlider.get(),
        n = sliderN.noUiSlider.get(),
        ma = 2/m,
        na = 2/n

    var valmap = math.range(-10,10,0.01).toArray(),
          xval = valmap.map(t => math.abs((math.pow(math.cos(t),ma)))*a*math.sign(math.cos(t))),
          yval = valmap.map(t => math.abs((math.pow(math.sin(t),na)))*b*math.sign(math.sin(t))); 

    const trace = {
        x: xval,
        y: yval,
        type: 'scatter'
    }

    var layout = {
        width: w,
        height: h,
        yaxis: {range: [-4.2, 4.2]},
        xaxis: {range: [-4.2, 4.2]},
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
            pad: 4
        }
    };
    const data = [trace]
    Plotly.react('plot', data, layout, {responsive: true, staticPlot: true});
    var eq = "\\left\\lvert \\dfrac{x}{" + a + "}^{" + m + "} \\right\\rvert" + " \\left\\lvert \\dfrac{y}{" + b + "}^{" + n + "} \\right\\rvert = 1"
    console.log(eq)
    // document.getElementById('eq').innerHTML = eq;
    // updateMathContent(eq)
    katex.render(eq, eqtn, {
        throwOnError: false
    });
};

sliderA.noUiSlider.on('update', function () {draw()})
sliderB.noUiSlider.on('update', function () {draw()})
sliderM.noUiSlider.on('update', function () {draw()})
sliderN.noUiSlider.on('update', function () {draw()})

circleButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(2)
    sliderN.noUiSlider.set(2)

});

ellipseButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(4)
    sliderB.noUiSlider.set(2)
    sliderM.noUiSlider.set(2)
    sliderN.noUiSlider.set(2)

});

astroidButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(2/3)
    sliderN.noUiSlider.set(2/3)

});

parallelogramButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(4)
    sliderB.noUiSlider.set(2)
    sliderM.noUiSlider.set(1)
    sliderN.noUiSlider.set(1)

});

squareButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(1)
    sliderN.noUiSlider.set(1)

});

parabolaeButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(0.5)
    sliderN.noUiSlider.set(0.5)

});

convexButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(1.5)
    sliderN.noUiSlider.set(1.5)

});

squircleButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(4)
    sliderN.noUiSlider.set(4)

});

rectellipseButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(4)
    sliderB.noUiSlider.set(2)
    sliderM.noUiSlider.set(4)
    sliderN.noUiSlider.set(4)

});

pietheinButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(2.5)
    sliderM.noUiSlider.set(2.5)
    sliderN.noUiSlider.set(2.5)

});

ellipseevoluteButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(2)
    sliderB.noUiSlider.set(4)
    sliderM.noUiSlider.set(0.5)
    sliderN.noUiSlider.set(0.5)

});

iosappButton.addEventListener('click', function () {
    sliderA.noUiSlider.set(3)
    sliderB.noUiSlider.set(3)
    sliderM.noUiSlider.set(5)
    sliderN.noUiSlider.set(5)

});