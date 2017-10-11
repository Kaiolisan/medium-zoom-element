var MediumZoomElement = (function () {
'use strict';

/*
 * medium-zoom v0.2.0
 * Medium zoom on your images in vanilla JavaScript
 * Copyright 2017 Francois Chalifour
 * https://github.com/francoischalifour/medium-zoom
 * MIT License
 */function __$styleInject(a,b){if('undefined'==typeof document)return b;a=a||'';var c=document.head||document.getElementsByTagName('head')[0],d=document.createElement('style');return d.type='text/css',c.appendChild(d),d.styleSheet?d.styleSheet.cssText=a:d.appendChild(document.createTextNode(a)),b}function createCommonjsModule(a,b){return b={exports:{}},a(b,b.exports),b.exports}var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}; var toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}; var mediumZoom_1=createCommonjsModule(function(a){var b=['IMG'],c=[27,81],d=function(a){return b.includes(a.tagName)},e=function(a){return a.naturalWidth!==a.width},f=function(a){return NodeList.prototype.isPrototypeOf(a)||HTMLCollection.prototype.isPrototypeOf(a)},g=function(a){return a&&1===a.nodeType};a.exports=function(a){var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=h.margin,j=void 0===i?0:i,k=h.background,l=void 0===k?'#fff':k,m=h.scrollOffset,n=void 0===m?48:m,o=h.metaClick,p=function(a){var b=a.getBoundingClientRect(),c=b.top,d=b.left,e=b.width,f=b.height,g=a.cloneNode(),h=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,i=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute('id'),g.style.position='absolute',g.style.top=c+h+'px',g.style.left=d+i+'px',g.style.width=e+'px',g.style.height=f+'px',g.style.transform='',g},q=function(){if(C.template)if(C.template.dispatchEvent(new Event('show')),D=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,C.zoomed=p(C.template),document.body.appendChild(B),document.body.appendChild(C.zoomed),requestAnimationFrame(function(){document.body.classList.add('medium-zoom--open');}),C.template.style.visibility='hidden',C.zoomed.classList.add('medium-zoom-image--open'),C.zoomed.addEventListener('click',r),C.zoomed.addEventListener('transitionend',u),C.template.getAttribute('data-zoom-target')){C.zoomedHd=C.zoomed.cloneNode(),C.zoomedHd.src=C.zoomed.getAttribute('data-zoom-target'),C.zoomedHd.onerror=function(){clearInterval(a),console.error('Unable to reach the zoom image target '+C.zoomedHd.src),C.zoomedHd=null,y();};var a=setInterval(function(){C.zoomedHd.naturalWidth&&(clearInterval(a),C.zoomedHd.classList.add('medium-zoom-image--open'),C.zoomedHd.addEventListener('click',r),document.body.appendChild(C.zoomedHd),y());},10);}else y();},r=function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,c=function(){E||!C.template||(C.template.dispatchEvent(new Event('hide')),E=!0,document.body.classList.remove('medium-zoom--open'),C.zoomed.style.transform='',C.zoomedHd&&(C.zoomedHd.style.transform='',C.zoomedHd.removeEventListener('click',a)),C.zoomed.removeEventListener('click',a),C.zoomed.addEventListener('transitionend',v));};0<b?setTimeout(c,b):c();},s=function(a){C.template?r():(C.template=a?a.target:A[0],q());},t=function(a){return(a.metaKey||a.ctrlKey)&&z.metaClick?window.open(a.target.getAttribute('data-original')||a.target.parentNode.href||a.target.src,'_blank'):void(a.preventDefault(),s(a))},u=function a(){E=!1,C.zoomed.removeEventListener('transitionend',a),C.template.dispatchEvent(new Event('shown'));},v=function a(){C.template&&(C.template.style.visibility='',document.body.removeChild(C.zoomed),C.zoomedHd&&document.body.removeChild(C.zoomedHd),document.body.removeChild(B),C.zoomed.classList.remove('medium-zoom-image--open'),E=!1,C.zoomed.removeEventListener('transitionend',a),C.template.dispatchEvent(new Event('hidden')),C.template=null,C.zoomed=null,C.zoomedHd=null);},w=function(){if(!E&&C.template){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(D-a)>z.scrollOffset&&r(150);}},x=function(a){c.includes(a.keyCode||a.which)&&r();},y=function(){var a=Math.min;if(C.template){var b=window.innerWidth,c=window.innerHeight,d=b-2*z.margin,e=c-2*z.margin,f=C.zoomedHd||C.template,g=f.naturalWidth,h=void 0===g?d:g,i=f.naturalHeight,j=void 0===i?e:i,k=f.getBoundingClientRect(),l=k.top,m=k.left,n=k.width,o=k.height,p=a(h,d)/n,q=a(j,e)/o,r=a(p,q)||1,s=(-m+(d-n)/2+z.margin)/r,t=(-l+(e-o)/2+z.margin)/r,u='scale('+r+') translate3d('+s+'px, '+t+'px, 0)';C.zoomed.style.transform=u,C.zoomedHd&&(C.zoomedHd.style.transform=u);}},z={margin:j,background:l,scrollOffset:n,metaClick:void 0===o||o};a instanceof Object&&_extends(z,a);var A=function(a){try{return Array.isArray(a)?a.filter(d):f(a)?[].concat(toConsumableArray(a)).filter(d):g(a)?[a].filter(d):'string'==typeof a?[].concat(toConsumableArray(document.querySelectorAll(a))).filter(d):[].concat(toConsumableArray(document.querySelectorAll(b.map(function(a){return a.toLowerCase()}).join(',')))).filter(e)}catch(a){throw new TypeError('The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom')}}(a),B=function(a){var b=document.createElement('div');return b.classList.add('medium-zoom-overlay'),b.style.backgroundColor=a,b}(z.background),C={template:null,zoomed:null,zoomedHd:null},D=0,E=!1;return A.forEach(function(a){a.classList.add('medium-zoom-image'),a.addEventListener('click',t);}),B.addEventListener('click',r),document.addEventListener('scroll',w),document.addEventListener('keyup',x),window.addEventListener('resize',r),{show:s,hide:r,toggle:s,update:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return a.background&&(B.style.backgroundColor=a.background),_extends(z,a)},addEventListeners:function(a,b){A.forEach(function(c){c.addEventListener(a,b);});},detach:function(){var a=function a(){var b=new Event('detach');A.forEach(function(a){a.classList.remove('medium-zoom-image'),a.removeEventListener('click',t),a.dispatchEvent(b);}),A.splice(0,A.length),B.removeEventListener('click',r),document.removeEventListener('scroll',w),document.removeEventListener('keyup',x),window.removeEventListener('resize',r),C.zoomed&&C.zoomed.removeEventListener('transitionend',a);};C.zoomed?(r(),C.zoomed.addEventListener('transitionend',requestAnimationFrame(a))):a();},images:A,options:z}};});__$styleInject('.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;z-index:1;cursor:pointer;cursor:zoom-out;will-change:transform}',void 0);var src=mediumZoom_1;

