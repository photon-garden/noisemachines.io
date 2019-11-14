(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,r){"use strict";r.r(t);var n=r(6),a=r.n(n),o=r(0),i=r.n(o),c=(r(27),r(140),r(69),{red:{100:"#FFCDD2",300:"#E57373",500:"#F44336",700:"#D32F2F",900:"#B71C1C"},orange:{100:"#FFECB3",300:"#FFD54F",500:"#FFC107",700:"#FFA000",900:"#ee7314"},green:{100:"#DCEDC8",300:"#AED581",500:"#8BC34A",700:"#689F38",900:"#33691E"},indigo:{100:"#b3defc",300:"#4f9ef7",500:"#0380f4",700:"#0268d1",900:"#01499b"},blue:{100:"#B3E5FC",300:"#4FC3F7",500:"#03A9F4",700:"#0288D1",900:"#01579B"},purple:{100:"#E1BEE7",300:"#BA68C8",500:"#9C27B0",700:"#7B1FA2",900:"#4A148C"},pink:{100:"#F8BBD0",300:"#F06292",500:"#E91E63",700:"#C2185B",900:"#880E4F"},gray:{50:"#FAFAFA",100:"#F5F5F5",300:"#E0E0E0",400:"#CCCCCC",500:"#9E9E9E",700:"#616161",800:"#414141",900:"#212121"},cream:{50:"#FFFEFC"},white:"#FFFFFF"});c.primary=c.indigo,c.secondary=c.pink,c.tertiary=c.orange;r(35),r(84),r(82),r(83),r(144),r(49),r(166);var u=function(e,t,r){var n=[],a=typeof e,o=typeof t;if(0===r)throw TypeError("Step cannot be zero.");if(void 0===a||"undefined"===o)throw TypeError("Must pass start and end arguments.");if(a!=o)throw TypeError("Start and end arguments must be of same type.");if(void 0===r&&(r=1),t<e&&(r=-r),"number"==a)for(;r>0?t>=e:t<=e;)n.push(e),e+=r;else{if("string"!=a)throw TypeError("Only string and number types are supported");if(1!=e.length||1!=t.length)throw TypeError("Only strings with one character are supported.");for(e=e.charCodeAt(0),t=t.charCodeAt(0);r>0?t>=e:t<=e;)n.push(String.fromCharCode(e)),e+=r}return n};var s=function(e,t){return t.forEach(function(r,n){if(!(n<=2||n===t.length-1)){var a=t[n-1],o=t[n+1];if(Math.abs(r.y)>Math.abs(a.y)&&Math.abs(r.y)>Math.abs(o.y)){var i=t[n-2],c=(a.y-i.y)/(a.x-i.x);r.y=r.y<0?-e:e,r.x=(r.y-a.y)/c+a.x}}})},f=function(e,t,r,n){switch(e){case"sine":var a=n*(1/t)*(2*Math.PI*t)/100;return Math.sin(a)*r;case"square":return n%100<50?r:-r;case"sawtooth":return n%100*(2*r)/100-r;case"triangle":var o=n%100,i=n%25;switch(Math.floor(o/25)+1){case 1:return i/25*r;case 2:return r-i/25*r;case 3:return r-i/25*r-r;case 4:return i/25*r-r;default:throw new Error("Unrecognized quadrant!")}default:throw new Error("Unrecognized waveform shape supplied: "+e)}},p=function(e,t){return((e*=-1)+1)*t/2},h=r(145),d=r.n(h),l=(r(143),function(e){function t(){var t;return(t=e.call(this)||this).state={offset:0},t}a()(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;!function t(){e.updateProgress(),window.requestAnimationFrame(t)}()},r.updateProgress=function(){this.setState(function(e,t){return{offset:e.offset+t.speed}})},r.render=function(){var e={color:"black",strokeWidth:"50px",opacity:.5,width:200,height:1e3,frequency:.2,amplitude:.75,shape:"sine"},t=e.color,r=e.strokeWidth,n=e.strokeLinecap,a=e.width,o=e.height,c=function(e,t){return e.reduce(function(e,t,r){var n=t.x,a=t.y;return 0===r?"M "+n+","+a+" ":e+" L "+n+","+a},"")}(function(e){var t=e.shape,r=e.frequency,n=e.amplitude,a=e.width,o=e.offset,i=void 0===o?0:o,c=u(0,a+1,2).map(function(e){return{x:e,y:f(t,r,n,e/(a/r)*100+i)}});return"triangle"===t&&s(n,c),c}({shape:e.shape,frequency:e.frequency,amplitude:e.amplitude,width:a,offset:this.state.offset}).map(function(e){var t=p(e.y,o);return{x:e.x,y:t}}));this.state.offset;return i.a.createElement("svg",{width:0,height:0,style:{overflow:"visible"}},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"waveform"},i.a.createElement("path",{d:c,stroke:t,strokeWidth:r,strokeLinecap:n,fill:"none",clipPath:"url(#circle-clip)"}))),i.a.createElement("path",{d:c,stroke:t,strokeWidth:r,strokeLinecap:n,fill:"none",clipPath:"url(#circle-clip)"}))},t}(i.a.Component));l.defaultProps={speed:.1};t.default=function(){return i.a.createElement("div",null,i.a.createElement(l,null),i.a.createElement("img",{id:"hero",src:d.a}))}},140:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},143:function(e,t,r){e.exports=r.p+"static/pic01-f3e58a3fac18a43921daf41ca5ac818c.jpg"},144:function(e,t,r){var n=r(22).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(14)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},145:function(e,t,r){e.exports=r.p+"static/banner-1707ad6f2581cd8d0ce12c2dc884153b.jpg"},166:function(e,t,r){var n=r(29),a=r(33);r(167)("keys",function(){return function(e){return a(n(e))}})},167:function(e,t,r){var n=r(12),a=r(15),o=r(23);e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-pages-hero-js-629b5dc0972e44c8a451.js.map