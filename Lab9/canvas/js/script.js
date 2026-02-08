// 1. Vẽ đường thẳng mặc định (myCanvas)
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// 2. Vẽ đường thẳng màu đỏ (myCanvas1)
var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.moveTo(0, 0);
ctx1.lineTo(200, 100);
ctx1.lineWidth = 10;
ctx1.strokeStyle = "red";
ctx1.stroke();

// 3. Vẽ hình tròn (myCanvas2)
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.arc(95, 50, 40, 0, 2 * Math.PI);
ctx2.stroke();

// 4. Vẽ hình chữ nhật rỗng (myCanvas3)
var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath(); 
ctx3.rect(10, 10, 150, 80); 
ctx3.stroke();

// 5. Vẽ hình vuông màu xanh (myCanvas4)
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.fillStyle = "green";
ctx4.fillRect(10, 10, 80, 80); 

// 6. Vẽ hình vuông có màu nền và viền (myCanvas5)
var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
ctx5.fillStyle = "green";
ctx5.fillRect(10, 10, 100, 100);
ctx5.strokeStyle = "blue";
ctx5.lineWidth = 5;
ctx5.strokeRect(10, 10, 100, 100);

// 7. Vẽ hình thang (myCanvas6)
var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
ctx6.beginPath();
ctx6.moveTo(20, 20);
ctx6.lineTo(100, 20);
ctx6.lineTo(175, 100);
ctx6.lineTo(20, 100);
ctx6.lineTo(20, 20);
ctx6.stroke();

// 8.Vẽ hình tam giác (myCanvas7)
var c7 = document.getElementById("myCanvas7");
var ctx7 = c7.getContext("2d");
ctx7.beginPath();
ctx7.moveTo(100, 20);
ctx7.lineTo(180, 100);
ctx7.lineTo(20, 100);
ctx7.lineTo(100, 20);
ctx7.stroke();


// 9.Xóa hình chữ nhật (myCanvas8)
var c8 = document.getElementById("myCanvas8");
var ctx8 = c8.getContext("2d");
ctx8.fillStyle = "pink";
ctx8.fillRect(10, 10, 150, 100);
ctx8.clearRect(60, 35, 50, 50);

// 10.Vẽ hình bán nguyệt (myCanvas9)
var c9 = document.getElementById("myCanvas9");
var ctx9 = c9.getContext("2d");
ctx9.beginPath();
ctx9.arc(95, 50, 40, 0, Math.PI);
ctx9.fillStyle = "red";
ctx9.fill();
ctx9.stroke();

// 11.Vẽ cung tròn (myCanvas10)
var c10 = document.getElementById("myCanvas10");
var ctx10 = c10.getContext("2d");
ctx10.beginPath();
ctx10.arc(95, 50, 40, 0, 0.5 * Math.PI);
ctx10.stroke();

// 12.Vẽ hình cung tròn (myCanvas11)
var c11 = document.getElementById("myCanvas11");
var ctx11 = c11.getContext("2d");
ctx11.beginPath();
ctx11.arc(95, 50, 40, 0, 0.5 * Math.PI, true);
ctx11.stroke();

// 13.Vẽ đường cong (myCanvas12)
var c12 = document.getElementById("myCanvas12");
var ctx12 = c12.getContext("2d");
ctx12.beginPath();
ctx12.moveTo(10, 100);
ctx12.quadraticCurveTo(100, -20, 180, 80);
ctx12.stroke();

// 14.Vẽ đường cong (myCanvas13)
var c13 = document.getElementById("myCanvas13");
var ctx13 = c13.getContext("2d");
ctx13.beginPath();
ctx13.moveTo(20, 20);
ctx13.bezierCurveTo(110,150,180,10, 210, 140);
ctx13.stroke();

// 15.Vẽ chữ (myCanvas14)
var c14 = document.getElementById("myCanvas14");
var ctx14 = c14.getContext("2d");
ctx14.font = "30px Arial";
ctx14.fillText("Hello World", 10, 50);

// 16.Vẽ viền chữ (myCanvas15)
var c15 = document.getElementById("myCanvas15");
var ctx15 = c15.getContext("2d");
ctx15.font = "30px Arial";
ctx15.strokeText("Hello World", 10, 50);

// 17.Vẽ gradient (myCanvas16)
var c16 = document.getElementById("myCanvas16");
var ctx16 = c16.getContext("2d");
var grd16 = ctx16.createLinearGradient(0, 0, 200, 0);
grd16.addColorStop(0, "red");
grd16.addColorStop(1, "white");
ctx16.fillStyle = grd16;
ctx16.fillRect(10, 10, 150, 80);

// 18.Vẽ gradient xuyên tâm (myCanvas17)
var c17 = document.getElementById("myCanvas17");
var ctx17 = c17.getContext("2d");
var grd17 = ctx17.createRadialGradient(75, 50,
5, 90, 60, 100);
grd17.addColorStop(0, "red");
grd17.addColorStop(1, "white");
ctx17.fillStyle = grd17;
ctx17.fillRect(10, 10, 150, 80);

// 19.Bóng đổ (myCanvas18)
var c18 = document.getElementById("myCanvas18");
var ctx18 = c18.getContext("2d");
ctx18.shadowColor = "lightblue";
ctx18.shadowOffsetX = 10;
ctx18.shadowOffsetY = 10;
ctx18.fillStyle = "blue";
ctx18.fillRect(20, 20, 100, 100);
ctx18.lineWidth = 4;
ctx18.strokeStyle = "blue";
ctx18.strokeRect(170, 20, 100, 100);

// 20.Bóng đổ mờ (myCanvas19)
var c19 = document.getElementById("myCanvas19");
var ctx19 = c19.getContext("2d");
ctx19.shadowColor = "lightblue";
ctx19.shadowBlur = 8;
ctx19.shadowOffsetX = 10;
ctx19.shadowOffsetY = 10;
ctx19.fillStyle = "blue";
ctx19.fillRect(20, 20, 100, 100);
ctx19.lineWidth = 4;
ctx19.strokeStyle = "blue";
ctx19.strokeRect(170, 20, 100, 100);

// 21.Mặt cười (myCanvas20)
var c20 = document.getElementById('myCanvas20');
var ctx20 = c20.getContext('2d');
ctx20.lineWidth = 5;
ctx20.beginPath();
ctx20.arc(320, 240, 200, 0, 2 * Math.PI);
ctx20.stroke();
ctx20.closePath();
ctx20.beginPath();
ctx20.arc(270, 175, 30, 0, 2 * Math.PI);
ctx20.stroke();
ctx20.closePath();
ctx20.beginPath();
ctx20.arc(370, 175, 30, 0, 2 * Math.PI);
ctx20.stroke();
ctx20.closePath();
ctx20.lineWidth = 5;
ctx20.beginPath();
ctx20.arc(320, 240, 150, 0, -1 * Math.PI);
ctx20.stroke();
ctx20.closePath();