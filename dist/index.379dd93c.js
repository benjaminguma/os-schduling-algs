// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var _utils = require("./Utils");
var _fcfs = require("./FCFS");
var _roundRobin = require("./RoundRobin");
var _srtf = require("./Srtf");
var _sjf = require("./Sjf");
function toogleTqBox() {
    if (!this.checked && this.value === 'robin') {
        _utils.$('#tq-toog').style.display = 'none';
        _utils.$('#tq-toog').style.opacity = 0;
    }
    if (this.checked && this.value === 'robin') {
        _utils.$('#tq-toog').style.opacity = 1;
        _utils.$('#tq-toog').style.display = 'block';
    }
}
function authenticate(col, bool = false) {
    let { max , value , min  } = this;
    value = parseInt(value);
    if (value > max || value < min || bool) {
        if (this.parentNode.querySelector('p')) this.parentNode.querySelector('p').style.display = 'block';
        this.style.border = '3px solid red';
    } else {
        if (this.parentNode.querySelector('p')) this.parentNode.querySelector('p').style.display = 'none';
        this.style.border = `3px solid  ${col}`;
    }
}
function BuildContainer(ele, data, artist, callback, data2 = null) {
    if (/\binput/.test(ele)) _utils.$('#input__pack').style.display = 'block';
    let pack = _utils.$(ele);
    pack.style.display = 'block';
    pack.innerHTML = callback(data, artist, data2);
}
function artistaProcess({ pid , time , start , b  }, end) {
    let color = 'green', text = 'p' + (pid + 1), cut = time / end * 100;
    if (pid == 'id') {
        color = 'red';
        text = 'ID';
    }
    return ` <div style="flex-basis:${cut}%" class="process ${color}" >
              ${text}
              <span class="process__det process__det--top">${b}</span>
                 <span class="process__det process__det--bottom">${start + time}</span>
              
          </div>`;
}
function randomIntFromRange(start, end) {
    return Math.round(Math.random() * (end - start));
}
function autoInsertAtBt() {
    let [...inputBoxes] = _utils.$2('.item__box .i');
    inputBoxes.forEach((e)=>e.value = randomIntFromRange(e.min, e.max)
    );
}
function collectdata(dataPack) {
    let object = {
        queue: [],
        wasteTime: 0,
        tq: undefined,
        story: [],
        tracker: {
        },
        read: []
    };
    let read = object.read;
    for(let i = 0; i < dataPack.length; i += 2){
        let at = dataPack[i].value, bt = dataPack[i + 1].value;
        if (!at && at !== 0 || !bt || isNaN(at)) throw new Error('values are incomplete');
        at = Math.round(at);
        bt = Math.round(bt);
        read.push({
            at,
            bt
        });
    }
    return object;
}
function artistaCaution(err) {
    return ` <h2 class="heading--small red p--1">${err}</h2>`;
}
function artistaInputs(number) {
    return `
  <div class="row">
  
  
 
  <div class="col-1-2">
                  <div class="input__item" >
                    <div class="item__box u-center" style="animation-delay:${number * 2 / 10}s;">
                      p${number}
                    </div>
                    <div class="item__box item__box--field  u-center" style="animation-delay:.${number}s;">
                      <div class="form--group">
                        <input
                          type="number"
                          class="i j"
                          min="0"
                          max="100"
                          
                          
                        />
                
                        <label>AT</label>
                      </div>
                    </div>
                    <div class="item__box item__box--field u-center" style="animation-delay:.${number}s;">
                      <div class="form--group">
                        <input
                          type="number"
                          class="i j"
                          min="1"
                          max="100"
                        
                        />
                
                        <label>BT</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                </div>`;
}
function bigContainer({ story , end , title , queue2  }, artist = null, data2) {
    let tableData = story.map((e)=>{
        if (e.b === 0) {
            e.ct = e.start + e.time;
            return e;
        }
    }).filter((e)=>e != undefined
    );
    let { read  } = data2;
    for (let { pid , ct  } of tableData){
        read[pid].ct = ct;
        read[pid].pid = pid;
        read[pid].tat = ct - read[pid].at;
        read[pid].wt = read[pid].tat - read[pid].bt;
    }
    let atat = read.reduce((a, { tat  })=>a + tat
    , 0) / read.length, awt = read.reduce((a, { wt  })=>a + wt
    , 0) / read.length;
    //tableData = JSON.parse(JSON.stringify(data2));
    return ` 
  <div class="algo__title u-center grad p-1">
   <h2 class="heading--2">${title}</h2>
    </div>
    <div className="row ">
    <h2 class="tab__cap grad p-1 heading--small u-center">
      Gantt chart
    </h2>
    </div>
    <div class="gantt row">
         <div class="process__con con-1">
         ${addTocontainer(story, artistaProcess, end)}
          </div>
        
          
      </div>
   <div className="row ">
   <h2 class="tab__cap clips grad p-1 heading--small u-center">
     table of values
   </h2>
   </div>
      <table class="table mt-2">
          <thead>
                <tr class="tab__row mt-2 ">
                    <td class="p--1 u-center cp1">p</td>
                    <td class="p--1 u-center cp1">a.t(ms)</td>
                    <td class="p--1 u-center cp1">b.t(ms)</td>
                    <td class="p--1 u-center cp2">c.t(ms)</td>
                    <td class="p--1 u-center cp2">w.t(ms)</td>
                    <td class="p--1 u-center cp2">t.a.t(ms)</td>
                </tr>
          </thead>
          ${addTocontainer(data2.read, artistaTable, end)}
      </table>
        
  <div class="row">
         <div class="col-1-4 ">

         <div class="u-center summry cp2">
            <div class=" heading--small mb-1 p-1">a.t.a.t</div>
              <div class=" heading--small mb-1 p-1 "> ${atat.toPrecision(5)}ms</div>
             </div>
         </div>
      <div class="col-1-4 u-center">
         <div class="u-center summry cp4">
              <div class=" heading--small mb-1 p-1">a.w.t</div>
              <div class=" heading--small mb-1 p-1 "> ${awt.toPrecision(5)}ms</div>
             </div>
      </div>
  </div>


  `;
}
function addTocontainer(n, callback, c) {
    let pack = '';
    if (!isNaN(n)) for(let i = 0; i < n; i++)pack += callback(i + 1);
    else for (let el of n)pack += callback(el, c);
    return pack;
}
function artistaTable({ pid , at , bt , ct , tat , wt  }) {
    return `<tr class="tab__row"> <td class="p--1 u-center cp1">p${pid + 1}</td>
              <td class="p--1 u-center cp1">${at}</td>
              <td class="p--1 u-center cp2">${bt}</td>
              <td class="p--1 u-center cp2">${ct}</td>
              <td class="p--1 u-center cp2">${wt}</td>
              <td class="p--1 u-center cp2">${tat}</td>
          </tr>`;
}
function handleError(el, e) {
    e = e.toString().slice(6);
    BuildContainer(el, [
        e
    ], artistaCaution, addTocontainer);
    setTimeout(()=>{
        _utils.$(el).style.display = 'none';
    }, 5000);
}
let job = _utils.jobs[0];
let data1;
let dataSJF;
let dataRR;
let dataSRTF;
let dataFCFS;
window.onload = ()=>{
    let checkBoxes = _utils.$2('.toog-1'), [...specs] = _utils.$2('.i'), form = _utils.$('#form1'), form2 = _utils.$('#exec'), randomInserter = _utils.$('#random');
    let [...boxes] = checkBoxes;
    boxes.forEach((e)=>e.addEventListener('click', toogleTqBox)
    );
    specs.forEach((e)=>e.addEventListener('input', function() {
            authenticate.bind(this, 'var(--cp1)')();
        })
    );
    randomInserter.addEventListener('click', autoInsertAtBt);
    form.onsubmit = function(e1) {
        e1.preventDefault();
        if (!specs[0].value) {
            handleError('#caution', 'error:specify how many processes you want to continue');
            return;
        }
        BuildContainer('#inputz', specs[0].value, artistaInputs, addTocontainer);
        _utils.$2('.j').forEach((e)=>e.addEventListener('input', function() {
                authenticate.bind(this, 'var(--cp4)')();
            })
        );
    };
    form2.onclick = function(e3) {
        e3.preventDefault();
        try {
            data1 = null;
            data1 = collectdata(_utils.$2('.j'));
        } catch (e2) {
            _utils.$2('.j').forEach((e)=>authenticate.bind(e, null, e.value === '' || isNaN(e.value))()
            );
            handleError('#caution', e2);
            return;
        }
        dataFCFS = JSON.parse(JSON.stringify(data1));
        dataRR = JSON.parse(JSON.stringify({
            ...data1,
            tq: Number(specs[1].value)
        }));
        dataSJF = JSON.parse(JSON.stringify(data1));
        dataSRTF = JSON.parse(JSON.stringify(data1));
        if (data1) {
            if (boxes.every(({ checked  })=>!checked
            )) {
                handleError('#caution', 'error:please specify an algorithm from the options above uu');
                return;
            }
            if (boxes[0].checked) try {
                BuildContainer('#test3', _roundRobin.RoundRobin(dataRR), null, bigContainer, data1);
            } catch (e) {
                alert('hi');
                console.log(e);
                handleError('#caution', e);
            }
            boxes[3].checked && BuildContainer('#test', _srtf.SRTF(dataSRTF), null, bigContainer, data1);
            boxes[2].checked && BuildContainer('#test1', _sjf.SJF(dataSJF), null, bigContainer, data1);
            boxes[1].checked && BuildContainer('#test2', _fcfs.FCFS(dataFCFS), null, bigContainer, data1);
        }
    };
};

},{"./Utils":"gD3pj","./FCFS":"9LPQ9","./RoundRobin":"at7ME","./Srtf":"4LdBp","./Sjf":"iyKxz"}],"gD3pj":[function(require,module,exports) {
let $ = (el, o = document)=>o.querySelector(el)
;
let $2 = (el, o = document)=>o.querySelectorAll(el)
;
function addToStory(obj, story) {
    let pro = {
        ...obj
    };
    story.push(pro);
}
function getProcessAt(arrai, time, T) {
    //bring idexes of processes that arrived at time T=arrival time
    let indexes = arrai.reduce((arr, p, i)=>{
        return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
    }, []);
    if (indexes.length == 0) return 0;
    return indexes;
}
function getProcessAt2(arrai, time, T2, T) {
    //bring idexes of processes that arrived within time range T1 and T2
    let indexes = arrai.reduce((arr, p, i)=>{
        return p.at >= T2 && p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
    }, []);
    if (indexes.length == 0) return 0;
    return indexes;
}
let jobs = [
    {
        read: [
            {
                at: 1,
                bt: 6
            },
            {
                at: 3,
                bt: 8
            },
            {
                at: 2,
                bt: 3
            },
            {
                at: 2,
                bt: 20
            }, 
        ],
        queue: [],
        wasteTime: 0,
        tq: 5,
        story: []
    },
    {
        read: [
            {
                at: 2,
                bt: 2
            },
            {
                at: 8,
                bt: 1
            },
            {
                at: 9,
                bt: 3
            },
            {
                at: 7,
                bt: 2
            },
            {
                at: 16,
                bt: 17
            },
            {
                at: 1000,
                bt: 54
            },
            {
                at: 45,
                bt: 78
            },
            {
                at: 71,
                bt: 16
            },
            {
                at: 16,
                bt: 17
            },
            {
                at: 100,
                bt: 32
            },
            {
                at: 540,
                bt: 88
            },
            {
                at: 2,
                bt: 8
            },
            {
                at: 1,
                bt: 7
            },
            {
                at: 4,
                bt: 1
            },
            {
                at: 6,
                bt: 13
            }, 
        ],
        tq: 5,
        queue: [],
        wasteTime: 0,
        tracker: {
            pid: undefined,
            time: undefined,
            start: undefined
        },
        story: []
    },
    {
        read: [
            {
                at: 1,
                bt: 20
            },
            {
                at: 1,
                bt: 20
            },
            {
                at: 15,
                bt: 25
            },
            {
                at: 30,
                bt: 100
            },
            {
                at: 45,
                bt: 1
            }, 
        ],
        /*let read:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/ queue: [],
        story: [],
        wasteTime: 0,
        tq: 3
    },
    {
        read: [
            {
                at: 0,
                bt: 2
            },
            {
                at: 8,
                bt: 1
            },
            {
                at: 9,
                bt: 3
            },
            {
                at: 7,
                bt: 2
            },
            {
                at: 16,
                bt: 1
            }, 
        ],
        /*let rea:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/ queue: [],
        story: [],
        wasteTime: 0,
        tq: 1
    }, 
];
module.exports = {
    $,
    $2,
    addToStory,
    getProcessAt,
    getProcessAt2,
    jobs
};

},{}],"9LPQ9":[function(require,module,exports) {
let { addToStory , getProcessAt  } = require("./Utils");
const FCFS = ({ read , queue , wasteTime , story  })=>{
    function incomingAt(time) {
        //first checks if there is a process in the schduler
        if (read.some((p)=>p.at !== undefined
        )) {
            let arrived = getProcessAt(read, "at", time);
            if (arrived === 0) return true;
            queue = [
                ...arrived
            ];
            let temp = queue.map((e)=>read[e].at
            );
            let choice = temp.indexOf(Math.min(...temp));
            return queue[choice];
        } else return "terminate";
    }
    for(var i = 0;; i++){
        if (incomingAt(i) == "terminate") // console.log("ready queue empty at" + i);
        return {
            story,
            end: i,
            title: "firstcome first serve"
        };
        if (incomingAt(i) === true) {
            wasteTime++;
            continue;
        }
        wasteTime && addToStory({
            pid: "id",
            time: wasteTime,
            start: i - wasteTime,
            b: "N/A"
        }, story);
        wasteTime = 0;
        let update = incomingAt(i);
        let { at , bt  } = read[update];
        addToStory({
            pid: update,
            at,
            bt,
            time: bt,
            start: i,
            b: 0
        }, story);
        i += read[update].bt - 1;
        read[update].bt = undefined;
        read[update].at = undefined;
    }
};
module.exports = {
    FCFS
};

},{"./Utils":"gD3pj"}],"at7ME":[function(require,module,exports) {
let { addToStory , getProcessAt2  } = require('./Utils');
function RoundRobin({ read , queue , wasteTime , story , tq  }) {
    if (!tq) throw new Error('time quantum not specified for round robin');
    let T2 = 0, queue2 = [], modifiedQueue = false;
    function hasLastValid(slave, master) {
        if (!slave.length) return false;
        return master[slave[slave.length - 1]].bt > 0;
    }
    let choice;
    function incomingAt(time2, time) {
        modifiedQueue = false;
        choice = undefined;
        if (read.some((p)=>p.at !== undefined
        )) {
            // checks if there is a process in the schduler
            let arrived = getProcessAt2(read, 'at', time2, time);
            if (arrived === 0 && !queue.length && !hasLastValid(queue2, read)) return 'no process';
            if (arrived) {
                modifiedQueue = true;
                //sorts so called processes based on their a.t
                arrived = arrived.sort((a, b)=>{
                    a = read[a].at, b = read[b].at;
                    if (a < b) return -1;
                    if (a > b) return 1;
                    return 0;
                });
                console.log({
                    arrived
                });
                //exec just once i.e when queue is an empty pack
                if (!queue.length) {
                    // ? queue is empty but there was a last entry that needs to be requeued
                    if (hasLastValid(queue2, read)) queue = [
                        ...arrived,
                        queue2[queue2.length - 1]
                    ];
                    else queue = [
                        ...arrived
                    ];
                } else // ! in this case the queue contains values and there are new arrivals
                if (hasLastValid(queue2, read)) queue = [
                    ...queue,
                    ...arrived,
                    queue2[queue2.length - 1]
                ];
                else queue = [
                    ...queue,
                    ...arrived
                ];
            }
            if (!modifiedQueue && hasLastValid(queue2, read)) queue = [
                ...queue,
                queue2[queue2.length - 1]
            ];
            //after q0 runs once we have to know if we should reschdule it
            choice = queue[0];
            // console.log({ queue });
            queue2.push(choice);
            queue.shift();
            // console.log({ choiceBefore: choice });
            //console.log(queue2);
            //if it has some bt let it be pushed to za queue
            // console.log({ choiceReturned: choice });
            return choice;
        }
        //if there is non end the program
        return 'terminate';
    }
    for(let i = 0;; i++){
        let IOFOT = incomingAt(T2, i);
        // console.log({ IOFOT });
        if (IOFOT === 'terminate') // console.log({
        //   story,
        //   end: i,
        //   title: "round robin algorithm"
        // });
        return {
            story,
            end: i,
            title: 'round robin algorithm'
        };
        if (IOFOT === 'no process') {
            wasteTime++;
            T2 = i + 1;
            continue;
        }
        wasteTime && addToStory({
            pid: 'id',
            time: wasteTime,
            start: i - wasteTime,
            b: 'N/A'
        }, story);
        wasteTime = 0;
        let pid = IOFOT;
        let { at , bt  } = read[pid], time = 0, start = i;
        T2 = i + 1;
        if (bt <= tq) {
            time = bt;
            i += bt - 1;
            bt = 0;
            read[pid] = {
            };
        } else {
            time = tq;
            i += tq - 1;
            read[pid].bt -= tq;
            bt = bt - tq;
        }
        addToStory({
            pid,
            at,
            time,
            start,
            b: bt
        }, story);
    }
}
module.exports = {
    RoundRobin
};

},{"./Utils":"gD3pj"}],"4LdBp":[function(require,module,exports) {
function SRTF({ read , queue , wasteTime , tracker: tracker1 , story  }) {
    function getProcessAt(arrai, time, T) {
        //bring idexes of processes that arrived at time T=arrival time
        if (time == "at") {
            let indexes = arrai.reduce((arr, p, i)=>{
                return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
            }, []);
            if (indexes.length == 0) return 0;
            return indexes;
        } else {
            //brings process with smaallest bt and handle ptoblem of equal bt
            let p_smallbt = arrai.reduce((pi, p)=>{
                return read[pi].bt < read[p].bt ? pi : read[pi].bt == read[p].bt ? read[pi].at < read[p].at ? pi : p : p;
            });
            return p_smallbt;
        }
    }
    function incomingAt(time) {
        //first checks if there is a process in the schduler
        if (read.some((p)=>p.at !== undefined
        )) {
            let arrived = getProcessAt(read, "at", time);
            if (arrived === 0) return "no process";
            queue = [
                ...arrived
            ];
            if (queue.length) {
                let choice = getProcessAt(queue, "bt");
                return choice;
            }
        } else return "empty";
    }
    for(let i1 = 0;; i1++){
        let IOFOT = incomingAt(i1);
        if (IOFOT === "empty") {
            empty = i1;
            // console.log("ready queue empty at" + i);
            return {
                story: story.filter(({ b  })=>b !== undefined
                ),
                end: i1,
                title: "s.r.t.f (premptive)"
            };
        }
        if (IOFOT === "no process") {
            wasteTime++;
            tracker1 = {
            };
            continue;
        }
        if (wasteTime) {
            story.push({
                pid: "id",
                time: wasteTime,
                start: i1 - wasteTime,
                b: "N/A"
            });
            wasteTime = 0;
        }
        let current = incomingAt(i1);
        //this if block executes only once
        if (tracker1.pid === undefined) tracker1 = assignTracker(tracker1, [
            current,
            0,
            i1
        ]);
        if (tracker1.pid === current) {
            //reduces burst time and keeps track of d so called process
            read[current].bt--;
            tracker1.time++;
            check(current, tracker1, i1);
        }
        //else for new processes that just joined the party
        if (tracker1.pid !== current) {
            let pro;
            pro = {
                ...tracker1,
                b: read[tracker1.pid].bt
            };
            story.push(pro);
            tracker1 = assignTracker(tracker1, [
                current,
                0,
                i1
            ]);
            tracker1.time++;
            read[current].bt--;
            check(current, tracker1, i1);
        }
    }
    function assignTracker(obj, arr) {
        obj.pid = arr[0];
        obj.at = read[arr[0]].at;
        obj.bt = read[arr[0]].bt;
        obj.start = arr[2];
        obj.time = arr[1];
        return obj;
    }
    function check(current, tracker, i) {
        let pro;
        if (read[current].bt === 0) {
            pro = {
                ...tracker,
                b: read[tracker.pid].bt
            };
            story.push(pro);
            read[current] = {
            };
        }
        return;
    }
}
module.exports = {
    SRTF
};

},{}],"iyKxz":[function(require,module,exports) {
let { addToStory , getProcessAt: getProcessAt1  } = require("./Utils");
const SJF = ({ read , queue , wasteTime , story  })=>{
    function getProcessAt(arrai, time, T) {
        //bring idexes of processes that arrived at time T=arrival time
        if (time == "at") {
            let indexes = arrai.reduce((arr, p, i)=>{
                return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
            }, []);
            if (indexes.length == 0) return 0;
            return indexes;
        } else {
            //brings process with smaallest bt and handle ptoblem of equal bt
            let p_smallbt = arrai.reduce((pi, p)=>{
                return read[pi].bt < read[p].bt ? pi : read[pi].bt == read[p].bt ? read[pi].at < read[p].at ? pi : p : p;
            });
            return p_smallbt;
        }
    }
    function incomingAt(time) {
        //first checks if there is a process in the schduler
        if (read.some((p)=>p.at !== undefined
        )) {
            let arrived = getProcessAt(read, "at", time);
            if (arrived) queue = [
                ...arrived
            ];
            if (queue.length != 0) {
                let choice = getProcessAt(queue, "bt");
                queue = queue.filter((i)=>i != choice
                );
                return choice;
            }
            return true;
        } else return "terminate";
    }
    for(var i1 = 0;; i1++){
        let IOFOT = incomingAt(i1);
        if (IOFOT === "terminate") // console.log("ready queue empty at" + i);
        return {
            story,
            end: i1,
            title: "s.j.f (non premptive)"
        };
        if (IOFOT === true) {
            wasteTime++;
            continue;
        }
        wasteTime && addToStory({
            pid: "id",
            time: wasteTime,
            start: i1 - wasteTime,
            b: "N/A"
        }, story);
        wasteTime = 0;
        let update = incomingAt(i1);
        let { at , bt  } = read[update];
        addToStory({
            pid: update,
            at,
            bt,
            time: bt,
            start: i1,
            b: 0
        }, story);
        i1 += read[update].bt - 1;
        read[update].bt = undefined;
        read[update].at = undefined;
    }
};
module.exports = {
    SJF
};

},{"./Utils":"gD3pj"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequire09d8")

//# sourceMappingURL=index.379dd93c.js.map
