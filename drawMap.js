function point2d(x,y) {
  this.x = x;
  this.y = y;
};

let parkingListAll={
  //[parkingID,name,x,y,linkIDList[]]
  dam:{
    high: [
            [0,'A',670,353,[1,2,3,4,5]],
            [1,'D',825,388,[0,2,3]],
            [2,'E',950,440,[0,1,3]],
            [3,'F',675,536,[0,1,2,4]],
            [4,'I',457,406,[0,3,5]],
            [5,'K',525,287,[0,4]]
          ],
    mid:  [
            [0,'A',670,353,[1,3,5,8,10]],
            [1,'B',769,179,[0,2,3]],
            [2,'C',924,186,[1,3,4]],
            [3,'D',825,388,[0,1,2,4,5]],
            [4,'E',950,440,[2,3,5]],
            [5,'F',675,536,[0,3,4,6,8]],
            [6,'G',602,622,[5,7,8]],
            [7,'H',497,599,[6,8]],
            [8,'I',457,406,[0,5,6,7,9,10]],
            [9,'J',414,321,[8,10,11]],
            [10,'K',525,287,[0,8,9,11]],
            [11,'L',432,194,[9,10]]
          ],
    low:  [
            [0,'a',231,230,[1,2,3,4,5,7]],
            [1,'b',290,407,[0,2,3,7]],
            [2,'c',105,392,[0,1]],
            [3,'d',158,231,[0,1]],
            [4,'e',270,57,[0,4]],
            [5,'f',362,120,[0,4,6,7]],
            [6,'g',568,208,[5,7]],
            [7,'h',414,322,[0,1,5,6,8]],
            [8,'i',459,408,[7]]
          ]
  },

  ship:{
    high: [
            [0,'A',619,467,[1,2]],
            [1,'B',485,378,[0,2,3]],
            [2,'C',399,480,[0,1,3,4]],
            [3,'D',360,390,[1,2,4,5]],
            [4,'E',290,454,[2,3,6]],
            [5,'F',267,364,[3,6,7]],
            [6,'G',222,414,[4,5,7]],
            [7,'H',159,298,[5,6]]
          ],

    mid:  [
            [0,'A',619,467,[1,2]],
            [1,'B',485,378,[0,2,3,19]],
            [2,'C',399,480,[0,1,3,4,9]],
            [3,'D',360,390,[1,2,4,5]],
            [4,'E',290,454,[2,3,6,13]],
            [5,'F',267,364,[3,6,7,18]],
            [6,'G',222,414,[4,5,7,13]],
            [7,'H',159,298,[5,6,16,17]],
            [8,'I',536,658,[9]],
            [9,'J',469,575,[2,8,10,11]],
            [10,'K',438,703,[9]],
            [11,'L',262,572,[9,12,13]],
            [12,'M',220,697,[11]],
            [13,'N',185,492,[4,6,11,14,15]],
            [14,'O',104,531,[13,15]],
            [15,'P',68,446,[13,14,16]],
            [16,'Q',66,327,[7,15,17]],
            [17,'R',102,255,[7,16,18]],
            [18,'S',268,250,[5,17,19]],
            [19,'T',420,298,[1,18,20]],
            [20,'U',524,220,[19,21]],
            [21,'V',618,244,[20]]
          ],

    low:  [
            [0,'a',724,219,[1,5,10,11]],
            [1,'b',867,103,[0,2]],
            [2,'c',963,134,[1,3]],
            [3,'d',973,238,[2,4]],
            [4,'e',949,379,[3,5]],
            [5,'f',788,412,[0,4,6]],
            [6,'g',718,482,[5,7,8,9]],
            [7,'h',752,677,[6]],
            [8,'i',603,522,[6]],
            [9,'j',619,467,[6,10]],
            [10,'k',619,361,[0,9]],
            [11,'l',619,242,[0]]
          ]
  },

  house:{
    high: [
            [0,'A',594,485,[1,7]],
            [1,'B',644,425,[0,2,5]],
            [2,'C',571,335,[1,3]],
            [3,'G',570,233,[2,4]],
            [4,'J',712,305,[3,5]],
            [5,'M',748,437,[1,4,6]],
            [6,'O',721,571,[5,7]],
            [7,'R',599,549,[0,6,8]],
            [8,'T\'',441,567,[7]]
          ],
    mid:  [
            [0,'A',594,485,[1,17]],
            [1,'B',644,425,[0,2,12]],
            [2,'C',571,335,[1,6]],
            [3,'D',421,328,[4,19]],
            [4,'E',442,277,[3,5,6,7]],
            [5,'F',366,117,[4]],
            [6,'G',570,233,[2,4,7,9]],
            [7,'H',544,48,[4,6,8]],
            [8,'I',677,102,[7,9]],
            [9,'J',712,305,[6,8,10,12]],
            [10,'K',883,315,[9,11,13]],
            [11,'L',955,390,[10,13]],
            [12,'M',748,437,[1,9,13,14]],
            [13,'N',827,502,[10,11,12,14]],
            [14,'O',721,571,[12,13,15,16,17]],
            [15,'P',737,718,[14]],
            [16,'Q',665,673,[14,17]],
            [17,'R',599,549,[0,14,16,18,19]],
            [18,'S',575,656,[17,19]],
            [19,'T',441,567,[3,17,18]]
          ],
    low:  [
            [0,'a',317,563,[1,3,7,8,9]],
            [1,'b',312,638,[0,2,3,9]],
            [2,'c',140,712,[1,3]],
            [3,'d',184,571,[0,1,2,4,5,7]],
            [4,'e',67,576,[3]],
            [5,'f',118,358,[3,6]],
            [6,'g',230,329,[5,7]],
            [7,'h',317,423,[0,3,6,8,10]],
            [8,'i',426,499,[0,7,10,12]],
            [9,'j',414,611,[0,1,12]],
            [10,'D',422,329,[7,8,11]],
            [11,'E',441,277,[10]],
            [12,'T',442,568,[8,9,13,14]],
            [13,'R',599,548,[12,14]],
            [14,'S',575,656,[9,12,13]]
          ]

  },

  lift:{
    high: [
            [0,'A',389,333,[1,7]],
            [1,'B',287,400,[0,1]],
            [2,'D',267,303,[1,3]],
            [3,'G',323,137,[2,4]],
            [4,'H',383,106,[3,5]],
            [5,'I',441,121,[4,6]],
            [6,'J',502,164,[5,7]],
            [7,'M',469,345,[0,6]]
          ],
    mid:  [
            [0,'A',389,333,[1,12]],
            [1,'B',287,400,[0,2,3]],
            [2,'C',262,500,[1]],
            [3,'D',267,303,[1,4,6]],
            [4,'E',208,259,[3,5]],
            [5,'F',248,118,[4,6]],
            [6,'G',323,137,[3,5,7]],
            [7,'H',383,106,[6,8]],
            [8,'I',441,121,[7,9]],
            [9,'J',502,164,[8,10,12]],
            [10,'K',549,215,[9,11]],
            [11,'L',551,292,[10,12]],
            [12,'M',469,345,[0,9,11,13]],
            [13,'N',512,458,[12]]
          ],

    low:  [

          ]

  },

  polar:{
    mid:  [

          ],
    low:  [

          ],
    high: [

          ]

  }

};

