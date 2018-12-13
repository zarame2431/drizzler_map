let parkingListAll={
  dam:{
    mid:{
      x: [670,769,924,825,950,675,602,497,457,414,525,432],
      y: [353,179,186,388,440,536,622,599,406,321,287,194]
    },
    low:{
      x: [100,150,200],
      y: [30,60,90]
    },
    high:{
      x: [100,150,200],
      y: [30,60,90]
    }
  },

  ship:{
    mid:{
      x: [100,200,300],
      y: [30,60,90]
    },
    low:{
      x: [100,150,200],
      y: [30,60,90]
    },
    high:{
      x: [100,150,200],
      y: [30,60,90]
    }
  },

  house:{
    mid:{
      x: [100,200,300],
      y: [30,60,90]
    },
    low:{
      x: [100,150,200],
      y: [30,60,90]
    },
    high:{
      x: [100,150,200],
      y: [30,60,90]
    }
  },

  lift:{
    mid:{
      x: [100,200,300],
      y: [30,60,90]
    },
    low:{
      x: [100,150,200],
      y: [30,60,90]
    },
    high:{
      x: [100,150,200],
      y: [30,60,90]
    }
  },

  polar:{
    mid:{
      x: [100,200,300],
      y: [30,60,90]
    },
    low:{
      x: [100,150,200],
      y: [30,60,90]
    },
    high:{
      x: [100,150,200],
      y: [30,60,90]
    }
  }

};

function drawMap() {
  let map,tide,parkingMap,parkingList;

  switch(document.mapbox.map.selectedIndex){
    case 0:
      map="dam";
      parkingMap = parkingListAll.dam;
      break;
    case 1:
      map="ship";
      parkingMap = parkingListAll.ship;
    break;
    case 2:
      map="house";
      parkingMap = parkingListAll.house;
    break;
    case 3:
      map="lift";
      parkingMap = parkingListAll.lift;
    break;
    case 4:
      map="polar";
      parkingMap = parkingListAll.polar;
    break;
  }

  switch(document.mapbox.tide.selectedIndex){
    case 0:
      tide="high";
      parkingList = parkingMap.high;
      break;
    case 1:
      tide="mid";
      parkingList = parkingMap.mid;
    break;
    case 2:
      tide="low";
      parkingList = parkingMap.low;
    break;
  }

  let alwaysLow = document.mapbox.always_low.checked;
  console.log(alwaysLow);
  let fileName;
  if(alwaysLow){
    fileName = "figure/"+map+"/low.png";
  }else{
    fileName = "figure/"+map+"/"+tide+".png";
  }

  let cvs = document.getElementById('cvs1');
  if(cvs.getContext){
    let ctx = cvs.getContext('2d');

    let img = new Image();
    img.src = fileName;

    img.onload = function(){
      cvs.width=img.width;
      cvs.height=img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);


      //座標割り出し、線描き、点描き、範囲描き、範囲塗り

      let points;
      //複数の駐車場のデータを読み取る
      points = parkingList;
      //点をプロット、記号も入力？
      ctx.fillStyle = 'rgba(56,97,158,1)';

      for(let i=0;i<points.x.length;i++){
        ctx.beginPath();
        ctx.arc(points.x[i],points.y[i],13,0,Math.PI*2,false);
        ctx.fill();
      }

    }

  }

}
