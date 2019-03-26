function point2d(x,y) {
  this.x = x;
  this.y = y;
};

let parkingListAll={
  //[parkingName,x,y,linkNameList[]]
  dam:{
    high: [
            [0,'A',670,353,[1,2,3,4,5]],
            [1,'D',825,388,[0,2,3]],
            [2,'E',950,440,[0,1,3]],
            [3,'F',675,536,[0,1,2,4]],
            [4,'I',457,406,[0,3,5]],
            [5,'K',525,287,[0,4]]
          ],
    mid:{
      x: [670,769,924,825,950,675,602,497,457,414,525,432],
      y: [353,179,186,388,440,536,622,599,406,321,287,194]
    },
    low:{
      x: [231,290,105,158,270,362,568,414,459],
      y: [210,407,392,231,57,120,208,322,408]
    }
  },

  ship:{
    high:{
      x: [619,485,399,360,290,267,222,159],
      y: [467,378,480,390,454,364,414,298]
    },
    mid:{
      x: [619,485,399,360,290,267,222,159,536,469,438,262,220,185,104,68,66,102,268,420,524,618],
      y: [467,378,480,390,454,364,414,298,658,575,703,572,697,492,531,446,327,255,250,298,220,244]
    },
    low:{
      x: [724,867,963,973,949,788,718,752,603,619,619,619],
      y: [219,103,134,238,379,412,482,677,522,467,361,242]
    }
  },

  house:{
    mid:{
      x: [594,643,571,421,441,367,571,544,678,713,884,956,749,828,720,738,665,599,576,441],
      y: [485,426,335,328,276,117,233,49,102,307,315,390,437,502,571,718,673,549,656,568]
    },
    low:{
      x: [317,313,139,184,68,118,231,318,427,414],
      y: [563,638,712,571,576,359,330,424,499,611]
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

let linkListAll={
  dam:{
    high: [
            [0,1,1,1,1,1],
            [1,0,1,1,0,0],
            [1,1,0,1,0,0],
            [1,1,1,0,1,0],
            [1,0,0,1,0,1],
            [1,0,0,0,1,0]
          ],
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
    low:  [
            [0,1,1,1,1,1,0,1,0],
            [1,0,1,1,0,0,0,1,0],
            [1,1,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0],
            [1,0,0,0,0,1,0,0,0],
            [1,0,0,0,1,0,1,1,0],
            [0,0,0,0,0,1,0,1,0],
            [1,1,0,0,0,1,1,0,1],
            [0,0,0,0,0,0,0,1,0]
          ]
    },

  ship:{
    high:  [
          [0,1,1,0,0,0,0,0],
          [1,0,1,1,0,0,0,0],
          [1,1,0,1,1,0,0,0],
          [0,1,1,0,1,1,0,0],
          [0,0,1,1,0,0,1,0],
          [0,0,0,1,0,0,1,1],
          [0,0,0,0,1,1,0,1],
          [0,0,0,0,0,1,1,0]
      ],
    mid:  [
          [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
          [1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
          [0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
          [0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
          [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
      ],
    low:  [
            [0,1,0,0,0,1,0,0,0,0,1,1],
            [1,0,1,0,0,0,0,0,0,0,0,0],
            [0,1,0,1,0,0,0,0,0,0,0,0],
            [0,0,1,0,1,0,0,0,0,0,0,0],
            [0,0,0,1,0,1,0,0,0,0,0,0],
            [1,0,0,0,1,0,1,0,0,0,0,0],
            [0,0,0,0,0,1,0,1,1,1,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,1,0],
            [1,0,0,0,0,0,0,0,0,1,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0]
      ]
  },

  house:{
    mid:  [
            [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0]
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

let colorPalette = ['black','gray','silver','white','blue','navy','teal','green','lime','aqua','yellow','red','fuchsia','olive','purple','maroon'];

let parkingList,linkList,fileName;

function updateMap() {
  let map,tide,parkingMap,linkMap;

  switch(document.mapbox.map.selectedIndex){
    case 0:
      map="dam";
      parkingMap = parkingListAll.dam;
      linkMap = linkListAll.dam;
      break;
    case 1:
      map="ship";
      parkingMap = parkingListAll.ship;
      linkMap = linkListAll.ship;
    break;
    case 2:
      map="house";
      parkingMap = parkingListAll.house;
      linkMap = linkListAll.house;
    break;
    case 3:
      map="lift";
      parkingMap = parkingListAll.lift;
      linkMap = linkListAll.lift;
    break;
    case 4:
      map="polar";
      parkingMap = parkingListAll.polar;
      linkMap = linkListAll.polar;
    break;
  }

  switch(document.mapbox.tide.selectedIndex){
    case 0:
      tide="high";
      parkingList = parkingMap.high;
      linkList = linkMap.high;
      break;
    case 1:
      tide="mid";
      parkingList = parkingMap.mid;
      linkList = linkMap.mid;
    break;
    case 2:
      tide="low";
      parkingList = parkingMap.low;
      linkList = linkMap.low;
    break;
  }

  var select = document.getElementById('parkingPoint');

	while (0 < select.childNodes.length) {
		select.removeChild(select.childNodes[0]);
	}

  var current = "A";
  var currentCode = current.charCodeAt(0);
  for(var i=0;i<parkingList.x.length;i++,currentCode++){
    var alphabet = String.fromCharCode(currentCode);
  	var option = document.createElement('option');
  	option.text=alphabet;
  	select.appendChild(option);
  }

  let lowMap = document.mapbox.lowMap.checked;
  if(lowMap){
    fileName = "figure/"+map+"/low.png";
  }else{
    fileName = "figure/"+map+"/"+tide+".png";
  }

  drawMap();
}

function drawMap() {
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
      console.log(parkingList);
      for(let i=0;i<parkingList.x.length;i++){
        points.push(new point2d(parkingList.x[i],parkingList.y[i]));
      }
      //線を引く
      ctx.strokeStyle = 'rgba(0,97,0,1)';
      ctx.lineWidth = 3;

      ctx.beginPath();
      for(let i=0;i<points.length;i++){
        for(let j=i;j<points.length;j++){
          if(linkList[i][j]==1){
            ctx.moveTo(points[i].x,points[i].y);
            ctx.lineTo(points[j].x,points[j].y);
            ctx.closePath();
          }
        }
      }
      ctx.stroke();

      //点をプロット
      ctx.fillStyle = 'rgba(56,97,158,1)';

      for(let i=0;i<points.length;i++){
        ctx.beginPath();
        ctx.arc(points[i].x,points[i].y,13,0,Math.PI*2,false);
        ctx.fill();
      }

      //記号を入力
      ctx.font= 'bold 30px Century Gothic';
      ctx.textAlign = 'center';
      ctx.fillStyle='rgb(0,0,128)';
      for(let i=0;i<points.length;i++){
        ctx.fillText('A',points[i].x,points[i].y + 40);
      }


      ctx.fillStyle = 'rgba(119,69,133,0.35)';
      ctx.strokeStyle = 'rgba(119,69,133,1)';
      //攻撃範囲描画
      if(document.mapoption.sencingRange.checked){
        for(let i=0;i<points.length;i++){
          ctx.beginPath();
          ctx.arc(points[i].x,points[i].y,201,0,Math.PI*2,false);
          ctx.fill();
          ctx.stroke();
        }
      }

      //ボロノイ図描画
      if(document.mapoption.voronoi.checked){
        var parkingPoint = document.parking.parkingPoint.selectedIndex;
        var canJumpPoints = new Array();
        for(let i=0;i<points.length;i++){
          if(linkList[parkingPoint][i]==1){
            canJumpPoints.push(points[i]);
          }
        }
        var vor = new VoronoiHandler();
        vor.init();
        vor.compute(canJumpPoints);
        vor.render();
      }


      ctx.font= 'bold 30px Century Gothic';
      ctx.textAlign = 'left';
      ctx.fillStyle='rgb(0,0,128)';
      ctx.fillText('画像は製作中のものです',0,30);


    }

  }

}

class VoronoiHandler {
    //voronoi: new Voronoi(),
    //sites: [],
    //diagram: null,
    //canvas: null,
    //bbox: {xl:0,xr:800,yt:0,yb:600},

    init() {
        this.voronoi = new Voronoi;
        this.canvas = document.getElementById('cvs1');
        this.bbox = {xl:0,xr:this.canvas.width,yt:0,yb:this.canvas.height}
        }

    compute(points) {
        this.sites = points;
        this.diagram = this.voronoi.compute(this.sites, this.bbox);
        }

    render() {
        var ctx = this.canvas.getContext('2d');
        if (!this.diagram) {return;}
        var edges = this.diagram.edges,nEdges = edges.length,v;
    		// how many sites do we have?
    		var sites = this.sites,
    			nSites = sites.length;
    		if (!nSites) {return;}
    		// highlight cell under mouse

        for(var i=0;i<this.sites.length;i++){
      		var cell = this.diagram.cells[this.sites[i].voronoiId];
      		// there is no guarantee a Voronoi cell will exist for any
      		// particular site

      		if (cell) {
      			var halfedges = cell.halfedges,
      				nHalfedges = halfedges.length;
      			if (nHalfedges > 2) {
      				v = halfedges[0].getStartpoint();
      				ctx.beginPath();
      				ctx.moveTo(v.x,v.y);
      				for (var iHalfedge=0; iHalfedge<nHalfedges; iHalfedge++) {
      					v = halfedges[iHalfedge].getEndpoint();
      					ctx.lineTo(v.x,v.y);
    					}

              ctx.globalAlpha = 0.7;
              ctx.fillStyle = colorPalette[i%colorPalette.length];
      				ctx.fill();

              ctx.globalAlpha = 1;
              ctx.strokeStyle = 'rgb(0,0,0)';
              ctx.lineWidth = 1;
              ctx.stroke();
    				}
          }

  			}
      }

};
