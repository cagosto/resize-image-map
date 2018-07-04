'use strict';Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var ImageResize=function a(b){_classCallCheck(this,a),_initialiseProps.call(this);var c=b.width,d=b.height,f=b.element;this.imageW=c,this.imageH=d,this.imageMap=document.querySelector(f);var g=this.imageMap.getAttribute('usemap'),h=document.querySelector('map[name="'+g.substring(1,g.length)+'"]').children;this.areaArray=Array.from(h),window.addEventListener('resize',this.resizeEvent),setTimeout(this.imgMap,500)},_initialiseProps=function(){var a=this;this.getCoords=function(b){var c=b.dataset.coords;return c||(c=b.getAttribute('coords'),b.dataset.coords=c),c},this.imgMap=function(){a.wPercent=a.imageMap.offsetWidth/100,a.hPercent=a.imageMap.offsetHeight/100,a.areaArray.forEach(a.areaLoop)},this.areaLoop=function(b){var c=a.getCoords(b).split(','),d=c.map(a.mapCoords).join();b.setAttribute('coords',d)},this.mapCoords=function(b,c){return 0==c%2?parseInt(100*(b/a.imageW)*a.wPercent,10):parseInt(100*(b/a.imageH)*a.hPercent,10)},this.resizeEvent=function(){a.imgMap()}};exports.default=ImageResize;
