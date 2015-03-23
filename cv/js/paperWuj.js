    var container = new Shape.Circle(new Point(100, 100), 100)
    container.fillColor = "#fff"



//bounds 100-300 x and y
var maxY = container.bounds.y + container.bounds.height
var minY = container.bounds.y
var maxX = container.bounds.x + container.bounds.width
var minX = container.bounds.x
var Viewcenter = container.bounds.center

// make layer for animating items
var animationLayer1 = new Layer({
  position: container.center
})

// points
var totalPoints = 5
var movingDot
var pointXPos
var pointYPos
var dotRadius = 5
var polygonPoints = []


for (var i = 1; i <= totalPoints; i++) {
  movingDot = "point" + i
  pointXPos = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos = Math.floor(Math.random() * ((maxY-minY)+1) + minY);

  var position = new Point (pointXPos, pointYPos)
  movingDot = new Shape.Circle (position, 1)
  movingDot.opacity = 0
  movingDot.fillColor = "red"
  movingDot.blendMode = 'multiply'
  position.data = {
    xDirection: 'right',
    yDirection: "up"
  }
  polygonPoints.push(position);

}

var myPath = new Path();
var pathSegments = myPath.segments
// green
myPath.fillColor = "#65BB6A"
myPath.blendMode = 'multiply'

myPath.closed = true;
for (var i = 0; i <= polygonPoints.length - 1; i++) {
  myPath.add(polygonPoints[i]);
}

// second layer!
var animationLayer2 = new Layer()

// points
var totalPoints2 = 5
var movingDot2
var pointXPos2
var pointYPos2
var dotRadius2 = 5
var polygonPoints2 = []


for (var i = 1; i <= totalPoints2; i++) {
  movingDot2 = "point" + i
  pointXPos2 = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos2 = Math.floor(Math.random() * ((maxY-minY)+1) + minY);
  var position2 = new Point (pointXPos2, pointYPos2)
  movingDot2 = new Shape.Circle (position2,1)
  movingDot2.fillColor = "red"
  movingDot2.opacity = 0
  position2.data = {
    xDirection: 'right',
    yDirection: "up"
  }
  polygonPoints2.push(position2);

}

var myPath2 = new Path();
var pathSegments2 = myPath2.segments
//blue
myPath2.fillColor = "#42A5F5"
myPath2.blendMode = 'multiply'


myPath2.closed = true;
for (var i = 0; i <= polygonPoints2.length - 1; i++) {
  myPath2.add(polygonPoints2[i]);
}

// third!!??
var animationLayer3 = new Layer()


// points
var totalPoints3 = 5
var movingDot3
var pointXPos3
var pointYPos3
var dotRadius3 = 5
var polygonPoints3 = []


for (var i = 1; i <= totalPoints3; i++) {
  movingDot3 = "point" + i
  pointXPos3 = Math.floor(Math.random() * ((maxX-minX)+1) + minX);
  pointYPos3 = Math.floor(Math.random() * ((maxY-minY)+1) + minY);
  var position3 = new Point (pointXPos3, pointYPos3)
  movingDot3 = new Shape.Circle (position3,1)
  movingDot3.fillColor = "none"
  movingDot3.opacity = 0
  position3.data = {
    xDirection3: 'right',
    yDirection3: "up"
  }
  polygonPoints3.push(position3);

}

var myPath3 = new Path();
var pathSegments3 = myPath3.segments
//red
myPath3.fillColor = "#FF7043"
myPath3.blendMode = 'multiply'


myPath3.closed = true;
for (var i = 0; i <= polygonPoints3.length - 1; i++) {
  myPath3.add(polygonPoints3[i]);
}