let defaultColorParking = 'rgba(56,97,158,1)';
let defaultColorLink = 'rgba(0,97,0,1)';
let defaultColorRange = 'rgba(119,69,133,0.35)';
let defaultColorPalette = [ 'rgba(244, 67, 54, 0.7)',
                            'rgba(233, 30, 99, 0.7)',
                            'rgba(156, 39, 176, 0.7)',
                            'rgba(103, 58, 183, 0.7)',
                            'rgba(63, 81, 181, 0.7)',
                            'rgba(33, 150, 243, 0.7)',
                            'rgba(3, 169, 244, 0.7)',
                            'rgba(0, 188, 212, 0.7)',
                            'rgba(0, 150, 136, 0.7)',
                            'rgba(76, 175, 80, 0.7)',
                            'rgba(139, 195, 74, 0.7)',
                            'rgba(205, 220, 57, 0.7)',
                            'rgba(255, 235, 59, 0.7)',
                            'rgba(255, 193, 7, 0.7)'];
let customizedColorPalette = [];
let color_parking = defaultColorParking;
let color_link = defaultColorLink;
let color_range = defaultColorRange;
Object.assign(customizedColorPalette,defaultColorPalette);

let parkingList,fileName;
let pickr_parking,pickr_link,pickr_range;
let pickr = new Array();

