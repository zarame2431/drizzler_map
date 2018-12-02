function drawMap() {
  var map,tide;

  switch(document.mapbox.map.selectedIndex){
    case 0:
      map="dam";
      break;
    case 1:
      map="ship";
    break;
    case 2:
      map="house";
    break;
    case 3:
      map="lift";
    break;
    case 4:
      map="polar";
    break;
  }

  switch(document.mapbox.tide.selectedIndex){
    case 0:
      tide="high";
      break;
    case 1:
      tide="mid";
    break;
    case 2:
      tide="low";
    break;
  }

  var file_name = "figure/"+map+"/"+tide+".png";

  var cvs = document.getElementById('cvs1');
  var ctx = cvs.getContext('2d');

  var img = new Image();
  img.src = file_name;

  img.onload = function(){
    cvs.width=img.width;
    cvs.height=img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
  }
}
