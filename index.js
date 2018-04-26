!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ion",[],t):"object"==typeof exports?exports.ion=t():e.ion=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=t.Ion=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ctx=t,this.viewport=n,this.collection=[],this.clearFrame=!0,this.quantity=1,this.size=1,this.startX=0,this.startY=0,this.endX=1,this.endY=1,this.windX=0,this.windY=0,this.color="#48F",this.clearColor="#000",this.tweenType=0,this.tweenCurrent=0,this.tweenDuration=1e3,this.tweenSpeed=1,this.ctx||console.warn("Ion initialized without canvas context."),this.viewport||console.warn("Ion initialized without viewport variable.")}return r(e,[{key:"tween",value:function(e,t,n,r,a){var o=void 0,i=a||e.tweenCurrent,s=e.tweenDuration,u=n||.3,l=r||e.tweenType,c=void 0,h=void 0;if("x"===t?(c=e.startX,h=e.endX-e.startX):(c=e.startY,h=e.endY-e.startY),0===l||"linear"===l)o=h*i/s+c;else if(1===l||"ease-in-quad"===l)o=h*(i/=s)*i+c;else if(2===l||"ease-out-quad"===l)o=-h*(i/=s)*(i-2)+c;else if(3===l||"ease-in-out-quad"===l)o=(i/=s/2)<1?h/2*i*i+c:-h/2*(--i*(i-2)-1)+c;else if(4===l||"ease-in-cubic"===l)o=h*(i/=s)*i*i+c;else if(5===l||"ease-out-cubic"===l)o=h*((i=i/s-1)*i*i+1)+c;else if(6===l||"ease-in-out-cubic"===l)o=(i/=s/2)<1?h/2*i*i*i+c:h/2*((i-=2)*i*i+2)+c;else if(7===l||"ease-in-quart"===l)o=h*(i/=s)*i*i*i+c;else if(8===l||"ease-out-quart"===l)o=-h*((i=i/s-1)*i*i*i-1)+c;else if(9===l||"ease-in-out-quart"===l)o=(i/=s/2)<1?h/2*i*i*i*i+c:-h/2*((i-=2)*i*i*i-2)+c;else if(10===l||"ease-in-quint"===l)o=h*(i/=s)*i*i*i*i+c;else if(11===l||"ease-out-quint"===l)o=h*((i=i/s-1)*i*i*i*i+1)+c;else if(12===l||"ease-in-out-quint"===l)o=(i/=s/2)<1?h/2*i*i*i*i*i+c:h/2*((i-=2)*i*i*i*i+2)+c;else if(13===l||"ease-in-sine"===l)o=-h*Math.cos(i/s*(Math.PI/2))+h+c;else if(14===l||"ease-out-sine"===l)o=-h/2*(Math.cos(Math.PI*i/s)-1)+c;else if(15===l||"ease-in-exponential"===l)o=0===i?c:h*Math.pow(2,10*(i/s-1))+c;else if(16===l||"ease-out-exponential"===l)o=i===s?c+h:h*(1-Math.pow(2,-10*i/s))+c;else if(17===l||"ease-in-out-exponential"===l)o=0===i?c:i===s?c+h:(i/=s/2)<1?h/2*Math.pow(2,10*(i-1))+c:h/2*(Math.pow(2,-10*--i)+2)+c;else if(18===l||"ease-in-circular"===l)o=-h*(Math.sqrt(1-(i/=s)*i)-1)+c;else if(19===l||"ease-out-circular"===l)o=h*Math.sqrt(1-(i=i/s-1)*i)+c;else if(20===l||"ease-in-out-circular"===l)o=(i/=s/2)<1?-h/2*(Math.sqrt(1-i*i)-1)+c:h/2*(Math.sqrt(1-(i-=2)*i)+1)+c;else if(21===l||"ease-in-elastic-loose"===l)o=this.tween(e,t,.5,"ease-in-elastic-normal");else if(22===l||"ease-in-elastic-normal"===l)o=function(){var e=1.70158,t=0,n=h;return 0===i?c:1==(i/=s)?c+h:(t||(t=s*u),n<Math.abs(h+.1)?(n=h,e=t/4):e=t/(2*Math.PI)*Math.asin(h/n),-n*Math.pow(2,10*(i-=1))*Math.sin((i*s-e)*(2*Math.PI)/t)+c)}();else if(23===l||"ease-in-elastic-string"===l)o=this.tween(e,t,.1,"ease-in-elastic-normal");else if(24===l||"ease-out-elastic-loose"===l)o=this.tween(e,t,.5,"ease-out-elastic-normal");else if(25===l||"ease-out-elastic-normal"===l)o=function(){var e=1.70158,t=0,n=h;return 0===i?c:1==(i/=s)?c+h:(t||(t=s*u),n<Math.abs(h+.1)?(n=h,e=t/4):e=t/(2*Math.PI)*Math.asin(h/n),n*Math.pow(2,-10*i)*Math.sin((i*s-e)*(2*Math.PI)/t)+h+c)}();else if(26===l||"ease-out-elastic-strong"===l)o=this.tween(e,t,.1,"ease-out-elastic-normal");else if(27===l||"ease-in-out-elastic-loose"===l)o=this.tween(e,t,.5,"ease-in-out-elastic-normal");else if(28===l||"ease-in-out-elastic-normal"===l)o=function(){var e=1.70158,t=0,n=h;return 0===i?c:2==(i/=s/2)?c+h:(t||(t=s*(1.5*u)),n<Math.abs(h+.1)?(n=h,e=t/4):e=t/(2*Math.PI)*Math.asin(h/n),i<1?n*Math.pow(2,10*(i-=1))*Math.sin((i*s-e)*(2*Math.PI)/t)*-.5+c:n*Math.pow(2,-10*(i-=1))*Math.sin((i*s-e)*(2*Math.PI)/t)*.5+h+c)}();else if(29===l||"ease-in-out-elastic-strong"===l)o=this.tween(e,t,.1,"ease-in-out-elastic-normal");else if(30===l||"ease-in-back"===l)o=h*(i/=s)*i*(2.70158*i-1.70158)+c;else if(31===l||"ease-out-back"===l)o=h*((i=i/s-1)*i*(2.70158*i+1.70158)+1)+c;else if(32===l||"ease-in-out-back"===l){var f=1.70158;o=(i/=s/2)<1?h/2*(i*i*((1+(f*=1.525))*i-f))+c:h/2*((i-=2)*i*((1+(f*=1.525))*i+f)+2)+c}else 33===l||"ease-in-bounce"===l?o=h-this.tween(e,t,0,"ease-out-bounce")+c:34===l||"ease-out-bounce"===l?o=(i/=s)<1/2.75?h*(7.5625*i*i)+c:i<2/2.75?h*(7.5625*(i-=1.5/2.75)*i+.75)+c:i<2.5/2.75?h*(7.5625*(i-=2.25/2.75)*i+.9375)+c:h*(7.5625*(i-=2.625/2.75)*i+.984375)+c:35!==l&&"ease-in-out-bounce"!==l||(o=i<s/2?.5*this.tween(e,t,0,"ease-in-bounce",2*i)+c:.5*this.tween(e,t,0,"ease-out-bounce",2*i-s)+.5*h+c);return o}},{key:"getNew",value:function(e){var t=this.tweenCurrent,n=this.tweenDuration,r=this.tweenType,a=this.startX,o=this.startY,i=this.endX,s=this.endY,u="function"==typeof a?a():a,l="function"==typeof o?o():o,c="function"==typeof i?i():i,h="function"==typeof s?s():s,f="function"==typeof t?t():t,g="function"==typeof n?n():n,v="function"==typeof r?r():r,b="function"==typeof this.size?this.size():this.size,m="function"==typeof this.image?this.image(e):this.image,d="function"==typeof this.color?this.color(e):this.color,w={};return this.onCreate(),w.id=e,w.startX=u,w.startY=l,w.originX=w.startX,w.originY=w.startY,w.x=u,w.y=l,w.endX=c,w.endY=h,w.terminalX=w.endX,w.terminalY=w.endY,w.tweenCurrent=f,w.tweenDuration=g,w.tweenType=v,w.onEnd=this.onParticleEnd,w.size=b,w.windX=this.windX||0,w.windY=this.windY||0,w.color=d,w.image=m,w.imageWidth=this.imageWidth,w.imageHeight=this.imageHeight,w}},{key:"reset",value:function(e){e.x=e.startX=e.originX,e.y=e.startY=e.originY,e.endX=e.terminalX,e.endY=e.terminalY,e.tweenCurrent=0}},{key:"reevaluate",value:function(e){var t="function"==typeof this.startX?this.startX():this.startX,n="function"==typeof this.startY?this.startY():this.startY,r="function"==typeof this.endX?this.endX():this.endX,a="function"==typeof this.endY?this.endY():this.endY;e.x=e.originX=e.startX=t,e.y=e.originY=e.startY=n,e.endX=e.terminalX=r,e.endY=e.terminalY=a,e.tweenCurrent=0}},{key:"populate",value:function(e){var t=this;e?(this.collection.push(this.getNew(this.collection.length)),this.collection.length<this.quantity&&("function"==typeof e?setTimeout(function(){return t.populate(e)},e()):"number"==typeof e?setTimeout(function(){return t.populate(e)},e):setTimeout(function(){return t.populate()},1))):this.collection=Array.from(new Array(this.quantity),function(e,n){return t.getNew(n)})}},{key:"wind",value:function(e){"function"==typeof e.windX?e.endX+=e.windX(e):e.windX&&(e.endX+=e.windX),"function"==typeof e.windY?e.endY+=e.windY(e):e.windY&&(e.endY+=e.windY),"function"==typeof e.windX?e.startX+=e.windX(e):e.windX&&(e.startX+=e.windX),"function"==typeof e.windY?e.startY+=e.windY(e):e.windY&&(e.startY+=e.windY)}},{key:"onMove",value:function(e){}},{key:"draw",value:function(e,t){var n=this,r=e,a=r.image,o=r.size||1;if(this.ctx.fillStyle=t?this.clearColor:e.color,a&&a instanceof Array&&a.length){var i=r.imageWidth/a[0].length,s=r.imageHeight/a.length;a.forEach(function(e,a){e.forEach(function(e,u){t&&e?n.ctx.fillRect(r.x+u*i-1,r.y+a*s-1,o*i+1,o*s+1):e&&n.ctx.fillRect(r.x+u*i,r.y+a*s,o*i,o*s)})})}else if(a){var u=r.x-r.imageWidth/2,l=r.y-r.imageHeight/2;r.imageWidth&&r.imageHeight?this.ctx.drawImage(a,u,l,r.imageWidth,r.imageHeight):this.ctx.drawImage(a,u,l)}else this.ctx.fillRect(r.x,r.y,o,o)}},{key:"clear",value:function(e){this.draw(e,!0)}},{key:"onCreate",value:function(){}},{key:"onParticleEnd",value:function(){}},{key:"onEscape",value:function(){}},{key:"process",value:function(){var e=this;this.clearFrame(),this.getFrame(),this.afterDraw(),1===this.tweenSpeed?requestAnimationFrame(function(){return e.process()}):setTimeout(function(){return e.process()},this.tweenSpeed)}},{key:"afterDraw",value:function(){}},{key:"clearFrame",value:function(){this.ctx.fillStyle=this.clearColor,this.ctx.fillRect(0,0,this.viewport.width,this.viewport.height)}},{key:"getFrame",value:function(){var e=this;this.collection.forEach(function(t){t.imageClear&&e.clear(t),e.wind(t),e.onMove(t),(t.x<0||t.y<0||t.x>e.viewport.width||t.y>e.viewport.height)&&e.onEscape(t),(0|t.x)!=(0|t.endX)&&(t.x=e.tween(t,"x")),(0|t.y)!=(0|t.endY)&&(t.y=e.tween(t,"y")),t.tweenCurrent++,t.tweenCurrent===t.tweenDuration&&t.onEnd&&t.onEnd.call(e,t),e.draw(t)})}}]),e}();t.default={Ion:a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return+e.split(/d/g)[0]}function o(e){var t=e.split(/d/g);return t.length>1?t[0]*t[1]:+t[0]}t.Dice=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.string=t,this.compileStatements()}return r(e,[{key:"compileStatements",value:function(){var e=this,t=this.string.split(/(\+|\-)/g),n=t.filter(function(e){return!["+","-"].includes(e)}),r=t.filter(function(e){return["+","-"].includes(e)});return this.statements=[],r.unshift("+"),n.forEach(function(t,a){e.statements.push({operator:r[a],operation:n[a]})}),this.statements}},{key:"randomInteger",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}},{key:"roll",value:function(){var e=this,t=0;return this.statements.forEach(function(n){var r=a(n.operation),i=o(n.operation);"+"===n.operator?t+=e.randomInteger(r,i):t-=e.randomInteger(r,i)}),t}},{key:"min",get:function(){var e=0;return this.statements.forEach(function(t){"+"===t.operator?e+=a(t.operation):e-=a(t.operation)}),e}},{key:"max",get:function(){var e=0;return this.statements.forEach(function(t){"+"===t.operator?e+=o(t.operation):e-=o(t.operation)}),e}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Phaser=function(){function e(t,n,r,a,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interval=t||100,this.frame=this.interval,this.phase=n,this.context=a,this.properties=o,this.makeGradient=i,this.color=r,this.colorD=[],this.err=0,i||console.error("Error "+ ++this.err+": Gradient missing."),a||console.error("Error "+ ++this.err+": Context missing."),o||console.error("Error "+ ++this.err+": Properties missing."),this.err||this.initialize()}return r(e,[{key:"initialize",value:function(){var e,t,n,r,a,o=this;this.color.forEach(function(i,s){e={},t={r:0,g:0,b:0},r=0,n=0,Object.keys(i).forEach(function(u){var l=i[u],c={r:l.r-t.r,g:l.g-t.g,b:l.b-t.b};if(1===r?(n=c,a=u):r>1&&(e[u]=c),r++,t={r:l.r,g:l.g,b:l.b},u===o.phase){var h=o.color[s].current;h.r=t.r,h.g=t.g,h.b=t.b}}),e[a]={r:n.r-t.r,g:n.g-t.g,b:n.b-t.b},o.colorD.push(e)})}},{key:"getNextPhase",value:function(){var e,t=this,n=0,r="";for(e in this.color[0]){if(n){r=e;break}e===this.phase&&(n=1)}if(0===r.length)for(e in this.color[0])if("current"!==e){r=e;break}return this.color.forEach(function(e,n){e.current.r=e[t.phase].r,e.current.g=e[t.phase].g,e.current.b=e[t.phase].b}),r}},{key:"drawNext",value:function(e){var t=this,n=this.makeGradient();this.color.forEach(function(e,t){var r=e.current;n.addColorStop(t,"rgb("+(0|r.r)+","+(0|r.g)+","+(0|r.b)+")")}),this.context.fillStyle=n,this.context.fillRect.apply(this.context,this.properties()),this.frame===this.interval&&(this.frame=-1,this.phase=this.getNextPhase()),this.color.forEach(function(e,n){var r=e.current,a=t.colorD[n][t.phase];r.r+=a.r/t.interval,r.g+=a.g/t.interval,r.b+=a.b/t.interval}),this.frame++}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function a(e){var t="invalid";if(e.includes("rgba"))t=function(e){var t=e.replace(/(\(|\)|rgba)/g,"").split(","),n=r(t,4),a=n[0],o=n[1],i=n[2],s=n[3];if(a=+a,isNaN(+a)||"number"!=typeof a)throw Error("[Ink] Red rgba value is not a valid number. ("+a+")");if(a<0&&(console.warn("[Ink] Red rgba value was less than 0. ("+a+")"),console.warn("[Ink] Converting red value to 0..."),a=0),a>255&&(console.warn("[Ink] Red rgba value was greater than 255. ("+a+")"),console.warn("[Ink] Converting red value to 255..."),a=255),o=+o,isNaN(+o)||"number"!=typeof o)throw Error("[Ink] Green rgba value is not a valid number.");if(o<0&&(console.warn("[Ink] Green rgba value was less than 0. ("+o+")"),console.warn("[Ink] converting green value to 0..."),o=0),o>255&&(console.warn("[Ink] Green rgba value was greater than 255. ("+o+")"),console.warn("[Ink] Converting green value to 255..."),o=255),i=+i,isNaN(+i)||"number"!=typeof i)throw Error("[Ink] Blue rgba value is not a valid number.");return i<0&&(console.warn("[Ink] Blur rgba value was less than 0. ("+i+")"),console.warn("[Ink] converting blue value to 0..."),i=0),i>255&&(console.warn("[Ink] Blue rgba value was greater than 255. ("+i+")"),console.warn("[Ink] Converting blue value to 255..."),i=255),{r:a,g:o,b:i,a:s=+s}}(e);else if(e.includes("rgb"))t=function(e){var t=e.replace(/(\(|\)|rgb)/g,"").split(","),n=r(t,3),a=n[0],o=n[1],i=n[2];if(a=+a,isNaN(a)||"number"!=typeof a)throw Error("[Ink] Red rgb value is not a valid number.");if(a<0&&(console.warn("[Ink] Red rgb value was less than 0. ("+a+")"),console.warn("[Ink] Converting red value to 0..."),a=0),a>255&&(console.warn("[Ink] Red rgb value was greater than 255. ("+a+")"),console.warn("[Ink] Converting red value to 255..."),a=255),o=+o,isNaN(o)||"number"!=typeof o)throw Error("[Ink] Green rgb value is not a valid number.");if(o<0&&(console.warn("[Ink] Green rgb value was less than 0. ("+o+")"),console.warn("[Ink] converting green value to 0..."),o=0),o>255&&(console.warn("[Ink] Green rgb value was greater than 255. ("+o+")"),console.warn("[Ink] Converting green value to 255..."),o=255),i=+i,isNaN(i)||"number"!=typeof i)throw Error("[Ink] Blue rgb value is not a valid number.");return i<0&&(console.warn("[Ink] Blue rgb value was less than 0. ("+i+")"),console.warn("[Ink] converting blue value to 0..."),i=0),i>255&&(console.warn("[Ink] Blue rgb value was greater than 255. ("+i+")"),console.warn("[Ink] Converting blue value to 255..."),i=255),{r:a,g:o,b:i,a:1}}(e);else if(e.includes("hsba"))t=getObjectFromHsba(e);else if(e.includes("hsva"))t=o(e);else if(e.includes("hsb"))t=getObjectFromHsb(e);else if(e.includes("hsv"))t=function(e){var t=e.replace(/(\(|\)|hsb|hsv)/g,"").split(","),n=r(t,3);return o("hsva("+n[0]+","+n[1]+","+n[2]+",1)")}(e);else if(e.includes("hsla"))t=i(e);else if(e.includes("hsl"))t=s(e);else if(e.includes("cmyk"))t=function(e){var t=e.replace(/(\(|\)|cmyk)/g,"").split(","),n=r(t,4),a=n[0],o=n[1],i=n[2],s=n[3];if(a=+a,isNaN(a)||"number"!=typeof a)throw Error("[Ink] Cyan cmyk is not a valid number.");if(a<0&&(console.warn("[Ink] Cyan cmyk was less than 0. ("+a+")"),console.warn("[Ink] Converting cyan value to 0..."),a=0),a>1&&(console.warn("[Ink] Cyan cmyk was greater than 1. ("+a+")"),console.warn("[Ink] Converting cyan value to 1."),a=1),o=+o,isNaN(o)||"number"!=typeof o)throw Error("[Ink] Magenta cmyk is not a valid number.");if(o<0&&(console.warn("[Ink] Magenta cmyk was less than 0. ("+o+")"),console.warn("[Ink] Converting magenta value to 0..."),o=0),o>1&&(console.warn("[Ink] Magenta cmyk was greater than 1 ("+o+")."),console.warn("[Ink] Converting magenta value to 1."),o=1),i=+i,isNaN(i)||"number"!=typeof i)throw Error("[Ink] Yellow cmyk is not a valid number.");if(o<0&&(console.warn("[Ink] Yellow cmyk was less than 0. ("+o+")"),console.warn("[Ink] Converting yellow value to 0..."),i=0),i>1&&(console.warn("[Ink] Yellow cmyk was greater than 1. ("+i+")"),console.warn("[Ink] Converting yellow value to 1."),i=1),s=+s,isNaN(s)||"number"!=typeof s)throw Error("[Ink] Black cmyk is not a valid number.");return s<0&&(console.warn("[Ink] Black cmyk was less than 0. ("+s+")"),console.warn("[Ink] Converting black value to 0..."),s=0),s>1&&(console.warn("[Ink] Black cmyk was greater than 1. ("+s+")"),console.warn("[Ink] Converting black value to 1."),s=1),{r:255*(1-a)*(1-s),g:255*(1-o)*(1-s),b:255*(1-i)*(1-s),a:1}}(e);else if(e.includes("#")&&4===e.length)t=function(e){if("#"!==e[0])throw Error("[Ink] Invalid short hex format.");if(isNaN(parseInt(e.substr(1,3),16)))throw Error("[Ink] Invalid characters in short hex color.");return{r:parseInt(e.substr(1,1)+e.substr(1,1),16),g:parseInt(e.substr(2,1)+e.substr(2,1),16),b:parseInt(e.substr(3,1)+e.substr(3,1),16),a:1}}(e);else{if(!e.includes("#")||7!==e.length)throw Error("[Ink] Unknown color type.");t=function(e){if("#"!==e[0])throw Error("[Ink] Invalid long hex format.");if(isNaN(parseInt(e.substr(1,6),16)))throw Error("[Ink Invalid characters in long hex color.");return{r:parseInt(e.substr(1,2),16),g:parseInt(e.substr(3,2),16),b:parseInt(e.substr(5,2),16),a:1}}(e)}return t}function o(e){var t=e.replace(/(\(|\)|hsba|hsva)/g,"").split(","),n=r(t,4),a=n[0],o=n[1],i=n[2],s=n[3];if(a=+a,isNaN(a)||"number"!=typeof a)throw Error("[Ink] Hue hsv(a)/hsb(a) is not a valid number.");if(a>360&&(console.warn("[Ink] Hue hsv(a)/hsb(a) was greater than 360. ("+a+")"),console.warn("[Ink] Converting hue value to "+a%360+"."),a%=360),a<0&&(console.warn("[Ink] Hue hsv(a)/hsb(a) was less than 0. ("+a+")"),console.warn("[Ink] Converting hue value to "+(360+a%360)+"."),a=360-a%360),o=+o,isNaN(o)||"number"!=typeof o)throw Error("[Ink] Saturation hsv(a)/hsb(a) is not a valid number.");if(o<0&&(console.warn("[Ink] Saturation hsv(a)/hsb(a) was less than 0. ("+o+")"),console.warn("[Ink] Converting saturation value to 0..."),o=0),o>1&&(console.warn("[Ink] Saturation hsv(a)/hsb(a) was greater than 0. ("+o+")"),console.warn("[Ink] Converting saturation value to 1..."),o=1),i=+i,isNaN(i)||"number"!=typeof i)throw Error("[Ink] Brightness/value hsv(a)/hsb(a) is not a valid number.");i<0&&(console.warn("[Ink] Brightness/value hsv(a)/hsb(a) was less than 0. ("+i+")"),console.warn("[Ink] Converting brightness to 0..."),i=0),i>1&&(console.warn("[Ink] Brightness/value hsv(a)/hsb(a) was greater than 1. ("+i+")"),console.warn("[Ink] Converting brightness to 1..."),i=1),s=+s;var u=i*o,l=u*(1-Math.abs(a/60%2-1)),c=i-u,h=function(e){return a<60?Math.round(255*([u,l,0][e]+c)):a<120?Math.round(255*([l,u,0][e]+c)):a<180?Math.round(255*([0,u,l][e]+c)):a<240?Math.round(255*([0,l,u][e]+c)):a<300?Math.round(255*([l,0,u][e]+c)):Math.round(255*([u,0,l][e]+c))},f=[h(0),h(1),h(2)];return{r:f[0],g:f[1],b:f[2],a:s}}function i(e){var t=e.replace(/(\(|\)|hsla)/g,"").split(","),n=r(t,4),a=n[0],o=n[1],i=n[2],s=n[3];if(a=+a,isNaN(a)||"number"!=typeof a)throw Error("[Ink] Hue hsl(a) is not a valid number.");if(a>360&&(console.warn("[Ink] Hue hsl(a) was greater than 360. ("+a+")"),console.warn("[Ink] Converting hue value to "+a%360+"."),a%=360),a<0&&(console.warn("[Ink] Hue hsl(a) was less than 0. ("+a+")"),console.warn("[Ink] Converting hue value to "+(360+a%360)+"."),a=360-a%360),o=+o,isNaN(o)||"number"!=typeof o)throw Error("[Ink] Saturation hsl(a) is not a valid number.");if(o<0&&(console.warn("[Ink] Saturation hsl(a) was less than 0. ("+o+")"),console.warn("[Ink] Converting saturation value to 0..."),o=0),o>1&&(console.warn("[Ink] Saturation hsl(a) was greater than 0. ("+o+")"),console.warn("[Ink] Converting saturation value to 1..."),o=1),i=+i,isNaN(i)||"number"!=typeof i)throw Error("[Ink] Lightness hsl(a) is not a valid number.");i<0&&(console.warn("[Ink] Lightness hsl(a) was less than 0. ("+i+")"),console.warn("[Ink] Converting lightness to 0..."),i=0),i>1&&(console.warn("[Ink] Lightness hsl(a) was greater than 1. ("+i+")"),console.warn("[Ink] Converting lightness to 1..."),i=1),s=+s;var u=(1-Math.abs(2*i-1))*o,l=u*(1-Math.abs(a/60%2-1)),c=i-u/2,h=function(e){return a<60?Math.round(255*([u,l,0][e]+c)):a<120?Math.round(255*([l,u,0][e]+c)):a<180?Math.round(255*([0,u,l][e]+c)):a<240?Math.round(255*([0,l,u][e]+c)):a<300?Math.round(255*([l,0,u][e]+c)):Math.round(255*([u,0,l][e]+c))},f=[h(0),h(1),h(2)];return{r:f[0],g:f[1],b:f[2],a:s}}function s(e){var t=e.replace(/(\(|\)|hsl)/g,"").split(","),n=r(t,3);return i("hsla("+n[0]+","+n[1]+","+n[2]+",1)")}function u(e){return"rgba("+e.r+","+e.g+","+e.b+","+e.a+")"}function l(e){return"rgb("+e.r+","+e.g+","+e.b+")"}function c(e){var t=e.r,n=e.g,r=e.b,a=e.a;t/=255,n/=255,r/=255;var o=Math.min(t,n,r),i=Math.max(t,n,r),s=i-o,u=void 0,l=void 0,c=i;return 0!==i?(l=s/i,u=t===i?(n-r)/s:n===i?2+(r-4)/s:4+(t-n)/s,(u*=60)<0&&(u+=360),isNaN(u)&&(u=0)):(u=0,l=0,c=0),"hsva("+u+","+l+","+c+","+a+")"}function h(e){var t=c(e).replace(/(\(|\)|hsva)/g,"").split(","),n=r(t,3);return"hsv("+n[0]+","+n[1]+","+n[2]+")"}function f(e){var t=c(e).replace(/(\(|\)|hsva)/g,"").split(","),n=r(t,4);return"hsba("+n[0]+","+n[1]+","+n[2]+","+n[3]+")"}function g(e){var t=c(e).replace(/(\(|\)|hsva)/g,"").split(","),n=r(t,3);return"hsba("+n[0]+","+n[1]+","+n[2]+")"}function v(e){var t=e.r,n=e.g,r=e.b;e.a,t/=255,n/=255,r/=255;var a=1-Math.max(t,n,r);return"cmyk("+(1-t-a)/(1-a)+","+(1-n-a)/(1-a)+","+(1-r-a)/(1-a)+","+a+")"}function b(e){var t=e.r,n=e.g,r=e.b,a=e.a;t/=255,n/=255,r/=255;var o=Math.max(t,n,r),i=Math.min(t,n,r),s=o-i,u=void 0,l=void 0,c=(o+i)/2;return s?(l=s/(1-Math.abs(2*c-1)),(u=o===t?(n-r)/s%6*60:o===n?60*((r-t)/s+2):60*((t-n)/s+4))<0&&(u=360+u)):u=l=0,"hsla("+u+","+l+","+c+","+a+")"}function m(e){var t=b(e).replace(/(\(|\)|hsla)/g,"").split(","),n=r(t,3);return"hsl("+n[0]+","+n[1]+","+n[2]+")"}function d(e){return"#"+e.r.toString(16).padStart(2,"0")+e.g.toString(16).padStart(2,"0")+e.b.toString(16).padStart(2,"0")}t.ink=function(e){var t=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[]),n=a(e),o=n.r,i=n.g,w=n.b,p=n.a;if(isNaN(p)||"number"!=typeof p)throw Error("[Ink] Alpha value is not a valid number.");if(p<0&&(console.warn("[Ink] Alpha was less than 0. ("+p+")"),console.warn("[Ink] Converting alpha to 0..."),p=0),p>1&&(console.warn("[Ink] Alpha was greater than 1. ("+p+")"),console.warn("[Ink] Converting alpha to 1..."),p=1),t.r&&"number"!=typeof t.r||t.r&&isNaN(t.r))throw Error("[Ink] Red color weight is not a number.");if(t.r&&t.r<0)throw Error("[Ink] Red color weight must be greater than 0.");if(t.g&&"number"!=typeof t.g||t.g&&isNaN(t.g))throw Error("[Ink] Green color weight is not a number.");if(t.g&&t.g<0)throw Error("[Ink] Green color weight must be greater than 0.");if(t.b&&"number"!=typeof t.b||t.b&&isNaN(t.b))throw Error("[Ink] Blue color weight is not a number.");if(t.b&&t.b<0)throw Error("[Ink] Blue color weight must be greater than 0.");if(t.l&&"number"!=typeof t.l||t.l&&isNaN(t.l))throw Error("[Ink] Lightness weight is not a number.");if(t.s&&"number"!=typeof t.s||t.s&&isNaN(t.s))throw Error("[Ink] Saturation weight is not a number.");if(t.r<0||t.g<0||t.b<0||t.r>1||t.g>1||t.b>1)throw Error("[Ink] Color weights must be inclusively between 0 and 1.");if(t.a<0||t.a>1)throw Error("[Ink] Color alpha must be inclusively between 0 and 1.");if(t.minLightness&&"number"!=typeof t.minLightness)throw Error("[Ink] Min lightness is not a number.");if(t.minLightness&&isNaN(t.minLightness))throw Error("[Ink] Min lightness is not a number.");if(t.maxLightness&&"number"!=typeof t.maxLightness)throw Error("[Ink] Max lightness is not a number.");if(t.maxLightness&&isNaN(t.maxLightness))throw Error("[Ink] Max lightness is not a number.");if(t.lightness&&"number"!=typeof t.lightness)throw Error("[Ink] lightness is not a number.");if(t.lightness&&isNaN(t.lightness))throw Error("[Ink] lightness is not a number.");if(t.minSaturation&&"number"!=typeof t.minSaturation)throw Error("[Ink] Min saturation is not a number.");if(t.minSaturation&&isNaN(t.minSaturation))throw Error("[Ink] Min saturation is not a number.");if(t.maxSaturation&&"number"!=typeof t.maxSaturation)throw Error("[Ink] Max saturation is not a number.");if(t.maxSaturation&&isNaN(t.maxSaturation))throw Error("[Ink] Max saturation is not a number.");if(t.saturation&&"number"!=typeof t.saturation)throw Error("[Ink] Saturation is not a number.");if(t.saturation&&isNaN(t.saturation))throw Error("[Ink] Saturation is not a number.");if(t.object&&"boolean"!=typeof t.object)throw Error("[Ink] Object output parameter value is not a boolean.");if(t.minSaturation>t.maxSaturation){console.warn("[Ink] Min saturation must be smaller than max saturation."),console.warn("[Ink] Switching min and max saturations...");var y=[t.maxSaturation,t.minSaturation];t.minSaturation=y[0],t.maxSaturation=y[1]}if(t.minLightness>t.maxLightness){console.warn("[Ink] Min lightness must be smaller than max lightness."),console.warn("[Ink] Switching min and max lightness...");var k=[t.maxLighntess,t.minLightness];t.minLightness=k[0],t.maxLightness=k[1]}if((t.minLightness&&t.lightness||t.maxLightness&&t.lightness)&&(console.warn("[Ink] Cannot have lightness setting and a threshold."),console.warn("[Ink] Ignoring lightness threshold..."),delete t.minLightness,delete t.maxLightness),(t.minSaturation&&t.saturation||t.maxSaturation&&t.saturation)&&(console.warn("[Ink] Cannot have saturation setting and a threshold."),console.warn("[Ink] Ignoring saturation threshold..."),delete t.minSaturation,delete t.maxSaturation),t.maxLightness&&t.minLightness&&t.maxLightness-t.minLightness<.01&&(console.warn("[Ink] Max and min lightness threshold too close."),console.warn("[Ink] Removing lightness threshold and using hard setting..."),t.lightness=t.minLightness,delete t.minLightness,delete t.maxLightness),t.minSaturation&&t.maxSaturation&&t.maxSaturation-t.minSaturation<.01&&(console.warn("[Ink] Max and min saturation threshold too close."),console.warn("[Ink] Removing saturation threshold and using hard setting..."),t.saturation=t.minSaturation,delete t.minSaturation,delete t.maxSaturation),t.r&&(o=Math.floor(t.r*o))>255&&(o=255),t.g&&(i=Math.floor(t.g*i))>255&&(i=255),t.b&&(w=Math.floor(t.b*w))>255&&(w=255),t.a&&(p=t.a),t.l){var I=m({r:o,g:i,b:w}).replace(/(\(|\)|hsl)/g,"").split(","),x=r(I,3),M=x[0],E=x[1],C=x[2];C=+C;var S=s("hsl("+M+","+E+","+(C+=t.l)+")");o=S.r,i=S.g,w=S.b}if(t.s){var N=m({r:o,g:i,b:w}).replace(/(\(|\)|hsl)/g,"").split(","),P=r(N,3),Y=P[0],j=P[1],O=P[2];j=+j;var X=s("hsl("+Y+","+(j+=+t.s)+","+O+")");o=X.r,i=X.g,w=X.b}if(t.minLightness||t.maxLightness||t.lightness){var L=m({r:o,g:i,b:w}).replace(/(\(|\)|hsl)/g,"").split(","),_=r(L,3),D=_[0],q=_[1],T=_[2];t.minLightness&&T<t.minLightness&&(T=t.minLightness),t.maxLightness&&T>t.maxLightness&&(T=t.maxLightness),t.lightness&&+T!==t.lightness&&(T=t.lightness);var z=s("hsl("+D+","+q+","+T+")");o=z.r,i=z.g,w=z.b}if(t.minSaturation||t.maxSaturation||t.saturation){var R=m({r:o,g:i,b:w}).replace(/(\(|\)|hsl)/g,"").split(","),H=r(R,3),F=H[0],B=H[1],G=H[2];t.minSaturation&&B<t.minSaturation&&(B=t.minSaturation),t.maxSaturation&&B>t.maxSaturation&&(B=t.maxSaturation),t.saturation&&+B!==t.saturation&&(B=t.saturation);var A=s("hsl("+F+","+B+","+G+")");o=A.r,i=A.g,w=A.b}o=Math.round(o),i=Math.round(i),w=Math.round(w),p=p.toFixed(3);return t.format&&"object"===t.format?{r:o,g:i,b:w,a:p}:t.format&&"hex"===t.format?d({r:o,g:i,b:w}):t.format&&"hsl"===t.format?m({r:o,g:i,b:w}):t.format&&"hsla"===t.format?b({r:o,g:i,b:w,a:p}):t.format&&"hsv"===t.format?h({r:o,g:i,b:w}):t.format&&"hsva"===t.format?c({r:o,g:i,b:w,a:p}):t.format&&"hsb"===t.format?g({r:o,g:i,b:w}):t.format&&"hsba"===t.format?f({r:o,g:i,b:w,a:p}):t.format&&"rgb"===t.format?l({r:o,g:i,b:w}):t.format&&"cmyk"===t.format?v({r:o,g:i,b:w}):u({r:o,g:i,b:w,a:p})},t.convert2rgba=function(e){return u(a(e))},t.convert2rgb=function(e){return l(a(e))},t.convert2hsba=function(e){return f(a(e))},t.convert2hsva=function(e){return c(a(e))},t.convert2hsb=function(e){return g(a(e))},t.convert2hsv=function(e){return h(a(e))},t.convert2hsla=function(e){return b(a(e))},t.convert2hsl=function(e){return m(a(e))},t.convert2hex=function(e){return d(a(e))},t.convert2cmyk=function(e){return v(a(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=t.Easel=function(){function e(t){var n=this;if(a(this,e),!window.CanvasRenderingContext2D)return this.activated=!1,!1;this.activated=!0,this.canvas=document.createElement("canvas"),this.ctx=t?this.canvas.getContext("webgl"):this.canvas.getContext("2d"),this.viewport=this.acquireViewport(),this.randomInteger=function(e,t,n){return e=t?e>t?t+(r=e)-t:e:0*(t=e),n=n||0,t=Math.random()*(t-e)+e,n?0|t:t},window.onresize=function(){n.viewport=n.acquireViewport(),n.resizeCanvas(),n.config(),n.redraw()},this.background="#000",this.started=!1,document.body.appendChild(this.canvas);var r=document.createElement("style");r.type="text/css",r.rel="stylesheet",r.innerHTML="body{background-color:"+this.background+";margin:0;}\n      canvas{position:fixed;left:0;top:0;right:0;bottom:0;}",document.querySelector("head").appendChild(r),this.resizeCanvas()}return r(e,[{key:"resizeCanvas",value:function(){this.canvas.width=this.viewport.w,this.canvas.height=this.viewport.h}},{key:"acquireContext",value:function(){this.ctx=this.canvas.getContext("2d")}},{key:"acquireViewport",value:function(){var e=window,t="inner";return e.innerWidth||(t="client",e=document.documentElement||document.body),{w:e[t+"Width"],h:e[t+"Height"]}}},{key:"redraw",value:function(){this.started||(this.config(),this.started=!0),this.onDraw()}},{key:"config",value:function(){}},{key:"onDraw",value:function(){this.ctx.fillStyle=this.background,this.ctx.fillRect(0,0,this.viewport.width,this.viewport.height)}}]),e}();t.Easel3d=function(e){function t(){return a(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,!0))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o),t}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.laser=function(e,t){var n=this,o=t.startX,i=t.startY,s=t.endX,u=t.endY,l=t.size,c=200,h=new a.Ion(1);return o=o||0,i=i||0,s=s||0,u=u||0,l=l||10,h.states=["initial"],h.clear=!1,h.color="rgba(250,250,150,0.5)",h.startX=function(){return n.camera.x+s},h.startY=function(){return n.camera.y+u},h.endX=function(){return n.camera.x+s-l/2+r(l)},h.endY=function(){return n.camera.y+u-l/2+r(l)},h.windX=function(){return r(0,1.5)-.75},h.windY=function(){return r(0,1.5)-.75},h.size=function(){return r(2,4,!0)},h.tweenType=function(){return r(10,15,!0)},h.tweenDuration=function(){return r(100,150,!0)},h.onParticleEnd=function(e){this.collection.splice(e.id,1),this.collection.forEach(function(e,t){return e.id=t})},h.onCreate=function(){return c--},h.populate(),h.draw=function(e){ctx.strokeStyle="rgba(100,100,250,"+5e-4*c+")",ctx.lineWidth=17,c>0&&(ctx.beginPath(),ctx.moveTo(n.camera.x+o+3,n.camera.y+i),ctx.lineTo(n.camera.x+s+3,n.camera.y+u),ctx.stroke(),ctx.strokeStyle="#DDF",ctx.lineWidth=2,ctx.beginPath(),ctx.moveTo(n.camera.x+o+3,n.camera.y+i),ctx.lineTo(n.camera.x+s+3,n.camera.y+u),ctx.stroke())},h};var a=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.vortex=function(e,t){var n=this,o=t.startX,i=t.startY,s=t.size,u=t.density,l=t.iterations,c=t.callback,h=new a.Ion(u||200);return o=o||0,i=i||0,s=s||300,l=l||1/0,h.states=["initial"],h.clear=!1,h.color="rgba(200,200,255,0.7)",h.startX=function(){return Math.abs(n.camera.x+r(-1*s/2,s/2)+o)+1},h.startY=function(){return Math.abs(n.camera.y+r(-1*s/2,s/2)+i)+1},h.endX=function(){return n.camera.x+o},h.endY=function(){return n.camera.y+i},h.size=function(){return r(1,5)},h.tweenType="ease-out-circular",h.tweenDuration=function(){return r(100,200,!0)},h.onParticleEnd=function(e){l<50&&l>0?("function"==typeof c&&(c(),c=void 0),l--):l>0?(l--,this.reevaluate(e)):0===l&&(h.finished=!0)},h.onMove=function(e){e.endX=h.endX(),e.endY=h.endY()},h.populate(15),h};var a=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flame=function(e,t){var n=this,o=t.startX,i=t.startY,s=t.width,u=t.height,l=t.color,c=t.quality,h=new a.Ion(2*(c||100));return o=o||0,i=i||0,s=s||20,u=u||100,h.states=["initial"],h.clear=!1,h.color=l||"rgba(250,170,0,0.2)",h.startX=function(){return n.camera.x+o+r(0,s)-s/2},h.startY=function(){return n.camera.y+i},h.endX=function(){return n.camera.x+o},h.endY=function(){return n.camera.y+i-u},h.windX=function(){return r(0,.5)-.25},h.windY=function(){return r(0,2)-2},h.tweenType=function(){return r(10,20,!0)},h.tweenDuration=function(){return r(300,600,!1)},h.onEscape=function(e){this.onEnd(e)},h.onEnd=h.reevaluate,h.onMove=function(e){var t=(u+s)/4;e.tweenCurrent>.15*e.tweenDuration?this.onEnd(e):e.size=t-t/e.tweenDuration*e.tweenCurrent},h.populate(),h};var a=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.defineProperty(t,"flame",{enumerable:!0,get:function(){return r.flame}});var a=n(6);Object.defineProperty(t,"vortex",{enumerable:!0,get:function(){return a.vortex}});var o=n(5);Object.defineProperty(t,"laser",{enumerable:!0,get:function(){return o.laser}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IonCloud=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(8));t.IonCloud=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.camera={x:v.w/2,y:v.h/2,dx:0,dy:0},this.collection=[],this.beforeDraw={},this.clouds=a,this.state="initial"}return r(e,[{key:"animate",value:function(e){"string"==typeof e?this.collection.push(this.clouds[e].apply(this,arguments)):this.collection.push(e.apply(this,arguments))}},{key:"makeState",value:function(e,t){this.beforeDraw[e]=t}},{key:"clearScene",value:function(){ctx.fillStyle="#000",ctx.fillRect(0,0,v.w,v.h)}},{key:"draw",value:function(){var e=this;this.clearScene(),this.beforeDraw[this.state]&&this.beforeDraw[this.state](),this.collection.forEach(function(t,n,r){t.states.includes(e.state)&&(t.finished?("function"==typeof t.onFinished&&t.onFinished(),r.splice(n,1)):t.getFrame())}),requestAnimationFrame(function(){return e.draw()})}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);Object.defineProperty(t,"Ion",{enumerable:!0,get:function(){return r.Ion}});var a=n(9);Object.defineProperty(t,"IonCloud",{enumerable:!0,get:function(){return a.IonCloud}});var o=n(4);Object.defineProperty(t,"Easel",{enumerable:!0,get:function(){return o.Easel}}),Object.defineProperty(t,"Easel3d",{enumerable:!0,get:function(){return o.Easel3d}});var i=n(3);Object.defineProperty(t,"ink",{enumerable:!0,get:function(){return i.ink}}),Object.defineProperty(t,"convert2rgba",{enumerable:!0,get:function(){return i.convert2rgba}}),Object.defineProperty(t,"convert2rgb",{enumerable:!0,get:function(){return i.convert2rgb}}),Object.defineProperty(t,"convert2hsba",{enumerable:!0,get:function(){return i.convert2hsba}}),Object.defineProperty(t,"convert2hsva",{enumerable:!0,get:function(){return i.convert2hsva}}),Object.defineProperty(t,"convert2hsb",{enumerable:!0,get:function(){return i.convert2hsb}}),Object.defineProperty(t,"convert2hsv",{enumerable:!0,get:function(){return i.convert2hsv}}),Object.defineProperty(t,"convert2hsla",{enumerable:!0,get:function(){return i.convert2hsla}}),Object.defineProperty(t,"convert2hsl",{enumerable:!0,get:function(){return i.convert2hsl}}),Object.defineProperty(t,"convert2hex",{enumerable:!0,get:function(){return i.convert2hex}}),Object.defineProperty(t,"convert2cmyk",{enumerable:!0,get:function(){return i.convert2cmyk}});var s=n(2);Object.defineProperty(t,"Phaser",{enumerable:!0,get:function(){return s.Phaser}});var u=n(1);Object.defineProperty(t,"Dice",{enumerable:!0,get:function(){return u.Dice}})}])});