window.onload = function()  {
  document.getElementById('map').onchange=updateMap;
  document.getElementById('tide').onchange=updateMap;
  document.getElementById('parkingPoint').onchange=drawMap;
  document.getElementById('sencingRange').onchange=drawMap;
  document.getElementById('voronoi').onchange=drawMap;

  let palette_set,palette_name,palette_pickr;
  //parking-pickr
  let div_parking = document.getElementById('color-picker-parking');
  palette_set = document.createElement('div');
  palette_name = document.createElement('div');
  palette_pickr = document.createElement('div');

  palette_set.appendChild(palette_name);
  palette_set.appendChild(palette_pickr);
  div_parking.appendChild(palette_set);

  palette_name.textContent = '駐車場';
  palette_set.classList.add('palette_set');
  palette_name.classList.add('palette_name');
  let className = 'picker-parking';
  palette_pickr.classList.add(className);
  pickr_parking = createPickr(className,defaultColorParking);
  //link-pickr
  let div_link = document.getElementById('color-picker-link');
  palette_set = document.createElement('div');
  palette_name = document.createElement('div');
  palette_pickr = document.createElement('div');

  palette_set.appendChild(palette_name);
  palette_set.appendChild(palette_pickr);
  div_link.appendChild(palette_set);

  palette_name.textContent = 'リンク';
  palette_set.classList.add('palette_set');
  palette_name.classList.add('palette_name');
  className = 'picker-link';
  palette_pickr.classList.add(className);
  pickr_link = createPickr(className,defaultColorLink);
  //range-pickr
  let div_range = document.getElementById('color-picker-range');
  palette_set = document.createElement('div');
  palette_name = document.createElement('div');
  palette_pickr = document.createElement('div');

  palette_set.appendChild(palette_name);
  palette_set.appendChild(palette_pickr);
  div_range.appendChild(palette_set);

  palette_name.textContent = '射程';
  palette_set.classList.add('palette_set');
  palette_name.classList.add('palette_name');
  className = 'picker-range';
  palette_pickr.classList.add(className);
  pickr_range = createPickr(className,defaultColorRange);

  updateMap();

}

function updatePalette(){
  color_parking = pickr_parking.getColor().toRGBA();
  color_link = pickr_link.getColor().toRGBA();
  color_range = pickr_range.getColor().toRGBA();
  for(let i=0;i<pickr.length;i++){
    customizedColorPalette[i]=pickr[i].getColor().toRGBA();
  }
}

