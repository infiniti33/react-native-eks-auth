'use strict';(function(f){function r(b){var a=b.charCodeAt(0)<<24,c=t(~a)|0,d=0,m=b.length|0,g="";if(5>c&&m>=c){a=a<<c>>>24+c;for(d=1;d<c;d=d+1|0)a=a<<6|b.charCodeAt(d)&63;65535>=a?g+=e(a):1114111>=a?(a=a-65536|0,g+=e((a>>10)+55296|0,(a&1023)+56320|0)):d=0}for(;d<m;d=d+1|0)g+="\ufffd";return g}function n(){}function u(b){var a=b.charCodeAt(0)|0;if(55296<=a&&56319>=a){var c=b.charCodeAt(1)|0;if(c===c&&56320<=c&&57343>=c){if(a=(a-55296<<10)+c-56320+65536|0,65535<a)return e(240|a>>>18,128|a>>>12&63,
128|a>>>6&63,128|a&63)}else return e(239,191,189)}return 127>=a?b:2047>=a?e(192|a>>>6,128|a&63):e(224|a>>>12,128|a>>>6&63,128|a&63)}function p(){}var v=Math.log,w=Math.LN2,t=Math.clz32||function(b){return 31-v(b>>>0)/w|0},e=String.fromCharCode,k={}.toString,q=f.SharedArrayBuffer,x=q?k.call(q):"",h=f.Uint8Array,l=h||Array,y=k.call((h?ArrayBuffer:l).prototype);n.prototype.decode=function(b){b=b&&b.buffer||b;var a=k.call(b);if(a!==y&&a!==x)throw Error("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
b=h?new l(b):b;a="";for(var c=0,d=b.length|0;c<d;c=c+32768|0)a+=e.apply(0,b[h?"subarray":"slice"](c,c+32768|0));return a.replace(/[\xc0-\xff][\x80-\xbf]*/g,r)};f.TextDecoder||(f.TextDecoder=n);p.prototype.encode=function(b){b=void 0===b?"":(""+b).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g,u);for(var a=b.length|0,c=new l(a),d=0;d<a;d=d+1|0)c[d]=b.charCodeAt(d);return c};f.TextEncoder||(f.TextEncoder=p)})("undefined"==typeof global?"undefined"==typeof self?this:self:global);//AnonyCo
//# sourceMappingURL=EncoderDecoderTogether.min.js.map