// title
var pathData = "M35.824,3.988C33.342,4.116,32.7,4.715,32.7,6.342c0,0.257,0,0.471,0.043,0.899l1.712,19.26 c0.214,2.482,0.599,3.21,2.953,3.296v1.926H24.953v-1.926c2.312-0.086,2.911-0.514,2.911-2.098c0-0.3,0-0.599-0.043-0.984 L26.665,12.89c-0.085-1.155-0.128-3.125-0.128-4.366V7.583h-0.214c-0.128,0.813-0.599,3.338-1.027,4.922l-5.307,19.218h-3.98 L10.4,13.618c-0.557-1.84-1.198-5.264-1.327-6.078H8.859c-0.042,0.813-0.128,3.98-0.257,5.907L7.79,26.672 c-0.128,2.439,0.3,3.125,2.782,3.125v1.926H1.327v-1.926c2.397-0.086,2.825-0.813,2.996-3.382L5.649,7.241 c0.043-0.514,0.043-0.642,0.043-0.942c0-1.626-0.642-2.183-3.125-2.311V1.976H13.61l4.623,14.938 c0.685,2.311,1.07,5.05,1.156,5.777h0.171c0.086-0.599,0.557-3.595,1.156-5.777l4.066-14.938h11.043V3.988z M60.832,29.111v1.841c-0.899,0.557-2.483,1.027-4.366,1.027c-2.654,0-4.066-1.198-4.409-2.996 c-0.685,1.541-2.568,3.339-5.949,3.339c-3.81,0-6.806-1.927-6.806-6.335c0-5.051,3.81-7.147,10.529-7.147 c0.514,0,1.498,0.043,2.054,0.085v-1.968c0-3.296-0.813-4.709-3.082-4.709c-2.439,0-3.125,1.626-3.424,3.895h-4.708v-4.365 c2.269-1.327,5.778-2.397,9.203-2.397c4.965,0,8.389,2.183,8.389,7.191c0,1.284-0.171,4.836-0.171,8.731 C58.092,28.513,58.563,29.026,60.832,29.111z M50.302,21.322c-2.911,0-4.451,1.241-4.451,3.852c0,2.439,0.941,3.21,2.568,3.21 c1.113,0,2.482-0.642,3.253-1.626l0.128-5.436H50.302z M74.57,13.19h-4.409v11.513c0,3.167,0.3,4.323,2.439,4.323c0.771,0,1.456-0.129,2.44-0.514l0.642,2.226 c-1.626,1.027-3.51,1.541-5.821,1.541c-3.895,0-6.078-1.455-6.078-6.163V13.19h-2.568v-2.183l2.868-1.155 c0.257-1.926,0.899-4.023,1.969-5.65l4.451-0.556c-0.214,1.541-0.385,4.108-0.385,6.292h5.179L74.57,13.19z M90.333,13.19h-4.409v11.513c0,3.167,0.3,4.323,2.439,4.323c0.771,0,1.456-0.129,2.44-0.514l0.642,2.226 c-1.626,1.027-3.51,1.541-5.821,1.541c-3.895,0-6.078-1.455-6.078-6.163V13.19h-2.568v-2.183l2.868-1.155 c0.257-1.926,0.899-4.023,1.969-5.65l4.451-0.556c-0.214,1.541-0.385,4.108-0.385,6.292h5.179L90.333,13.19z M129.366,18.797c0.941,3.638,1.241,5.992,1.412,6.977h0.257c0.129-0.984,0.514-4.451,1.027-6.934l2.482-12.07 c0.086-0.342,0.086-0.685,0.086-0.941c0-1.413-0.898-1.798-2.611-1.84V1.976h9.331v2.012c-1.755,0.214-2.482,0.728-2.996,2.953 l-5.778,24.782h-6.292l-3.595-14.039c-0.728-2.867-0.941-5.35-1.07-6.334h-0.214c-0.128,0.984-0.557,3.98-1.155,6.377 l-3.425,13.996h-6.334l-5.735-24.867c-0.514-2.226-1.156-2.654-2.782-2.868V1.976h12.069v2.012 c-1.754,0.042-2.482,0.599-2.482,1.755c0,0.214,0.043,0.471,0.086,0.728l2.525,12.413c0.686,3.424,0.813,6.077,0.855,6.934h0.215 c0.086-0.643,0.428-3.296,1.284-6.934l4.022-16.907h4.494L129.366,18.797z M165.877,28.983v1.755l-6.849,1.541h-0.642c-0.428-0.643-1.027-1.841-1.156-3.467c-1.669,2.054-3.938,3.467-7.19,3.467 c-3.681,0-6.12-1.841-6.12-6.078v-9.588c0-3.124-0.428-3.552-2.525-3.637v-1.883l7.875-1.498h1.027v15.108 c0,2.312,0.771,3.467,2.739,3.467c1.455,0,2.568-0.514,3.853-1.583v-9.974c0-3.124-0.471-3.552-2.568-3.637v-1.883l7.876-1.498 h1.026v15.751C163.223,28.47,163.695,28.812,165.877,28.983z M166.887,12.976v-1.883l8.004-1.498h0.941v21.443c0,6.377-4.58,8.56-8.518,9.502l-1.241-1.884 c2.61-1.198,3.424-3.21,3.424-7.618V16.613C169.498,13.489,169.027,13.062,166.887,12.976z M172.366,7.668 c-2.055,0-3.724-1.669-3.724-3.767c0-2.054,1.712-3.724,3.852-3.724c2.098,0,3.724,1.669,3.724,3.724 C176.217,6,174.505,7.668,172.366,7.668z M198.024,27.058l1.07,1.755c-2.312,2.269-5.137,3.424-8.945,3.424c-6.635,0-10.529-4.194-10.529-11.471 c0-7.233,4.194-11.385,10.4-11.385c6.677,0,9.459,3.98,9.459,10.529v1.841h-13.012c0.129,4.837,1.798,6.806,5.864,6.806 C194.172,28.556,196.226,28.042,198.024,27.058z M186.51,18.84h6.635c0-5.179-0.856-6.806-3.125-6.806 C187.88,12.034,186.81,13.618,186.51,18.84z M212.866,29.797v1.926h-11.557v-1.926c2.141-0.043,2.611-0.557,2.611-2.996V6.984c0-3.125-0.643-3.553-2.782-3.638V1.462 l7.704-1.156h0.643c0.385,0.642,0.77,2.012,0.77,4.237v22.342C210.254,29.197,210.64,29.754,212.866,29.797z M222.025,27.442 c1.198,1.884,2.098,2.183,3.51,2.354v1.926h-7.961l-6.977-11.128l5.521-6.035c0.471-0.557,0.728-1.027,0.728-1.455 c0-0.685-0.728-1.156-2.055-1.199V9.937h9.759v1.969c-1.712,0.214-2.825,1.027-4.451,2.739l-3.81,4.023L222.025,27.442z"
var wuj = new CompoundPath(pathData)
wuj.position = Viewcenter
wuj.fillColor = '#555'
wuj.blendMode = 'multiply'
wuj.scale(0.8)

