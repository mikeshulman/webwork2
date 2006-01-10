/*
 *  jsMath-fallback-pc.js
 *  
 *  Part of the jsMath package for mathematics on the web.
 *
 *  This file makes changes needed for when the TeX fonts are not available
 *  with a browser on the PC.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright 2004-2005 by Davide P. Cervone
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

jsMath.Script.Uncompress([
  ['jsMath.Script.Start();jsMath.Add(jsMath.TeX,{cmr10',':[{c:"&Gamma;",','tclass:"greek"},{c:"&','Delta;",',2,'Theta;",',2,'Lambda;",',2,'Xi;",',2,'Pi;",',2,'Sigma;",',2,'Upsilon;",',2,'Phi;",',2,'Psi;",',2,'Omega;",','tclass:"','greek"},{c',':"ff','",ic:0.0778,krn:{"39":0.0778,"63":0.0778,"33":0.0778,"41":0.0778,"93":0.0778},lig:{"105":','14,"108":15},','tclass:"normal"},{c',':"fi",',27,':"fl",',27,':"ffi",',27,':"ffl",',27,':"&#x131',';",a:0,',27,':"j",','d:0.2,',27,':"&#x2CB',';",tclass:"accent"},{c:"&#','x2CA',43,'x2C7',43,'x2D8',43,'x2C9',43,'x2DA',43,'x0327;",',27,':"&#xDF;",',27,':"&#xE6',37,27,':"&#x153',37,27,':"&#xF8;",',27,':"&#xC6;",',27,':"&#x152;",',27,':"&#xD8;",',27,':"?",krn:{"108":-0.278,"76":-0.319},',27,':"!",lig:{"96":60},',27,':"&#x201D;",',27,':"#",',27,':"$",',27,':"%",',27,':"&amp;",',27,':"&#x2019;",krn:{"63":0.111,"33":0.','111},','lig:{"39":34},',27,':"(",',40,27,':")",',40,27,':"*",',27,':"+",a:0.1,',27,':",",a:-','0.3,d:0.2,','w:0.278,',27,':"-",a:0',',lig:{"45":','123},',27,':".",a:-0.','25,',27,':"/",',27,':"0",',27,':"1",',27,':"2",',27,':"3",',27,':"4",',27,':"5",',27,':"6",',27,':"7",',27,':"8",',27,':"9",',27,':":",',27,':";",',27,':"&#xA1;",',27,':"=",a:0,d:-0.1,',27,':"&#xBF;",',27,':"?",lig:{"96":62},',27,':"@",',27,':"A','",krn:{"','116','":-0.0278,"','67',150,'79',150,'71',150,'85',150,'81',150,'84','":-0.0833,"','89',162,'86','":-0.111',',"87',166,'},',27,':"B",',27,':"C",',27,':"D',148,'88',150,'87',150,'65',150,'86',150,'89','":-0.0278','},',27,':"E",',27,':"F',148,'111',162,'101',162,'117','":-0.0833,"114":-0.0833,"97":-0.0833,"65":-0.','111,"79',150,'67',150,'71',150,'81',186,'},',27,':"G",',27,':"H",',27,':"I',148,'73":0.','0278','},',27,':"J",',27,':"K',148,'79',150,'67',150,'71',150,'81',186,'},',27,':"L',148,'84',162,'89',162,'86',166,',"87',166,'},',27,':"M",',27,':"N",',27,':"O',148,'88',150,'87',150,'65',150,'86',150,'89',186,'},',27,':"P',148,'65',162,'111',150,'101',150,'97',150,'46',162,'44":-0.','0833','},',27,':"Q",d:1,',27,':"R',148,'116',150,'67',150,'79',150,'71',150,'85',150,'81',150,'84',162,'89',162,'86',166,',"87',166,'},',27,':"S",',27,':"T',148,'121',150,'101',162,'111',198,276,',"117":-0.',276,'},',27,':"U",',27,':"V",','ic:0.0139,krn:{"','111',162,'101',162,'117',198,'111,"79',150,'67',150,'71',150,'81',186,'},',27,':"W",',323,'111',162,'101',162,'117',198,'111,"79',150,'67',150,'71',150,'81',186,'},',27,':"X',148,'79',150,'67',150,'71',150,'81',186,'},',27,':"Y",ic:0.025,','krn:{"101',162,'111',198,276,316,276,'},',27,':"Z",',27,':"[",','d:0.1,',27,':"&#x201C;",',27,':"]",',383,27,':"&#x2C6',43,'x2D9',43,'x2018;",lig:{"96":92},',27,':"a','",a:0,krn:{"','118',150,'106":0.','0556,"121',150,'119',186,'},',27,':"b',148,'101','":0.0278,"','111',410,'120',150,'100',410,'99',410,'113',410,'118',150,400,'0556,"121',150,'119',186,'},',27,':"c',397,'104',150,'107',186,'},',27,':"d",',27,':"e','",a:0,',27,':"f',25,'12,"102":11,"108":13},',27,':"g','",a:0,d:1,',323,400,216,'},',27,':"h',148,'116',150,'117',150,'98',150,'121',150,'118',150,'119',186,'},',27,':"i",',27,':"j",d:1,',27,':"k',148,'97','":-0.0556,"','101',150,'97',150,'111',150,'99',186,'},',27,':"l",',27,':"m',397,'116',150,'117',150,'98',150,'121',150,'118',150,'119',186,'},',27,':"n',397,'116',150,'117',150,'98',150,'121',150,'118',150,'119',186,'},',27,':"o',397,'101',410,'111',410,'120',150,'100',410,'99',410,'113',410,'118',150,400,'0556,"121',150,'119',186,'},',27,':"p',448,371,410,'111',410,'120',150,'100',410,'99',410,'113',410,'118',150,400,'0556,"121',150,'119',186,'},',27,':"q',448,27,':"r',441,27,':"s',441,27,':"t',148,'121',150,'119',186,'},',27,':"u',397,'119',186,'},',27,':"v',441,323,'97',477,'101',150,'97',150,'111',150,'99',186,'},',27,':"w',441,323,'101',150,'97',150,'111',150,'99',186,'},',27,':"x',441,27,':"y',448,323,'111',150,'101',150,'97',150,'46',162,'44":-0.',276,'},',27,':"z',441,27,':"&#x2013',';",a:0.1,','ic:0.',216,105,'124},',27,':"&#x2014',641,'ic:0.',216,',',27,':"&#x2DD',43,'x2DC',43,'xA8;",',22,'accent"}],cmmi10',1,'ic:0.139',',krn:{"61":-0.0556,"59":-0.111,"58":-0.111,"127":0.',276,'},tclass:"igreek"},{c:"&',3,'krn:{"127":0.','167',664,5,'ic:0.',216,',krn:{"127":0.',276,664,7,666,'167',664,9,'ic:0.0757',672,276,664,11,'ic:0.0812,krn:{"61',477,'59":-0.0556,"58":-0.0556,"127":0.','0556',664,13,'ic:0.0576',672,276,664,15,'ic:0.139',662,'0556',664,17,666,276,664,19,'ic:0.11,krn:{"61',477,687,'0556',664,21,'ic:0.0502',672,276,664,'alpha',';",a:0,ic:0.','0037',672,216,'},',2,'beta',';",d:1,ic:0.','0528',672,276,'},',2,'gamma;",','a:0,d:1,ic:0.','0556,',2,'delta;",ic:0.0378,krn:{"',687,'0556},',2,'epsilon;",a:0',672,'0556},',22,'lucida"},{c:"&zeta',723,'0738',672,276,'},',2,'eta;",',730,'0359',672,'0556},',2,'theta;",ic:0.',216,672,276,'},',2,'iota;",a:0',672,'0556},',2,'kappa',37,2,'lambda;",',2,'mu',37,'d:1',672,216,'},',2,'nu',716,'0637,krn:{"',687,216,'},',2,'xi',723,'046',672,87,2,'pi',716,'0359,',2,'rho',37,'d:1',672,276,'},',2,'sigma',716,791,'krn:{"59',477,'58":-0.0556','},',2,'tau',716,'113,krn:{"',687,216,'},',2,'upsilon',716,'0359',672,216,'},',2,'phi',641,'d:1',672,276,'},',2,'chi',37,'d:1',672,'0556},',2,'psi',641,'d:1,ic:0.0359',672,87,2,'omega',716,791,2,'epsilon;",a:0',672,276,'},',22,23,':"&#x3D1;",',666,276,'},',22,'lucida"},{c:"&#','x3D6',716,216,',',22,856,'x3F1',37,'d:1',672,276,'},',22,856,'x3C2;",',730,'0799',672,276,'},',22,856,'x3D5',641,'d:1',672,276,'},',22,856,'x21BC',';",a:0,d:-0.','2,',22,'arrows"},{c:"&#','x21BD',888,'1,',22,891,'x21C0',888,'2,',22,891,'x21C1',888,'1,',22,'arrows"},{c',':"<span style=\\"position:relative; ','top:-.1em\\">&#','x02D3',';</span>",a:0','.1,',22,'symbol"},{c',907,908,'x02D2',910,'.1,','tclass:"symbol"},{c:"&#','x25B9;",',919,'x25C3;",',22,913,':"0",',27,':"1",',27,':"2",',27,':"3",',27,':"4",',27,':"5",',27,':"6",',27,':"7",',27,':"8",',27,':"9",',27,108,'3,',27,':",",a:-',101,27,':"&lt',641,27,':"<span style=\\"font-size',':133','%; position:relative; top:.','1em\\">/</','span>",',383,'krn:{"1',477,'65',477,'77',477,'78',477,'89":0.0556,"90":-0.0556},',27,':"&gt',641,27,':"&#x22C6',37,22,'arial"},{c:"&#','x2202;",ic:0.0556',672,276,'},',27,':"A",',666,'139','},tclass:"italic"},{c:"','B",ic:0.0502',672,276,985,'C",ic:0.0715,krn:{"61',150,687,276,985,'D",ic:0.',216,672,'0556',985,'E",ic:0.0576',672,276,985,'F",ic:0.139',662,276,985,'G",',666,276,985,'H",ic:0.0812,krn:{"61',477,687,'0556',985,'I",ic:0.0785',672,'111',985,'J",ic:0.0962',662,'167',985,'K",ic:0.0715,krn:{"61',477,687,'0556',985,'L",',666,216,985,'M','",ic:0.109,krn:{"','61',477,687,276,985,'N',1035,'61',162,'61',150,687,276,985,'O",ic:0.',216,672,276,985,'P",ic:0.139',662,276,985,'Q",d:1',672,276,985,'R",ic:0.00773',672,276,985,'S",ic:0.0576,krn:{"61',477,687,276,985,'T','",ic:0.139,krn:{"','61',150,687,276,985,'U',1035,'59',166,',"58',166,',"61',477,'127":0.',216,985,'V",ic:0.222,krn:{"59','":-0.167,"','58',1091,'61',166,985,'W',1073,'59',1091,'58',1091,'61',166,985,'X",ic:0.0785,krn:{"61',162,'61',150,687,276,985,'Y",ic:0.222,krn:{"59',1091,'58',1091,'61',166,985,'Z",ic:0.0715,krn:{"61',477,687,276,'},',22,'italic"},{c',':"&#x266D;",',919,'x266E;",',919,'x266F;",',22,913,':"<span style=\\"','position: relative; top',':-.3em','; font-size:75%\\">&#','x203F',910,',d:-0.1,',22,'arial','"},{c:"<span style=\\"',1135,':.4em',1137,'x2040',910,',d:-0.1,',22,976,'x2113;",',666,'111',985,'a',441,22,1126,':"b",',22,1126,':"c",a:0',672,'0556',985,'d',148,'89":0.0556,"90',477,'106',166,',"102',1091,1087,'167',985,'e",a:0',672,'0556',985,'f",d:1,ic:0.108,krn:{"',687,'167',985,'g",',730,'0359',672,216,985,'h',148,'127',186,985,'i",',22,1126,472,'ic:0.0572,krn:{"59',477,805,985,'k",ic:0.0315,',22,1126,':"l",ic:0.0197',672,276,985,'m',441,22,1126,':"n',441,22,1126,':"o",a:0',672,'0556',985,'p',441,'d:1',672,276,985,'q",',730,'0359',672,276,985,'r','",a:0,ic:0.',216,',krn:{"',687,'0556',985,'s",a:0',672,'0556',985,'t",',666,276,985,'u",a:0',672,216,985,'v',1237,'0359',672,216,985,'w',1237,'0269',672,276,985,'x",a:0',672,216,985,'y",',730,'0359',672,'0556',985,'z',1237,'044',672,'0556},',22,1126,':"&#x131;",a:0',672,216,985,'j",d:1',672,276,'},',22,1126,':"&#x2118',37,'d:1',672,87,22,'arial"},{c',907,'left: .3em; top: -.65em; font-size: 67%\\">&#x2192',';</span>",','ic:0.154,',919,'x0311;",ic:0.399,',22,'normal"}],cmsy10:[{c',907,'top:.1em\\">&#x2212',910,'.1,',919,'xB7',888,'2,',27,':"&#xD7',37,27,907,'top:.3em\\">&#x2A',910,',',27,':"&#xF7',37,27,':"&#x25CA;",',919,'xB1',641,27,':"&#x2213;",',919,'x2295;",',919,'x2296;",',919,'x2297;",',919,'x2298;",',919,'x2299;",',919,'x25EF;",',22,976,'x2218',888,'1,',22,'symbol2"},{c:"&#','x2022',888,'2,',919,'x224D',641,22,1353,'x2261',641,22,1353,'x2286;",',919,'x2287;",',919,'x2264;",',919,'x2265;",',919,'x227C;",',919,'x227D;",',22,913,':"~",a:0,d:-0.2,',27,':"&#x2248',641,'d:-0.1,',919,'x2282;",',919,'x2283;",',919,'x226A;",',919,'x226B;",',919,'x227A;",',919,'x227B;",',919,'x2190;",a:-0.1,',22,'arrow1"},{c:"&#','x2192;",a:-0.1,',22,1399,'x2191',';",a:0.2,d:0',',',22,'arrow1a"},{c:"&#','x2193',1404,',',22,1407,'x2194;",a:-0.1,',22,1399,'x2197',641,22,891,'x2198',641,22,891,'x2243',641,22,1353,'x21D0;",a:-0.1,',22,'arrow2"},{c:"&#','x21D2;",a:-0.1,',22,1430,'x21D1',1404,'.1,',22,1407,'x21D3',1404,'.1,',22,1407,'x21D4;",a:-0.1,',22,1430,'x2196',641,22,891,'x2199',641,22,891,'x221D',641,27,954,': 133%; margin-right: -.1em; ',1135,':.4em\\">&#x2032',910,',',22,856,'x221E',641,919,'x2208;",',919,'x220B;",',22,913,954,': 150',956,'2em\\">&#','x25B3',1303,22,913,954,': 150',956,1477,'x25BD',1303,22,913,954,': 133',956,'2em\\">/</',958,'d:1,',27,954,': 67%; ',1135,':-.15em; ','margin-right:-.','3em\\">&#x22A2',1303,919,'x2200;",',919,'x2203;",',919,'xAC',888,'1,',919,'x2205;",',919,'x211C;",',919,'x2111;",',919,'x22A4;",',919,'x22A5;",',919,'x2135;",',22,913,':"A','",krn:{"48":0.','194','},tclass:"cal"},{c:"','B",ic:0.0304',',krn:{"48":0.','139',1529,'C",ic:0.0583',1531,'139',1529,'D",ic:0.',216,1531,276,1529,'E",ic:0.0894',1531,'111',1529,'F",ic:0.0993',1531,'111',1529,'G",',40,'ic:0.0593',1531,'111',1529,'H",ic:0.00965',1531,'111',1529,'I",ic:0.0738',1531,216,1529,'J",',40,'ic:0.185',1531,'167',1529,'K",ic:0.0144',1531,'0556',1529,'L',1527,'139',1529,'M',1527,'139',1529,'N",ic:0.147',1531,276,1529,'O",ic:0.',216,1531,'111',1529,'P",ic:0.0822',1531,276,1529,'Q",d:0.2',1531,'111',1529,'R',1527,276,1529,'S",ic:0.075',1531,'139',1529,'T",ic:0.254',1531,216,1529,'U",ic:0.0993',1531,276,1529,'V",ic:0.0822',1531,216,1529,'W",ic:0.0822',1531,276,1529,'X",ic:0.146',1531,'139',1529,'Y",ic:0.0822',1531,276,1529,'Z",ic:0.0794',1531,'139},',22,'cal"},{c:"&#x22C3;",',919,'x22C2;",',919,'x228E;",',919,'x22C0;",',919,'x22C1;",',919,'x22A2;",',919,'x22A3;",',919,'x2308;",a:',101,22,976,'x2309;",','a:',101,22,976,'x230A;",','a:',101,22,976,'x230B;",','a:',101,22,1300,':"{",',40,27,':"}",',40,27,':"&#x2329;",','a:',101,919,'x232A;",a:',101,919,'x2223;",',383,919,'x2225;",',383,919,'x2195',1404,',',22,1407,'x21D5;",a:0.3,d:0,',22,1407,'x2216;",','a:0.3,',383,919,'x2240;",',22,913,907,'top: .8em\\">&#x221A',1303,'h:0.04,d:0.8,',919,'x2210;",a:0.4,',919,'x2207;",',22,913,954,': 85%; ','left:-.1em; margin-right:-.',1477,'x222B',910,'.4,',383,'ic:0.111,',22,856,'x2294;",',919,'x2293;",',919,'x2291;",',919,'x2292;",',919,'xA7;",',383,27,':"&#x2020;",',383,27,':"&#x2021;",',383,27,':"&#xB6;",a:0.3,',383,22,856,'x2663;",',22,976,'x2662;",',22,976,'x2661;",',22,976,'x2660;",',22,'arial"}],cmex10:[{c',90,'h:0.04,d:1.16,n:','16,',22,'delim1"},{c',93,1758,'17,',22,1761,382,1758,'104,',22,1761,387,1758,'105,',22,1761,':"&#x2308;",',1758,'106,',22,'delim1a"},{c:"&#',1654,1758,'107,',22,1781,1659,1758,'108,',22,1781,1664,1758,'109,',22,'delim1a',1143,'margin-left:-.1em\\">{</',958,1758,'110,',22,'delim1',1143,1501,'1em\\">}</',958,1758,'111,',22,1761,1675,1758,'68,',22,'delim1b','"},{c:"&#x232A;",',1758,'69,',22,'delim1b"},{c:"&#x2223',';",h:0.7,d:0.1,delim:{rep:','12},',919,'x2225',1822,'13},',22,913,111,1758,'46,',22,1781,1696,1758,'47,',22,'delim1a"},{c',90,'h:0.04,d:1.76,n:','18,',22,'delim2"},{c',93,1841,'19,',22,1844,90,'h:0.04,d:2.36,n:','32,',22,'delim3"},{c',93,1851,'33,',22,1854,382,1851,'34,',22,1854,387,1851,'35,',22,1854,1777,1851,'36,',22,'delim3a"},{c',':"&#x2309;",',1851,'37,',22,1874,':"&#x230A;",',1851,'38,',22,1874,':"&#x230B;",',1851,'39,',22,1874,907,1715,'1em\\">{</',958,1851,'40,',22,1854,907,'left:-.05em; ',1501,'1em\\">}</',958,1851,'41,',22,1854,1675,1851,'42,',22,'delim3b',1817,1851,'43,',22,'delim3b"},{c',111,1851,'44,',22,1874,':"&#x2216;",',1851,'45,',22,1874,90,'h:0.04,d:2.96,','n:48,',22,'delim4"},{c',93,1928,'n:49,',22,1931,382,1928,'n:50,',22,1931,387,1928,'n:51,',22,1931,1777,1928,'n:52,',22,'delim4a"},{c',1875,1928,'n:53,',22,1951,1880,1928,'n:54,',22,1951,1885,1928,'n:55,',22,1951,907,1715,'1em\\">{</',958,1928,'n:56,',22,1931,907,1715,'1em\\">}</',958,1928,'n:57,',22,1931,1675,1928,22,'delim4b',1817,1928,22,'delim4b"},{c',111,1928,22,1951,1922,1928,22,1951,111,1841,'30,',22,'delim2a"},{c',1922,1841,'31,',22,'delim2a"},{c:"&#xE6',';",h:0.8,d:0.2,delim:{','top:48,bot:64,rep:66','},tclass:"delimx"},{c:"&#','xF6',2009,'top:49,bot:65,rep:67',2011,'xE9',2009,'top:50,bot:52,rep:54',2011,'xF9',2009,'top:51,bot:53,rep:55',2011,'xEB',2009,'bot:52,rep:54',2011,'xFB',2009,'bot:53,rep:55',2011,'xEA',2009,'top:50,rep:54',2011,'xFA',2009,'top:51,rep:55',2011,'xEC',2009,'top:56,mid:60,bot:58,rep:62',2011,'xFC',2009,'top:57,mid:61,bot:59,rep:62',2011,'xEE',2009,'top:56,bot:','58,rep:62',2011,'xFE',2009,'top:57,bot:','59,rep:62',2011,'xED',2009,'rep:63',2011,'xFD',2009,'rep:119',2011,'xEF',2009,'rep:62},',22,'delimx',1143,'margin:.125em\\">|</',958,'h:0.8,d:0,delim:{top:120,bot:121,rep:63},',27,':"&#xE8',2009,2050,'59,rep:62',2011,'xF8',2009,2055,'58,rep:62',2011,'xE7',2009,'rep:66',2011,'xF7',2009,'rep:67',2011,'x2329;",',1841,'28,',22,'delim2b'],
  ['"},{c:"&#','x232A;",','h:0.04,d:1.76,n:','29',',tclass:"','delim2b',0,'x2294',';",h:0,d:1,n:','71',4,'bigop1',0,'x2294',';",h:0.1,d:1.','5',4,'bigop2',0,'x222E',';",h:0,d:1.11,ic:0.095,n:','73',4,'bigop1c',0,'x222E;",h:0,d:2.22,ic:0.222',4,'bigop2c',0,'x2299',8,'75',4,11,0,'x2299',14,'5',4,17,0,'x2295',8,'77',4,11,0,'x2295',14,'5',4,17,0,'x2297',8,'79',4,11,0,'x2297',14,'5',4,17,0,'x2211',8,'88',4,'bigop1a',0,'x220F',8,'89',4,69,0,'x222B',20,'90',4,23,0,'x222A',8,'91',4,'bigop1b',0,'x2229',8,'92',4,87,0,'x228E',8,'93',4,87,0,'x22C0',8,'94',4,11,0,'x22C1',8,'95',4,11,0,'x2211',14,'6',4,'bigop2a',0,'x220F',14,'5',4,117,0,'x222B;",h:0,d:2.22,ic:0.222',4,27,0,'x222A',14,'5',4,'bigop2b',0,'x2229',14,'5',4,133,0,'x228E',14,'5',4,133,0,'x22C0',14,'5',4,17,0,'x22C1',14,'5',4,17,0,'x2210',8,'97',4,69,0,'x2210',14,'5',4,117,0,'xFE3F;",h:0.','722,w:0.','65,n:99',4,'wide1',0,171,'85,w:1.1,n:100',4,'wide2',0,171,'99,w:1.65',4,'wide3','"},{c:"~",h:0.',172,'5,n:102',4,'wide1a',186,'8,w:0.8,n:103',4,'wide2a',186,'99,w:1.3',4,'wide3a','"},{c:"[",',2,'20',4,'delim2','"},{c:"]",',2,'21',4,203,0,'x2308;",',2,'22',4,'delim2a',0,'x2309;",',2,'23',4,214,0,'x230A;",',2,'24',4,214,0,'x230B;",',2,'25',4,214,'"},{c:"<span style=\\"','position:relative; ','left',':-.1em','; margin-right:-.','1em\\">{</span>",',2,'26',4,203,233,'position:relative',237,'1em; left:-.05em\\">}</span>",',2,'27',4,203,233,'font-size: ','150%; ','position:relative; top:.','8em','\\">&#x221A;</span>",h:0.','04,d:1.16,n:113',4,'root',233,252,'220%; ',254,'8em',256,'04,d:1.76,n:114',4,259,233,252,'310%; ',254,'8em',237,'01em',256,'06,d:2.36,n:115',4,259,233,252,'400%; ',254,'8em',237,'025em',256,'08,d:2.96,n:116',4,259,233,252,'490%; ',254,'8em',237,'03em',256,'1,d:3.75,n:117',4,259,233,252,'580%; ',254,'775em',237,'04em',256,'12,d:4.5,n:118',4,259,233,252,'750%; ',254,306,';','margin-right',':-.04em',256,'14,d:5.7',4,259,233,'margin-left',':.02em\\">|</','span><span style=\\"',326,':.08em; ','margin-right:.125em\\">|</span','>",h:0.8,d:0,delim:{top:126,bot:127,rep:119},tclass:"normal',0,'x2191',';",h:0.7,d:0,delim:{','top:120,rep:63','},tclass:"arrow1a',0,'x2193;",h:0.65,d:0,delim:{bot:121,rep:63',337,233,326,236,'\\"></',328,254,'55em',237,'3em\\">&#x25DC',';</span>",h:0.','05',4,'symbol',233,326,':-.3em\\"></',328,254,347,237,'1em\\">&#x25DD',350,'05',4,353,233,326,236,'\\"></',328,254,'15em',237,'3em\\">&#x25DF',350,'05',4,353,233,326,':-.3em\\"></',328,254,372,237,'1em\\">&#x25DE',350,'05',4,353,0,'x21D1',335,'top:126,rep:119',337,0,'x21D3',335,'bot:127,rep:119',337,'"}],cmti10:[{c:"&Gamma;",ic:0.133',4,'igreek"},{c:"&','Delta',';",tclass:"',403,'Theta;",ic:0.094',4,403,'Lambda',405,403,'Xi;",ic:0.153',4,403,'Pi;",ic:0.164',4,403,'Sigma;",ic:0.12',4,403,'Upsilon;",ic:0.111',4,403,'Phi;",ic:0.0599',4,403,'Psi;",ic:0.111',4,403,'Omega;",ic:0.103',4,'igreek','"},{c:"ff','",ic:0.212,krn:{"39":0.104,"63":0.104,"33":0.104,"41":0.104,"93":0.104},lig:{"105":','14,"108":15},','tclass:"italic"},{c',':"fi','",ic:0.103,',437,':"fl',439,437,':"ffi',439,437,':"ffl',439,437,':"&#x131;",a:0,','ic:0.','0767,',437,':"j",d:0.2,','ic:0.0374,',437,':"&#x2CB',405,'iaccent',0,'x2CA;",ic:0.0969',4,459,0,'x2C7;",ic:0.083',4,459,0,'x2D8;",ic:0.108',4,459,0,'x2C9;",ic:0.103',4,459,0,'x2DA',405,459,'"},{c:"?",','d:0.17,w:0.46,',437,':"&#xDF;",','ic:0.105,',437,':"&#xE6;",a:0,','ic:0.0751,',437,':"&#x153;",a:0,',487,437,':"&#xF8;",','ic:0.0919,',437,':"&#xC6;",','ic:0.12,',437,':"&#x152;",','ic:0.12,',437,':"&#xD8;",','ic:0.094,',437,':"?",krn:{"108":-0.','256,"76":-0.321},',437,':"!",','ic:0.124,lig:{"96":','60},',437,':"&#x201D;",','ic:0.0696,',437,':"#",ic:0.0662,',437,':"$",',437,':"%",ic:0.136,',437,':"&amp;",','ic:0.0969,',437,':"&#x2019;",','ic:0.124,','krn:{"63":0.','102,"33":0.102},lig:{"39":34},',437,':"(",d:0.2,','ic:0.162,',437,':")",d:0.2,','ic:0.0369,',437,':"*",ic:0.149,',437,':"+",a:0.1,','ic:0.0369,',437,':",",a:-0.3,d:0.2,w:0.278,',437,':"-",a:0,ic:0.0283',',lig:{"45":','123},',437,':".",a:-0.25,',437,':"/",ic:0.162,',437,':"0",ic:0.136,',437,':"1",ic:0.136,',437,':"2",ic:0.136,',437,':"3",ic:0.136,',437,':"4",ic:0.136,',437,':"5",ic:0.136,',437,':"6",ic:0.136,',437,':"7",ic:0.136,',437,':"8",ic:0.136,',437,':"9",ic:0.136,',437,':":",ic:0.0582,',437,':";",ic:0.0582,',437,':"&#xA1;",','ic:0.0756,',437,':"=",a:0,d:-0.1,','ic:0.0662,',437,':"&#xBF;",',437,':"?",ic:0.122,','lig:{"96":','62},',437,':"@",ic:0.096,',437,':"A",','krn:{"110":-0.0256,"108":-0.0256,"114":-0.0256,"117":-0.0256,"109":-0.0256,"116":-0.0256,"105":-0.0256,"67":-0.0256,"79":-0.0256,"71":-0.0256,"104":-0.0256,"98":-0.0256,"85":-0.0256,"107":-0.0256,"118":-0.0256,"119":-0.0256,"81":-','0.0256,"84','":-0.0767,"','89',590,'86','":-0.102,"','87',594,'101','":-0.0511,"','97',598,'111',598,'100',598,'99',598,'103',598,'113','":-0.0511','},',437,':"B',439,437,':"C",','ic:0.145,',437,':"D",',502,'krn:{"88','":-0.0256,"','87',622,'65',622,'86',622,'89":-0.','0256},',437,':"E",ic:0.12,',437,':"F','",ic:0.133,krn:{"','111',590,'101',590,'117','":-0.0767,"114":-0.0767,"97":-0.0767,"','65',594,'79',622,'67',622,'71',622,'81":-0.0256','},',437,':"G",ic:0.0872,',437,':"H",ic:0.164,',437,':"I",ic:0.158,',437,':"J",ic:0.14,',437,':"K",',617,'krn:{"79',622,'67',622,'71',622,650,'},',437,':"L",krn:{"84',590,'89',590,'86',594,'87',594,'101',598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"M",ic:0.164,',437,':"N",ic:0.164,',437,':"O",',502,'krn:{"88',622,'87',622,'65',622,'86',622,629,'0256},',437,':"P',439,'krn:{"65":-0.0767},',437,':"Q",d:1,',502,437,':"R",ic:0.0387,',588,'0.0256,"84',590,'89',590,'86',594,'87',594,'101',598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"S",ic:0.12,',437,':"T',635,'121',590,'101',590,'111',641,'117',590,'65":-0.0767},',437,':"U",ic:0.164,',437,':"V",ic:0.','184,krn:{"','111',590,'101',590,'117',641,'65',594,'79',622,'67',622,'71',622,650,'},',437,':"W",ic:0.',763,'65":-0.0767},',437,':"X",ic:0.158,krn:{"79',622,'67',622,'71',622,650,'},',437,':"Y",ic:0.','194',',krn:{"101',590,'111',641,'117',590,'65":-0.0767},',437,':"Z",',617,437,':"[",d:0.1,','ic:0.188,',437,':"&#x201C;",','ic:0.169,',437,':"]",d:0.1,','ic:0.105,',437,':"&#x2C6;",ic:0.0665',4,459,0,'x2D9;",ic:0.118',4,459,0,'x2018;",',508,'92},',437,':"a','",a:0,ic:0.',452,437,':"b",ic:0.0631',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"c',829,'0565',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"d',439,'krn:{"108":','0.0511},',437,':"e',829,'0751',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"f',435,'12,"102":11,"108":13},',437,':"g','",a:0,d:1,ic:0.','0885,',437,':"h",ic:0.',452,437,':"i",ic:0.102,',437,':"j",d:1,',617,437,':"k",ic:0.','108,',437,':"l',439,870,'0.0511},',437,':"m',829,452,437,':"n',829,452,'krn:{"39":-0.102},',437,':"o',829,'0631',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"p',897,'0631',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"q',897,'0885,',437,':"r',829,'108',796,598,'97',598,'111',598,'100',598,'99',598,'103',598,'113',610,'},',437,':"s',829,'0821,',437,':"t",ic:0.0949,',437,':"u',829,452,437,':"v',829,909,437,':"w',829,909,870,'0.0511},',437,':"x',829,'12,',437,':"y',897,'0885,',437,':"z',829,'123,',437,':"&#x2013;",a:0.1,ic:0.','0921',542,'124},',437,':"&#x2014;",a:0.1,ic:0.','0921,',437,':"&#x2DD;",ic:0.122',4,459,0,'x2DC;",ic:0.116',4,459,0,'xA8',405,459,'"}],cmbx10:[{c:"&Gamma',';",tclass:"bgreek"},{c:"&','Delta',1038,'Theta',1038,'Lambda',1038,'Xi',1038,'Pi',1038,'Sigma',1038,'Upsilon',1038,'Phi',1038,'Psi',1038,'Omega',405,'bgreek','"},{c:"ff','",ic:0.0778,krn:{"39":0.0778,"63":0.0778,"33":0.0778,"41":0.0778,"93":0.0778},lig:{"105":','14,"108":15},','tclass:"bold"},{c',':"fi",',1063,':"fl",',1063,':"ffi",',1063,':"ffl",',1063,450,1063,454,1063,':"&#x2CB',';",tclass:"baccent',0,'x2CA',1077,0,'x2C7',1077,0,'x2D8',1077,0,'x2C9',1077,0,'x2DA',1077,480,1063,483,1063,486,1063,489,1063,492,1063,495,1063,498,1063,501,1063,504,'278,"76":-0.319},',1063,507,582,'60},',1063,511,1063,':"#",',1063,':"$",',1063,':"%",',1063,520,1063,523,525,'111,"33":0.111},lig:{"39":34},',1063,528,1063,531,1063,':"*",',1063,536,1063,':",",a:-0.3,d:0.2,w:0.278,',1063,':"-",a:0',542,'123},',1063,':".",a:-0.25,',1063,':"/",',1063,':"0",',1063,':"1",',1063,':"2",',1063,':"3",',1063,':"4",',1063,':"5",',1063,':"6",',1063,':"7",',1063,':"8",',1063,':"9",',1063,':":",',1063,':";",',1063,573,1063,576,1063,':"&#xBF;",',1063,':"?",',582,'62},',1063,':"@",',1063,':"A",krn:{"116','":-0.0278,"','67',1185,'79',1185,'71',1185,'85',1185,'81',1185,'84','":-0.0833,"','89',1197,'86":-0.','111,"87":-0.111},',1063,':"B",',1063,616,1063,':"D",krn:{"88',1185,'87',1185,'65',1185,'86',1185,629,'0278},',1063,':"E",',1063,':"F",krn:{"111',1197,'101',1197,'117','":-0.0833,"114":-0.0833,"97":-0.0833,"65":-0.','111,"79',1185,'67',1185,'71',1185,'81":-0.0278','},',1063,':"G",',1063,':"H",',1063,':"I",krn:{"73":0.0278},',1063,':"J",',1063,':"K",krn:{"79',1185,'67',1185,'71',1185,1232,'},',1063,':"L",krn:{"84',1197,'89',1197,1200,'111,"87":-0.111},',1063,':"M",',1063,':"N",',1063,':"O",krn:{"88',1185,'87',1185,'65',1185,'86',1185,629,'0278},',1063,':"P",krn:{"65',1197,'111',1185,'101',1185,'97',1185,'46',1197,'44":-0.0833},',1063,717,1063,':"R",krn:{"116',1185,'67',1185,'79',1185,'71',1185,'85',1185,'81',1185,'84',1197,'89',1197,1200,'111,"87":-0.111},',1063,':"S",',1063,':"T",krn:{"121',1185,'101',1197,'111',1225,'0833,"117":-0.0833','},',1063,':"U",',1063,762,'0139,krn:{"','111',1197,'101',1197,'117',1225,'111,"79',1185,'67',1185,'71',1185,1232,'},',1063,781,1321,'111',1197,'101',1197,'117',1225,'111,"79',1185,'67',1185,'71',1185,1232,'},',1063,':"X",krn:{"79',1185,'67',1185,'71',1185,1232,'},',1063,794,'025',796,1197,'111',1225,1315,'},',1063,804,1063,807,1063,810,1063,813,1063,':"&#x2C6',1077,0,'x2D9',1077,0,824,582,'92},',1063,':"a','",a:0,krn:{"','118',1185,'106":0.','0556,"121',1185,'119":-0.','0278},',1063,':"b",krn:{"101','":0.0278,"','111',1401,'120',1185,'100',1401,'99',1401,'113',1401,'118',1185,1394,'0556,"121',1185,1397,'0278},',1063,':"c',1391,'104',1185,'107":-0.0278},',1063,':"d",',1063,':"e",a:0,',1063,':"f',1061,'12,"102":11,"108":13},',1063,':"g',897,1321,1394,'0278},',1063,':"h",krn:{"116',1185,'117',1185,'98',1185,'121',1185,'118',1185,1397,'0278},',1063,':"i",',1063,905,1063,':"k",krn:{"97":-0.0556,"101',1185,'97',1185,'111',1185,'99":-0.','0278},',1063,':"l",',1063,':"m',1391,'116',1185,'117',1185,'98',1185,'121',1185,'118',1185,1397,'0278},',1063,':"n',1391,'116',1185,'117',1185,'98',1185,'121',1185,'118',1185,1397,'0278},',1063,':"o",a:0',796,1401,'111',1401,'120',1185,'100',1401,'99',1401,'113',1401,'118',1185,1394,'0556,"121',1185,1397,'0278},',1063,':"p",a:0,d:1',796,1401,'111',1401,'120',1185,'100',1401,'99',1401,'113',1401,'118',1185,1394,'0556,"121',1185,1397,'0278},',1063,':"q",a:0,d:1,',1063,':"r",a:0,',1063,':"s",a:0,',1063,':"t",krn:{"121',1185,1397,'0278},',1063,':"u',1391,1397,'0278},',1063,':"v',829,1321,'97":-0.0556,"101',1185,'97',1185,'111',1185,1463,'0278},',1063,':"w',829,'0139',796,1185,'97',1185,'111',1185,1463,'0278},',1063,':"x",a:0,',1063,':"y',897,1321,'111',1185,'101',1185,'97',1185,'46',1197,'44":-0.0833},',1063,':"z",a:0,',1063,1018,'0278',542,'124},',1063,1023,'0278,',1063,':"&#x2DD',1077,0,'x2DC',1077,0,'xA8',1077,'"}]});jsMath.Add(jsMath.Box,{TeX:function(C,_2,_3,_4){c=jsMath.TeX[_2][C];if(!c.tclass){c.tclass=_2;}if(c.h!=null&&c.a==null){c.a=c.h-1.1*jsMath.TeX.x_height;}if(c.img!=null&&c.c!=""){this.TeXIMG(_2,C,','jsMath.Typeset.','StyleSize(_3,_4));}var _5=this.Text(c.c,c.tclass,_3,_4,c.a,c.d);var _6=',1614,'TeX(_3,_4).scale;if(c.bh!=null){_5.bh=c.bh*_6;_5.bd=c.bd*_6;}else{var h=_5.bd+_5.bh;var ph=Math.round(h*jsMath.em);if(h>jsMath.hd){_5.bd=jsMath.EmBoxFor(jsMath.HTML.Class(c.tclass,c.c)+"<img src=\\""+jsMath.blank+"\\" style=\\""+"width: 1px; height: "+ph+"px\\" />").h-h;_5.bh=h-_5.bd;}c.bh=_5.bh/_6;c.bd=_5.bd/_6;}if(jsMath.msieFontBug){_5.html+="<','span style=\\"','display: none\\">x</span>";}return _5;}});','jsMath.Setup.Styles({".typeset .','cmr10','":"font-family',': serif','",".typeset .','italic":"font-style: italic',1624,'bold":"font-weight: bold',1624,'lucida',1622,': \'lucida sans unicode','\'",".typeset .','arial',1622,': \'arial unicode MS',1632,'cal',1622,': \'Script MT\', \'Script MT Bold\', cursive',1624,'arrows','":"font-family: \'Arial unicode MS',1632,'arrow1',1642,1632,'arrow1a',1642,'\'; ',254,'05em;left:-.',372,237,372,1624,'arrow2',1642,'\'; ',234,'top',236,';",".typeset .','arrow3',1642,'\'; margin:.1em',1624,353,1642,1632,'symbol2',1642,1632,'delim1','":"font-family: \'Times New Roman\'; font-','size: ','133%; ',254,'7em',1624,'delim1a','":"font-family: \'Lucida sans unicode\'; font-size: ','133%; ',254,'8em',1624,'delim1b',1642,'\'; ',252,'133%; ',254,'8em',1624,203,1674,1675,'180%; ',254,'75em',1624,214,1681,'180%; ',254,'8em',1624,5,1642,'\'; ',252,'180%; ',254,'8em',1624,'delim3',1674,1675,'250%; ',254,'725em',1624,'delim3a',1681,'250%; ',254,306,1624,'delim3b',1642,'\'; ',252,'250%; ',254,'8em',1624,'delim4',1674,1675,'325%; ',254,'7em',1624,'delim4a',1681,'325%; ',254,306,1624,'delim4b',1642,'\'; ',252,'325%; ',254,'8em',1624,'delimx',1622,': Symbol; ',254,'2em',1624,'greek',1622,': \'Times New Roman',1632,433,1674,'style:italic',1624,1059,1674,'weight:bold',1624,11,1642,'\'; ',252,'130','%; position: relative; top',': .7em; margin:-.05em',1624,69,1642,'\'; ',252,'110',1780,': .85em',1662,87,1642,'\'; ',252,'180',1780,': .6em',1624,23,1642,'\'; ',252,'85',1780,': 1em',1624,17,1642,'\'; ',252,'230',1780,1797,'; margin:-.05em',1624,117,1642,'\'; ',252,'185',1780,': .75em',1624,133,1642,'\'; ',252,'275',1780,': .',347,1624,27,1642,'\'; ',252,'185',1780,1805,237,'1em',1624,175,'":"',252,'67',1780,':-.5em',1662,180,'":"',252,'110',1780,':-.2em',1662,185,'":"',252,'175%;",".typeset .',190,1674,1675,'75',1780,1848,1624,194,1674,1675,'133',1780,1855,1624,198,1674,1675,'200',1780,236,1624,259,1642,'\'; ',319,':-.075em',1624,'accent',1642,'\'; ',254,'05em; left:.15em',1624,459,1642,'\'; ',254,1892,'; font-','style:italic',1624,'baccent',1642,'\'; ',254,1892,1899,1773,'"});','if(jsMath.browser=="','Mozilla','"){jsMath.Update.TeXfonts({cmex10:{"','48":{c:"&#xF8EB;"},"49":{c:"&#xF8F6;"},"50":{c:"&#xF8EE;"},"51":{c:"&#xF8F9;"},"52":{c:"&#xF8F0;"},"53":{c:"&#xF8FB;"},"54":{c:"&#xF8EF;"},"55":{c:"&#xF8FA;"},"56":{c:"&#xF8F1;"},"57":{c:"&#xF8FC;"},"58":{c:"&#xF8F3;"},"59":{c:"&#xF8FE;"},"60":{c:"&#xF8F2;"},"61":{c:"&#xF8FD;"},"62":{c:"&#xF8F4;"},"64":{c:"&#xF8ED;"},"65":{c:"&#xF8F8;"},"66":{c:"&#xF8EC;"},"67":{c:"&#xF8F7;"}}});',1620,'accent',1622,': Arial unicode MS; ',254,'05em; left:.05em"});}',1910,'MSIE',1912,'63":{c:"<',1618,234,'left:.125em; ',331,'>"},"119":{c:"<',1618,234,'left:.02em; ',319,'=.08em\\">|</',328,331,'>"}}});}jsMath.Macro("not","\\\\mathrel{\\\\rlap{\\\\kern 3mu/}}");jsMath.Macro("bowtie","\\\\mathrel\\\\triangleright\\\\kern-6mu\\\\mathrel\\\\triangleleft");jsMath.Box.defaultH=0.8;jsMath.Script.End();']
]);