const camelCased = string =>
  string.replace(/-([a-z])/g, g => g[1].toUpperCase());

const template = document.createElement('template');
template.innerHTML = `
<style>
  .medium-zoom-image {
    cursor: zoom-in;
  }
</style>
<img />
`;

class MediumZoom extends HTMLElement {
  static get observedAttributes() {
    return ['margin', 'background', 'scroll-offset', 'disable-metaclick']
  }

  static getOptionName(value) {
    return value === 'disable-metaclick' ? 'metaClick' : camelCased(value)
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.setAttribute('role', 'img');
    this.setAttribute('aria-label', this.alt);

    const image = this.shadowRoot.querySelector('img');
    this.src && image.setAttribute('src', this.src);
    this.width
      ? image.setAttribute('width', this.width)
      : (image.style.width = '100%');
    this.height && image.setAttribute('height', this.height);
    this.alt && image.setAttribute('alt', this.alt);
    this.zoomTarget && image.setAttribute('data-zoom-target', this.zoomTarget);

    const options = Array.from(this.attributes).reduce((options, { name }) => {
      return MediumZoom.observedAttributes.includes(name)
        ? Object.assign(options, {
            [MediumZoom.getOptionName(name)]: this[
              MediumZoom.getOptionName(name)
            ]
          })
        : options
    }, {});

    this.zoom = src(image, options);

    Object.keys(this.zoom).forEach(method => (this[method] = this.zoom[method]));
  }

  get src() {
    return this.getAttribute('src') || ''
  }

  set src(value) {
    this.setAttribute('src', value);
  }

  get alt() {
    return this.getAttribute('alt') || ''
  }

  set alt(value) {
    this.setAttribute('alt', value);
  }

  get zoomTarget() {
    return this.getAttribute('zoom-target') || ''
  }

  set zoomTarget(value) {
    value
      ? this.setAttribute('zoom-target', value)
      : this.removeAttribute('zoom-target');
  }

  get width() {
    return this.getAttribute('width') || ''
  }

  set width(value) {
    value ? this.setAttribute('width', value) : this.removeAttribute('width');
  }

  get height() {
    return this.getAttribute('height') || ''
  }

  set height(value) {
    value ? this.setAttribute('height', value) : this.removeAttribute('height');
  }

  get margin() {
    return Number(this.getAttribute('margin')) || ''
  }

  set margin(value) {
    value ? this.setAttribute('margin', value) : this.removeAttribute('margin');
  }

  get background() {
    return this.getAttribute('background') || ''
  }

  set background(value) {
    value
      ? this.setAttribute('background', value)
      : this.removeAttribute('background');
  }

  get scrollOffset() {
    return this.hasAttribute('scroll-offset')
      ? Number(this.getAttribute('scroll-offset'))
      : ''
  }

  set scrollOffset(value) {
    value !== null
      ? this.setAttribute('scroll-offset', Number(value))
      : this.removeAttribute('scroll-offset');
  }

  get metaClick() {
    return !this.hasAttribute('disable-metaclick')
  }

  set metaClick(value) {
    value
      ? this.setAttribute('disable-metaclick', value)
      : this.removeAttribute('disable-metaclick');
  }

  disconnectedCallback() {
    this.zoom.detach();
  }

  adoptedCallback() {
    this.zoom.hide();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.zoom.update({
      [MediumZoom.getOptionName(name)]: this[MediumZoom.getOptionName(name)]
    });
  }
}

window.customElements.define('medium-zoom', MediumZoom);

return MediumZoom;

}());
