function point2d(x,y) {
  this.x = x;
  this.y = y;
};

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

let linkList={
  dam:{
    mid:  [
            [0,1,0,1,0,1,0,0,1,0,1,0],
            [1,0,1,1,0,0,0,0,0,0,0,0],
            [0,1,0,1,1,0,0,0,0,0,0,0],
            [1,1,1,0,1,1,0,0,0,0,0,0],
            [0,0,1,1,0,1,0,0,0,0,0,0],
            [1,0,0,1,1,0,1,0,1,0,0,0],
            [0,0,0,0,0,1,0,1,1,0,0,0],
            [0,0,0,0,0,0,1,0,1,0,0,0],
            [1,0,0,0,0,1,1,1,0,1,1,0],
            [0,0,0,0,0,0,0,0,1,0,1,1],
            [1,0,0,0,0,0,0,0,1,1,0,1],
            [0,0,0,0,0,0,0,0,0,1,1,0]
          ],
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

//function makeParkingList() {

//};

function drawMap() {
  console.log("test");
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
      let points = new Array();
      //複数の駐車場のデータを読み取る
      for(let i=0;i<parkingList.x.length;i++){
        points.push(new point2d(parkingList.x[i],parkingList.y[i]));
      }
      //線を引く
      ctx.strokeStyle = 'rgba(0,97,0,1)';
      ctx.lineWidth = 3;

      ctx.beginPath();
      for(let i=0;i<points.length;i++){
        for(let j=i;j<points.length;j++){
          if(linkList.dam.mid[i][j]==1){
            ctx.moveTo(points[i].x,points[i].y);
            ctx.lineTo(points[j].x,points[j].y);
            ctx.closePath();
          }
        }
      }
      ctx.stroke();

      //点をプロット、記号も入力？
      ctx.fillStyle = 'rgba(56,97,158,1)';

      for(let i=0;i<points.length;i++){
        ctx.beginPath();
        ctx.arc(points[i].x,points[i].y,13,0,Math.PI*2,false);
        ctx.fill();
      }


      ctx.fillStyle = 'rgba(119,69,133,0.35)';
      ctx.strokeStyle = 'rgba(119,69,133,1)';
      //攻撃範囲描画
      if(document.mapbox.sencingRange.checked){
        for(let i=0;i<points.length;i++){
          ctx.beginPath();
          ctx.arc(points[i].x,points[i].y,201,0,Math.PI*2,false);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

  }

}
