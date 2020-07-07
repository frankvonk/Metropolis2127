




//════════╡ CREATE TOOLBOX FOR STYLING / ANIMATING / ANIMATION ╞═════════════
// Standard Colors
var colAlert = 'tomato';
var colText = 'aqua';

// standard purple = #541388
// standard pink   = #d40078
var cHovercraftNotAvailable = "#d40078"; // purple
var cHovercraftAvailable = "aqua";





// Draws a pixel on given coordinates, lighter color then before
function lumen(x, y, factor){   
  var imgData = c.getImageData(x, y, 1, 1).data;
  c.fillStyle = 'rgba(' + factor*imgData[0] + ',' + factor*imgData[1] + ',' + factor*imgData[2] + ',' + 255 + ')';
  c.fillRect(x, y, 1, 1);  
}



// Return a color darker then sample pixel given
function shader(imgData, factor){   
  return 'rgb(' + factor*imgData[0] + ',' + factor*imgData[1] + ',' + factor*imgData[2] + ')';
}















// Create responsive system of sizes for animation, usable for all animations.
var plot1Perc = plot * 0.01;
var plot2Perc = plot * 0.02;
var plot2P5Perc = plot * 0.025;
var plot3Perc = plot * 0.03;
var plot4Perc = plot * 0.04;
var plot5Perc = plot * 0.05;
var plot6Perc = plot * 0.06;
var plot7Perc = plot * 0.07;
var plot8Perc = plot * 0.08;
var plot9Perc = plot * 0.09;
var plot10Perc = plot * 0.1;
var plot11Perc = plot * 0.11;
var plot12Perc = plot * 0.12;
var plot14Perc = plot * 0.14;
var plot15Perc = plot * 0.15;
var plot16Perc = plot * 0.16;
var plot17Perc = plot * 0.17;
var plot18Perc = plot * 0.18;
var plot19Perc = plot * 0.19;
var plot20Perc = plot * 0.2;
var plot25Perc = plot * 0.25;
var plot30Perc = plot * 0.3;
var plot31Perc = plot * 0.31;
var plot32Perc = plot * 0.32;
var plot33Perc = plot * 0.33;
var plot34Perc = plot * 0.34;
var plot35Perc = plot * 0.35;
var plot40Perc = plot * 0.4;
var plot45Perc = plot * 0.45;
var plot47Perc = plot * 0.475;
var plot48Perc = plot * 0.48;
var plot49Perc = plot * 0.49;
var plot50Perc = plot * 0.5;
var plot52Perc = plot * 0.525;
var plot55Perc = plot * 0.55;
var plot60Perc = plot * 0.6;
var plot61Perc = plot * 0.61;
var plot62Perc = plot * 0.62;
var plot64Perc = plot * 0.64;
var plot65Perc = plot * 0.65;
var plot66Perc = plot * 0.66;
var plot70Perc = plot * 0.7;
var plot75Perc = plot * 0.75;
var plot80Perc = plot * 0.8;
var plot85Perc = plot * 0.85;
var plot90Perc = plot * 0.9;
var plot95Perc = plot * 0.95;
var plot96Perc = plot * 0.96;
var plot97Perc = plot * 0.97;
var plot98Perc = plot * 0.98;
var plot99Perc = plot * 0.99;

var p1 = plot * 0.025;
var p2 = plot * 0.05;
var p3 = plot * 0.075;
var p4 = plot * 0.1;

var p5 = plot * 0.125;
var p6 = plot * 0.15;
var p7 = plot * 0.175;
var p8 = plot * 0.2;

var p9 = plot * 0.225;
var p10 = plot * 0.25;
var p11 = plot * 0.275;
var p12 = plot * 0.3;

var p13 = plot * 0.325;
var p14 = plot * 0.35;
var p15 = plot * 0.375;
var p16 = plot * 0.4;

var p17 = plot * 0.425;
var p18 = plot * 0.45;
var p19 = plot * 0.475;
var p20 = plot * 0.5;

var p21 = plot * 0.525;
var p22 = plot * 0.55;
var p23 = plot * 0.575;
var p24 = plot * 0.6;

var p25 = plot * 0.625;
var p26 = plot * 0.65;
var p27 = plot * 0.675;
var p28 = plot * 0.7;

var p29 = plot * 0.725;
var p30 = plot * 0.75;
var p31 = plot * 0.775;
var p32 = plot * 0.8;

var p33 = plot * 0.825;
var p34 = plot * 0.85;
var p35 = plot * 0.875;
var p36 = plot * 0.9;

var p37 = plot * 0.925;
var p38 = plot * 0.95;
var p39 = plot * 0.975;
var p40 = plot;

var p41 = plot + plot * 0.025;
var p42 = plot + plot * 0.05;
var p43 = plot + plot * 0.075;
var p44 = plot + plot * 0.1;

var p45 = plot + plot * 0.125;
var p46 = plot + plot * 0.15;
var p47 = plot + plot * 0.175;
var p48 = plot + plot * 0.2;

var p49 = plot + plot * 0.225;
var p50 = plot + plot * 0.25;
var p51 = plot + plot * 0.275;
var p52 = plot + plot * 0.3;

var p53 = plot + plot * 0.325;
var p54 = plot + plot * 0.35;
var p55 = plot + plot * 0.375;
var p56 = plot + plot * 0.4;


p1 = 2
p2 = 4
p3 = 6
p4 = 8
p5=10
p6=12
p7=14
p8=16
p9=18
p10=20
p11=22
p12=24
p13=26
p14=28
p15=30
p16=32
p17=34
p18=36
p19=38
p20=40
p21=42
p22=44
p23=46
p24=48
p25=50
p26=52
p27=54
p28=56
p29=58
p30=60
p31=62
p32=64
p33=66
p34=68
p35=70
p36=72
p37=74
p38=76
p39=78
p40=80
p41=82
p42=84
p43=86
p44=88
p45=90
p46=92
p47=94
p48=96
p49=98
p50=100
p51=102
p52=104
p53=106
p54=108
p55=110
p56=112
p57=114
p58=116
p59=118
p60=120




p1 = 1
p2 = 2
p3 = 3
p4 = 4
p5=5
p6=6
p7=7
p8=8
p9=9
p10=10
p11=11
p12=12
p13=13
p14=14
p15=15
p16=16
p17=17
p18=18
p19=19
p20=20
p21=21
p22=22
p23=23
p24=24
p25=25
p26=26
p27=27
p28=27
p29=29
p30=30
p31=31
p32=32
p33=33
p34=34
p35=35
p36=36
p37=37
p38=38
p39=39
p40=40
p41=41
p42=42
p43=43
p44=44
p45=45
p46=46
p47=47
p48=48
p49=49
p50=50
p51=51
p52=52
p53=53
p54=54
p55=55
p56=56
p57=57
p58=58
p59=59
p60=60






arrSizes = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,
  p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,
  p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,
  p31,p32,p33,p34,p35,p36,p37,p38,p39,plot];

//════════╡ END TOOLBOX STYING / ANIMATION ╞══════════════════════════════════


