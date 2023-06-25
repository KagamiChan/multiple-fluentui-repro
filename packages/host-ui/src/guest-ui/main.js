(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 320:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(784),n=__webpack_require__(320),r=__webpack_require__(616);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.14.0";


/***/ }),

/***/ 316:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(967);
} else {}


/***/ }),

/***/ 426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(320),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),

/***/ 784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(426);
} else {}


/***/ }),

/***/ 475:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ 616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(475);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  renderGuestUI: () => (/* binding */ renderGuestUI),
  unmountGuestUI: () => (/* binding */ unmountGuestUI)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(784);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
// EXTERNAL MODULE: ../../node_modules/react-dom/index.js
var react_dom = __webpack_require__(316);
;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/compose/constants.js
/**
 * @internal
 * Internal reference for the render function
 */ const SLOT_RENDER_FUNCTION_SYMBOL = Symbol('fui.slotRenderFunction');

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-jsx-runtime/lib/createElement.js


function createElement(type, props, ...children) {
    return hasRenderFunction(props) ? createElementFromRenderFunction(type, props, children) : react.createElement(type, props, ...children);
}
function createElementFromRenderFunction(type, props, overrideChildren) {
    const { [SLOT_RENDER_FUNCTION_SYMBOL]: renderFunction , ...renderProps } = props;
    if (overrideChildren.length > 0) {
        renderProps.children = react.createElement(react.Fragment, {}, ...overrideChildren);
    }
    return react.createElement(react.Fragment, {}, renderFunction(type, renderProps));
}
function hasRenderFunction(props) {
    return Boolean(props === null || props === void 0 ? void 0 : props.hasOwnProperty(SLOT_RENDER_FUNCTION_SYMBOL));
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/compose/getSlotsNext.js

/**
 * Similar to `getSlots`, main difference is that it's compatible with new custom jsx pragma
 */ function getSlotsNext(state) {
    const slots = {};
    const slotProps = {};
    const slotNames = Object.keys(state.components);
    for (const slotName of slotNames){
        const [slot, props] = getSlotNext(state, slotName);
        slots[slotName] = slot;
        slotProps[slotName] = props;
    }
    return {
        slots,
        slotProps: slotProps
    };
}
function getSlotNext(state, slotName) {
    var _state_components, _state_components1;
    const props = state[slotName];
    if (props === undefined) {
        return [
            null,
            undefined
        ];
    }
    // TS Error: Property 'as' does not exist on type 'UnknownSlotProps | undefined'.ts(2339)
    const { as: asProp , ...propsWithoutAs } = props;
    const slot = ((_state_components = state.components) === null || _state_components === void 0 ? void 0 : _state_components[slotName]) === undefined || typeof state.components[slotName] === 'string' ? asProp || ((_state_components1 = state.components) === null || _state_components1 === void 0 ? void 0 : _state_components1[slotName]) || 'div' : state.components[slotName];
    const shouldOmitAsProp = typeof slot === 'string' && asProp;
    const slotProps = shouldOmitAsProp ? propsWithoutAs : props;
    return [
        slot,
        slotProps
    ];
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/ssr/canUseDOM.js
/**
 * Verifies if an application can use DOM.
 */ function canUseDOM_canUseDOM() {
    return typeof window !== 'undefined' && !!(window.document && // eslint-disable-next-line deprecation/deprecation
    window.document.createElement);
}

;// CONCATENATED MODULE: ../../node_modules/@griffel/react/TextDirectionContext.esm.js


/**
 * @private
 */
const TextDirectionContext = /*#__PURE__*/react.createContext('ltr');
/**
 * @public
 */
const TextDirectionProvider = ({
  children,
  dir
}) => {
  return /*#__PURE__*/react.createElement(TextDirectionContext.Provider, {
    value: dir
  }, children);
};
/**
 * Returns current directionality of the element's text.
 *
 * @private
 */
function useTextDirection() {
  return react.useContext(TextDirectionContext);
}


//# sourceMappingURL=TextDirectionContext.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/ProviderContext/ProviderContext.js

/**
 * @internal
 */ const ProviderContext = react.createContext(undefined);
const providerContextDefaultValue = {
    targetDocument: typeof document === 'object' ? document : undefined,
    dir: 'ltr'
};
/**
 * @internal
 */ const Provider = ProviderContext.Provider;
function useFluent() {
    var _React_useContext;
    return (_React_useContext = react.useContext(ProviderContext)) !== null && _React_useContext !== void 0 ? _React_useContext : providerContextDefaultValue;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/ThemeContext/ThemeContext.js

/**
 * @internal
 */ const ThemeContext = react.createContext(undefined);
/**
 * @internal
 */ const ThemeProvider = ThemeContext.Provider;

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/ThemeClassNameContext/ThemeClassNameContext.js

/**
 * @internal
 * Used to provide a CSS class that applies theme css variables
 *
 * Useful for elements in the React tree (can read context) but not in the DOM Tree. E.g. Portals
 */ const ThemeClassNameContext = react.createContext(undefined);
const themeClassNameContextDefaultVaue = '';
const ThemeClassNameProvider = ThemeClassNameContext.Provider;
/**
 * @returns CSS class that applies css variables
 */ function useThemeClassName() {
    var _React_useContext;
    return (_React_useContext = React.useContext(ThemeClassNameContext)) !== null && _React_useContext !== void 0 ? _React_useContext : themeClassNameContextDefaultVaue;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/CustomStyleHooksContext/CustomStyleHooksContext.js
/* eslint-disable */ 
/**
 * @internal
 */ const CustomStyleHooksContext = react.createContext(undefined);
const noop = ()=>{};
/**
 * @internal
 */ const CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
/**
 * Gets a custom style hook
 * @param hook - One of the hook properties in CustomStyleHooksContextValue
 * @returns The corresponding hook when defined, otherwise a no-op function.
 */ const useCustomStyleHook = (hook)=>{
    var _React_useContext;
    var _React_useContext_hook;
    return (_React_useContext_hook = (_React_useContext = react.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop;
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/TooltipVisibilityContext/TooltipContext.js

/**
 * @internal
 * Context shared by all of the tooltips in the app
 */ const TooltipVisibilityContext = react.createContext(undefined);
const tooltipVisibilityContextDefaultValue = {};
/**
 * @internal
 */ const TooltipVisibilityProvider = TooltipVisibilityContext.Provider;
function useTooltipVisibility() {
    var _React_useContext;
    return (_React_useContext = React.useContext(TooltipVisibilityContext)) !== null && _React_useContext !== void 0 ? _React_useContext : tooltipVisibilityContextDefaultValue;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-shared-contexts/lib/OverridesContext/OverridesContext.js

/**
 * @internal
 */ const OverridesContext = react.createContext(undefined);
/**
 * @internal
 */ const OverridesProvider = OverridesContext.Provider;
function useOverrides() {
    var _React_useContext;
    return (_React_useContext = react.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/renderFluentProvider.js
/** @jsxRuntime classic */ /** @jsx createElement */ 



/**
 * Render the final JSX of FluentProvider
 */ const renderFluentProvider_unstable = (state, contextValues)=>{
    const { slots , slotProps  } = getSlotsNext(state);
    // Typescript (vscode) incorrectly references the FluentProviderProps.customStyleHooks_unstable
    // instead of FluentProviderContextValues.customStyleHooks_unstable and thinks it is
    // Partial<CustomStyleHooksContextValue>, so it needs to be cast to Required<CustomStyleHooksContextValue>
    return /*#__PURE__*/ createElement(Provider, {
        value: contextValues.provider
    }, /*#__PURE__*/ createElement(ThemeProvider, {
        value: contextValues.theme
    }, /*#__PURE__*/ createElement(ThemeClassNameProvider, {
        value: contextValues.themeClassName
    }, /*#__PURE__*/ createElement(CustomStyleHooksProvider, {
        value: contextValues.customStyleHooks_unstable
    }, /*#__PURE__*/ createElement(TooltipVisibilityProvider, {
        value: contextValues.tooltip
    }, /*#__PURE__*/ createElement(TextDirectionProvider, {
        dir: contextValues.textDirection
    }, /*#__PURE__*/ createElement(OverridesProvider, {
        value: contextValues.overrides_unstable
    }, /*#__PURE__*/ createElement(slots.root, slotProps.root, canUseDOM_canUseDOM() ? null : /*#__PURE__*/ createElement("style", {
        // Using dangerous HTML because react can escape characters
        // which can lead to invalid CSS.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: state.serverStyleProps.cssRule
        },
        ...state.serverStyleProps.attributes
    }), slotProps.root.children))))))));
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/utils/isHTMLElement.js
/**
 * Verifies if a given node is an HTMLElement,
 * this method works seamlessly with frames and elements from different documents
 *
 * This is preferred over simply using `instanceof`.
 * Since `instanceof` might be problematic while operating with [multiple realms](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof#instanceof_and_multiple_realms)
 *
 * @example
 * ```ts
 * isHTMLElement(event.target) && event.target.focus()
 * isHTMLElement(event.target, {constructorName: 'HTMLInputElement'}) && event.target.value // some value
 * ```
 *
 */ function isHTMLElement(element, options) {
    var _typedElement_ownerDocument;
    const typedElement = element;
    var _options_constructorName;
    return Boolean((typedElement === null || typedElement === void 0 ? void 0 : (_typedElement_ownerDocument = typedElement.ownerDocument) === null || _typedElement_ownerDocument === void 0 ? void 0 : _typedElement_ownerDocument.defaultView) && typedElement instanceof typedElement.ownerDocument.defaultView[(_options_constructorName = options === null || options === void 0 ? void 0 : options.constructorName) !== null && _options_constructorName !== void 0 ? _options_constructorName : 'HTMLElement']);
}

;// CONCATENATED MODULE: ../../node_modules/keyborg/dist/keyborg.esm.js
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// IE11 compat, checks if WeakRef is supported
const _canUseWeakRef = typeof WeakRef !== "undefined";
/**
 * WeakRef wrapper around a HTMLElement that also supports IE11
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef}
 * @internal
 */

class WeakRefInstance {
  constructor(instance) {
    if (_canUseWeakRef && typeof instance === "object") {
      this._weakRef = new WeakRef(instance);
    } else {
      this._instance = instance;
    }
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */


  deref() {
    var _a, _b, _c;

    let instance;

    if (this._weakRef) {
      instance = (_a = this._weakRef) === null || _a === void 0 ? void 0 : _a.deref();

      if (!instance) {
        delete this._weakRef;
      }
    } else {
      instance = this._instance;

      if ((_c = (_b = instance) === null || _b === void 0 ? void 0 : _b.isDisposed) === null || _c === void 0 ? void 0 : _c.call(_b)) {
        delete this._instance;
      }
    }

    return instance;
  }

}

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const KEYBORG_FOCUSIN = "keyborg:focusin";

function canOverrideNativeFocus(win) {
  const HTMLElement = win.HTMLElement;
  const origFocus = HTMLElement.prototype.focus;
  let isCustomFocusCalled = false;

  HTMLElement.prototype.focus = function focus() {
    isCustomFocusCalled = true;
  };

  const btn = win.document.createElement("button");
  btn.focus();
  HTMLElement.prototype.focus = origFocus;
  return isCustomFocusCalled;
}

let _canOverrideNativeFocus = false;
/**
 * Guarantees that the native `focus` will be used
 */

function nativeFocus(element) {
  const focus = element.focus;

  if (focus.__keyborgNativeFocus) {
    focus.__keyborgNativeFocus.call(element);
  } else {
    element.focus();
  }
}
/**
 * Overrides the native `focus` and setups the keyborg focus event
 */

function setupFocusEvent(win) {
  const kwin = win;

  if (!_canOverrideNativeFocus) {
    _canOverrideNativeFocus = canOverrideNativeFocus(kwin);
  }

  const origFocus = kwin.HTMLElement.prototype.focus;

  if (origFocus.__keyborgNativeFocus) {
    // Already set up.
    return;
  }

  kwin.HTMLElement.prototype.focus = focus;
  const data = kwin.__keyborgData = {
    focusInHandler: e => {
      var _a;

      const target = e.target;

      if (!target) {
        return;
      }

      const event = document.createEvent("HTMLEvents");
      event.initEvent(KEYBORG_FOCUSIN, true, true);
      const details = {
        relatedTarget: e.relatedTarget || undefined
      };

      if (_canOverrideNativeFocus || data.lastFocusedProgrammatically) {
        details.isFocusedProgrammatically = target === ((_a = data.lastFocusedProgrammatically) === null || _a === void 0 ? void 0 : _a.deref());
        data.lastFocusedProgrammatically = undefined;
      }

      event.details = details;
      target.dispatchEvent(event);
    }
  };
  kwin.document.addEventListener("focusin", kwin.__keyborgData.focusInHandler, true);

  function focus() {
    const keyborgNativeFocusEvent = kwin.__keyborgData;

    if (keyborgNativeFocusEvent) {
      keyborgNativeFocusEvent.lastFocusedProgrammatically = new WeakRefInstance(this);
    } // eslint-disable-next-line prefer-rest-params


    return origFocus.apply(this, arguments);
  }

  focus.__keyborgNativeFocus = origFocus;
}
/**
 * Removes keyborg event listeners and custom focus override
 * @param win The window that stores keyborg focus events
 */

function disposeFocusEvent(win) {
  const kwin = win;
  const proto = kwin.HTMLElement.prototype;
  const origFocus = proto.focus.__keyborgNativeFocus;
  const keyborgNativeFocusEvent = kwin.__keyborgData;

  if (keyborgNativeFocusEvent) {
    kwin.document.removeEventListener("focusin", keyborgNativeFocusEvent.focusInHandler, true);
    delete kwin.__keyborgData;
  }

  if (origFocus) {
    proto.focus = origFocus;
  }
}
/**
 * @param win The window that stores keyborg focus events
 * @returns The last element focused with element.focus()
 */

function getLastFocusedProgrammatically(win) {
  var _a;

  const keyborgNativeFocusEvent = win.__keyborgData;
  return keyborgNativeFocusEvent ? ((_a = keyborgNativeFocusEvent.lastFocusedProgrammatically) === null || _a === void 0 ? void 0 : _a.deref()) || null : undefined;
}

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const _dismissTimeout = 500; // When a key from dismissKeys is pressed and the focus is not moved
// during _dismissTimeout time, dismiss the keyboard navigation mode.

let _lastId = 0;
/**
 * Source of truth for all the keyborg core instances and the current keyboard navigation state
 */

class KeyborgState {
  constructor() {
    this.__keyborgCoreRefs = {};
    this._isNavigatingWithKeyboard = false;
  }

  add(keyborg) {
    const id = keyborg.id;

    if (!(id in this.__keyborgCoreRefs)) {
      this.__keyborgCoreRefs[id] = new WeakRefInstance(keyborg);
    }
  }

  remove(id) {
    delete this.__keyborgCoreRefs[id];

    if (Object.keys(this.__keyborgCoreRefs).length === 0) {
      this._isNavigatingWithKeyboard = false;
    }
  }

  setVal(isNavigatingWithKeyboard) {
    if (this._isNavigatingWithKeyboard === isNavigatingWithKeyboard) {
      return;
    }

    this._isNavigatingWithKeyboard = isNavigatingWithKeyboard;

    for (const id of Object.keys(this.__keyborgCoreRefs)) {
      const ref = this.__keyborgCoreRefs[id];
      const keyborg = ref.deref();

      if (keyborg) {
        keyborg.update(isNavigatingWithKeyboard);
      } else {
        this.remove(id);
      }
    }
  }

  getVal() {
    return this._isNavigatingWithKeyboard;
  }

}

const _state = /*#__PURE__*/new KeyborgState();
/**
 * Manages a collection of Keyborg instances in a window/document and updates keyborg state
 */


class KeyborgCore {
  constructor(win, props) {
    this._isMouseUsed = false;

    this._onFocusIn = e => {
      if (this._isMouseUsed) {
        this._isMouseUsed = false;
        return;
      }

      if (_state.getVal()) {
        return;
      }

      const details = e.details;

      if (!details.relatedTarget) {
        return;
      }

      if (details.isFocusedProgrammatically || details.isFocusedProgrammatically === undefined) {
        // The element is focused programmatically, or the programmatic focus detection
        // is not working.
        return;
      }

      _state.setVal(true);
    };

    this._onMouseDown = e => {
      if (e.buttons === 0 || e.clientX === 0 && e.clientY === 0 && e.screenX === 0 && e.screenY === 0) {
        // This is most likely an event triggered by the screen reader to perform
        // an action on an element, do not dismiss the keyboard navigation mode.
        return;
      }

      this._isMouseUsed = true;

      _state.setVal(false);
    };

    this._onKeyDown = e => {
      var _a;

      const isNavigatingWithKeyboard = _state.getVal();

      const keyCode = e.keyCode;
      const triggerKeys = this._triggerKeys;

      if (!isNavigatingWithKeyboard && (!triggerKeys || triggerKeys.has(keyCode))) {
        _state.setVal(true);
      } else if (isNavigatingWithKeyboard && ((_a = this._dismissKeys) === null || _a === void 0 ? void 0 : _a.has(keyCode))) {
        this._scheduleDismiss();
      }
    };

    this.id = "c" + ++_lastId;
    this._win = win;
    const doc = win.document;

    if (props) {
      const triggerKeys = props.triggerKeys;
      const dismissKeys = props.dismissKeys;

      if (triggerKeys === null || triggerKeys === void 0 ? void 0 : triggerKeys.length) {
        this._triggerKeys = new Set(triggerKeys);
      }

      if (dismissKeys === null || dismissKeys === void 0 ? void 0 : dismissKeys.length) {
        this._dismissKeys = new Set(dismissKeys);
      }
    }

    doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true); // Capture!

    doc.addEventListener("mousedown", this._onMouseDown, true); // Capture!

    win.addEventListener("keydown", this._onKeyDown, true); // Capture!

    setupFocusEvent(win);

    _state.add(this);
  }

  dispose() {
    const win = this._win;

    if (win) {
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = undefined;
      }

      disposeFocusEvent(win);
      const doc = win.document;
      doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true); // Capture!

      doc.removeEventListener("mousedown", this._onMouseDown, true); // Capture!

      win.removeEventListener("keydown", this._onKeyDown, true); // Capture!

      delete this._win;

      _state.remove(this.id);
    }
  }

  isDisposed() {
    return !!this._win;
  }
  /**
   * Updates all keyborg instances with the keyboard navigation state
   */


  update(isNavigatingWithKeyboard) {
    var _a, _b;

    const keyborgs = (_b = (_a = this._win) === null || _a === void 0 ? void 0 : _a.__keyborg) === null || _b === void 0 ? void 0 : _b.refs;

    if (keyborgs) {
      for (const id of Object.keys(keyborgs)) {
        Keyborg.update(keyborgs[id], isNavigatingWithKeyboard);
      }
    }
  }

  _scheduleDismiss() {
    const win = this._win;

    if (win) {
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = undefined;
      }

      const was = win.document.activeElement;
      this._dismissTimer = win.setTimeout(() => {
        this._dismissTimer = undefined;
        const cur = win.document.activeElement;

        if (was && cur && was === cur) {
          // Esc was pressed, currently focused element hasn't changed.
          // Just dismiss the keyboard navigation mode.
          _state.setVal(false);
        }
      }, _dismissTimeout);
    }
  }

}
/**
 * Used to determine the keyboard navigation state
 */


class Keyborg {
  constructor(win, props) {
    this._cb = [];
    this._id = "k" + ++_lastId;
    this._win = win;
    const current = win.__keyborg;

    if (current) {
      this._core = current.core;
      current.refs[this._id] = this;
    } else {
      this._core = new KeyborgCore(win, props);
      win.__keyborg = {
        core: this._core,
        refs: {
          [this._id]: this
        }
      };
    }
  }

  static create(win, props) {
    return new Keyborg(win, props);
  }

  static dispose(instance) {
    instance.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */


  static update(instance, isNavigatingWithKeyboard) {
    instance._cb.forEach(callback => callback(isNavigatingWithKeyboard));
  }

  dispose() {
    var _a;

    const current = (_a = this._win) === null || _a === void 0 ? void 0 : _a.__keyborg;

    if (current === null || current === void 0 ? void 0 : current.refs[this._id]) {
      delete current.refs[this._id];

      if (Object.keys(current.refs).length === 0) {
        current.core.dispose(); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        delete this._win.__keyborg;
      }
    } else if (false) {}

    this._cb = [];
    delete this._core;
    delete this._win;
  }
  /**
   * @returns Whether the user is navigating with keyboard
   */


  isNavigatingWithKeyboard() {
    return _state.getVal();
  }
  /**
   * @param callback - Called when the keyboard navigation state changes
   */


  subscribe(callback) {
    this._cb.push(callback);
  }
  /**
   * @param callback - Registered with subscribe
   */


  unsubscribe(callback) {
    const index = this._cb.indexOf(callback);

    if (index >= 0) {
      this._cb.splice(index, 1);
    }
  }
  /**
   * Manually set the keyboard navigtion state
   */


  setVal(isNavigatingWithKeyboard) {
    _state.setVal(isNavigatingWithKeyboard);
  }

}
function createKeyborg(win, props) {
  return Keyborg.create(win, props);
}
function disposeKeyborg(instance) {
  Keyborg.dispose(instance);
}

/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const version = "2.0.0";


//# sourceMappingURL=keyborg.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-tabster/lib/focus/constants.js
const KEYBOARD_NAV_ATTRIBUTE = 'data-keyboard-nav';
const KEYBOARD_NAV_SELECTOR = (/* unused pure expression or super */ null && (`:global([${KEYBOARD_NAV_ATTRIBUTE}])`));
/**
 * @internal
 */ const FOCUS_VISIBLE_ATTR = 'data-fui-focus-visible';
/**
 * @internal
 */ const FOCUS_WITHIN_ATTR = 'data-fui-focus-within';
const defaultOptions = {
    style: {},
    selector: 'focus'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-tabster/lib/focus/focusVisiblePolyfill.js



/**
 * @internal
 * @param scope - Applies the ponyfill to all DOM children
 * @param targetWindow - window
 */ function applyFocusVisiblePolyfill(scope, targetWindow) {
    if (alreadyInScope(scope)) {
        // Focus visible polyfill already applied at this scope
        return ()=>undefined;
    }
    const state = {
        current: undefined
    };
    const keyborg = createKeyborg(targetWindow);
    // When navigation mode changes remove the focus-visible selector
    keyborg.subscribe((isNavigatingWithKeyboard)=>{
        if (!isNavigatingWithKeyboard && state.current) {
            removeFocusVisibleClass(state.current);
            state.current = undefined;
        }
    });
    // Keyborg's focusin event is delegated so it's only registered once on the window
    // and contains metadata about the focus event
    const keyborgListener = (e)=>{
        if (state.current) {
            removeFocusVisibleClass(state.current);
            state.current = undefined;
        }
        if (keyborg.isNavigatingWithKeyboard() && isHTMLElement(e.target) && e.target) {
            // Griffel can't create chained global styles so use the parent element for now
            state.current = e.target;
            applyFocusVisibleClass(state.current);
        }
    };
    // Make sure that when focus leaves the scope, the focus visible class is removed
    const blurListener = (e)=>{
        if (!e.relatedTarget || isHTMLElement(e.relatedTarget) && !scope.contains(e.relatedTarget)) {
            if (state.current) {
                removeFocusVisibleClass(state.current);
                state.current = undefined;
            }
        }
    };
    scope.addEventListener(KEYBORG_FOCUSIN, keyborgListener);
    scope.addEventListener('focusout', blurListener);
    scope.focusVisible = true;
    // Return disposer
    return ()=>{
        scope.removeEventListener(KEYBORG_FOCUSIN, keyborgListener);
        scope.removeEventListener('focusout', blurListener);
        delete scope.focusVisible;
        disposeKeyborg(keyborg);
    };
}
function applyFocusVisibleClass(el) {
    el.setAttribute(FOCUS_VISIBLE_ATTR, '');
}
function removeFocusVisibleClass(el) {
    el.removeAttribute(FOCUS_VISIBLE_ATTR);
}
function alreadyInScope(el) {
    if (!el) {
        return false;
    }
    if (el.focusVisible) {
        return true;
    }
    return alreadyInScope(el === null || el === void 0 ? void 0 : el.parentElement);
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-tabster/lib/hooks/useFocusVisible.js



function useFocusVisible(options = {}) {
    const contentValue = useFluent();
    const scopeRef = react.useRef(null);
    var _options_targetDocument;
    const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contentValue.targetDocument;
    react.useEffect(()=>{
        if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && scopeRef.current) {
            return applyFocusVisiblePolyfill(scopeRef.current, targetDocument.defaultView);
        }
    }, [
        scopeRef,
        targetDocument
    ]);
    return scopeRef;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/utils/properties.js
const toObjectMap = (...items)=>{
    const result = {};
    for (const item of items){
        const keys = Array.isArray(item) ? item : Object.keys(item);
        for (const key of keys){
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */ const baseElementEvents = toObjectMap([
    'onAuxClick',
    'onAnimationEnd',
    'onAnimationStart',
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture'
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */ const baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name'
]);
/**
 * An array of microdata attributes that are allowed on every html element type.
 *
 * @public
 */ const microdataProperties = toObjectMap([
    'itemID',
    'itemProp',
    'itemRef',
    'itemScope',
    'itemType'
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */ const htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents, microdataProperties);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */ const labelProperties = toObjectMap(htmlElementProperties, [
    'form'
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */ const audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width'
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */ const videoProperties = toObjectMap(audioProperties, [
    'poster'
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */ const olProperties = toObjectMap(htmlElementProperties, [
    'start'
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */ const liProperties = toObjectMap(htmlElementProperties, [
    'value'
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */ const anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type'
]);
/**
 * An array of TIME tag properties and events.
 *
 * @public
 */ const timeProperties = toObjectMap(htmlElementProperties, [
    'dateTime'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */ const buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value'
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */ const inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width'
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */ const textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap'
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */ const selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required'
]);
const optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value'
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */ const tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing'
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */ const trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */ const thProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'rowSpan',
    'scope'
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */ const tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope'
]);
const colGroupProperties = toObjectMap(htmlElementProperties, [
    'span'
]);
const colProperties = toObjectMap(htmlElementProperties, [
    'span'
]);
/**
 * An array of FIELDSET tag properties and events.
 *
 * @public
 */ const fieldsetProperties = toObjectMap(htmlElementProperties, [
    'disabled',
    'form'
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */ const formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target'
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */ const iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width'
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */ const imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width'
]);
/**
 * An array of DIALOG tag properties and events.
 *
 * @public
 */ const dialogProperties = toObjectMap(htmlElementProperties, [
    'open',
    'onCancel',
    'onClose'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */ const divProperties = (/* unused pure expression or super */ null && (htmlElementProperties));
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropNames - The array or record of allowed prop names.
 * @param excludedPropNames
 * @returns The filtered props
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    const isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = {};
    const keys = Object.keys(props);
    for (const key of keys){
        const isNativeProp = !isArray && allowedPropNames[key] || isArray && allowedPropNames.indexOf(key) >= 0 || key.indexOf('data-') === 0 || key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/utils/getNativeElementProps.js


const nativeElementMap = {
    label: labelProperties,
    audio: audioProperties,
    video: videoProperties,
    ol: olProperties,
    li: liProperties,
    a: anchorProperties,
    button: buttonProperties,
    input: inputProperties,
    textarea: textAreaProperties,
    select: selectProperties,
    option: optionProperties,
    table: tableProperties,
    tr: trProperties,
    th: thProperties,
    td: tdProperties,
    colGroup: colGroupProperties,
    col: colProperties,
    fieldset: fieldsetProperties,
    form: formProperties,
    iframe: iframeProperties,
    img: imgProperties,
    time: timeProperties,
    dialog: dialogProperties
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    const allowedPropNames = tagName && nativeElementMap[tagName] || htmlElementProperties;
    allowedPropNames.as = 1;
    return getNativeProps(props, allowedPropNames, excludedPropNames);
}
/**
 * Splits the native props into ones that go to the `root` slot, and ones that go to the primary slot.
 *
 * This function is only for use with components that have a primary slot other than `root`.
 * Most components should use {@link getNativeElementProps} for their root slot if it is the primary slot.
 *
 * @returns An object containing the native props for the `root` and primary slots.
 */ const getPartitionedNativeProps = ({ primarySlotTagName , props , excludedPropNames  })=>{
    return {
        root: {
            style: props.style,
            className: props.className
        },
        primary: getNativeElementProps(primarySlotTagName, props, [
            ...excludedPropNames || [],
            'style',
            'className'
        ])
    };
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/hooks/useMergedRefs.js

/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */ function useMergedRefs(...refs) {
    const mergedCallback = react.useCallback((value)=>{
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (const ref of refs){
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
        ...refs
    ]);
    return mergedCallback;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/hooks/useIsomorphicLayoutEffect.js


/**
 * React currently throws a warning when using useLayoutEffect on the server. To get around it, we can conditionally
 * useEffect on the server (no-op) and useLayoutEffect in the browser. We occasionally need useLayoutEffect to
 * ensure we don't get a render flash for certain operations, but we may also need affected components to render on
 * the server.
 *
 * https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * https://github.com/reduxjs/react-redux/blob/master/src/utils/useIsomorphicLayoutEffect.js
 */ // eslint-disable-next-line no-restricted-properties
const useIsomorphicLayoutEffect = canUseDOM_canUseDOM() ? react.useLayoutEffect : react.useEffect;

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/ssr/SSRContext.js


/**
 * Default context value to use in case there is no SSRProvider. This is fine for client-only apps.
 *
 * @internal
 */ const SSRContext_defaultSSRContextValue = {
    current: 0
};
const SSRContext = /*#__PURE__*/ react.createContext(undefined);
/**
 * @internal
 */ function useSSRContext() {
    var _React_useContext;
    return (_React_useContext = react.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : SSRContext_defaultSSRContextValue;
}
/**
 * When using SSR with Fluent UI, applications must be wrapped in an SSRProvider. This ensures that auto generated ids
 * are consistent between the client and server.
 *
 * @public
 */ const SSRProvider = (props)=>{
    const [value] = React.useState(()=>({
            current: 0
        }));
    return /*#__PURE__*/ React.createElement(SSRContext.Provider, {
        value: value
    }, props.children);
};
/**
 * Returns whether the component is currently being server side rendered or hydrated on the client. Can be used to delay
 * browser-specific rendering until after hydration. May cause re-renders on a client when is used within SSRProvider.
 */ function useIsSSR() {
    const isInSSRContext = useSSRContext() !== SSRContext_defaultSSRContextValue;
    const [isSSR, setIsSSR] = React.useState(isInSSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider, provide a warning to hint to the
    // developer to add one.
    if (false) {}
    // If on the client, and the component was initially server rendered, then schedule a layout effect to update the
    // component after hydration.
    if (canUseDOM() && isInSSRContext) {
        // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
        // mounting.
        // eslint-disable-next-line
        React.useLayoutEffect(()=>{
            setIsSSR(false);
        }, []);
    }
    return isSSR;
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/hooks/useId.js


const IdPrefixContext = react.createContext(undefined);
/**
 * Allows to define a prefix that will be used for all IDs generated by useId() hook. It's useful to avoid collisions
 * between different bundles.
 */ const IdPrefixProvider = IdPrefixContext.Provider;
function useIdPrefix() {
    return react.useContext(IdPrefixContext) || '';
}
/**
 * Resets generated IDs, should be used only in tests.
 */ function resetIdsForTests() {
    defaultSSRContextValue.current = 0;
}
/**
 * Hook to generate a unique ID.
 *
 * @param prefix - Optional prefix for the ID. Defaults to 'fui-'.
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */ function useId(prefix = 'fui-', providedId) {
    const contextValue = useSSRContext();
    const idPrefix = useIdPrefix();
    // Checking if useId is available on React, if it is, we use it to generate the id. String concatenation is used to
    // prevent bundlers from complaining with older versions of React.
    const _useId = react_namespaceObject['use' + 'Id'];
    if (_useId) {
        const generatedId = _useId();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const escapedId = react.useMemo(()=>generatedId.replace(/:/g, ''), [
            generatedId
        ]);
        return providedId || `${idPrefix}${prefix}${escapedId}`;
    }
    // Hooks appear to be running conditionally, but they will always run in the same order since it's based on
    // the version of React being used. This is safe to ignore.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return react.useMemo(()=>{
        if (providedId) {
            return providedId;
        }
        return `${idPrefix}${prefix}${++contextValue.current}`;
    }, [
        idPrefix,
        prefix,
        providedId,
        contextValue
    ]);
}

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/constants.esm.js
// ----
// Heads up!
// These constants are global and will be shared between Griffel instances.
// Any change in them should happen only in a MAJOR version. If it happens,
// please change "__NAMESPACE_PREFIX__" to include a version.
const __GLOBAL__ = typeof window === 'undefined' ? __webpack_require__.g : window;
const __NAMESPACE_PREFIX__ = '@griffel/';
function getGlobalVar(name, defaultValue) {
  if (!__GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
    __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
  }
  return __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)];
}
/** @internal */
const DEBUG_RESET_CLASSES = /*#__PURE__*/getGlobalVar('DEBUG_RESET_CLASSES', {});
/** @internal */
const DEFINITION_LOOKUP_TABLE = /*#__PURE__*/getGlobalVar('DEFINITION_LOOKUP_TABLE', {});
// ----
/** @internal */
const constants_esm_DATA_BUCKET_ATTR = 'data-make-styles-bucket';
/** @internal */
const HASH_PREFIX = 'f';
/** @internal */
const RESET_HASH_PREFIX = 'r';
/** @internal */
const SEQUENCE_HASH_LENGTH = 7;
/** @internal */
const SEQUENCE_PREFIX = '___';
/** @internal */
const DEBUG_SEQUENCE_SEPARATOR = '_';
/** @internal */
const SEQUENCE_SIZE =  true ? SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH : 0;
// indexes for values in LookupItem tuple
/** @internal */
const LOOKUP_DEFINITIONS_INDEX = 0;
/** @internal */
const LOOKUP_DIR_INDEX = 1;
// This collection is a map simply for faster access when checking if a CSS property is unsupported
/** @internal */
const UNSUPPORTED_CSS_PROPERTIES = {
  all: 1,
  animation: 1,
  background: 1,
  backgroundPosition: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockStart: 1,
  borderBottom: 1,
  borderColor: 1,
  borderImage: 1,
  borderInline: 1,
  borderInlineEnd: 1,
  borderInlineStart: 1,
  borderLeft: 1,
  borderRadius: 1,
  borderRight: 1,
  borderStyle: 1,
  borderTop: 1,
  borderWidth: 1,
  caret: 1,
  columns: 1,
  columnRule: 1,
  containIntrinsicSize: 1,
  container: 1,
  flex: 1,
  flexFlow: 1,
  font: 1,
  gap: 1,
  grid: 1,
  gridArea: 1,
  gridColumn: 1,
  gridRow: 1,
  gridTemplate: 1,
  inset: 1,
  insetBlock: 1,
  insetInline: 1,
  lineClamp: 1,
  listStyle: 1,
  margin: 1,
  marginBlock: 1,
  marginInline: 1,
  mask: 1,
  maskBorder: 1,
  motion: 1,
  offset: 1,
  outline: 1,
  overflow: 1,
  overscrollBehavior: 1,
  padding: 1,
  paddingBlock: 1,
  paddingInline: 1,
  placeItems: 1,
  placeContent: 1,
  placeSelf: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginInline: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingInline: 1,
  scrollSnapMargin: 1,
  scrollTimeline: 1,
  textDecoration: 1,
  textEmphasis: 1,
  transition: 1
};


//# sourceMappingURL=constants.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}



;// CONCATENATED MODULE: ../../node_modules/@griffel/core/runtime/utils/hashSequence.esm.js



function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < SEQUENCE_HASH_LENGTH; i++) {
    value += '0';
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  if (true) {
    return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir));
  }
  return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir)) + DEBUG_SEQUENCE_SEPARATOR + padEndHash(murmur2(sequenceIds.join('')));
}


//# sourceMappingURL=hashSequence.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/runtime/reduceToClassNameForSlots.esm.js



/**
 * Reduces a classname map for slot to a classname string. Uses classnames according to text directions.
 *
 * @private
 */
function reduceToClassName(classMap, dir) {
  let className = '';
  // eslint-disable-next-line guard-for-in
  for (const propertyHash in classMap) {
    const classNameMapping = classMap[propertyHash];
    if (classNameMapping) {
      const hasRTLClassName = Array.isArray(classNameMapping);
      if (dir === 'rtl') {
        className += (hasRTLClassName ? classNameMapping[1] : classNameMapping) + ' ';
      } else {
        className += (hasRTLClassName ? classNameMapping[0] : classNameMapping) + ' ';
      }
    }
  }
  return className.slice(0, -1);
}
/**
 * Reduces classname maps for slots to classname strings. Registers them in a definition cache to be used by
 * `mergeClasses()`.
 *
 * @internal
 */
function reduceToClassNameForSlots(classesMapBySlot, dir) {
  const classNamesForSlots = {};
  // eslint-disable-next-line guard-for-in
  for (const slotName in classesMapBySlot) {
    const slotClasses = reduceToClassName(classesMapBySlot[slotName], dir);
    // Handles a case when there are no classes in a set i.e. "makeStyles({ root: {} })"
    if (slotClasses === '') {
      classNamesForSlots[slotName] = '';
      continue;
    }
    const sequenceHash = hashSequence(slotClasses, dir);
    const resultSlotClasses = sequenceHash + ' ' + slotClasses;
    DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}


//# sourceMappingURL=reduceToClassNameForSlots.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/__styles.esm.js






/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
function __styles(classesMapBySlot, cssRules) {
  const insertionCache = {};
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  let sourceURL;
  if (false) {}
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules(cssRules);
      insertionCache[rendererId] = true;
    }
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    if (false) {}
    return classNamesForSlots;
  }
  return computeClasses;
}


//# sourceMappingURL=__styles.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/mergeClasses.esm.js




// Contains a mapping of previously resolved sequences of atomic classnames
const mergeClassesCachedResults = {};
function mergeClasses() {
  // arguments are parsed manually to avoid double loops as TS & Babel transforms rest via an additional loop
  // @see https://babeljs.io/docs/en/babel-plugin-transform-parameters
  /* eslint-disable prefer-rest-params */
  let dir = null;
  let resultClassName = '';
  // Is used as a cache key to avoid object merging
  let sequenceMatch = '';
  const sequencesIds = new Array(arguments.length);
  let containsResetClassName = '';
  for (let i = 0; i < arguments.length; i++) {
    const className = arguments[i];
    if (typeof className === 'string' && className !== '') {
      // All classes generated by `makeStyles()` are prefixed by a sequence hash, this allows to identify class sets
      // without parsing each className in a string
      const sequenceIndex = className.indexOf(SEQUENCE_PREFIX);
      if (sequenceIndex === -1) {
        if (false) {}
        resultClassName += className + ' ';
      } else {
        const sequenceId = className.substr(sequenceIndex, SEQUENCE_SIZE);
        // Handles a case with mixed classnames, i.e. "ui-button ATOMIC_CLASSES"
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
      if (false) {}
    }
  }
  // .slice() there allows to avoid trailing space for non-atomic classes
  // "ui-button ui-flex " => "ui-button ui-flex"
  if (sequenceMatch === '') {
    return resultClassName.slice(0, -1);
  }
  // It's safe to reuse results to avoid continuous merging as results are stable
  // "__seq1 ... __seq2 ..." => "__seq12 ..."
  const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
  if (mergeClassesResult !== undefined) {
    return resultClassName + mergeClassesResult;
  }
  const sequenceMappings = [];
  for (let i = 0; i < arguments.length; i++) {
    const sequenceId = sequencesIds[i];
    if (sequenceId) {
      const sequenceMapping = DEFINITION_LOOKUP_TABLE[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[LOOKUP_DEFINITIONS_INDEX]);
        if (false) {}
        dir = sequenceMapping[LOOKUP_DIR_INDEX];
      } else {
        if (false) {}
      }
    }
  }
  // eslint-disable-next-line prefer-spread
  const resultDefinitions = Object.assign.apply(Object,
  // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
  [{}].concat(sequenceMappings));
  let atomicClassNames = reduceToClassName(resultDefinitions, dir);
  // Each merge of classes generates a new sequence of atomic classes that needs to be registered
  const newSequenceHash = hashSequence(atomicClassNames, dir, sequencesIds);
  atomicClassNames = newSequenceHash + ' ' + atomicClassNames;
  mergeClassesCachedResults[sequenceMatch] = atomicClassNames;
  DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultDefinitions, dir];
  return resultClassName + atomicClassNames;
}


//# sourceMappingURL=mergeClasses.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/runtime/utils/normalizeCSSBucketEntry.esm.js
/**
 * @internal
 *
 * @param entry - CSS bucket entry that can be either a string or an array
 * @returns An array where the first element is the CSS rule
 */
function normalizeCSSBucketEntry(entry) {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  if (false) {}
  return entry;
}


//# sourceMappingURL=normalizeCSSBucketEntry.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/renderer/createIsomorphicStyleSheet.esm.js


function createIsomorphicStyleSheet(styleElement, bucketName, elementAttributes) {
  // no CSSStyleSheet in SSR, just append rules here for server render
  const __cssRulesForSSR = [];
  elementAttributes[constants_esm_DATA_BUCKET_ATTR] = bucketName;
  if (styleElement) {
    for (const attrName in elementAttributes) {
      styleElement.setAttribute(attrName, elementAttributes[attrName]);
    }
  }
  function insertRule(rule) {
    if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
      return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
    return __cssRulesForSSR.push(rule);
  }
  return {
    elementAttributes,
    insertRule,
    element: styleElement,
    bucketName,
    cssRules() {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return Array.from(styleElement.sheet.cssRules).map(cssRule => cssRule.cssText);
      }
      return __cssRulesForSSR;
    }
  };
}
function createIsomorphicStyleSheetFromElement(element) {
  const elementAttributes = Array.from(element.attributes).reduce((acc, attr) => {
    acc[attr.name] = attr.value;
    return acc;
  }, {});
  const stylesheet = createIsomorphicStyleSheet(element, elementAttributes[DATA_BUCKET_ATTR], elementAttributes);
  return stylesheet;
}


//# sourceMappingURL=createIsomorphicStyleSheet.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/renderer/getStyleSheetForBucket.esm.js



/**
 * Ordered style buckets using their short pseudo name.
 *
 * @internal
 */
const styleBucketOrdering = [
// reset styles
'r',
// catch-all
'd',
// link
'l',
// visited
'v',
// focus-within
'w',
// focus
'f',
// focus-visible
'i',
// hover
'h',
// active
'a',
// keyframes
'k',
// at-rules
't',
// @media rules
'm',
// @container rules
'c'];
// avoid repeatedly calling `indexOf`to determine order during new insertions
const styleBucketOrderingMap = /*#__PURE__*/styleBucketOrdering.reduce((acc, cur, j) => {
  acc[cur] = j;
  return acc;
}, {});
/**
 * Lazily adds a `<style>` bucket to the `<head>`. This will ensure that the style buckets are ordered.
 */
function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
  const isMediaBucket = bucketName === 'm';
  const stylesheetKey = isMediaBucket ? bucketName + metadata['m'] : bucketName;
  if (!renderer.stylesheets[stylesheetKey]) {
    const tag = targetDocument && targetDocument.createElement('style');
    const stylesheet = createIsomorphicStyleSheet(tag, bucketName, {
      ...renderer.styleElementAttributes,
      ...(isMediaBucket && {
        media: metadata['m']
      })
    });
    renderer.stylesheets[stylesheetKey] = stylesheet;
    if (targetDocument && tag) {
      targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
    }
  }
  return renderer.stylesheets[stylesheetKey];
}
/**
 * Finds an element before which the new bucket style element should be inserted following the bucket sort order.
 *
 * @param targetDocument - A document
 * @param insertionPoint - An element that will be used as an initial insertion point
 * @param targetBucket - The bucket that should be inserted to DOM
 * @param renderer - Griffel renderer
 * @param metadata - metadata for CSS rule
 * @returns - Smallest style element with greater sort order than the current bucket
 */
function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata) {
  const targetOrder = styleBucketOrderingMap[targetBucket];
  // Similar to javascript sort comparators where
  // a positive value is increasing sort order
  // a negative value is decreasing sort order
  let comparer = el => targetOrder - styleBucketOrderingMap[el.getAttribute(constants_esm_DATA_BUCKET_ATTR)];
  let styleElements = targetDocument.head.querySelectorAll(`[${constants_esm_DATA_BUCKET_ATTR}]`);
  if (targetBucket === 'm' && metadata) {
    const mediaElements = targetDocument.head.querySelectorAll(`[${constants_esm_DATA_BUCKET_ATTR}="${targetBucket}"]`);
    // only reduce the scope of the search and change comparer
    // if there are other media buckets already on the page
    if (mediaElements.length) {
      styleElements = mediaElements;
      comparer = el => renderer.compareMediaQueries(metadata['m'], el.media);
    }
  }
  const length = styleElements.length;
  let index = length - 1;
  while (index >= 0) {
    const styleElement = styleElements.item(index);
    if (comparer(styleElement) > 0) {
      return styleElement.nextSibling;
    }
    index--;
  }
  if (length > 0) {
    return styleElements.item(0);
  }
  return insertionPoint ? insertionPoint.nextSibling : null;
}


//# sourceMappingURL=getStyleSheetForBucket.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/renderer/createDOMRenderer.esm.js






let lastIndex = 0;
/** @internal */
const defaultCompareMediaQueries = (a, b) => a < b ? -1 : a > b ? 1 : 0;
/**
 * Creates a new instances of a renderer.
 *
 * @public
 */
function createDOMRenderer(targetDocument = typeof document === 'undefined' ? undefined : document, options = {}) {
  const {
    unstable_filterCSSRule,
    insertionPoint,
    styleElementAttributes,
    compareMediaQueries = defaultCompareMediaQueries
  } = options;
  const renderer = {
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(styleElementAttributes),
    compareMediaQueries,
    id: `d${lastIndex++}`,
    insertCSSRules(cssRules) {
      // eslint-disable-next-line guard-for-in
      for (const styleBucketName in cssRules) {
        const cssRulesForBucket = cssRules[styleBucketName];
        // This is a hot path in rendering styles: ".length" is cached in "l" var to avoid accesses the property
        for (let i = 0, l = cssRulesForBucket.length; i < l; i++) {
          const [ruleCSS, metadata] = normalizeCSSBucketEntry(cssRulesForBucket[i]);
          const sheet = getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if (false) {}
          try {
            if (unstable_filterCSSRule) {
              if (unstable_filterCSSRule(ruleCSS)) {
                sheet.insertRule(ruleCSS);
              }
            } else {
              sheet.insertRule(ruleCSS);
            }
          } catch (e) {
            // We've disabled these warnings due to false-positive errors with browser prefixes
            if (false) {}
          }
        }
      }
    }
  };
  if (targetDocument && "production" !== 'production' && 0) {}
  return renderer;
}
/**
 * Suffixes to be ignored in case of error
 */
const ignoreSuffixes = /*#__PURE__*/['-moz-placeholder', '-moz-focus-inner', '-moz-focusring', '-ms-input-placeholder', '-moz-read-write', '-moz-read-only'].join('|');
const ignoreSuffixesRegex = /*#__PURE__*/new RegExp(`:(${ignoreSuffixes})`);


//# sourceMappingURL=createDOMRenderer.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/react/RendererContext.esm.js



/**
 * Verifies if an application can use DOM.
 */
function RendererContext_esm_canUseDOM() {
  return typeof window !== 'undefined' && !!(window.document && window.document.createElement);
}
/**
 * @private
 */
const RendererContext = /*#__PURE__*/react.createContext( /*#__PURE__*/createDOMRenderer());
/**
 * @public
 */
const RendererProvider = ({
  children,
  renderer,
  targetDocument
}) => {
  if (RendererContext_esm_canUseDOM()) {
    // This if statement technically breaks the rules of hooks, but is safe because the condition never changes after
    // mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useMemo(() => {
      // "rehydrateCache()" can't be called in effects as it needs to be called before any component will be rendered to
      // avoid double insertion of classes
      rehydrateRendererCache(renderer, targetDocument);
    }, [renderer, targetDocument]);
  }
  return /*#__PURE__*/React.createElement(RendererContext.Provider, {
    value: renderer
  }, children);
};
/**
 * Returns an instance of current makeStyles() renderer.
 *
 * @private Exported as "useRenderer_unstable" use it on own risk. Can be changed or removed without a notice.
 */
function useRenderer() {
  return react.useContext(RendererContext);
}


//# sourceMappingURL=RendererContext.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderStyles.styles.js



const fluentProviderClassNames = {
  root: 'fui-FluentProvider'
};
const useStyles = /*#__PURE__*/__styles({
  root: {
    sj55zd: "f19n0e5",
    De3pzq: "fxugw4r",
    fsow6f: ["f1o700av", "fes3tcz"],
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  }
}, {
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
});
/** Applies style classnames to slots */
const useFluentProviderStyles_unstable = state => {
  const renderer = useRenderer();
  const styles = useStyles({
    dir: state.dir,
    renderer
  });
  state.root.className = mergeClasses(fluentProviderClassNames.root, state.themeClassName, styles.root, state.root.className);
  return state;
};
//# sourceMappingURL=useFluentProviderStyles.styles.js.map
;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderThemeStyleTag.js



// String concatenation is used to prevent bundlers to complain with older versions of React
const useInsertionEffect = react_namespaceObject['useInsertion' + 'Effect'] ? react_namespaceObject['useInsertion' + 'Effect'] : useIsomorphicLayoutEffect;
const createStyleTag = (target, elementAttributes)=>{
    if (!target) {
        return undefined;
    }
    const tag = target.createElement('style');
    Object.keys(elementAttributes).forEach((attrName)=>{
        tag.setAttribute(attrName, elementAttributes[attrName]);
    });
    target.head.appendChild(tag);
    return tag;
};
const insertSheet = (tag, rule)=>{
    const sheet = tag.sheet;
    if (sheet) {
        if (sheet.cssRules.length > 0) {
            sheet.deleteRule(0);
        }
        sheet.insertRule(rule, 0);
    } else if (false) {}
};
/**
 * Writes a theme as css variables in a style tag on the provided targetDocument as a rule applied to a CSS class
 * @internal
 * @returns CSS class to apply the rule
 */ const useFluentProviderThemeStyleTag = (options)=>{
    const { targetDocument , theme , rendererAttributes  } = options;
    const styleTag = react.useRef();
    const styleTagId = useId(fluentProviderClassNames.root);
    const styleElementAttributes = rendererAttributes;
    const cssVarsAsString = react.useMemo(()=>{
        return theme ? Object.keys(theme).reduce((cssVarRule, cssVar)=>{
            cssVarRule += `--${cssVar}: ${theme[cssVar]}; `;
            return cssVarRule;
        }, '') : '';
    }, [
        theme
    ]);
    const rule = `.${styleTagId} { ${cssVarsAsString} }`;
    useHandleSSRStyleElements(targetDocument, styleTagId);
    useInsertionEffect(()=>{
        // The style element could already have been created during SSR - no need to recreate it
        const ssrStyleElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.getElementById(styleTagId);
        if (ssrStyleElement) {
            styleTag.current = ssrStyleElement;
        } else {
            styleTag.current = createStyleTag(targetDocument, {
                ...styleElementAttributes,
                id: styleTagId
            });
            if (styleTag.current) {
                insertSheet(styleTag.current, rule);
            }
        }
        return ()=>{
            var _styleTag_current;
            (_styleTag_current = styleTag.current) === null || _styleTag_current === void 0 ? void 0 : _styleTag_current.remove();
        };
    }, [
        styleTagId,
        targetDocument,
        rule,
        styleElementAttributes
    ]);
    return {
        styleTagId,
        rule
    };
};
function useHandleSSRStyleElements(targetDocument, styleTagId) {
    // Using a state factory so that this logic only runs once per render
    // Each FluentProvider can create its own style element during SSR as a slot
    // Moves all theme style elements to document head during render to avoid hydration errors.
    // Should be strict mode safe since the logic is idempotent.
    react.useState(()=>{
        if (!targetDocument) {
            return;
        }
        const themeStyleElement = targetDocument.getElementById(styleTagId);
        if (themeStyleElement) {
            targetDocument.head.append(themeStyleElement);
        }
    });
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProvider.js






/**
 * Create the state required to render FluentProvider.
 *
 * The returned state can be modified with hooks such as useFluentProviderStyles_unstable,
 * before being passed to renderFluentProvider_unstable.
 *
 * @param props - props from this instance of FluentProvider
 * @param ref - reference to root HTMLElement of FluentProvider
 */ const useFluentProvider_unstable = (props, ref)=>{
    const parentContext = useFluent();
    const parentTheme = useTheme();
    const parentOverrides = useOverrides();
    const parentCustomStyleHooks = react.useContext(CustomStyleHooksContext) || {};
    /**
   * TODO: add merge functions to "dir" merge,
   * nesting providers with the same "dir" should not add additional attributes to DOM
   * see https://github.com/microsoft/fluentui/blob/0dc74a19f3aa5a058224c20505016fbdb84db172/packages/fluentui/react-northstar/src/utils/mergeProviderContexts.ts#L89-L93
   */ const { applyStylesToPortals =true , // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable , dir =parentContext.dir , targetDocument =parentContext.targetDocument , theme , overrides_unstable: overrides = {}  } = props;
    const mergedTheme = shallowMerge(parentTheme, theme);
    const mergedOverrides = shallowMerge(parentOverrides, overrides);
    const mergedCustomStyleHooks = shallowMerge(parentCustomStyleHooks, customStyleHooks_unstable);
    react.useEffect(()=>{
        if (false) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const renderer = useRenderer();
    var _renderer_styleElementAttributes;
    const { styleTagId , rule  } = useFluentProviderThemeStyleTag({
        theme: mergedTheme,
        targetDocument,
        rendererAttributes: (_renderer_styleElementAttributes = renderer.styleElementAttributes) !== null && _renderer_styleElementAttributes !== void 0 ? _renderer_styleElementAttributes : {}
    });
    return {
        applyStylesToPortals,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        customStyleHooks_unstable: mergedCustomStyleHooks,
        dir,
        targetDocument,
        theme: mergedTheme,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        overrides_unstable: mergedOverrides,
        themeClassName: styleTagId,
        components: {
            root: 'div'
        },
        root: getNativeElementProps('div', {
            ...props,
            dir,
            ref: useMergedRefs(ref, useFocusVisible({
                targetDocument
            }))
        }),
        serverStyleProps: {
            cssRule: rule,
            attributes: {
                ...renderer.styleElementAttributes,
                id: styleTagId
            }
        }
    };
};
function shallowMerge(a, b) {
    // Merge impacts perf: we should like to avoid it if it's possible
    if (a && b) {
        return {
            ...a,
            ...b
        };
    }
    if (a) {
        return a;
    }
    return b;
}
function useTheme() {
    return react.useContext(ThemeContext);
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/useFluentProviderContextValues.js

function useFluentProviderContextValues_unstable(state) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { applyStylesToPortals , // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable , dir , root , targetDocument , theme , themeClassName , // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable  } = state;
    const provider = react.useMemo(()=>({
            dir,
            targetDocument
        }), [
        dir,
        targetDocument
    ]);
    // "Tooltip" component mutates an object in this context, instance should be stable
    const [tooltip] = react.useState(()=>({}));
    return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        customStyleHooks_unstable,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        overrides_unstable,
        provider,
        textDirection: dir,
        tooltip,
        theme,
        themeClassName: applyStylesToPortals ? root.className : themeClassName
    };
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js





const FluentProvider = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    const state = useFluentProvider_unstable(props, ref);
    useFluentProviderStyles_unstable(state);
    const contextValues = useFluentProviderContextValues_unstable(state);
    return renderFluentProvider_unstable(state, contextValues);
});
FluentProvider.displayName = 'FluentProvider';

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/colors.js
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ const grey = {
    '2': '#050505',
    '4': '#0a0a0a',
    '6': '#0f0f0f',
    '8': '#141414',
    '10': '#1a1a1a',
    '12': '#1f1f1f',
    '14': '#242424',
    '16': '#292929',
    '18': '#2e2e2e',
    '20': '#333333',
    '22': '#383838',
    '24': '#3d3d3d',
    '26': '#424242',
    '28': '#474747',
    '30': '#4d4d4d',
    '32': '#525252',
    '34': '#575757',
    '36': '#5c5c5c',
    '38': '#616161',
    '40': '#666666',
    '42': '#6b6b6b',
    '44': '#707070',
    '46': '#757575',
    '48': '#7a7a7a',
    '50': '#808080',
    '52': '#858585',
    '54': '#8a8a8a',
    '56': '#8f8f8f',
    '58': '#949494',
    '60': '#999999',
    '62': '#9e9e9e',
    '64': '#a3a3a3',
    '66': '#a8a8a8',
    '68': '#adadad',
    '70': '#b3b3b3',
    '72': '#b8b8b8',
    '74': '#bdbdbd',
    '76': '#c2c2c2',
    '78': '#c7c7c7',
    '80': '#cccccc',
    '82': '#d1d1d1',
    '84': '#d6d6d6',
    '86': '#dbdbdb',
    '88': '#e0e0e0',
    '90': '#e6e6e6',
    '92': '#ebebeb',
    '94': '#f0f0f0',
    '96': '#f5f5f5',
    '98': '#fafafa'
};
const whiteAlpha = {
    '5': 'rgba(255, 255, 255, 0.05)',
    '10': 'rgba(255, 255, 255, 0.1)',
    '20': 'rgba(255, 255, 255, 0.2)',
    '30': 'rgba(255, 255, 255, 0.3)',
    '40': 'rgba(255, 255, 255, 0.4)',
    '50': 'rgba(255, 255, 255, 0.5)',
    '60': 'rgba(255, 255, 255, 0.6)',
    '70': 'rgba(255, 255, 255, 0.7)',
    '80': 'rgba(255, 255, 255, 0.8)',
    '90': 'rgba(255, 255, 255, 0.9)'
};
const blackAlpha = {
    '5': 'rgba(0, 0, 0, 0.05)',
    '10': 'rgba(0, 0, 0, 0.1)',
    '20': 'rgba(0, 0, 0, 0.2)',
    '30': 'rgba(0, 0, 0, 0.3)',
    '40': 'rgba(0, 0, 0, 0.4)',
    '50': 'rgba(0, 0, 0, 0.5)',
    '60': 'rgba(0, 0, 0, 0.6)',
    '70': 'rgba(0, 0, 0, 0.7)',
    '80': 'rgba(0, 0, 0, 0.8)',
    '90': 'rgba(0, 0, 0, 0.9)'
};
const grey10Alpha = {
    '5': 'rgba(26, 26, 26, 0.05)',
    '10': 'rgba(26, 26, 26, 0.1)',
    '20': 'rgba(26, 26, 26, 0.2)',
    '30': 'rgba(26, 26, 26, 0.3)',
    '40': 'rgba(26, 26, 26, 0.4)',
    '50': 'rgba(26, 26, 26, 0.5)',
    '60': 'rgba(26, 26, 26, 0.6)',
    '70': 'rgba(26, 26, 26, 0.7)',
    '80': 'rgba(26, 26, 26, 0.8)',
    '90': 'rgba(26, 26, 26, 0.9)'
};
const grey12Alpha = {
    '5': 'rgba(31, 31, 31, 0.05)',
    '10': 'rgba(31, 31, 31, 0.1)',
    '20': 'rgba(31, 31, 31, 0.2)',
    '30': 'rgba(31, 31, 31, 0.3)',
    '40': 'rgba(31, 31, 31, 0.4)',
    '50': 'rgba(31, 31, 31, 0.5)',
    '60': 'rgba(31, 31, 31, 0.6)',
    '70': 'rgba(31, 31, 31, 0.7)',
    '80': 'rgba(31, 31, 31, 0.8)',
    '90': 'rgba(31, 31, 31, 0.9)'
};
const grey14Alpha = {
    '5': 'rgba(36, 36, 36, 0.05)',
    '10': 'rgba(36, 36, 36, 0.1)',
    '20': 'rgba(36, 36, 36, 0.2)',
    '30': 'rgba(36, 36, 36, 0.3)',
    '40': 'rgba(36, 36, 36, 0.4)',
    '50': 'rgba(36, 36, 36, 0.5)',
    '60': 'rgba(36, 36, 36, 0.6)',
    '70': 'rgba(36, 36, 36, 0.7)',
    '80': 'rgba(36, 36, 36, 0.8)',
    '90': 'rgba(36, 36, 36, 0.9)'
};
const white = '#ffffff';
const black = '#000000';
const hcHyperlink = '#ffff00';
const hcHighlight = '#1aebff';
const hcDisabled = '#3ff23f';
const hcCanvas = '#000000';
const hcCanvasText = '#ffffff';
const hcHighlightText = '#000000';
const hcButtonText = '#000000';
const hcButtonFace = '#ffffff';
const darkRed = {
    shade50: '#130204',
    shade40: '#230308',
    shade30: '#420610',
    shade20: '#590815',
    shade10: '#690a19',
    primary: '#750b1c',
    tint10: '#861b2c',
    tint20: '#962f3f',
    tint30: '#ac4f5e',
    tint40: '#d69ca5',
    tint50: '#e9c7cd',
    tint60: '#f9f0f2'
};
const burgundy = {
    shade50: '#1a0607',
    shade40: '#310b0d',
    shade30: '#5c1519',
    shade20: '#7d1d21',
    shade10: '#942228',
    primary: '#a4262c',
    tint10: '#af393e',
    tint20: '#ba4d52',
    tint30: '#c86c70',
    tint40: '#e4afb2',
    tint50: '#f0d3d4',
    tint60: '#fbf4f4'
};
const cranberry = {
    shade50: '#200205',
    shade40: '#3b0509',
    shade30: '#6e0811',
    shade20: '#960b18',
    shade10: '#b10e1c',
    primary: '#c50f1f',
    tint10: '#cc2635',
    tint20: '#d33f4c',
    tint30: '#dc626d',
    tint40: '#eeacb2',
    tint50: '#f6d1d5',
    tint60: '#fdf3f4'
};
const red = {
    shade50: '#210809',
    shade40: '#3f1011',
    shade30: '#751d1f',
    shade20: '#9f282b',
    shade10: '#bc2f32',
    primary: '#d13438',
    tint10: '#d7494c',
    tint20: '#dc5e62',
    tint30: '#e37d80',
    tint40: '#f1bbbc',
    tint50: '#f8dadb',
    tint60: '#fdf6f6'
};
const darkOrange = {
    shade50: '#230900',
    shade40: '#411200',
    shade30: '#7a2101',
    shade20: '#a62d01',
    shade10: '#c43501',
    primary: '#da3b01',
    tint10: '#de501c',
    tint20: '#e36537',
    tint30: '#e9835e',
    tint40: '#f4bfab',
    tint50: '#f9dcd1',
    tint60: '#fdf6f3'
};
const bronze = {
    shade50: '#1b0a01',
    shade40: '#321303',
    shade30: '#5e2405',
    shade20: '#7f3107',
    shade10: '#963a08',
    primary: '#a74109',
    tint10: '#b2521e',
    tint20: '#bc6535',
    tint30: '#ca8057',
    tint40: '#e5bba4',
    tint50: '#f1d9cc',
    tint60: '#fbf5f2'
};
const pumpkin = {
    shade50: '#200d03',
    shade40: '#3d1805',
    shade30: '#712d09',
    shade20: '#9a3d0c',
    shade10: '#b6480e',
    primary: '#ca5010',
    tint10: '#d06228',
    tint20: '#d77440',
    tint30: '#df8e64',
    tint40: '#efc4ad',
    tint50: '#f7dfd2',
    tint60: '#fdf7f4'
};
const orange = {
    shade50: '#271002',
    shade40: '#4a1e04',
    shade30: '#8a3707',
    shade20: '#bc4b09',
    shade10: '#de590b',
    primary: '#f7630c',
    tint10: '#f87528',
    tint20: '#f98845',
    tint30: '#faa06b',
    tint40: '#fdcfb4',
    tint50: '#fee5d7',
    tint60: '#fff9f5'
};
const peach = {
    shade50: '#291600',
    shade40: '#4d2a00',
    shade30: '#8f4e00',
    shade20: '#c26a00',
    shade10: '#e67e00',
    primary: '#ff8c00',
    tint10: '#ff9a1f',
    tint20: '#ffa83d',
    tint30: '#ffba66',
    tint40: '#ffddb3',
    tint50: '#ffedd6',
    tint60: '#fffaf5'
};
const marigold = {
    shade50: '#251a00',
    shade40: '#463100',
    shade30: '#835b00',
    shade20: '#b27c00',
    shade10: '#d39300',
    primary: '#eaa300',
    tint10: '#edad1c',
    tint20: '#efb839',
    tint30: '#f2c661',
    tint40: '#f9e2ae',
    tint50: '#fcefd3',
    tint60: '#fefbf4'
};
const yellow = {
    primary: '#fde300',
    shade10: '#e4cc00',
    shade20: '#c0ad00',
    shade30: '#817400',
    shade40: '#4c4400',
    shade50: '#282400',
    tint10: '#fde61e',
    tint20: '#fdea3d',
    tint30: '#feee66',
    tint40: '#fef7b2',
    tint50: '#fffad6',
    tint60: '#fffef5'
};
const gold = {
    shade50: '#1f1900',
    shade40: '#3a2f00',
    shade30: '#6c5700',
    shade20: '#937700',
    shade10: '#ae8c00',
    primary: '#c19c00',
    tint10: '#c8a718',
    tint20: '#d0b232',
    tint30: '#dac157',
    tint40: '#ecdfa5',
    tint50: '#f5eece',
    tint60: '#fdfbf2'
};
const brass = {
    shade50: '#181202',
    shade40: '#2e2103',
    shade30: '#553e06',
    shade20: '#745408',
    shade10: '#89640a',
    primary: '#986f0b',
    tint10: '#a47d1e',
    tint20: '#b18c34',
    tint30: '#c1a256',
    tint40: '#e0cea2',
    tint50: '#efe4cb',
    tint60: '#fbf8f2'
};
const brown = {
    shade50: '#170e07',
    shade40: '#2b1a0e',
    shade30: '#50301a',
    shade20: '#6c4123',
    shade10: '#804d29',
    primary: '#8e562e',
    tint10: '#9c663f',
    tint20: '#a97652',
    tint30: '#bb8f6f',
    tint40: '#ddc3b0',
    tint50: '#edded3',
    tint60: '#faf7f4'
};
const darkBrown = {
    shade50: '#0c0704',
    shade40: '#170c08',
    shade30: '#2b1710',
    shade20: '#3a1f15',
    shade10: '#452519',
    primary: '#4d291c',
    tint10: '#623a2b',
    tint20: '#784d3e',
    tint30: '#946b5c',
    tint40: '#caada3',
    tint50: '#e3d2cb',
    tint60: '#f8f3f2'
};
const lime = {
    shade50: '#121b06',
    shade40: '#23330b',
    shade30: '#405f14',
    shade20: '#57811b',
    shade10: '#689920',
    primary: '#73aa24',
    tint10: '#81b437',
    tint20: '#90be4c',
    tint30: '#a4cc6c',
    tint40: '#cfe5af',
    tint50: '#e5f1d3',
    tint60: '#f8fcf4'
};
const forest = {
    shade50: '#0c1501',
    shade40: '#162702',
    shade30: '#294903',
    shade20: '#376304',
    shade10: '#427505',
    primary: '#498205',
    tint10: '#599116',
    tint20: '#6ba02b',
    tint30: '#85b44c',
    tint40: '#bdd99b',
    tint50: '#dbebc7',
    tint60: '#f6faf0'
};
const seafoam = {
    shade50: '#002111',
    shade40: '#003d20',
    shade30: '#00723b',
    shade20: '#009b51',
    shade10: '#00b85f',
    primary: '#00cc6a',
    tint10: '#19d279',
    tint20: '#34d889',
    tint30: '#5ae0a0',
    tint40: '#a8f0cd',
    tint50: '#cff7e4',
    tint60: '#f3fdf8'
};
const lightGreen = {
    shade50: '#031a02',
    shade40: '#063004',
    shade30: '#0b5a08',
    shade20: '#0e7a0b',
    shade10: '#11910d',
    primary: '#13a10e',
    tint10: '#27ac22',
    tint20: '#3db838',
    tint30: '#5ec75a',
    tint40: '#a7e3a5',
    tint50: '#cef0cd',
    tint60: '#f2fbf2'
};
const green = {
    shade50: '#031403',
    shade40: '#052505',
    shade30: '#094509',
    shade20: '#0c5e0c',
    shade10: '#0e700e',
    primary: '#107c10',
    tint10: '#218c21',
    tint20: '#359b35',
    tint30: '#54b054',
    tint40: '#9fd89f',
    tint50: '#c9eac9',
    tint60: '#f1faf1'
};
const darkGreen = {
    shade50: '#021102',
    shade40: '#032003',
    shade30: '#063b06',
    shade20: '#085108',
    shade10: '#0a5f0a',
    primary: '#0b6a0b',
    tint10: '#1a7c1a',
    tint20: '#2d8e2d',
    tint30: '#4da64d',
    tint40: '#9ad29a',
    tint50: '#c6e7c6',
    tint60: '#f0f9f0'
};
const lightTeal = {
    shade50: '#001d1f',
    shade40: '#00373a',
    shade30: '#00666d',
    shade20: '#008b94',
    shade10: '#00a5af',
    primary: '#00b7c3',
    tint10: '#18bfca',
    tint20: '#32c8d1',
    tint30: '#58d3db',
    tint40: '#a6e9ed',
    tint50: '#cef3f5',
    tint60: '#f2fcfd'
};
const teal = {
    shade50: '#001516',
    shade40: '#012728',
    shade30: '#02494c',
    shade20: '#026467',
    shade10: '#037679',
    primary: '#038387',
    tint10: '#159195',
    tint20: '#2aa0a4',
    tint30: '#4cb4b7',
    tint40: '#9bd9db',
    tint50: '#c7ebec',
    tint60: '#f0fafa'
};
const darkTeal = {
    shade50: '#001010',
    shade40: '#001f1f',
    shade30: '#003939',
    shade20: '#004e4e',
    shade10: '#005c5c',
    primary: '#006666',
    tint10: '#0e7878',
    tint20: '#218b8b',
    tint30: '#41a3a3',
    tint40: '#92d1d1',
    tint50: '#c2e7e7',
    tint60: '#eff9f9'
};
const cyan = {
    shade50: '#00181e',
    shade40: '#002e38',
    shade30: '#005669',
    shade20: '#00748f',
    shade10: '#008aa9',
    primary: '#0099bc',
    tint10: '#18a4c4',
    tint20: '#31afcc',
    tint30: '#56bfd7',
    tint40: '#a4deeb',
    tint50: '#cdedf4',
    tint60: '#f2fafc'
};
const steel = {
    shade50: '#000f12',
    shade40: '#001b22',
    shade30: '#00333f',
    shade20: '#004555',
    shade10: '#005265',
    primary: '#005b70',
    tint10: '#0f6c81',
    tint20: '#237d92',
    tint30: '#4496a9',
    tint40: '#94c8d4',
    tint50: '#c3e1e8',
    tint60: '#eff7f9'
};
const lightBlue = {
    shade50: '#091823',
    shade40: '#112d42',
    shade30: '#20547c',
    shade20: '#2c72a8',
    shade10: '#3487c7',
    primary: '#3a96dd',
    tint10: '#4fa1e1',
    tint20: '#65ade5',
    tint30: '#83bdeb',
    tint40: '#bfddf5',
    tint50: '#dcedfa',
    tint60: '#f6fafe'
};
const blue = {
    shade50: '#001322',
    shade40: '#002440',
    shade30: '#004377',
    shade20: '#005ba1',
    shade10: '#006cbf',
    primary: '#0078d4',
    tint10: '#1a86d9',
    tint20: '#3595de',
    tint30: '#5caae5',
    tint40: '#a9d3f2',
    tint50: '#d0e7f8',
    tint60: '#f3f9fd'
};
const royalBlue = {
    shade50: '#000c16',
    shade40: '#00172a',
    shade30: '#002c4e',
    shade20: '#003b6a',
    shade10: '#00467e',
    primary: '#004e8c',
    tint10: '#125e9a',
    tint20: '#286fa8',
    tint30: '#4a89ba',
    tint40: '#9abfdc',
    tint50: '#c7dced',
    tint60: '#f0f6fa'
};
const darkBlue = {
    shade50: '#000910',
    shade40: '#00111f',
    shade30: '#002039',
    shade20: '#002b4e',
    shade10: '#00335c',
    primary: '#003966',
    tint10: '#0e4a78',
    tint20: '#215c8b',
    tint30: '#4178a3',
    tint40: '#92b5d1',
    tint50: '#c2d6e7',
    tint60: '#eff4f9'
};
const cornflower = {
    shade50: '#0d1126',
    shade40: '#182047',
    shade30: '#2c3c85',
    shade20: '#3c51b4',
    shade10: '#4760d5',
    primary: '#4f6bed',
    tint10: '#637cef',
    tint20: '#778df1',
    tint30: '#93a4f4',
    tint40: '#c8d1fa',
    tint50: '#e1e6fc',
    tint60: '#f7f9fe'
};
const navy = {
    shade50: '#00061d',
    shade40: '#000c36',
    shade30: '#001665',
    shade20: '#001e89',
    shade10: '#0023a2',
    primary: '#0027b4',
    tint10: '#173bbd',
    tint20: '#3050c6',
    tint30: '#546fd2',
    tint40: '#a3b2e8',
    tint50: '#ccd5f3',
    tint60: '#f2f4fc'
};
const lavender = {
    shade50: '#120f25',
    shade40: '#221d46',
    shade30: '#3f3682',
    shade20: '#5649b0',
    shade10: '#6656d1',
    primary: '#7160e8',
    tint10: '#8172eb',
    tint20: '#9184ee',
    tint30: '#a79cf1',
    tint40: '#d2ccf8',
    tint50: '#e7e4fb',
    tint60: '#f9f8fe'
};
const purple = {
    shade50: '#0f0717',
    shade40: '#1c0e2b',
    shade30: '#341a51',
    shade20: '#46236e',
    shade10: '#532982',
    primary: '#5c2e91',
    tint10: '#6b3f9e',
    tint20: '#7c52ab',
    tint30: '#9470bd',
    tint40: '#c6b1de',
    tint50: '#e0d3ed',
    tint60: '#f7f4fb'
};
const darkPurple = {
    shade50: '#0a0411',
    shade40: '#130820',
    shade30: '#240f3c',
    shade20: '#311552',
    shade10: '#3a1861',
    primary: '#401b6c',
    tint10: '#512b7e',
    tint20: '#633e8f',
    tint30: '#7e5ca7',
    tint40: '#b9a3d3',
    tint50: '#d8cce7',
    tint60: '#f5f2f9'
};
const orchid = {
    shade50: '#16101d',
    shade40: '#281e37',
    shade30: '#4c3867',
    shade20: '#674c8c',
    shade10: '#795aa6',
    primary: '#8764b8',
    tint10: '#9373c0',
    tint20: '#a083c9',
    tint30: '#b29ad4',
    tint40: '#d7caea',
    tint50: '#e9e2f4',
    tint60: '#f9f8fc'
};
const grape = {
    shade50: '#160418',
    shade40: '#29072e',
    shade30: '#4c0d55',
    shade20: '#671174',
    shade10: '#7a1589',
    primary: '#881798',
    tint10: '#952aa4',
    tint20: '#a33fb1',
    tint30: '#b55fc1',
    tint40: '#d9a7e0',
    tint50: '#eaceef',
    tint60: '#faf2fb'
};
const berry = {
    shade50: '#1f091d',
    shade40: '#3a1136',
    shade30: '#6d2064',
    shade20: '#932b88',
    shade10: '#af33a1',
    primary: '#c239b3',
    tint10: '#c94cbc',
    tint20: '#d161c4',
    tint30: '#da7ed0',
    tint40: '#edbbe7',
    tint50: '#f5daf2',
    tint60: '#fdf5fc'
};
const lilac = {
    shade50: '#1c0b1f',
    shade40: '#35153a',
    shade30: '#63276d',
    shade20: '#863593',
    shade10: '#9f3faf',
    primary: '#b146c2',
    tint10: '#ba58c9',
    tint20: '#c36bd1',
    tint30: '#cf87da',
    tint40: '#e6bfed',
    tint50: '#f2dcf5',
    tint60: '#fcf6fd'
};
const pink = {
    shade50: '#24091b',
    shade40: '#441232',
    shade30: '#80215d',
    shade20: '#ad2d7e',
    shade10: '#cd3595',
    primary: '#e43ba6',
    tint10: '#e750b0',
    tint20: '#ea66ba',
    tint30: '#ef85c8',
    tint40: '#f7c0e3',
    tint50: '#fbddf0',
    tint60: '#fef6fb'
};
const hotPink = {
    shade50: '#240016',
    shade40: '#44002a',
    shade30: '#7f004e',
    shade20: '#ad006a',
    shade10: '#cc007e',
    primary: '#e3008c',
    tint10: '#e61c99',
    tint20: '#ea38a6',
    tint30: '#ee5fb7',
    tint40: '#f7adda',
    tint50: '#fbd2eb',
    tint60: '#fef4fa'
};
const magenta = {
    shade50: '#1f0013',
    shade40: '#390024',
    shade30: '#6b0043',
    shade20: '#91005a',
    shade10: '#ac006b',
    primary: '#bf0077',
    tint10: '#c71885',
    tint20: '#ce3293',
    tint30: '#d957a8',
    tint40: '#eca5d1',
    tint50: '#f5cee6',
    tint60: '#fcf2f9'
};
const plum = {
    shade50: '#13000c',
    shade40: '#240017',
    shade30: '#43002b',
    shade20: '#5a003b',
    shade10: '#6b0045',
    primary: '#77004d',
    tint10: '#87105d',
    tint20: '#98246f',
    tint30: '#ad4589',
    tint40: '#d696c0',
    tint50: '#e9c4dc',
    tint60: '#faf0f6'
};
const beige = {
    shade50: '#141313',
    shade40: '#252323',
    shade30: '#444241',
    shade20: '#5d5958',
    shade10: '#6e6968',
    primary: '#7a7574',
    tint10: '#8a8584',
    tint20: '#9a9594',
    tint30: '#afabaa',
    tint40: '#d7d4d4',
    tint50: '#eae8e8',
    tint60: '#faf9f9'
};
const mink = {
    shade50: '#0f0e0e',
    shade40: '#1c1b1a',
    shade30: '#343231',
    shade20: '#474443',
    shade10: '#54514f',
    primary: '#5d5a58',
    tint10: '#706d6b',
    tint20: '#84817e',
    tint30: '#9e9b99',
    tint40: '#cecccb',
    tint50: '#e5e4e3',
    tint60: '#f8f8f8'
};
const silver = {
    shade50: '#151818',
    shade40: '#282d2e',
    shade30: '#4a5356',
    shade20: '#657174',
    shade10: '#78868a',
    primary: '#859599',
    tint10: '#92a1a5',
    tint20: '#a0aeb1',
    tint30: '#b3bfc2',
    tint40: '#d8dfe0',
    tint50: '#eaeeef',
    tint60: '#fafbfb'
};
const platinum = {
    shade50: '#111314',
    shade40: '#1f2426',
    shade30: '#3b4447',
    shade20: '#505c60',
    shade10: '#5f6d71',
    primary: '#69797e',
    tint10: '#79898d',
    tint20: '#89989d',
    tint30: '#a0adb2',
    tint40: '#cdd6d8',
    tint50: '#e4e9ea',
    tint60: '#f8f9fa'
};
const colors_anchor = {
    shade50: '#090a0b',
    shade40: '#111315',
    shade30: '#202427',
    shade20: '#2b3135',
    shade10: '#333a3f',
    primary: '#394146',
    tint10: '#4d565c',
    tint20: '#626c72',
    tint30: '#808a90',
    tint40: '#bcc3c7',
    tint50: '#dbdfe1',
    tint60: '#f6f7f8'
};
const charcoal = {
    shade50: '#090909',
    shade40: '#111111',
    shade30: '#202020',
    shade20: '#2b2b2b',
    shade10: '#333333',
    primary: '#393939',
    tint10: '#515151',
    tint20: '#686868',
    tint30: '#888888',
    tint40: '#c4c4c4',
    tint50: '#dfdfdf',
    tint60: '#f7f7f7'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/colorPalette.js

const statusSharedColors = {
    red: red,
    green: green,
    darkOrange: darkOrange,
    yellow: yellow,
    berry: berry,
    lightGreen: lightGreen,
    marigold: marigold
};
const personaSharedColors = {
    darkRed: darkRed,
    cranberry: cranberry,
    pumpkin: pumpkin,
    peach: peach,
    gold: gold,
    brass: brass,
    brown: brown,
    forest: forest,
    seafoam: seafoam,
    darkGreen: darkGreen,
    lightTeal: lightTeal,
    teal: teal,
    steel: steel,
    blue: blue,
    royalBlue: royalBlue,
    cornflower: cornflower,
    navy: navy,
    lavender: lavender,
    purple: purple,
    grape: grape,
    lilac: lilac,
    pink: pink,
    magenta: magenta,
    plum: plum,
    beige: beige,
    mink: mink,
    platinum: platinum,
    anchor: colors_anchor
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/sharedColorNames.js
/* Names of colors used in shared color palette alias tokens for status. */ const statusSharedColorNames = [
    'red',
    'green',
    'darkOrange',
    'yellow',
    'berry',
    'lightGreen',
    'marigold'
];
/* Names of colors used in shared color palette alias tokens for persona. */ const personaSharedColorNames = [
    'darkRed',
    'cranberry',
    'pumpkin',
    'peach',
    'gold',
    'brass',
    'brown',
    'forest',
    'seafoam',
    'darkGreen',
    'lightTeal',
    'teal',
    'steel',
    'blue',
    'royalBlue',
    'cornflower',
    'navy',
    'lavender',
    'purple',
    'grape',
    'lilac',
    'pink',
    'magenta',
    'plum',
    'beige',
    'mink',
    'platinum',
    'anchor'
];
/* Names of colors not used in alias tokens but produced by token pipeline as global color tokens. */ const unusedSharedColorNames = (/* unused pure expression or super */ null && ([
    'burgundy',
    'bronze',
    'orange',
    'darkBrown',
    'lime',
    'darkTeal',
    'cyan',
    'lightBlue',
    'darkBlue',
    'darkPurple',
    'orchid',
    'hotPink',
    'silver',
    'charcoal'
]));

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/alias/lightColorPalette.js


const statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].tint60,
        [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].shade10,
        [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].shade30,
        [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].primary,
        [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].tint40,
        [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
// one-off patch for yellow
statusColorPaletteTokens.colorPaletteYellowForeground1 = statusSharedColors.yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.tint40;
const personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor)=>{
    const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
    const sharedColorTokens = {
        [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].tint40,
        [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].shade30,
        [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].primary
    };
    return Object.assign(acc, sharedColorTokens);
}, {});
const colorPaletteTokens = {
    ...statusColorPaletteTokens,
    ...personaColorPaletteTokens
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/alias/lightColor.js
/* !!! DO NOT EDIT !!! */ /* This file has been generated by the token pipeline */ 
const generateColorTokens = (brand)=>({
        colorNeutralForeground1: grey[14],
        colorNeutralForeground1Hover: grey[14],
        colorNeutralForeground1Pressed: grey[14],
        colorNeutralForeground1Selected: grey[14],
        colorNeutralForeground2: grey[26],
        colorNeutralForeground2Hover: grey[14],
        colorNeutralForeground2Pressed: grey[14],
        colorNeutralForeground2Selected: grey[14],
        colorNeutralForeground2BrandHover: brand[80],
        colorNeutralForeground2BrandPressed: brand[70],
        colorNeutralForeground2BrandSelected: brand[80],
        colorNeutralForeground3: grey[38],
        colorNeutralForeground3Hover: grey[26],
        colorNeutralForeground3Pressed: grey[26],
        colorNeutralForeground3Selected: grey[26],
        colorNeutralForeground3BrandHover: brand[80],
        colorNeutralForeground3BrandPressed: brand[70],
        colorNeutralForeground3BrandSelected: brand[80],
        colorNeutralForeground4: grey[44],
        colorNeutralForegroundDisabled: grey[74],
        colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
        colorBrandForegroundLink: brand[70],
        colorBrandForegroundLinkHover: brand[60],
        colorBrandForegroundLinkPressed: brand[40],
        colorBrandForegroundLinkSelected: brand[70],
        colorNeutralForeground2Link: grey[26],
        colorNeutralForeground2LinkHover: grey[14],
        colorNeutralForeground2LinkPressed: grey[14],
        colorNeutralForeground2LinkSelected: grey[14],
        colorCompoundBrandForeground1: brand[80],
        colorCompoundBrandForeground1Hover: brand[70],
        colorCompoundBrandForeground1Pressed: brand[60],
        colorBrandForeground1: brand[80],
        colorBrandForeground2: brand[70],
        colorBrandForeground2Hover: brand[60],
        colorBrandForeground2Pressed: brand[30],
        colorNeutralForeground1Static: grey[14],
        colorNeutralForegroundStaticInverted: white,
        colorNeutralForegroundInverted: white,
        colorNeutralForegroundInvertedHover: white,
        colorNeutralForegroundInvertedPressed: white,
        colorNeutralForegroundInvertedSelected: white,
        colorNeutralForegroundInverted2: white,
        colorNeutralForegroundOnBrand: white,
        colorNeutralForegroundInvertedLink: white,
        colorNeutralForegroundInvertedLinkHover: white,
        colorNeutralForegroundInvertedLinkPressed: white,
        colorNeutralForegroundInvertedLinkSelected: white,
        colorBrandForegroundInverted: brand[100],
        colorBrandForegroundInvertedHover: brand[110],
        colorBrandForegroundInvertedPressed: brand[100],
        colorBrandForegroundOnLight: brand[80],
        colorBrandForegroundOnLightHover: brand[70],
        colorBrandForegroundOnLightPressed: brand[50],
        colorBrandForegroundOnLightSelected: brand[60],
        colorNeutralBackground1: white,
        colorNeutralBackground1Hover: grey[96],
        colorNeutralBackground1Pressed: grey[88],
        colorNeutralBackground1Selected: grey[92],
        colorNeutralBackground2: grey[98],
        colorNeutralBackground2Hover: grey[94],
        colorNeutralBackground2Pressed: grey[86],
        colorNeutralBackground2Selected: grey[90],
        colorNeutralBackground3: grey[96],
        colorNeutralBackground3Hover: grey[92],
        colorNeutralBackground3Pressed: grey[84],
        colorNeutralBackground3Selected: grey[88],
        colorNeutralBackground4: grey[94],
        colorNeutralBackground4Hover: grey[98],
        colorNeutralBackground4Pressed: grey[96],
        colorNeutralBackground4Selected: white,
        colorNeutralBackground5: grey[92],
        colorNeutralBackground5Hover: grey[96],
        colorNeutralBackground5Pressed: grey[94],
        colorNeutralBackground5Selected: grey[98],
        colorNeutralBackground6: grey[90],
        colorNeutralBackgroundInverted: grey[16],
        colorNeutralBackgroundStatic: grey[20],
        colorNeutralBackgroundAlpha: whiteAlpha[50],
        colorNeutralBackgroundAlpha2: whiteAlpha[80],
        colorSubtleBackground: 'transparent',
        colorSubtleBackgroundHover: grey[96],
        colorSubtleBackgroundPressed: grey[88],
        colorSubtleBackgroundSelected: grey[92],
        colorSubtleBackgroundLightAlphaHover: whiteAlpha[70],
        colorSubtleBackgroundLightAlphaPressed: whiteAlpha[50],
        colorSubtleBackgroundLightAlphaSelected: 'transparent',
        colorSubtleBackgroundInverted: 'transparent',
        colorSubtleBackgroundInvertedHover: blackAlpha[10],
        colorSubtleBackgroundInvertedPressed: blackAlpha[30],
        colorSubtleBackgroundInvertedSelected: blackAlpha[20],
        colorTransparentBackground: 'transparent',
        colorTransparentBackgroundHover: 'transparent',
        colorTransparentBackgroundPressed: 'transparent',
        colorTransparentBackgroundSelected: 'transparent',
        colorNeutralBackgroundDisabled: grey[94],
        colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
        colorNeutralStencil1: grey[90],
        colorNeutralStencil2: grey[98],
        colorNeutralStencil1Alpha: blackAlpha[10],
        colorNeutralStencil2Alpha: blackAlpha[5],
        colorBackgroundOverlay: blackAlpha[40],
        colorScrollbarOverlay: blackAlpha[50],
        colorBrandBackground: brand[80],
        colorBrandBackgroundHover: brand[70],
        colorBrandBackgroundPressed: brand[40],
        colorBrandBackgroundSelected: brand[60],
        colorCompoundBrandBackground: brand[80],
        colorCompoundBrandBackgroundHover: brand[70],
        colorCompoundBrandBackgroundPressed: brand[60],
        colorBrandBackgroundStatic: brand[80],
        colorBrandBackground2: brand[160],
        colorBrandBackground2Hover: brand[150],
        colorBrandBackground2Pressed: brand[130],
        colorBrandBackgroundInverted: white,
        colorBrandBackgroundInvertedHover: brand[160],
        colorBrandBackgroundInvertedPressed: brand[140],
        colorBrandBackgroundInvertedSelected: brand[150],
        colorNeutralStrokeAccessible: grey[38],
        colorNeutralStrokeAccessibleHover: grey[34],
        colorNeutralStrokeAccessiblePressed: grey[30],
        colorNeutralStrokeAccessibleSelected: brand[80],
        colorNeutralStroke1: grey[82],
        colorNeutralStroke1Hover: grey[78],
        colorNeutralStroke1Pressed: grey[70],
        colorNeutralStroke1Selected: grey[74],
        colorNeutralStroke2: grey[88],
        colorNeutralStroke3: grey[94],
        colorNeutralStrokeSubtle: grey[88],
        colorNeutralStrokeOnBrand: white,
        colorNeutralStrokeOnBrand2: white,
        colorNeutralStrokeOnBrand2Hover: white,
        colorNeutralStrokeOnBrand2Pressed: white,
        colorNeutralStrokeOnBrand2Selected: white,
        colorBrandStroke1: brand[80],
        colorBrandStroke2: brand[140],
        colorBrandStroke2Hover: brand[120],
        colorBrandStroke2Pressed: brand[80],
        colorCompoundBrandStroke: brand[80],
        colorCompoundBrandStrokeHover: brand[70],
        colorCompoundBrandStrokePressed: brand[60],
        colorNeutralStrokeDisabled: grey[88],
        colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
        colorTransparentStroke: 'transparent',
        colorTransparentStrokeInteractive: 'transparent',
        colorTransparentStrokeDisabled: 'transparent',
        colorNeutralStrokeAlpha: blackAlpha[5],
        colorStrokeFocus1: white,
        colorStrokeFocus2: black,
        colorNeutralShadowAmbient: 'rgba(0,0,0,0.12)',
        colorNeutralShadowKey: 'rgba(0,0,0,0.14)',
        colorNeutralShadowAmbientLighter: 'rgba(0,0,0,0.06)',
        colorNeutralShadowKeyLighter: 'rgba(0,0,0,0.07)',
        colorNeutralShadowAmbientDarker: 'rgba(0,0,0,0.20)',
        colorNeutralShadowKeyDarker: 'rgba(0,0,0,0.24)',
        colorBrandShadowAmbient: 'rgba(0,0,0,0.30)',
        colorBrandShadowKey: 'rgba(0,0,0,0.25)'
    });

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/borderRadius.js
const borderRadius = {
    borderRadiusNone: '0',
    borderRadiusSmall: '2px',
    borderRadiusMedium: '4px',
    borderRadiusLarge: '6px',
    borderRadiusXLarge: '8px',
    borderRadiusCircular: '10000px'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/fonts.js
const fontSizes = {
    fontSizeBase100: '10px',
    fontSizeBase200: '12px',
    fontSizeBase300: '14px',
    fontSizeBase400: '16px',
    fontSizeBase500: '20px',
    fontSizeBase600: '24px',
    fontSizeHero700: '28px',
    fontSizeHero800: '32px',
    fontSizeHero900: '40px',
    fontSizeHero1000: '68px'
};
const lineHeights = {
    lineHeightBase100: '14px',
    lineHeightBase200: '16px',
    lineHeightBase300: '20px',
    lineHeightBase400: '22px',
    lineHeightBase500: '28px',
    lineHeightBase600: '32px',
    lineHeightHero700: '36px',
    lineHeightHero800: '40px',
    lineHeightHero900: '52px',
    lineHeightHero1000: '92px'
};
const fontWeights = {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700
};
const fontFamilies = {
    fontFamilyBase: // eslint-disable-next-line @fluentui/max-len
    "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
    fontFamilyNumeric: // eslint-disable-next-line @fluentui/max-len
    "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/strokeWidths.js
const strokeWidths = {
    strokeWidthThin: '1px',
    strokeWidthThick: '2px',
    strokeWidthThicker: '3px',
    strokeWidthThickest: '4px'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/utils/shadows.js
function createShadowTokens(ambientColor, keyColor, tokenSuffix = '') {
    return {
        [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
        [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
        [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
        [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
        [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
        [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
    };
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/durations.js
const durations = {
    durationUltraFast: '50ms',
    durationFaster: '100ms',
    durationFast: '150ms',
    durationNormal: '200ms',
    durationSlow: '300ms',
    durationSlower: '400ms',
    durationUltraSlow: '500ms'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/curves.js
const curves = {
    curveAccelerateMax: 'cubic-bezier(1,0,1,1)',
    curveAccelerateMid: 'cubic-bezier(0.7,0,1,0.5)',
    curveAccelerateMin: 'cubic-bezier(0.8,0,1,1)',
    curveDecelerateMax: 'cubic-bezier(0,0,0,1)',
    curveDecelerateMid: 'cubic-bezier(0.1,0.9,0.2,1)',
    curveDecelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
    curveEasyEaseMax: 'cubic-bezier(0.8,0,0.1,1)',
    curveEasyEase: 'cubic-bezier(0.33,0,0.67,1)',
    curveLinear: 'cubic-bezier(0,0,1,1)'
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/spacings.js
// Intentionally not exported! Use horizontalSpacings and verticalSpacings instead.
const spacings = {
    none: '0',
    xxs: '2px',
    xs: '4px',
    sNudge: '6px',
    s: '8px',
    mNudge: '10px',
    m: '12px',
    l: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px'
};
const horizontalSpacings = {
    spacingHorizontalNone: spacings.none,
    spacingHorizontalXXS: spacings.xxs,
    spacingHorizontalXS: spacings.xs,
    spacingHorizontalSNudge: spacings.sNudge,
    spacingHorizontalS: spacings.s,
    spacingHorizontalMNudge: spacings.mNudge,
    spacingHorizontalM: spacings.m,
    spacingHorizontalL: spacings.l,
    spacingHorizontalXL: spacings.xl,
    spacingHorizontalXXL: spacings.xxl,
    spacingHorizontalXXXL: spacings.xxxl
};
const verticalSpacings = {
    spacingVerticalNone: spacings.none,
    spacingVerticalXXS: spacings.xxs,
    spacingVerticalXS: spacings.xs,
    spacingVerticalSNudge: spacings.sNudge,
    spacingVerticalS: spacings.s,
    spacingVerticalMNudge: spacings.mNudge,
    spacingVerticalM: spacings.m,
    spacingVerticalL: spacings.l,
    spacingVerticalXL: spacings.xl,
    spacingVerticalXXL: spacings.xxl,
    spacingVerticalXXXL: spacings.xxxl
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/utils/createLightTheme.js







const createLightTheme = (brand)=>{
    const colorTokens = generateColorTokens(brand);
    return {
        ...borderRadius,
        ...fontSizes,
        ...lineHeights,
        ...fontFamilies,
        ...fontWeights,
        ...strokeWidths,
        ...horizontalSpacings,
        ...verticalSpacings,
        ...durations,
        ...curves,
        ...colorTokens,
        ...colorPaletteTokens,
        ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
        ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, 'Brand')
    };
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/global/brandColors.js
const brandWeb = {
    10: `#061724`,
    20: `#082338`,
    30: `#0a2e4a`,
    40: `#0c3b5e`,
    50: `#0e4775`,
    60: `#0f548c`,
    70: `#115ea3`,
    80: `#0f6cbd`,
    90: `#2886de`,
    100: `#479ef5`,
    110: `#62abf5`,
    120: `#77b7f7`,
    130: `#96c6fa`,
    140: `#b4d6fa`,
    150: `#cfe4fa`,
    160: `#ebf3fc`
};
const brandTeams = {
    10: `#2b2b40`,
    20: `#2f2f4a`,
    30: `#333357`,
    40: `#383966`,
    50: `#3d3e78`,
    60: `#444791`,
    70: `#4f52b2`,
    80: `#5b5fc7`,
    90: `#7579eb`,
    100: `#7f85f5`,
    110: `#9299f7`,
    120: `#aab1fa`,
    130: `#b6bcfa`,
    140: `#c5cbfa`,
    150: `#dce0fa`,
    160: `#e8ebfa`
};
const brandOffice = {
    10: `#29130b`,
    20: `#4d2415`,
    30: `#792000`,
    40: `#99482b`,
    50: `#a52c00`,
    60: `#c33400`,
    70: `#e06a3f`,
    80: `#d83b01`,
    90: `#dd4f1b`,
    100: `#fe7948`,
    110: `#ff865a`,
    120: `#ff9973`,
    130: `#e8825d`,
    140: `#ffb498`,
    150: `#f4beaa`,
    160: `#f9dcd1`
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js


const webLightTheme = createLightTheme(brandWeb);

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-button/lib/components/Button/renderButton.js
/** @jsxRuntime classic */ /** @jsx createElement */ 

/**
 * Renders a Button component by passing the state defined props to the appropriate slots.
 */ const renderButton_unstable = (state)=>{
    const { slots , slotProps  } = getSlotsNext(state);
    const { iconOnly , iconPosition  } = state;
    return /*#__PURE__*/ createElement(slots.root, slotProps.root, iconPosition !== 'after' && slots.icon && /*#__PURE__*/ createElement(slots.icon, slotProps.icon), !iconOnly && state.root.children, iconPosition === 'after' && slots.icon && /*#__PURE__*/ createElement(slots.icon, slotProps.icon));
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/compose/resolveShorthand.js


/**
 * Resolves shorthands into slot props, to ensure normalization of the signature
 * being passed down to getSlots method
 * @param value - the base shorthand props
 * @param options - options to resolve shorthand props
 */ const resolveShorthand = (value, options)=>{
    const { required =false , defaultProps  } = options || {};
    if (value === null || value === undefined && !required) {
        return undefined;
    }
    let resolvedShorthand = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof value === 'string' || typeof value === 'number' || Array.isArray(value) || (0,react.isValidElement)(value)) {
        resolvedShorthand.children = value;
    } else if (typeof value === 'object') {
        resolvedShorthand = value;
    }
    resolvedShorthand = {
        ...defaultProps,
        ...resolvedShorthand
    };
    if (typeof resolvedShorthand.children === 'function') {
        resolvedShorthand[SLOT_RENDER_FUNCTION_SYMBOL] = resolvedShorthand.children;
        resolvedShorthand.children = defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.children;
    }
    return resolvedShorthand;
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/keyboard-keys/lib/keys.js
const Alt = 'Alt';
const AltGraph = 'AltGraph';
const CapsLock = 'CapsLock';
const Control = 'Control';
const Fn = 'Fn';
const FnLock = 'FnLock';
const Meta = 'Meta';
const NumLock = 'NumLock';
const ScrollLock = 'ScrollLock';
const Shift = 'Shift';
const keys_Symbol = 'Symbol';
const SymbolLock = 'SymbolLock';
const Hyper = 'Hyper';
const Super = 'Super';
const Enter = 'Enter';
const Space = ' ';
const Tab = 'Tab';
const ArrowDown = 'ArrowDown';
const ArrowLeft = 'ArrowLeft';
const ArrowRight = 'ArrowRight';
const ArrowUp = 'ArrowUp';
const End = 'End';
const Home = 'Home';
const PageDown = 'PageDown';
const PageUp = 'PageUp';
const Backspace = 'Backspace';
const Clear = 'Clear';
const Copy = 'Copy';
const CrSel = 'CrSel';
const Cut = 'Cut';
const Delete = 'Delete';
const EraseEof = 'EraseEof';
const ExSel = 'ExSel';
const Insert = 'Insert';
const Paste = 'Paste';
const Redo = 'Redo';
const Undo = 'Undo';
const Accept = 'Accept';
const Again = 'Again';
const Attn = 'Attn';
const Cancel = 'Cancel';
const ContextMenu = 'ContextMenu';
const Escape = 'Escape';
const Execute = 'Execute';
const Find = 'Find';
const Help = 'Help';
const Pause = 'Pause';
const Play = 'Play';
const Props = 'Props';
const Select = 'Select';
const ZoomIn = 'ZoomIn';
const ZoomOut = 'ZoomOut';
const BrightnessDown = 'BrightnessDown';
const BrightnessUp = 'BrightnessUp';
const Eject = 'Eject';
const LogOff = 'LogOff';
const Power = 'Power';
const PowerOff = 'PowerOff';
const PrintScreen = 'PrintScreen';
const Hibernate = 'Hibernate';
const Standby = 'Standby';
const WakeUp = 'WakeUp';
const AllCandidates = 'AllCandidates';
const Alphanumeric = 'Alphanumeric';
const CodeInput = 'CodeInput';
const Compose = 'Compose';
const Convert = 'Convert';
const Dead = 'Dead';
const FinalMode = 'FinalMode';
const GroupFirst = 'GroupFirst';
const GroupLast = 'GroupLast';
const GroupNext = 'GroupNext';
const GroupPrevious = 'GroupPrevious';
const ModeChange = 'ModeChange';
const NextCandidate = 'NextCandidate';
const NonConvert = 'NonConvert';
const PreviousCandidate = 'PreviousCandidate';
const Process = 'Process';
const SingleCandidate = 'SingleCandidate';
const HangulMode = 'HangulMode';
const HanjaMode = 'HanjaMode';
const JunjaMode = 'JunjaMode';
const Eisu = 'Eisu';
const Hankaku = 'Hankaku';
const Hiragana = 'Hiragana';
const HiraganaKatakana = 'HiraganaKatakana';
const KanaMode = 'KanaMode';
const KanjiMode = 'KanjiMode';
const Katakana = 'Katakana';
const Romaji = 'Romaji';
const Zenkaku = 'Zenkaku';
const ZenkakuHankaku = 'ZenkakuHankaku';
const F1 = 'F1';
const F2 = 'F2';
const F3 = 'F3';
const F4 = 'F4';
const F5 = 'F5';
const F6 = 'F6';
const F7 = 'F7';
const F8 = 'F8';
const F9 = 'F9';
const F10 = 'F10';
const F11 = 'F11';
const F12 = 'F12';
const Soft1 = 'Soft1';
const Soft2 = 'Soft2';
const Soft3 = 'Soft3';
const Soft4 = 'Soft4';
const ChannelDown = 'ChannelDown';
const ChannelUp = 'ChannelUp';
const Close = 'Close';
const MailForward = 'MailForward';
const MailReply = 'MailReply';
const MailSend = 'MailSend';
const MediaClose = 'MediaClose';
const MediaFastForward = 'MediaFastForward';
const MediaPause = 'MediaPause';
const MediaPlay = 'MediaPlay';
const MediaPlayPause = 'MediaPlayPause';
const MediaRecord = 'MediaRecord';
const MediaRewind = 'MediaRewind';
const MediaStop = 'MediaStop';
const MediaTrackNext = 'MediaTrackNext';
const MediaTrackPrevious = 'MediaTrackPrevious';
const New = 'New';
const Open = 'Open';
const Print = 'Print';
const Save = 'Save';
const SpellCheck = 'SpellCheck';
const Key11 = 'Key11';
const Key12 = 'Key12';
const AudioBalanceLeft = 'AudioBalanceLeft';
const AudioBalanceRight = 'AudioBalanceRight';
const AudioBassBoostDown = 'AudioBassBoostDown';
const AudioBassBoostToggle = 'AudioBassBoostToggle';
const AudioBassBoostUp = 'AudioBassBoostUp';
const AudioFaderFront = 'AudioFaderFront';
const AudioFaderRear = 'AudioFaderRear';
const AudioSurroundModeNext = 'AudioSurroundModeNext';
const AudioTrebleDown = 'AudioTrebleDown';
const AudioTrebleUp = 'AudioTrebleUp';
const AudioVolumeDown = 'AudioVolumeDown';
const AudioVolumeUp = 'AudioVolumeUp';
const AudioVolumeMute = 'AudioVolumeMute';
const MicrophoneToggle = 'MicrophoneToggle';
const MicrophoneVolumeDown = 'MicrophoneVolumeDown';
const MicrophoneVolumeUp = 'MicrophoneVolumeUp';
const MicrophoneVolumeMute = 'MicrophoneVolumeMute';
const SpeechCorrectionList = 'SpeechCorrectionList';
const SpeechInputToggle = 'SpeechInputToggle';
const LaunchApplication1 = 'LaunchApplication1';
const LaunchApplication2 = 'LaunchApplication2';
const LaunchCalendar = 'LaunchCalendar';
const LaunchContacts = 'LaunchContacts';
const LaunchMail = 'LaunchMail';
const LaunchMediaPlayer = 'LaunchMediaPlayer';
const LaunchMusicPlayer = 'LaunchMusicPlayer';
const LaunchPhone = 'LaunchPhone';
const LaunchScreenSaver = 'LaunchScreenSaver';
const LaunchSpreadsheet = 'LaunchSpreadsheet';
const LaunchWebBrowser = 'LaunchWebBrowser';
const LaunchWebCam = 'LaunchWebCam';
const LaunchWordProcessor = 'LaunchWordProcessor';
const BrowserBack = 'BrowserBack';
const BrowserFavorites = 'BrowserFavorites';
const BrowserForward = 'BrowserForward';
const BrowserHome = 'BrowserHome';
const BrowserRefresh = 'BrowserRefresh';
const BrowserSearch = 'BrowserSearch';
const BrowserStop = 'BrowserStop';
const AppSwitch = 'AppSwitch';
const Call = 'Call';
const Camera = 'Camera';
const CameraFocus = 'CameraFocus';
const EndCall = 'EndCall';
const GoBack = 'GoBack';
const GoHome = 'GoHome';
const HeadsetHook = 'HeadsetHook';
const LastNumberRedial = 'LastNumberRedial';
const Notification = 'Notification';
const MannerMode = 'MannerMode';
const VoiceDial = 'VoiceDial';
const TV = 'TV';
const TV3DMode = 'TV3DMode';
const TVAntennaCable = 'TVAntennaCable';
const TVAudioDescription = 'TVAudioDescription';
const TVAudioDescriptionMixDown = 'TVAudioDescriptionMixDown';
const TVAudioDescriptionMixUp = 'TVAudioDescriptionMixUp';
const TVContentsMenu = 'TVContentsMenu';
const TVDataService = 'TVDataService';
const TVInput = 'TVInput';
const TVInputComponent1 = 'TVInputComponent1';
const TVInputComponent2 = 'TVInputComponent2';
const TVInputComposite1 = 'TVInputComposite1';
const TVInputComposite2 = 'TVInputComposite2';
const TVInputHDMI1 = 'TVInputHDMI1';
const TVInputHDMI2 = 'TVInputHDMI2';
const TVInputHDMI3 = 'TVInputHDMI3';
const TVInputHDMI4 = 'TVInputHDMI4';
const TVInputVGA1 = 'TVInputVGA1';
const TVMediaContext = 'TVMediaContext';
const TVNetwork = 'TVNetwork';
const TVNumberEntry = 'TVNumberEntry';
const TVPower = 'TVPower';
const TVRadioService = 'TVRadioService';
const TVSatellite = 'TVSatellite';
const TVSatelliteBS = 'TVSatelliteBS';
const TVSatelliteCS = 'TVSatelliteCS';
const TVSatelliteToggle = 'TVSatelliteToggle';
const TVTerrestrialAnalog = 'TVTerrestrialAnalog';
const TVTerrestrialDigital = 'TVTerrestrialDigital';
const TVTimer = 'TVTimer';
const AVRInput = 'AVRInput';
const AVRPower = 'AVRPower';
const ColorF0Red = 'ColorF0Red';
const ColorF1Green = 'ColorF1Green';
const ColorF2Yellow = 'ColorF2Yellow';
const ColorF3Blue = 'ColorF3Blue';
const ColorF4Grey = 'ColorF4Grey';
const ColorF5Brown = 'ColorF5Brown';
const ClosedCaptionToggle = 'ClosedCaptionToggle';
const Dimmer = 'Dimmer';
const DisplaySwap = 'DisplaySwap';
const DVR = 'DVR';
const Exit = 'Exit';
const FavoriteClear0 = 'FavoriteClear0';
const FavoriteClear1 = 'FavoriteClear1';
const FavoriteClear2 = 'FavoriteClear2';
const FavoriteClear3 = 'FavoriteClear3';
const FavoriteRecall0 = 'FavoriteRecall0';
const FavoriteRecall1 = 'FavoriteRecall1';
const FavoriteRecall2 = 'FavoriteRecall2';
const FavoriteRecall3 = 'FavoriteRecall3';
const FavoriteStore0 = 'FavoriteStore0';
const FavoriteStore1 = 'FavoriteStore1';
const FavoriteStore2 = 'FavoriteStore2';
const FavoriteStore3 = 'FavoriteStore3';
const Guide = 'Guide';
const GuideNextDay = 'GuideNextDay';
const GuidePreviousDay = 'GuidePreviousDay';
const Info = 'Info';
const InstantReplay = 'InstantReplay';
const Link = 'Link';
const ListProgram = 'ListProgram';
const LiveContent = 'LiveContent';
const Lock = 'Lock';
const MediaApps = 'MediaApps';
const MediaAudioTrack = 'MediaAudioTrack';
const MediaLast = 'MediaLast';
const MediaSkipBackward = 'MediaSkipBackward';
const MediaSkipForward = 'MediaSkipForward';
const MediaStepBackward = 'MediaStepBackward';
const MediaStepForward = 'MediaStepForward';
const MediaTopMenu = 'MediaTopMenu';
const NavigateIn = 'NavigateIn';
const NavigateNext = 'NavigateNext';
const NavigateOut = 'NavigateOut';
const NavigatePrevious = 'NavigatePrevious';
const NextFavoriteChannel = 'NextFavoriteChannel';
const NextUserProfile = 'NextUserProfile';
const OnDemand = 'OnDemand';
const Pairing = 'Pairing';
const PinPDown = 'PinPDown';
const PinPMove = 'PinPMove';
const PinPToggle = 'PinPToggle';
const PinPUp = 'PinPUp';
const PlaySpeedDown = 'PlaySpeedDown';
const PlaySpeedReset = 'PlaySpeedReset';
const PlaySpeedUp = 'PlaySpeedUp';
const RandomToggle = 'RandomToggle';
const RcLowBattery = 'RcLowBattery';
const RecordSpeedNext = 'RecordSpeedNext';
const RfBypass = 'RfBypass';
const ScanChannelsToggle = 'ScanChannelsToggle';
const ScreenModeNext = 'ScreenModeNext';
const Settings = 'Settings';
const SplitScreenToggle = 'SplitScreenToggle';
const STBInput = 'STBInput';
const STBPower = 'STBPower';
const Subtitle = 'Subtitle';
const Teletext = 'Teletext';
const VideoModeNext = 'VideoModeNext';
const Wink = 'Wink';
const ZoomToggle = 'ZoomToggle';
const MediaNextTrack = 'MediaNextTrack';
const MediaPreviousTrack = 'MediaPreviousTrack';
const Unidentified = 'Unidentified';
//# sourceMappingURL=keys.js.map
;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-utilities/lib/hooks/useEventCallback.js


/**
 * @internal
 * https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
 *
 * Modified `useCallback` that can be used when dependencies change too frequently. Can occur when
 * e.g. user props are dependencies which could change on every render
 * e.g. volatile values (i.e. useState/useDispatch) are dependencies which could change frequently
 *
 * This should not be used often, but can be a useful re-render optimization since the callback is a ref and
 * will not be invalidated between re-renders
 *
 * @param fn - The callback function that will be used
 */ const useEventCallback = (fn)=>{
    const callbackRef = react.useRef(()=>{
        throw new Error('Cannot call an event handler while rendering');
    });
    useIsomorphicLayoutEffect(()=>{
        callbackRef.current = fn;
    }, [
        fn
    ]);
    return react.useCallback((...args)=>{
        const callback = callbackRef.current;
        return callback(...args);
    }, [
        callbackRef
    ]);
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-aria/lib/button/useARIAButtonProps.js



/**
 * @internal
 *
 * Button keyboard handling, role, disabled and tabIndex implementation that ensures ARIA spec
 * for multiple scenarios of non native button elements. Ensuring 1st rule of ARIA for cases
 * where no attribute addition is required.
 *
 * @param type - the proper scenario to be interpreted by the hook.
 *  1. `button` - Minimal interference from the hook, as semantic button already supports most of the states
 *  2. `a` or `div` - Proper keyboard/mouse handling plus other support to ensure ARIA behavior
 * @param props - the props to be passed down the line to the desired element.
 * This hook will encapsulate proper properties, such as `onClick`, `onKeyDown`, `onKeyUp`, etc,.
 *
 * @example
 * ```tsx
 * const buttonProps = useARIAButtonProps('a', {
 *   href: './some-route'
 *   onClick: () => console.log('this should run both on click and Space and Enter')
 * })
 *
 * // ...
 *
 * return (
 *  <a {...buttonProps}>This anchor will behave as a proper button</a>
 * )
 * ```
 */ function useARIAButtonProps(type, props) {
    const { disabled , disabledFocusable =false , ['aria-disabled']: ariaDisabled , onClick , onKeyDown , onKeyUp , ...rest } = props !== null && props !== void 0 ? props : {};
    const normalizedARIADisabled = typeof ariaDisabled === 'string' ? ariaDisabled === 'true' : ariaDisabled;
    const isDisabled = disabled || disabledFocusable || normalizedARIADisabled;
    const handleClick = useEventCallback((ev)=>{
        if (isDisabled) {
            ev.preventDefault();
            ev.stopPropagation();
        } else {
            onClick === null || onClick === void 0 ? void 0 : onClick(ev);
        }
    });
    const handleKeyDown = useEventCallback((ev)=>{
        onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(ev);
        if (ev.isDefaultPrevented()) {
            return;
        }
        const key = ev.key;
        if (isDisabled && (key === Enter || key === Space)) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (key === Space) {
            ev.preventDefault();
            return;
        } else if (key === Enter) {
            ev.preventDefault();
            ev.currentTarget.click();
        }
    });
    const handleKeyUp = useEventCallback((ev)=>{
        onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(ev);
        if (ev.isDefaultPrevented()) {
            return;
        }
        const key = ev.key;
        if (isDisabled && (key === Enter || key === Space)) {
            ev.preventDefault();
            ev.stopPropagation();
            return;
        }
        if (key === Space) {
            ev.preventDefault();
            ev.currentTarget.click();
        }
    });
    // If a <button> tag is to be rendered we just need to set disabled and aria-disabled correctly
    if (type === 'button' || type === undefined) {
        return {
            ...rest,
            disabled: disabled && !disabledFocusable,
            'aria-disabled': disabledFocusable ? true : normalizedARIADisabled,
            // onclick should still use internal handler to ensure prevention if disabled
            // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
            onClick: disabledFocusable ? undefined : handleClick,
            onKeyUp: disabledFocusable ? undefined : onKeyUp,
            onKeyDown: disabledFocusable ? undefined : onKeyDown
        };
    } else {
        const resultProps = {
            role: 'button',
            tabIndex: disabled && !disabledFocusable ? undefined : 0,
            ...rest,
            // If it's not a <button> than listeners are required even with disabledFocusable
            // Since you cannot assure the default behavior of the element
            // E.g: <a> will redirect on click
            onClick: handleClick,
            onKeyUp: handleKeyUp,
            onKeyDown: handleKeyDown,
            'aria-disabled': disabled || disabledFocusable || normalizedARIADisabled
        };
        if (type === 'a' && isDisabled) {
            resultProps.href = undefined;
        }
        return resultProps;
    }
}

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-aria/lib/button/useARIAButtonShorthand.js


/**
 * @internal
 *
 * This function expects to receive a slot, if `as` property is not desired use `useARIAButtonProps` instead
 *
 * Button keyboard handling, role, disabled and tabIndex implementation that ensures ARIA spec
 * for multiple scenarios of shorthand properties. Ensuring 1st rule of ARIA for cases
 * where no attribute addition is required.
 */ const useARIAButtonShorthand = (slot, options)=>{
    const shorthand = resolveShorthand(slot, options);
    var _shorthand_as;
    const shorthandARIAButton = useARIAButtonProps((_shorthand_as = shorthand === null || shorthand === void 0 ? void 0 : shorthand.as) !== null && _shorthand_as !== void 0 ? _shorthand_as : 'button', shorthand);
    return shorthand && shorthandARIAButton;
};

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-button/lib/contexts/ButtonContext.js

const buttonContext = react.createContext(undefined);
const buttonContextDefaultValue = {};
/**
 * @internal
 * Internal context provider used to update default values between internal components
 */ const ButtonContextProvider = buttonContext.Provider;
var _React_useContext;
/**
 * @internal
 * Internal context hook used to update default values between internal components
 */ const useButtonContext = ()=>(_React_useContext = react.useContext(buttonContext)) !== null && _React_useContext !== void 0 ? _React_useContext : buttonContextDefaultValue;

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-button/lib/components/Button/useButton.js




/**
 * Given user props, defines default props for the Button, calls useButtonState, and returns processed state.
 * @param props - User provided props to the Button component.
 * @param ref - User provided ref to be passed to the Button component.
 */ const useButton_unstable = (props, ref)=>{
    const { size: contextSize  } = useButtonContext();
    const { appearance ='secondary' , as ='button' , disabled =false , disabledFocusable =false , icon , iconPosition ='before' , shape ='rounded' , size =contextSize !== null && contextSize !== void 0 ? contextSize : 'medium'  } = props;
    const iconShorthand = resolveShorthand(icon);
    return {
        // Props passed at the top-level
        appearance,
        disabled,
        disabledFocusable,
        iconPosition,
        shape,
        size,
        // State calculated from a set of props
        iconOnly: Boolean((iconShorthand === null || iconShorthand === void 0 ? void 0 : iconShorthand.children) && !props.children),
        // Slots definition
        components: {
            root: 'button',
            icon: 'span'
        },
        root: getNativeElementProps(as, useARIAButtonShorthand(props, {
            required: true,
            defaultProps: {
                ref: ref,
                type: 'button'
            }
        })),
        icon: iconShorthand
    };
};

;// CONCATENATED MODULE: ../../node_modules/@griffel/core/__resetStyles.esm.js


/**
 * @internal
 */
function __resetStyles(ltrClassName, rtlClassName, cssRules) {
  const insertionCache = {};
  function computeClassName(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === 'ltr';
    // As RTL classes are different they should have a different cache key for insertion
    const rendererId = isLTR ? renderer.id : renderer.id + 'r';
    if (insertionCache[rendererId] === undefined) {
      renderer.insertCSSRules({
        r: cssRules
      });
      insertionCache[rendererId] = true;
    }
    const className = isLTR ? ltrClassName : rtlClassName || ltrClassName;
    if (false) {}
    return className;
  }
  return computeClassName;
}


//# sourceMappingURL=__resetStyles.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/react/__resetStyles.esm.js




/**
 * A version of makeResetStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function _resetStyles_esm_resetStyles(ltrClassName, rtlClassName, cssRules) {
  const getStyles = __resetStyles(ltrClassName, rtlClassName, cssRules);
  return function useClasses() {
    const dir = useTextDirection();
    const renderer = useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=__resetStyles.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@griffel/react/__styles.esm.js




/**
 * A version of makeStyles() that accepts build output as an input and skips all runtime transforms.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function _styles_esm_styles(classesMapBySlot, cssRules) {
  const getStyles = __styles(classesMapBySlot, cssRules);
  return function useClasses() {
    const dir = useTextDirection();
    const renderer = useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}


//# sourceMappingURL=__styles.esm.js.map

;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-button/lib/components/Button/useButtonStyles.styles.js




const buttonClassNames = {
  root: 'fui-Button',
  icon: 'fui-Button__icon'
};
const iconSpacingVar = '--fui-Button__icon--spacing';
const buttonSpacingSmall = '3px';
const buttonSpacingSmallWithIcon = '1px';
const buttonSpacingMedium = '5px';
const buttonSpacingLarge = '8px';
const buttonSpacingLargeWithIcon = '7px';
const useRootBaseClassName = /*#__PURE__*/_resetStyles_esm_resetStyles("ri7kuyr", "rto22aj", [".ri7kuyr{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".ri7kuyr:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".ri7kuyr:hover .fui-Icon-filled{display:inline;}", ".ri7kuyr:hover .fui-Icon-regular{display:none;}", ".ri7kuyr:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".ri7kuyr:hover:active .fui-Icon-filled{display:inline;}", ".ri7kuyr:hover:active .fui-Icon-regular{display:none;}", "@media screen and (prefers-reduced-motion: reduce){.ri7kuyr{transition-duration:0.01ms;}}", "@media (forced-colors: active){.ri7kuyr:focus{border-color:ButtonText;}.ri7kuyr:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.ri7kuyr:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", ".ri7kuyr[data-fui-focus-visible]{border-color:var(--colorTransparentStroke);border-radius:var(--borderRadiusMedium);outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:var(--shadow4),0 0 0 2px var(--colorStrokeFocus2);z-index:1;}", ".rto22aj{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".rto22aj:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".rto22aj:hover .fui-Icon-filled{display:inline;}", ".rto22aj:hover .fui-Icon-regular{display:none;}", ".rto22aj:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".rto22aj:hover:active .fui-Icon-filled{display:inline;}", ".rto22aj:hover:active .fui-Icon-regular{display:none;}", "@media screen and (prefers-reduced-motion: reduce){.rto22aj{transition-duration:0.01ms;}}", "@media (forced-colors: active){.rto22aj:focus{border-color:ButtonText;}.rto22aj:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.rto22aj:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", ".rto22aj[data-fui-focus-visible]{border-color:var(--colorTransparentStroke);border-radius:var(--borderRadiusMedium);outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:var(--shadow4),0 0 0 2px var(--colorStrokeFocus2);z-index:1;}"]);
const useIconBaseClassName = /*#__PURE__*/_resetStyles_esm_resetStyles("rywnvv2", null, [".rywnvv2{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]);
const useRootStyles = /*#__PURE__*/_styles_esm_styles({
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "fjxutwb",
    iro3zm: "fwiml72"
  },
  primary: {
    De3pzq: "ffp7eso",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "f1phragk",
    Jwef8y: "f15wkkf3",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f1rq72xc",
    iro3zm: "fnp9lpt",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1d6v5y2",
    Bsw6fvg: "f1rirnrt",
    Bjwas2f: "f1uu00uk",
    Bn1d65q: ["fkvaka8", "f9a0qzu"],
    Bxeuatn: "f1ux7til",
    n51gp8: ["f9a0qzu", "fkvaka8"],
    Bbusuzp: "f1lkg8j3",
    ycbfsm: "fkc42ay",
    Bqrx1nm: "fq7113v",
    pgvf35: "ff1wgvm",
    Bh7lczh: ["fiob0tu", "f1x4h75k"],
    dpv3f4: "f1j6scgf",
    Bpnjhaq: ["f1x4h75k", "fiob0tu"],
    ze5xyy: "f4xjyn1",
    g2kj27: "fbgcvur",
    Bf756sw: "f1ks1yx8",
    Bow2dr7: ["f1o6qegi", "fmxjhhp"],
    Bvhedfk: "fcnxywj",
    Gye4lf: ["fmxjhhp", "f1o6qegi"],
    pc6evw: "f9ddjv3"
  },
  secondary: {},
  subtle: {
    De3pzq: "fhovq9v",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "f1t94bn6",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "fnwyq0v",
    Bbdnnc7: "fy5bs14",
    iro3zm: "fsv2rcd",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1omzyqd",
    x3br3k: "fj8yq94"
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "fjxutwb",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f139oj5f",
    iro3zm: "fwiml72",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1fg1p5m"
  },
  circular: {
    Bbmb7ep: ["f8fbkgy", "f1nfllo7"],
    Beyfa6y: ["f1nfllo7", "f8fbkgy"],
    B7oj6ja: ["f1djnp8u", "f1s8kh49"],
    Btl43ni: ["f1s8kh49", "f1djnp8u"]
  },
  rounded: {},
  square: {
    Bbmb7ep: ["fzi6hpg", "fyowgf4"],
    Beyfa6y: ["fyowgf4", "fzi6hpg"],
    B7oj6ja: ["f3fg2lr", "f13av6d4"],
    Btl43ni: ["f13av6d4", "f3fg2lr"]
  },
  small: {
    Bf4jedk: "fh7ncta",
    z8tnut: "f1khb0e9",
    z189sj: ["f1vdfbxk", "f1f5gg8d"],
    Byoj8tv: "f1jnq6q7",
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    Bbmb7ep: ["fclariu", "fyjfh2l"],
    Beyfa6y: ["fyjfh2l", "fclariu"],
    B7oj6ja: ["f11xeu6h", "f1knf8zw"],
    Btl43ni: ["f1knf8zw", "f11xeu6h"],
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  smallWithIcon: {
    Byoj8tv: "f1brlhvm",
    z8tnut: "f1sl3k7w"
  },
  medium: {},
  large: {
    Bf4jedk: "f14es27b",
    z8tnut: "fp9bwmr",
    z189sj: ["fjodcmx", "fhx4nu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["fhx4nu", "fjodcmx"],
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  largeWithIcon: {
    Byoj8tv: "fy7v416",
    z8tnut: "f1a1bwwz"
  }
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", ".f8fbkgy{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1nfllo7{border-bottom-left-radius:var(--borderRadiusCircular);}", ".f1djnp8u{border-top-right-radius:var(--borderRadiusCircular);}", ".f1s8kh49{border-top-left-radius:var(--borderRadiusCircular);}", ".fzi6hpg{border-bottom-right-radius:var(--borderRadiusNone);}", ".fyowgf4{border-bottom-left-radius:var(--borderRadiusNone);}", ".f3fg2lr{border-top-right-radius:var(--borderRadiusNone);}", ".f13av6d4{border-top-left-radius:var(--borderRadiusNone);}", ".fh7ncta{min-width:64px;}", ".f1khb0e9{padding-top:3px;}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1jnq6q7{padding-bottom:3px;}", ".fclariu{border-bottom-right-radius:3px;}", ".fyjfh2l{border-bottom-left-radius:3px;}", ".f11xeu6h{border-top-right-radius:3px;}", ".f1knf8zw{border-top-left-radius:3px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", ".fp9bwmr{padding-top:8px;}", ".fjodcmx{padding-right:var(--spacingHorizontalL);}", ".fhx4nu{padding-left:var(--spacingHorizontalL);}", ".f150uoa4{padding-bottom:8px;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
  h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}", ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}", ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],
  m: [["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkvaka8{border-right-color:HighlightText;}.f9a0qzu{border-left-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fiob0tu:hover{border-right-color:Highlight;}.f1x4h75k:hover{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fmxjhhp:hover:active{border-left-color:Highlight;}.f1o6qegi:hover:active{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useRootDisabledStyles = /*#__PURE__*/_styles_esm_styles({
  base: {
    De3pzq: "f1bg9a2p",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    Jwef8y: "f1falr9n",
    Bgoe8wy: "f12mpcsy",
    Bwzppfd: ["f1gwvigk", "f18rmfxp"],
    oetu4i: "f1jnshp0",
    gg5e9n: ["f18rmfxp", "f1gwvigk"],
    Bi91k9c: "fvgxktp",
    eoavqd: "fphbwmw",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    iro3zm: "f1t6o4dc",
    b661bw: "f10ztigi",
    Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
    B9zn80p: "f12zbtn2",
    Bpld233: ["f1gzf82w", "f1ft5sdu"],
    B2d53fq: "fcvwxyo",
    c3iz72: "f8w4c43",
    em6i61: "f1ol4fw6",
    vm6p8p: "f1q1lw4e"
  },
  highContrast: {
    Bsw6fvg: "f4lkoma",
    Bjwas2f: "fg455y9",
    Bn1d65q: ["f1rvyvqg", "f14g86mu"],
    Bxeuatn: "f1cwzwz",
    n51gp8: ["f14g86mu", "f1rvyvqg"],
    Bbusuzp: "f1dcs8yz",
    G867l3: "fjwq6ea",
    gdbnj: ["f1lr3nhc", "f1mbxvi6"],
    mxns5l: "fn5gmvv",
    o3nasb: ["f1mbxvi6", "f1lr3nhc"],
    Bqrx1nm: "f1vmkb5g",
    pgvf35: "f53ppgq",
    Bh7lczh: ["f1663y11", "f80fkiy"],
    dpv3f4: "f18v5270",
    Bpnjhaq: ["f80fkiy", "f1663y11"],
    ze5xyy: "f1kc2mi9",
    g2kj27: "f1y0svfh",
    Bf756sw: "fihuait",
    Bow2dr7: ["fnxhupq", "fyd6l6x"],
    Bvhedfk: "fx507ft",
    Gye4lf: ["fyd6l6x", "fnxhupq"],
    pc6evw: "fb3rf2x"
  },
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "f9ql6rf",
    iro3zm: "f3h1zc4"
  },
  primary: {
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  secondary: {},
  subtle: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  }
}, {
  d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
  h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f8w4c43:hover:active{cursor:not-allowed;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}"],
  m: [["@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1rvyvqg{border-right-color:GrayText;}.f14g86mu{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1mbxvi6:focus{border-left-color:GrayText;}.f1lr3nhc:focus{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f80fkiy:hover{border-left-color:GrayText;}.f1663y11:hover{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fyd6l6x:hover:active{border-left-color:GrayText;}.fnxhupq:hover:active{border-right-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useRootFocusStyles = /*#__PURE__*/_styles_esm_styles({
  circular: {
    kdpuga: ["fanj13w", "f1gou5sz"],
    Bw81rd7: ["f1gou5sz", "fanj13w"],
    B6xbmo0: ["fulf6x3", "foeb2x"],
    dm238s: ["foeb2x", "fulf6x3"]
  },
  rounded: {},
  square: {
    kdpuga: ["f1ndz5i7", "f1co4qro"],
    Bw81rd7: ["f1co4qro", "f1ndz5i7"],
    B6xbmo0: ["f146y5a9", "f1k2ftg"],
    dm238s: ["f1k2ftg", "f146y5a9"]
  },
  primary: {
    B8q5s1w: "f15my96h",
    Bci5o5g: ["f8yq1e5", "f59w28j"],
    n8qw10: "f1mze7uc",
    Bdrgwmp: ["f59w28j", "f8yq1e5"],
    j6ew2k: "ftbnf46"
  },
  small: {
    kdpuga: ["fg3gtdo", "fwii5mg"],
    Bw81rd7: ["fwii5mg", "fg3gtdo"],
    B6xbmo0: ["f1palphq", "f12nxie7"],
    dm238s: ["f12nxie7", "f1palphq"]
  },
  medium: {},
  large: {
    kdpuga: ["ft3lys4", "f1la4x2g"],
    Bw81rd7: ["f1la4x2g", "ft3lys4"],
    B6xbmo0: ["f156y0zm", "fakimq4"],
    dm238s: ["fakimq4", "f156y0zm"]
  }
}, {
  d: [".fanj13w[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusCircular);}", ".f1gou5sz[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusCircular);}", ".fulf6x3[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusCircular);}", ".foeb2x[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusCircular);}", ".f1ndz5i7[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusNone);}", ".f1co4qro[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusNone);}", ".f146y5a9[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusNone);}", ".f1k2ftg[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusNone);}", ".f15my96h[data-fui-focus-visible]{border-top-color:var(--colorNeutralForegroundOnBrand);}", ".f8yq1e5[data-fui-focus-visible]{border-right-color:var(--colorNeutralForegroundOnBrand);}", ".f59w28j[data-fui-focus-visible]{border-left-color:var(--colorNeutralForegroundOnBrand);}", ".f1mze7uc[data-fui-focus-visible]{border-bottom-color:var(--colorNeutralForegroundOnBrand);}", ".ftbnf46[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 2px var(--colorStrokeFocus2);}", ".fg3gtdo[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusSmall);}", ".fwii5mg[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1palphq[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusSmall);}", ".f12nxie7[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusSmall);}", ".ft3lys4[data-fui-focus-visible]{border-bottom-right-radius:var(--borderRadiusLarge);}", ".f1la4x2g[data-fui-focus-visible]{border-bottom-left-radius:var(--borderRadiusLarge);}", ".f156y0zm[data-fui-focus-visible]{border-top-right-radius:var(--borderRadiusLarge);}", ".fakimq4[data-fui-focus-visible]{border-top-left-radius:var(--borderRadiusLarge);}"]
});
const useRootIconOnlyStyles = /*#__PURE__*/_styles_esm_styles({
  small: {
    z8tnut: "f1sl3k7w",
    z189sj: ["f136y8j8", "f10xn8zz"],
    Byoj8tv: "f1brlhvm",
    uwmqm3: ["f10xn8zz", "f136y8j8"],
    Bf4jedk: "f17fgpbq",
    B2u0y6b: "f1jt17bm"
  },
  medium: {
    z8tnut: "f1sbtcvk",
    z189sj: ["fwiuce9", "f15vdbe4"],
    Byoj8tv: "fdghr9",
    uwmqm3: ["f15vdbe4", "fwiuce9"],
    Bf4jedk: "fwbmr0d",
    B2u0y6b: "f44c6la"
  },
  large: {
    z8tnut: "f1a1bwwz",
    z189sj: ["f18k1jr3", "f1rtp3s9"],
    Byoj8tv: "fy7v416",
    uwmqm3: ["f1rtp3s9", "f18k1jr3"],
    Bf4jedk: "f12clzc2",
    B2u0y6b: "fjy1crr"
  }
}, {
  d: [".f1sl3k7w{padding-top:1px;}", ".f136y8j8{padding-right:1px;}", ".f10xn8zz{padding-left:1px;}", ".f1brlhvm{padding-bottom:1px;}", ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", ".f1sbtcvk{padding-top:5px;}", ".fwiuce9{padding-right:5px;}", ".f15vdbe4{padding-left:5px;}", ".fdghr9{padding-bottom:5px;}", ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", ".f1a1bwwz{padding-top:7px;}", ".f18k1jr3{padding-right:7px;}", ".f1rtp3s9{padding-left:7px;}", ".fy7v416{padding-bottom:7px;}", ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
});
const useIconStyles = /*#__PURE__*/_styles_esm_styles({
  small: {
    Be2twd7: "fe5j1ua",
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    Bqrlyyl: "fbaiahx"
  },
  medium: {},
  large: {
    Be2twd7: "f1rt2boy",
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    Bqrlyyl: "f1exjqw5"
  },
  before: {
    t21cq0: ["f1nizpg2", "f1a695kz"]
  },
  after: {
    Frg6f3: ["f1a695kz", "f1nizpg2"]
  }
}, {
  d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
});
const useButtonStyles_unstable = state => {
  const rootBaseClassName = useRootBaseClassName();
  const iconBaseClassName = useIconBaseClassName();
  const rootStyles = useRootStyles();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();
  const {
    appearance,
    disabled,
    disabledFocusable,
    icon,
    iconOnly,
    iconPosition,
    shape,
    size
  } = state;
  state.root.className = mergeClasses(buttonClassNames.root, rootBaseClassName, appearance && rootStyles[appearance], rootStyles[size], icon && size === 'small' && rootStyles.smallWithIcon, icon && size === 'large' && rootStyles.largeWithIcon, rootStyles[shape],
  // Disabled styles
  (disabled || disabledFocusable) && rootDisabledStyles.base, (disabled || disabledFocusable) && rootDisabledStyles.highContrast, appearance && (disabled || disabledFocusable) && rootDisabledStyles[appearance],
  // Focus styles
  appearance === 'primary' && rootFocusStyles.primary, rootFocusStyles[size], rootFocusStyles[shape],
  // Icon-only styles
  iconOnly && rootIconOnlyStyles[size],
  // User provided class name
  state.root.className);
  if (state.icon) {
    state.icon.className = mergeClasses(buttonClassNames.icon, iconBaseClassName, state.root.children !== undefined && state.root.children !== null && iconStyles[iconPosition], iconStyles[size], state.icon.className);
  }
  return state;
};
//# sourceMappingURL=useButtonStyles.styles.js.map
;// CONCATENATED MODULE: ../../node_modules/@fluentui/react-button/lib/components/Button/Button.js





/**
 * Buttons give people a way to trigger an action.
 */ const Button = /*#__PURE__*/ react.forwardRef((props, ref)=>{
    const state = useButton_unstable(props, ref);
    useButtonStyles_unstable(state);
    useCustomStyleHook('useButtonStyles_unstable')(state);
    return renderButton_unstable(state);
// Casting is required due to lack of distributive union to support unions on @types/react
});
Button.displayName = 'Button';

;// CONCATENATED MODULE: ./src/index.tsx



var App = function () {
    return (react.createElement(FluentProvider, { theme: webLightTheme },
        react.createElement("h2", null, "Guest UI"),
        react.createElement(Button, { appearance: "primary" }, "I'm a button in guest UI")));
};
var renderGuestUI = function (root) {
    react_dom.render(react.createElement(App, null), root);
};
var unmountGuestUI = function (root) {
    react_dom.unmountComponentAtNode(root);
};

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});