var pathData2 = "M5.059,16.021c-0.473,0-3.115,0-3.115,0V4.225c0,0,2.738,0,3.209,0c3.869,0,6.248,2.34,6.248,5.812 C11.4,13.756,9.078,16.021,5.059,16.021z M5.078,5.338H3.152v9.57h1.963c3.02,0,5.078-1.549,5.078-4.775 C10.193,7.131,8.305,5.338,5.078,5.338z M15.629,16.021V4.225h7.135v1.113h-5.928v4.229h4.945v1.094h-4.945v4.248h5.928v1.113H15.629z M32.914,12.963c0-1.377-1.133-1.926-2.982-2.473c-1.66-0.49-3.436-1.207-3.436-3.303c0-1.869,1.586-3.209,3.775-3.209 c1.359,0,2.549,0.377,3.549,1.02l-0.434,1.057c-0.887-0.604-2.039-0.98-3.096-0.98c-1.773,0-2.623,0.943-2.623,2.02 c0,1.301,1.17,1.793,2.982,2.359c1.697,0.51,3.416,1.283,3.416,3.416c0,1.943-1.623,3.396-3.982,3.396 c-1.416,0-2.719-0.414-3.795-1.094l0.434-1.076c0.945,0.643,2.059,1.096,3.398,1.096C31.764,15.191,32.914,14.209,32.914,12.963z M38.172,16.021V4.225h1.189v11.797H38.172z M49.348,16.266c-3.416,0-5.701-2.377-5.701-6.115c0-3.756,2.398-6.172,5.701-6.172c1.453,0,2.869,0.453,3.736,0.982 l-0.395,1.094c-0.889-0.566-2.133-0.98-3.361-0.98c-2.566,0-4.453,1.83-4.453,5.039c0,3.113,1.793,5.059,4.492,5.059 c1.113,0,2.076-0.303,2.83-0.717v-3.209h-3.416V10.15h4.586v4.945C52.217,15.869,50.688,16.266,49.348,16.266z M65.977,4.225h1.172v11.91h-1.303L59.088,5.922v10.1h-1.17V4.225h1.359l6.699,10.117V4.225z M72.037,16.021V4.225h7.135v1.113h-5.928v4.229h4.945v1.094h-4.945v4.248h5.928v1.113H72.037z M84.314,16.021h-1.207V4.225c0,0,3.113,0,3.17,0c2.908,0,4.285,1.34,4.285,3.396c0,1.775-1.207,2.852-2.736,3.322 l3.266,5.078h-1.396l-3.021-4.871l-2.359,0.152V16.021z M86.43,10.15c1.566-0.057,2.926-0.924,2.926-2.473 c0-1.547-1.152-2.359-3.209-2.359c-0.057,0-1.832,0-1.832,0v4.908L86.43,10.15z"
var subtitle = new CompoundPath(pathData2)
subtitle.position = Viewcenter
subtitle.position.y = 130
subtitle.fillColor = '#555'
subtitle.blendMode = 'multiply'
subtitle.scale(1)