function updateMap() {
  let map,tide,parkingMap,linkMap;

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

  var select = document.getElementById('parkingPoint');

	while (0 < select.childNodes.length) {
		select.removeChild(select.childNodes[0]);
	}

  for(var i=0;i<parkingList.length;i++){
  	var option = document.createElement('option');
  	option.text = parkingList[i][1];
  	select.appendChild(option);
  }

  let div_voronoi = document.getElementById('picker-voronoi');
  while( div_voronoi.firstChild ){
  div_voronoi.removeChild( div_voronoi.firstChild );
  }
  pickr = new Array();

  for(let i=0;i<parkingList.length;i++){
    let palette_set = document.createElement('div');
    let palette_name = document.createElement('div');
    let palette_pickr = document.createElement('div');

    palette_set.appendChild(palette_name);
    palette_set.appendChild(palette_pickr);
    div_voronoi.appendChild(palette_set);

    palette_name.textContent = parkingList[i][1];

    palette_set.classList.add('palette_set');
    palette_name.classList.add('palette_name');
    let className = 'color-picker-voronoi'+i;
    palette_pickr.classList.add(className);
    //console.log(div_voronoi);


    pickr.push(createPickr(className,defaultColorPalette[i%defaultColorPalette.length]));

  }
/*
  var current = "A";
  var currentCode = current.charCodeAt(0);
  for(var i=0;i<parkingList.length;i++,currentCode++){
    var alphabet = String.fromCharCode(currentCode);
  	var option = document.createElement('option');
  	option.text=alphabet;
  	select.appendChild(option);
  }
*/
  /*
  let lowMap = document.mapbox.lowMap.checked;
  if(lowMap){
    fileName = "figure/"+map+"/low.png";
  }else{
    fileName = "figure/"+map+"/"+tide+".png";
  }
  */
  fileName = "figure/"+map+"/low.png";

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
      for(let i=0;i<parkingList.length;i++){
        points.push(new Parking(parkingList[i][0],parkingList[i][1],parkingList[i][2],parkingList[i][3],parkingList[i][4]));
      }
      //リンクを引く
      ctx.strokeStyle = color_link;
      ctx.lineWidth = 3;

      ctx.beginPath();
      for(let i=0;i<points.length;i++){
        linkList = points[i].getLink();
        for(let j=0;j<linkList.length;j++){
          linkId = linkList[j];
          ctx.moveTo(points[i].getX(),points[i].getY());
          ctx.lineTo(points[linkId].getX(),points[linkId].getY());
          ctx.closePath();
        }
      }
      ctx.stroke();

      //駐車場をプロット
      ctx.fillStyle = color_parking;

      for(let i=0;i<points.length;i++){
        ctx.beginPath();
        ctx.arc(points[i].getX(),points[i].getY(),13,0,Math.PI*2,false);
        ctx.fill();
      }

      //記号を入力
      ctx.font= 'bold 30px Century Gothic';
      ctx.textAlign = 'center';
      ctx.fillStyle='rgb(0,0,128)';
      for(let i=0;i<points.length;i++){
        ctx.fillText(points[i].getName(),points[i].getX(),points[i].getY() + 40);
      }

      //攻撃範囲描画
      var parkingNum = document.mapoption.parkingPoint.selectedIndex;
      var linkList = points[parkingNum].getLink();

      ctx.fillStyle = color_range;
      ctx.strokeStyle = 'rgba(119,69,133,1)';

      switch(document.mapoption.sencingRange.selectedIndex){
        case 0://全ての感知射程を描画
          for(let i=0;i<points.length;i++){
            ctx.beginPath();
            ctx.arc(points[i].getX(),points[i].getY(),201,0,Math.PI*2,false);
            ctx.fill();
            ctx.stroke();
          }
          break;
        case 1://隣接した駐車場の感知射程を表示
          for(let i=0;i<linkList.length;i++){
            ctx.beginPath();
            ctx.arc(points[linkList[i]].getX(),points[linkList[i]].getY(),201,0,Math.PI*2,false);
            ctx.fill();
            ctx.stroke();
          }
          break;
        case 2://1つだけの感知射程を描画
          ctx.beginPath();
          ctx.arc(points[parkingNum].getX(),points[parkingNum].getY(),201,0,Math.PI*2,false);
          ctx.fill();
          ctx.stroke();
          break;
        case 3://非表示
          break;
      }

      //ボロノイ図描画
      if(document.mapoption.voronoi.checked){
        var canJumpPoints = new Array();
        for(let i=0;i<linkList.length;i++){
          //厳密にはidと比較したいかも
          canJumpPoints.push(new point2d(points[linkList[i]].getX(),points[linkList[i]].getY()));
        }
        var vor = new VoronoiHandler();
        vor.init();
        vor.compute(canJumpPoints);
        vor.render();
      }


      ctx.font= 'bold 30px Century Gothic';
      ctx.textAlign = 'left';
      ctx.fillStyle='rgb(0,0,128)';
      ctx.fillText('コウモリマップβ',0,30);


    }

  }

}

function createPickr(className,defaultColor){
  className = '.'+className;
  let pickr = new Pickr({
    el: className,

    default: defaultColor,

    swatches: defaultColorPalette,

    components: {

        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            //clear: true,
            save: true
        }
    },
    strings: {
        save: '保存',  // Default for save button
        //clear: 'Clear' // Default for clear button
    }
  });
  pickr.on('save', (hsva,instance) => {
  updatePalette();
  drawMap();
  });
  return pickr;
}

class Parking {
  constructor(id,name,x,y,link){
    this.id=id;
    this.name=name;
    this.x=x;
    this.y=y;
    this.link=link;
  }

  getId(){
    return this.id;
  }
  getName(){
    return this.name;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getLink(){
    return this.link;
  }
};

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

              ctx.globalAlpha = 1;
              ctx.fillStyle = customizedColorPalette[i];
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

// canvas上のイメージを保存
function saveCanvas()
{
	var canvas = document.getElementById('cvs1');
	//アンカータグを作成
	var a = document.createElement('a');
	//canvasをJPEG変換し、そのBase64文字列をhrefへセット
	a.href = canvas.toDataURL('image/png', 0.85);
	//ダウンロード時のファイル名を指定
	a.download = 'download.png';
	//クリックイベントを発生させる
	a.click();
}
