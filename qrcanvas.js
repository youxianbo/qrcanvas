/**
 * QRCanvas - Generate characteristic qrcodes with a canvas.
 * @version v1.0.3
 * @license ISC
 * @author Gerald <i@gerald.top>
 */
!function(t,r){"object"==typeof module&&module.exports?module.exports=r(t):t.qrcanvas=r(t)}("undefined"!=typeof window?window:this,function(t){function r(t){this.a(t)}function e(t){var e=new r(t);return e.b()}function n(t,r){var e=this;r=r||{},e.margin=r.margin||0,e.nobg=!!r.nobg,e.isBackgroundColor=r.isBackgroundColor||e.isBackgroundColor,e.prepare(t)}var a=function(){function t(r,e){if("undefined"==typeof r.length)throw new Error(r.length+"/"+e);var n=function(){for(var t=0;t<r.length&&0==r[t];)t+=1;for(var n=new Array(r.length-t+e),a=0;a<r.length-t;a+=1)n[a]=r[a+t];return n}(),a={};return a.getAt=function(t){return n[t]},a.getLength=function(){return n.length},a.multiply=function(r){for(var e=new Array(a.getLength()+r.getLength()-1),n=0;n<a.getLength();n+=1)for(var o=0;o<r.getLength();o+=1)e[n+o]^=i.gexp(i.glog(a.getAt(n))+i.glog(r.getAt(o)));return t(e,0)},a.mod=function(r){if(a.getLength()-r.getLength()<0)return a;for(var e=i.glog(a.getAt(0))-i.glog(r.getAt(0)),n=new Array(a.getLength()),o=0;o<a.getLength();o+=1)n[o]=a.getAt(o);for(var o=0;o<r.getLength();o+=1)n[o]^=i.gexp(i.glog(r.getAt(o))+e);return t(n,0).mod(r)},a}var r=function(r,e){var a=236,i=17,l=r,c=n[e],h=null,s=0,v=null,d=new Array,w={},m=function(t,r){for(;null==v;)try{v=M(l,c,d);break}catch(t){if(l++,l>40)throw t}s=4*l+17,h=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(s),p(0,0),p(s-7,0),p(0,s-7),E(),k(),D(t,r),l>=7&&A(t),T(v,r)},p=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||s<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||s<=r+n||(0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4?h[t+e][r+n]=!0:h[t+e][r+n]=!1)},y=function(){for(var t=0,r=0,e=0;e<8;e+=1){m(!0,e);var n=o.getLostPoint(w);(0==e||t>n)&&(t=n,r=e)}return r},k=function(){for(var t=8;t<s-8;t+=1)null==h[t][6]&&(h[t][6]=t%2==0);for(var r=8;r<s-8;r+=1)null==h[6][r]&&(h[6][r]=r%2==0)},E=function(){for(var t=o.getPatternPosition(l),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],a=t[e];if(null==h[n][a])for(var i=-2;i<=2;i+=1)for(var u=-2;u<=2;u+=1)i==-2||2==i||u==-2||2==u||0==i&&0==u?h[n+i][a+u]=!0:h[n+i][a+u]=!1}},A=function(t){for(var r=o.getBCHTypeNumber(l),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);h[Math.floor(e/3)][e%3+s-8-3]=n}for(var e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);h[e%3+s-8-3][Math.floor(e/3)]=n}},D=function(t,r){for(var e=c<<3|r,n=o.getBCHTypeInfo(e),a=0;a<15;a+=1){var i=!t&&1==(n>>a&1);a<6?h[a][8]=i:a<8?h[a+1][8]=i:h[s-15+a][8]=i}for(var a=0;a<15;a+=1){var i=!t&&1==(n>>a&1);a<8?h[8][s-a-1]=i:a<9?h[8][15-a-1+1]=i:h[8][15-a-1]=i}h[s-8][8]=!t},T=function(t,r){for(var e=-1,n=s-1,a=7,i=0,u=o.getMaskFunction(r),f=s-1;f>0;f-=2)for(6==f&&(f-=1);;){for(var g=0;g<2;g+=1)if(null==h[n][f-g]){var l=!1;i<t.length&&(l=1==(t[i]>>>a&1));var c=u(n,f-g);c&&(l=!l),h[n][f-g]=l,a-=1,a==-1&&(i+=1,a=7)}if(n+=e,n<0||s<=n){n-=e,e=-e;break}}},C=function(r,e){for(var n=0,a=0,i=0,u=new Array(e.length),f=new Array(e.length),g=0;g<e.length;g+=1){var l=e[g].dataCount,c=e[g].totalCount-l;a=Math.max(a,l),i=Math.max(i,c),u[g]=new Array(l);for(var h=0;h<u[g].length;h+=1)u[g][h]=255&r.getBuffer()[h+n];n+=l;var s=o.getErrorCorrectPolynomial(c),v=t(u[g],s.getLength()-1),d=v.mod(s);f[g]=new Array(s.getLength()-1);for(var h=0;h<f[g].length;h+=1){var w=h+d.getLength()-f[g].length;f[g][h]=w>=0?d.getAt(w):0}}for(var m=0,h=0;h<e.length;h+=1)m+=e[h].totalCount;for(var p=new Array(m),y=0,h=0;h<a;h+=1)for(var g=0;g<e.length;g+=1)h<u[g].length&&(p[y]=u[g][h],y+=1);for(var h=0;h<i;h+=1)for(var g=0;g<e.length;g+=1)h<f[g].length&&(p[y]=f[g][h],y+=1);return p},M=function(t,r,e){for(var n=u.getRSBlocks(t,r),g=f(),l=0;l<e.length;l+=1){var c=e[l];g.put(c.getMode(),4),g.put(c.getLength(),o.getLengthInBits(c.getMode(),t)),c.write(g)}for(var h=0,l=0;l<n.length;l+=1)h+=n[l].dataCount;if(g.getLengthInBits()>8*h)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*h+")");for(g.getLengthInBits()+4<=8*h&&g.put(0,4);g.getLengthInBits()%8!=0;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*h)break;if(g.put(a,8),g.getLengthInBits()>=8*h)break;g.put(i,8)}return C(g,n)};return w.addData=function(t){var r=g(t);d.push(r),v=null},w.isDark=function(t,r){if(t<0||s<=t||r<0||s<=r)throw new Error(t+","+r);return h[t][r]},w.getModuleCount=function(){return s},w.make=function(){m(!1,y())},w};r.stringToBytes=function(t){var r=[];t=t.replace(/\r\n/g,"\n");for(var e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(n>>6|192,63&n|128):r.push(n>>12|224,n>>6&63|128,63&n|128)}return r},r.createStringToBytes=function(t,r){var e=function(){for(var e=base64DecodeInputStream(t),n=function(){var t=e.read();if(t==-1)throw new Error;return t},a=0,o={};;){var i=e.read();if(i==-1)break;var u=n(),f=n(),g=n(),l=String.fromCharCode(i<<8|u),c=f<<8|g;o[l]=c,a+=1}if(a!=r)throw new Error(a+" != "+r);return o}(),n="?".charCodeAt(0);return function(t){for(var r=new Array,a=0;a<t.length;a+=1){var o=t.charCodeAt(a);if(o<128)r.push(o);else{var i=e[t.charAt(a)];"number"==typeof i?(255&i)==i?r.push(i):(r.push(i>>>8),r.push(255&i)):r.push(n)}}return r}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},o=function(){var r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,o=7973,u=21522,f={},g=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r};return f.getBCHTypeInfo=function(t){for(var r=t<<10;g(r)-g(n)>=0;)r^=n<<g(r)-g(n);return(t<<10|r)^u},f.getBCHTypeNumber=function(t){for(var r=t<<12;g(r)-g(o)>=0;)r^=o<<g(r)-g(o);return t<<12|r},f.getPatternPosition=function(t){return r[t-1]},f.getMaskFunction=function(t){switch(t){case a.PATTERN000:return function(t,r){return(t+r)%2==0};case a.PATTERN001:return function(t,r){return t%2==0};case a.PATTERN010:return function(t,r){return r%3==0};case a.PATTERN011:return function(t,r){return(t+r)%3==0};case a.PATTERN100:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case a.PATTERN101:return function(t,r){return t*r%2+t*r%3==0};case a.PATTERN110:return function(t,r){return(t*r%2+t*r%3)%2==0};case a.PATTERN111:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},f.getErrorCorrectPolynomial=function(r){for(var e=t([1],0),n=0;n<r;n+=1)e=e.multiply(t([1,i.gexp(n)],0));return e},f.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:return 8;case e.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(r<27)switch(t){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(r<41))throw new Error("type:"+r);switch(t){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},f.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var a=0;a<r;a+=1){for(var o=0,i=t.isDark(n,a),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)a+f<0||r<=a+f||0==u&&0==f||i==t.isDark(n+u,a+f)&&(o+=1);o>5&&(e+=3+o-5)}for(var n=0;n<r-1;n+=1)for(var a=0;a<r-1;a+=1){var g=0;t.isDark(n,a)&&(g+=1),t.isDark(n+1,a)&&(g+=1),t.isDark(n,a+1)&&(g+=1),t.isDark(n+1,a+1)&&(g+=1),0!=g&&4!=g||(e+=3)}for(var n=0;n<r;n+=1)for(var a=0;a<r-6;a+=1)t.isDark(n,a)&&!t.isDark(n,a+1)&&t.isDark(n,a+2)&&t.isDark(n,a+3)&&t.isDark(n,a+4)&&!t.isDark(n,a+5)&&t.isDark(n,a+6)&&(e+=40);for(var a=0;a<r;a+=1)for(var n=0;n<r-6;n+=1)t.isDark(n,a)&&!t.isDark(n+1,a)&&t.isDark(n+2,a)&&t.isDark(n+3,a)&&t.isDark(n+4,a)&&!t.isDark(n+5,a)&&t.isDark(n+6,a)&&(e+=40);for(var l=0,a=0;a<r;a+=1)for(var n=0;n<r;n+=1)t.isDark(n,a)&&(l+=1);var c=Math.abs(100*l/r/r-50)/5;return e+=10*c},f}(),i=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(var e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(var e=0;e<255;e+=1)r[t[e]]=e;var n={};return n.glog=function(t){if(t<1)throw new Error("glog("+t+")");return r[t]},n.gexp=function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]},n}(),u=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16][81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={},a=function(r,e){switch(e){case n.L:return t[4*(r-1)+0];case n.M:return t[4*(r-1)+1];case n.Q:return t[4*(r-1)+2];case n.H:return t[4*(r-1)+3];default:return}};return e.getRSBlocks=function(t,e){var n=a(t,e);if("undefined"==typeof n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=n.length/3,i=new Array,u=0;u<o;u+=1)for(var f=n[3*u+0],g=n[3*u+1],l=n[3*u+2],c=0;c<f;c+=1)i.push(r(g,l));return i},e}(),f=function(){var t=new Array,r=0,e={};return e.getBuffer=function(){return t},e.getAt=function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},e.put=function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},e.getLengthInBits=function(){return r},e.putBit=function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1},e},g=function(t){var n=e.MODE_8BIT_BYTE,a=r.stringToBytes(t),o={};return o.getMode=function(){return n},o.getLength=function(t){return a.length},o.write=function(t){for(var r=0;r<a.length;r+=1)t.put(a[r],8)},o};return r}(),o=function(){function t(t,r){var e=i();return e.width=t,e.height=r,e}function r(t,r){var n=r.data;if(n){var a=t.getContext("2d");Array.isArray(n)||(n=[n]),e(n,function(e){if(o.isDrawable(e))a.drawImage(e,0,0,t.width,t.height);else{var n,i,u,f;e="string"==typeof e?{style:e}:e||{},n=("col"in e?e.col*r.cellSize:e.x)||0,i=("row"in e?e.row*r.cellSize:e.y)||0,u=("cols"in e?e.cols*r.cellSize:e.width)||r.size,f=("rows"in e?e.rows*r.cellSize:e.height)||r.size,n<0&&(n+=r.size),i<0&&(i+=r.size),a.fillStyle=e.style||"black",a.fillRect(n,i,u,f)}})}return t}function e(t,r,e){for(var n=t&&t.length||0,a=e||0;a<n;a++)r.call(t,t[a],a)}function n(){var t=arguments[0];return e(arguments,function(r){r&&e(Object.keys(r),function(e){t[e]=r[e]})},1),t}function a(){var t=[];return e(arguments,function(r){r&&(t=t.concat(r))}),t}var i,u;return i=function(){return document.createElement("canvas")},u=function(t){return t instanceof HTMLElement},{isDrawable:u,getCanvas:t,drawCanvas:r,forEach:e,assign:n,merge:a}}();r.c={square:{data:function(t,e){var n=e.context,a=e.cellSize;e.isDark(t.i,t.j)&&(n.fillStyle=r.d,n.fillRect(t.x,t.y,a,a))}}},r.e=function(t){return r.c[t]||r.c.square},r.d="black",r.f="white",r.prototype.a=function(t){var e=this;t=e.g=o.assign({typeNumber:1,correctLevel:"M",foreground:r.d,background:null,data:"",effect:{},noAlpha:!0,reuseCanvas:null},t);var n=e.h={color:r.d,fontFamily:"Cursive",clearEdges:0,margin:-1,size:.15},i=t.logo;i&&(i.image||i.text)&&o.assign(n,i),(n.image||n.text)&&n.margin<0&&(n.margin=n.image?0:2),(n.image||n.text||"image"===t.effect.key)&&(t.correctLevel="H");var u=a(t.typeNumber,t.correctLevel);u.addData(t.data),u.make();var f=u.getModuleCount(),g=t.cellSize,l=t.size;g||l||(g=2),g?l=g*f:g=l/f,e.k=g,e.l=l,e.m=f,e.n=u},r.prototype.o=function(t,r){var e=this,n=e.m;return t>=0&&t<n&&r>=0&&r<n&&e.p(t*n+r)&&e.n.isDark(t,r)},r.prototype.b=function(){var t=this,e=t.g,n=t.m,a=Math.ceil(t.k),i=a*n,u=o.getCanvas(i,i),f={cellSize:a,size:i,count:n,effect:e.effect,foreground:e.foreground};t.q(u),t.r(u,f),t.s(u);var g=t.t(f),l=g.getContext("2d");l.globalCompositeOperation="destination-in",l.drawImage(u,0,0);var c=o.drawCanvas(o.getCanvas(i,i),{cellSize:a,size:i,data:o.merge(e.noAlpha?r.f:null,e.background,g)}),h=t.h;h.canvas&&c.getContext("2d").drawImage(h.canvas,h.x,h.y);var s=t.l,v=e.reuseCanvas;if(v?v.width=v.height=s:i!=s&&(v=o.getCanvas(s,s)),v){var d=v.getContext("2d");d.drawImage(c,0,0,s,s)}else v=c;return v},r.prototype.t=function(t){var e=this,n=t.cellSize,a=t.size,i=t.effect||{},u=r.e(i.key);return u.foreground?u.foreground(o.assign({mask:function(){var r=o.getCanvas(a,a);return e.r(r,{cellSize:n,count:t.count}),r}},t)):o.drawCanvas(o.getCanvas(a,a),{cellSize:n,size:a,data:t.foreground})},r.prototype.q=function(t){var r,e,n,a=this,i=a.h,u=a.m,f=a.k,g=a.l,l=t.getContext("2d");if(i.image)r=i.image,e=r.naturalWidth||r.width,n=r.naturalHeight||r.height;else{if(!i.text)return;n=100,r="",i.fontStyle&&(r+=i.fontStyle+" "),r+=n+"px "+i.fontFamily,l.font=r,e=l.measureText(i.text).width}r=e/n;var c=~~(Math.sqrt(Math.min(e*n/g/g,i.size)/r)*u),h=~~(r*c);(u-h)%2&&h++,(u-c)%2&&c++,r=Math.min((c*f-2*i.margin)/n,(h*f-2*i.margin)/e,1),i.width=~~(r*e),i.height=~~(r*n),i.x=(g-i.width>>1)-i.margin,i.y=(g-i.height>>1)-i.margin,i.canvas=o.getCanvas(i.width+2*i.margin,i.height+2*i.margin);var s=i.canvas.getContext("2d");if(i.image)s.drawImage(i.image,i.margin,i.margin,i.width,i.height);else{var v="";i.fontStyle&&(v+=i.fontStyle+" "),v+=i.height+"px "+i.fontFamily,s.font=v,s.textAlign="center",s.textBaseline="middle",s.fillStyle=i.color,s.fillText(i.text,(i.width>>1)+i.margin,(i.height>>1)+i.margin)}a.u()},r.prototype.r=function(t,e){for(var n=this,a=e.cellSize,o=e.count,i=e.effect||{},u={cellSize:a,count:o,context:t.getContext("2d"),value:i.value||0,isDark:n.o.bind(n)},f=r.e(i.key),g=0;g<o;g++)for(var l=0;l<o;l++)f.data({i:g,j:l,x:l*a,y:g*a},u)},r.prototype.v=function(t,r,e){return~~(t*e/255+r*(255-e)/255)},r.prototype.u=function(){},r.prototype.s=function(t){},r.prototype.p=function(t){return!this.h.clearEdges},e.effects=r.c;var i=t.Uint8Array||t.Array;return n.prototype={prepare:function(t){function r(t){var r=l[t];if(!r){var e=4*t,n=h.call(f.data,e,e+4);r=a.isBackgroundColor(n)?l[t]=1:l[t]=2}return 1===r}function e(t){if(!g[t]){for(var e=t%a.width,n=~~(t/a.width),o=a.margin+1,i=Math.max(0,e-o+1);i<e+o&&i<a.width;i++)for(var u=Math.max(0,n-o+1);u<n+o&&u<a.height;u++){var f=i-e,l=u-n;if(f*f+l*l<o*o&&!r(i+u*a.width))return void(g[t]=2)}g[t]=1,c.push(t)}}function n(t,r){t%a.width&&e(t-1),r||e(t),(t+1)%a.width&&e(t+1)}var a=this,o=t.getContext("2d");if(a.width=t.width,a.height=t.height,a.total=a.width*a.height,!a.nobg){var u,f=o.getImageData(0,0,a.width,a.height),g=a.data=new i(a.total),l=new i(a.total),c=[],h=[].slice;for(u=0;u<a.width;u++)e(u),e(a.total-1-u);for(u=0;u<a.height;u++)e(u*a.width),e((u+1)*a.width-1);for(var s=0;s<c.length;){var v=c[s];v>a.width&&n(v-a.width),n(v,!0),v+a.width<a.total&&n(v+a.width),s++}a.totalBackground=s}},isBackgroundColor:function(t){return!t[3]},isBackground:function(){var t,r=arguments,e=this;if(1==r.length)t=r[0];else{if(2!=r.length){if(4==r.length){var n=r[0],a=r[1],o=n+r[2],i=a+r[3];n<0&&(n=0),a<0&&(a=0),o>e.width&&(o=e.width),i>e.height&&(i=e.height);for(var u=n;u<o;u++)for(var f=a;f<i;f++)if(!e.isBackground(u,f))return!1;return!0}throw Error("Invalid index")}t=r[0]+r[1]*e.width}return!e.nobg&&1===e.data[t]},clearBackground:function(t){var r=this;if(t.width==r.width&&t.height==r.height){for(var e=t.getContext("2d"),n=e.getImageData(0,0,r.width,r.height),a=0;a<r.total;a++)if(r.isBackground(a)){var o=4*a;n.data[o]=0,n.data[o+1]=0,n.data[o+2]=0,n.data[o+3]=0}return e.putImageData(n,0,0),t}}},r.prototype.u=function(){var t=this,r=t.h,e=t.m,a=t.k,o=r.edger=new n(r.canvas,{margin:r.margin,nobg:2==r.clearEdges});if(r.clearEdges)for(var u=t.w=new i(e*e),f=0;f<e;f++)for(var g=0;g<e;g++)u[f*e+g]=o.isBackground(g*a-r.x,f*a-r.y,a,a)},r.prototype.s=function(t){var r=this,e=r.h;if((e.image||e.text)&&!e.clearEdges){var n=o.getCanvas(e.width+2*e.margin,e.height+2*e.margin),a=n.getContext("2d");a.fillStyle="white",a.fillRect(0,0,n.width,n.height),e.edger.clearBackground(n);var i=t.getContext("2d");i.globalCompositeOperation="destination-out",i.drawImage(n,e.x,e.y)}},r.prototype.p=function(t){var r=this;return!r.h.clearEdges||r.w[t]},!function(){function t(t,r,e,n,a,o){o?t.arcTo(r,e,n,a,o):(t.lineTo(r,e),t.lineTo(n,a))}function e(e,n){var a=e.x,o=e.y,i=n.cellSize,u=n.value*i/2,f=n.context;n.isDark(e.i,e.j)&&(f.fillStyle=r.d,f.beginPath(),f.moveTo(a+.5*i,o),t(f,a+i,o,a+i,o+.5*i,u),t(f,a+i,o+i,a+.5*i,o+i,u),t(f,a,o+i,a,o+.5*i,u),t(f,a,o,a+.5*i,o,u),f.fill())}function n(r,e,n,a,o,i,u,f){r.beginPath(),r.moveTo(e,n),t(r,a,o,i,u,f),r.lineTo(a,o),r.lineTo(e,n),r.fill()}function a(e,a){var o=[0,0,0,0],i=e.i,u=e.j,f=e.x,g=e.y,l=a.cellSize,c=a.value*l/2,h=a.context;a.isDark(i-1,u)&&(o[0]++,o[1]++),a.isDark(i+1,u)&&(o[2]++,o[3]++),a.isDark(i,u-1)&&(o[0]++,o[3]++),a.isDark(i,u+1)&&(o[1]++,o[2]++),h.fillStyle=r.d,a.isDark(i,u)?(a.isDark(i-1,u-1)&&o[0]++,a.isDark(i-1,u+1)&&o[1]++,a.isDark(i+1,u+1)&&o[2]++,a.isDark(i+1,u-1)&&o[3]++,h.beginPath(),h.moveTo(f+.5*l,g),t(h,f+l,g,f+l,g+.5*l,o[1]?0:c),t(h,f+l,g+l,f+.5*l,g+l,o[2]?0:c),t(h,f,g+l,f,g+.5*l,o[3]?0:c),t(h,f,g,f+.5*l,g,o[0]?0:c),h.fill()):(2==o[0]&&n(h,f,g+.5*l,f,g,f+.5*l,g,c),2==o[1]&&n(h,f+.5*l,g,f+l,g,f+l,g+.5*l,c),2==o[2]&&n(h,f+l,g+.5*l,f+l,g+l,f+.5*l,g+l,c),2==o[3]&&n(h,f+.5*l,g+l,f,g+l,f,g+.5*l,c))}function i(t,e){var n=t.i,a=t.j,o=t.x,i=t.y,u=e.context,f=e.cellSize,g=e.count;u.fillStyle=r.d;var l=.25;(n<=7&&a<=7||n<=7&&g-a-1<=7||g-n-1<=7&&a<=7||n+5<=g&&n+9>=g&&a+5<=g&&a+9>=g||7===n||7===a)&&(l=1-.1*e.value);var c=(1-l)/2;u.fillRect(o+c*f,i+c*f,l*f,l*f)}function u(t){var e=t.cellSize,n=t.size,a=t.mask(),i=o.drawCanvas(o.getCanvas(n,n),{cellSize:e,size:n,data:t.foreground}),u=i.getContext("2d");return u.globalCompositeOperation="destination-in",u.drawImage(a,0,0),u.globalCompositeOperation="destination-over",u.fillStyle=r.f,u.fillRect(0,0,n,n),i}o.assign(r.c,{round:{data:e},liquid:{data:a},image:{data:i,foreground:u}})}(),e});