var clipCircle = new Shape.Circle(new Point(100, 100), 100)
clipCircle.fillColor = "white"
clipCircle.blendMode = "destination-in"

// animation

var frameCount
var time
var delta // use for frame rate...seconds since the last frame event (event.delta)
// animation variables

function onFrame(event) {
  frameCount = event.count
  time = event.time
  delta = event.delta
  var positions1 = []
  var positions2 = []
  var positions3 = []
  for (var i = 0; i <= totalPoints - 1; i++) {
    var sinus = Math.cos(event.time * 0.3 + i)
    var atEnd
    var atStart
    var item = animationLayer1.children[i]
        //add positions to array
        positions1.push(item.position)
        // check directions
        if (item.bounds.right > maxX){
          item.data.xDirection = "left"
        }
        if (item.bounds.left < minX){
          item.data.xDirection = "right"
        }
        
        if (item.bounds.top < minY){
          item.data.yDirection = "down"
        }
        
        if (item.bounds.bottom > maxY){
          item.data.yDirection = "up"
        }
        
        // move item
        if (item.data.xDirection === "right"){
          item.position.x += item.bounds.width / 5;
        } else {
          item.position.x -= item.bounds.width / 5;
        }

        
        if (item.data.yDirection === "up"){
          item.position.y = (sinus * 125)  + (125)
        } else {
          item.position.y = (sinus * 125 )  + (125)
        }

    }

    for (var key in myPath.segments) {
      if (myPath.segments.hasOwnProperty(key)) {
        myPath.segments[key].point = positions1[key]
      }
    }
    myPath.smooth()


        // 2nd path
        for (var i = 0; i <= totalPoints2 - 1; i++) {
          var sinus2 = Math.sin(event.time * 0.3 + i)
          var atEnd2
          var atStart2
          var item2 = animationLayer2.children[i]
            //add positions to array
            positions2.push(item2.position)
            // check directions
            if (item2.bounds.right > maxX){
              item2.data.xDirection = "left"
            }
            if (item2.bounds.left < minX){
              item2.data.xDirection = "right"
            }
            
            if (item2.bounds.top < minY){
              item2.data.yDirection = "down"
            }
            
            if (item2.bounds.bottom > maxY){
              item2.data.yDirection = "up"
            }
            
            // move item
            if (item2.data.xDirection === "right"){
              item2.position.x = (sinus2 * 125 )  + (125)
            } else {
              item2.position.x = (sinus2 * 125 )  + (125)
            }
            
            if (item2.data.yDirection === "up"){
              item2.position.y -= item2.bounds.height / 5;
            } else {
              item2.position.y += item2.bounds.height / 5;
            }
            

        }

        for (var key in myPath2.segments) {
          if (myPath2.segments.hasOwnProperty(key)) {
            myPath2.segments[key].point = positions2[key]
          }
        }
        myPath2.smooth()
        
        // third!!??
        // 2nd path
        for (var i = 0; i <= totalPoints3 - 1; i++) {
          var sinus3 = Math.cos(event.time * 0.3 + i)
          var atEnd3
          var atStart3
          var item3 = animationLayer3.children[i]
            //add positions to array
            positions3.push(item3.position)
            // check directions
            if (item3.bounds.right > maxX){
              item3.data.xDirection = "left"
            }
            if (item3.bounds.left < minX){
              item3.data.xDirection = "right"
            }
            
            if (item3.bounds.top < minY){
              item3.data.yDirection = "down"
            }
            
            if (item3.bounds.bottom > maxY){
              item3.data.yDirection = "up"
            }
            
            // move item
            if (item3.data.xDirection === "right"){
              item3.position.x = sinus3 * maxY + (minY*2)
            } else {
              item3.position.x = sinus3 * maxY + (minY*2)
            }
            
            if (item3.data.yDirection === "up"){
              item3.position.y -= item3.bounds.height / 5;
            } else {
              item3.position.y += item3.bounds.height / 5;
            }

        }

        for (var key in myPath3.segments) {
          if (myPath3.segments.hasOwnProperty(key)) {
            myPath3.segments[key].point = positions3[key]
          }
        }
        myPath3.smooth()
        
    }