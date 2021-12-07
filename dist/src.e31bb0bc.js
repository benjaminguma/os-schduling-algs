// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Utils.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = function $(el) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return o.querySelector(el);
};

var $2 = function $2(el) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return o.querySelectorAll(el);
};

function addToStory(obj, story) {
  var pro = _objectSpread({}, obj);

  story.push(pro);
}

function getProcessAt(arrai, time, T) {
  //bring idexes of processes that arrived at time T=arrival time
  var indexes = arrai.reduce(function (arr, p, i) {
    return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
  }, []);
  if (indexes.length == 0) return 0;
  return indexes;
}

function getProcessAt2(arrai, time, T2, T) {
  //bring idexes of processes that arrived within time range T1 and T2
  var indexes = arrai.reduce(function (arr, p, i) {
    return p.at >= T2 && p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
  }, []);
  if (indexes.length == 0) return 0;
  return indexes;
}

var jobs = [{
  read: [{
    at: 1,
    bt: 6
  }, {
    at: 3,
    bt: 8
  }, {
    at: 2,
    bt: 3
  }, {
    at: 2,
    bt: 20
  }],
  queue: [],
  wasteTime: 0,
  tq: 5,
  story: []
}, {
  read: [{
    at: 2,
    bt: 2
  }, {
    at: 8,
    bt: 1
  }, {
    at: 9,
    bt: 3
  }, {
    at: 7,
    bt: 2
  }, {
    at: 16,
    bt: 17
  }, {
    at: 1000,
    bt: 54
  }, {
    at: 45,
    bt: 78
  }, {
    at: 71,
    bt: 16
  }, {
    at: 16,
    bt: 17
  }, {
    at: 100,
    bt: 32
  }, {
    at: 540,
    bt: 88
  }, {
    at: 2,
    bt: 8
  }, {
    at: 1,
    bt: 7
  }, {
    at: 4,
    bt: 1
  }, {
    at: 6,
    bt: 13
  }],
  tq: 5,
  queue: [],
  wasteTime: 0,
  tracker: {
    pid: undefined,
    time: undefined,
    start: undefined
  },
  story: []
}, {
  read: [{
    at: 1,
    bt: 20
  }, {
    at: 1,
    bt: 20
  }, {
    at: 15,
    bt: 25
  }, {
    at: 30,
    bt: 100
  }, {
    at: 45,
    bt: 1
  }],

  /*let read:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/
  queue: [],
  story: [],
  wasteTime: 0,
  tq: 3
}, {
  read: [{
    at: 0,
    bt: 2
  }, {
    at: 8,
    bt: 1
  }, {
    at: 9,
    bt: 3
  }, {
    at: 7,
    bt: 2
  }, {
    at: 16,
    bt: 1
  }],

  /*let rea:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/
  queue: [],
  story: [],
  wasteTime: 0,
  tq: 1
}];
module.exports = {
  $: $,
  $2: $2,
  addToStory: addToStory,
  getProcessAt: getProcessAt,
  getProcessAt2: getProcessAt2,
  jobs: jobs
};
},{}],"FCFS.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require("./Utils"),
    addToStory = _require.addToStory,
    getProcessAt = _require.getProcessAt;

var FCFS = function FCFS(_ref) {
  var read = _ref.read,
      queue = _ref.queue,
      wasteTime = _ref.wasteTime,
      story = _ref.story;

  function incomingAt(time) {
    //first checks if there is a process in the schduler
    if (read.some(function (p) {
      return p.at !== undefined;
    })) {
      var arrived = getProcessAt(read, "at", time);

      if (arrived === 0) {
        return true;
      }

      queue = _toConsumableArray(arrived);
      var temp = queue.map(function (e) {
        return read[e].at;
      });
      var choice = temp.indexOf(Math.min.apply(Math, _toConsumableArray(temp)));
      return queue[choice];
    } //if there is non end the program
    else return "terminate";
  }

  for (var i = 0;; i++) {
    if (incomingAt(i) == "terminate") {
      // console.log("ready queue empty at" + i);
      return {
        story: story,
        end: i,
        title: "firstcome first serve"
      };
      break;
    }

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
    var update = incomingAt(i);
    var _read$update = read[update],
        at = _read$update.at,
        bt = _read$update.bt;
    addToStory({
      pid: update,
      at: at,
      bt: bt,
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
  FCFS: FCFS
};
},{"./Utils":"Utils.js"}],"RoundRobin.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require("./Utils"),
    addToStory = _require.addToStory,
    getProcessAt2 = _require.getProcessAt2;

function RoundRobin(_ref) {
  var read = _ref.read,
      queue = _ref.queue,
      wasteTime = _ref.wasteTime,
      story = _ref.story,
      tq = _ref.tq;
  if (!tq) throw new Error("time quantum not specified for round robin");
  var T2 = 0,
      queue2 = [],
      modifiedQueue = false;

  function hasLastValid(slave, master) {
    if (!slave.length) return false;
    return master[slave[slave.length - 1]].bt > 0;
  }

  var choice;

  function incomingAt(time2, time) {
    modifiedQueue = false;
    choice = undefined;

    if (read.some(function (p) {
      return p.at !== undefined;
    })) {
      // checks if there is a process in the schduler
      var arrived = getProcessAt2(read, "at", time2, time);

      if (arrived === 0 && !queue.length && !hasLastValid(queue2, read)) {
        return "no process";
      }

      if (arrived) {
        modifiedQueue = true; //sorts so called processes based on their a.t

        arrived = arrived.sort(function (a, b) {
          a = read[a].at, b = read[b].at;
          if (a <= b) return -1;
          if (a >= b) return 1;
          return 0;
        }); //exec just once i.e when queue is an empty pack

        if (!queue.length) {
          // ? queue is empty but there was a last entry that needs to be requeued
          if (hasLastValid(queue2, read)) {
            queue = [].concat(_toConsumableArray(arrived), [queue2[queue2.length - 1]]);
          } else queue = _toConsumableArray(arrived);
        } else {
          // ! in this case the queue contains values and there are new arrivals
          if (hasLastValid(queue2, read)) {
            queue = [].concat(_toConsumableArray(queue), _toConsumableArray(arrived), [queue2[queue2.length - 1]]);
          } else queue = [].concat(_toConsumableArray(queue), _toConsumableArray(arrived));
        }
      }

      if (!modifiedQueue && hasLastValid(queue2, read)) queue = [].concat(_toConsumableArray(queue), [queue2[queue2.length - 1]]); //after q0 runs once we have to know if we should reschdule it

      choice = queue[0]; // console.log({ queue });

      queue2.push(choice);
      queue.shift(); // console.log({ choiceBefore: choice });
      //console.log(queue2);
      //if it has some bt let it be pushed to za queue
      // console.log({ choiceReturned: choice });

      return choice;
    } //if there is non end the program


    return "terminate";
  }

  for (var i = 0;; i++) {
    var IOFOT = incomingAt(T2, i); // console.log({ IOFOT });

    if (IOFOT === "terminate") {
      // console.log({
      //   story,
      //   end: i,
      //   title: "round robin algorithm"
      // });
      return {
        story: story,
        end: i,
        title: "round robin algorithm"
      };
    }

    if (IOFOT === "no process") {
      wasteTime++;
      T2 = i + 1;
      continue;
    }

    wasteTime && addToStory({
      pid: "id",
      time: wasteTime,
      start: i - wasteTime,
      b: "N/A"
    }, story);
    wasteTime = 0;
    var pid = IOFOT;
    var _read$pid = read[pid],
        at = _read$pid.at,
        bt = _read$pid.bt,
        time = 0,
        start = i;
    T2 = i + 1;

    if (bt <= tq) {
      time = bt;
      i += bt - 1;
      bt = 0;
      read[pid] = {};
    } else {
      time = tq;
      i += tq - 1;
      read[pid].bt -= tq;
      bt = bt - tq;
    }

    addToStory({
      pid: pid,
      at: at,
      time: time,
      start: start,
      b: bt
    }, story);
  }
}

module.exports = {
  RoundRobin: RoundRobin
};
},{"./Utils":"Utils.js"}],"Srtf.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function SRTF(_ref) {
  var read = _ref.read,
      queue = _ref.queue,
      wasteTime = _ref.wasteTime,
      tracker = _ref.tracker,
      story = _ref.story;

  function getProcessAt(arrai, time, T) {
    //bring idexes of processes that arrived at time T=arrival time
    if (time == "at") {
      var indexes = arrai.reduce(function (arr, p, i) {
        return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
      }, []);
      if (indexes.length == 0) return 0;
      return indexes;
    } else {
      //brings process with smaallest bt and handle ptoblem of equal bt
      var p_smallbt = arrai.reduce(function (pi, p) {
        return read[pi].bt < read[p].bt ? pi : read[pi].bt == read[p].bt ? read[pi].at < read[p].at ? pi : p : p;
      });
      return p_smallbt;
    }
  }

  function incomingAt(time) {
    //first checks if there is a process in the schduler
    if (read.some(function (p) {
      return p.at !== undefined;
    })) {
      var arrived = getProcessAt(read, "at", time);
      if (arrived === 0) return "no process";
      queue = _toConsumableArray(arrived);

      if (queue.length) {
        var choice = getProcessAt(queue, "bt");
        return choice;
      }
    } //if there is non end the program
    else return "empty";
  }

  for (var i = 0;; i++) {
    var IOFOT = incomingAt(i);

    if (IOFOT === "empty") {
      empty = i; // console.log("ready queue empty at" + i);

      return {
        story: story.filter(function (_ref2) {
          var b = _ref2.b;
          return b !== undefined;
        }),
        end: i,
        title: "s.r.t.f (premptive)"
      };
    }

    if (IOFOT === "no process") {
      wasteTime++;
      tracker = {};
      continue;
    }

    if (wasteTime) {
      story.push({
        pid: "id",
        time: wasteTime,
        start: i - wasteTime,
        b: "N/A"
      });
      wasteTime = 0;
    }

    var current = incomingAt(i); //this if block executes only once

    if (tracker.pid === undefined) {
      tracker = assignTracker(tracker, [current, 0, i]);
    }

    if (tracker.pid === current) {
      //reduces burst time and keeps track of d so called process
      read[current].bt--;
      tracker.time++;
      check(current, tracker, i);
    } //else for new processes that just joined the party


    if (tracker.pid !== current) {
      var pro = void 0;
      pro = _objectSpread({}, tracker, {
        b: read[tracker.pid].bt
      });
      story.push(pro);
      tracker = assignTracker(tracker, [current, 0, i]);
      tracker.time++;
      read[current].bt--;
      check(current, tracker, i);
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
    var pro;

    if (read[current].bt === 0) {
      pro = _objectSpread({}, tracker, {
        b: read[tracker.pid].bt
      });
      story.push(pro);
      read[current] = {};
    }

    return;
  }
}

module.exports = {
  SRTF: SRTF
};
},{}],"Sjf.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require("./Utils"),
    addToStory = _require.addToStory,
    getProcessAt = _require.getProcessAt;

var SJF = function SJF(_ref) {
  var read = _ref.read,
      queue = _ref.queue,
      wasteTime = _ref.wasteTime,
      story = _ref.story;

  function getProcessAt(arrai, time, T) {
    //bring idexes of processes that arrived at time T=arrival time
    if (time == "at") {
      var indexes = arrai.reduce(function (arr, p, i) {
        return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
      }, []);
      if (indexes.length == 0) return 0;
      return indexes;
    } else {
      //brings process with smaallest bt and handle ptoblem of equal bt
      var p_smallbt = arrai.reduce(function (pi, p) {
        return read[pi].bt < read[p].bt ? pi : read[pi].bt == read[p].bt ? read[pi].at < read[p].at ? pi : p : p;
      });
      return p_smallbt;
    }
  }

  function incomingAt(time) {
    //first checks if there is a process in the schduler
    if (read.some(function (p) {
      return p.at !== undefined;
    })) {
      var arrived = getProcessAt(read, "at", time);
      if (arrived) queue = _toConsumableArray(arrived);

      if (queue.length != 0) {
        var choice = getProcessAt(queue, "bt");
        queue = queue.filter(function (i) {
          return i != choice;
        });
        return choice;
      }

      return true;
    } //if there is non end the program
    else return "terminate";
  }

  for (var i = 0;; i++) {
    var IOFOT = incomingAt(i);

    if (IOFOT === "terminate") {
      // console.log("ready queue empty at" + i);
      return {
        story: story,
        end: i,
        title: "s.j.f (non premptive)"
      };
    }

    if (IOFOT === true) {
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
    var update = incomingAt(i);
    var _read$update = read[update],
        at = _read$update.at,
        bt = _read$update.bt;
    addToStory({
      pid: update,
      at: at,
      bt: bt,
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
  SJF: SJF
};
},{"./Utils":"Utils.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Utils = require("./Utils");

var _FCFS = require("./FCFS");

var _RoundRobin = require("./RoundRobin");

var _Srtf = require("./Srtf");

var _Sjf = require("./Sjf");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function toogleTqBox() {
  if (!this.checked && this.value === "robin") {
    (0, _Utils.$)("#tq-toog").style.display = "none";
    (0, _Utils.$)("#tq-toog").style.opacity = 0;
  }

  if (this.checked && this.value === "robin") {
    (0, _Utils.$)("#tq-toog").style.opacity = 1;
    (0, _Utils.$)("#tq-toog").style.display = "block";
  }
}

function authenticate(col) {
  var bool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var max = this.max,
      value = this.value,
      min = this.min;
  value = parseInt(value);

  if (value > max || value < min || bool) {
    if (this.parentNode.querySelector("p")) this.parentNode.querySelector("p").style.display = "block";
    this.style.border = "3px solid red";
  } else {
    if (this.parentNode.querySelector("p")) this.parentNode.querySelector("p").style.display = "none";
    this.style.border = "3px solid  ".concat(col);
  }
}

function BuildContainer(ele, data, artist, callback) {
  var data2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  if (/\binput/.test(ele)) {
    (0, _Utils.$)("#input__pack").style.display = "block";
  }

  var pack = (0, _Utils.$)(ele);
  pack.style.display = "block";
  pack.innerHTML = callback(data, artist, data2);
}

function artistaProcess(_ref, end) {
  var pid = _ref.pid,
      time = _ref.time,
      start = _ref.start,
      b = _ref.b;
  var color = "green",
      text = "p" + (pid + 1),
      cut = time / end * 100;

  if (pid == "id") {
    color = "red";
    text = "ID";
  }

  return " <div style=\"flex-basis:".concat(cut, "%\" class=\"process ").concat(color, "\" >\n              ").concat(text, "\n              <span class=\"process__det process__det--top\">").concat(b, "</span>\n                 <span class=\"process__det process__det--bottom\">").concat(start + time, "</span>\n              \n          </div>");
}

function randomIntFromRange(start, end) {
  return Math.round(Math.random() * (end - start));
}

function autoInsertAtBt() {
  var _$ = (0, _Utils.$2)(".item__box .i"),
      _$2 = _toArray(_$),
      inputBoxes = _$2.slice(0);

  inputBoxes.forEach(function (e) {
    return e.value = randomIntFromRange(e.min, e.max);
  });
}

function collectdata(dataPack) {
  var object = {
    queue: [],
    wasteTime: 0,
    tq: undefined,
    story: [],
    tracker: {},
    read: []
  };
  var read = object.read;

  for (var i = 0; i < dataPack.length; i += 2) {
    var at = dataPack[i].value,
        bt = dataPack[i + 1].value;
    if (!at && at !== 0 || !bt || isNaN(at)) throw new Error("values are incomplete");
    at = Math.round(at);
    bt = Math.round(bt);
    read.push({
      at: at,
      bt: bt
    });
  }

  return object;
}

function artistaCaution(err) {
  return " <h2 class=\"heading--small red p--1\">".concat(err, "</h2>");
}

function artistaInputs(number) {
  return "\n  <div class=\"row\">\n  \n  \n \n  <div class=\"col-1-2\">\n                  <div class=\"input__item\" >\n                    <div class=\"item__box u-center\" style=\"animation-delay:".concat(number * 2 / 10, "s;\">\n                      p").concat(number, "\n                    </div>\n                    <div class=\"item__box item__box--field  u-center\" style=\"animation-delay:.").concat(number, "s;\">\n                      <div class=\"form--group\">\n                        <input\n                          type=\"number\"\n                          class=\"i j\"\n                          min=\"0\"\n                          max=\"100\"\n                          \n                          \n                        />\n                \n                        <label>AT</label>\n                      </div>\n                    </div>\n                    <div class=\"item__box item__box--field u-center\" style=\"animation-delay:.").concat(number, "s;\">\n                      <div class=\"form--group\">\n                        <input\n                          type=\"number\"\n                          class=\"i j\"\n                          min=\"1\"\n                          max=\"100\"\n                        \n                        />\n                \n                        <label>BT</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                </div>");
}

function bigContainer(_ref2) {
  var story = _ref2.story,
      end = _ref2.end,
      title = _ref2.title,
      queue2 = _ref2.queue2;
  var artist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var data2 = arguments.length > 2 ? arguments[2] : undefined;
  var tableData = story.map(function (e) {
    if (e.b === 0) {
      e.ct = e.start + e.time;
      return e;
    }
  }).filter(function (e) {
    return e != undefined;
  });
  var read = data2.read;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tableData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value,
          pid = _step$value.pid,
          ct = _step$value.ct;
      read[pid].ct = ct;
      read[pid].pid = pid;
      read[pid].tat = ct - read[pid].at;
      read[pid].wt = read[pid].tat - read[pid].bt;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var atat = read.reduce(function (a, _ref3) {
    var tat = _ref3.tat;
    return a + tat;
  }, 0) / read.length,
      awt = read.reduce(function (a, _ref4) {
    var wt = _ref4.wt;
    return a + wt;
  }, 0) / read.length; //tableData = JSON.parse(JSON.stringify(data2));

  return " \n  <div class=\"algo__title u-center grad p-1\">\n   <h2 class=\"heading--2\">".concat(title, "</h2>\n    </div>\n    <div className=\"row \">\n    <h2 class=\"tab__cap grad p-1 heading--small u-center\">\n      Gantt chart\n    </h2>\n    </div>\n    <div class=\"gantt row\">\n         <div class=\"process__con con-1\">\n         ").concat(addTocontainer(story, artistaProcess, end), "\n          </div>\n        \n          \n      </div>\n   <div className=\"row \">\n   <h2 class=\"tab__cap clips grad p-1 heading--small u-center\">\n     table of values\n   </h2>\n   </div>\n      <table class=\"table mt-2\">\n          <thead>\n                <tr class=\"tab__row mt-2 \">\n                    <td class=\"p--1 u-center cp1\">p</td>\n                    <td class=\"p--1 u-center cp1\">a.t(ms)</td>\n                    <td class=\"p--1 u-center cp1\">b.t(ms)</td>\n                    <td class=\"p--1 u-center cp2\">c.t(ms)</td>\n                    <td class=\"p--1 u-center cp2\">w.t(ms)</td>\n                    <td class=\"p--1 u-center cp2\">t.a.t(ms)</td>\n                </tr>\n          </thead>\n          ").concat(addTocontainer(data2.read, artistaTable, end), "\n      </table>\n        \n  <div class=\"row\">\n         <div class=\"col-1-4 \">\n\n         <div class=\"u-center summry cp2\">\n            <div class=\" heading--small mb-1 p-1\">a.t.a.t</div>\n              <div class=\" heading--small mb-1 p-1 \"> ").concat(atat.toPrecision(5), "ms</div>\n             </div>\n         </div>\n      <div class=\"col-1-4 u-center\">\n         <div class=\"u-center summry cp4\">\n              <div class=\" heading--small mb-1 p-1\">a.w.t</div>\n              <div class=\" heading--small mb-1 p-1 \"> ").concat(awt.toPrecision(5), "ms</div>\n             </div>\n      </div>\n  </div>\n\n\n  ");
}

function addTocontainer(n, callback) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var pack = "";

  if (!isNaN(n)) {
    for (var i = 0; i < n; i++) {
      pack += callback(i + 1);
    }
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = n[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var el = _step2.value;
        pack += callback(el, c);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return pack;
}

function artistaTable(_ref5) {
  var pid = _ref5.pid,
      at = _ref5.at,
      bt = _ref5.bt,
      ct = _ref5.ct,
      tat = _ref5.tat,
      wt = _ref5.wt;
  return "<tr class=\"tab__row\"> <td class=\"p--1 u-center cp1\">p".concat(pid + 1, "</td>\n              <td class=\"p--1 u-center cp1\">").concat(at, "</td>\n              <td class=\"p--1 u-center cp2\">").concat(bt, "</td>\n              <td class=\"p--1 u-center cp2\">").concat(ct, "</td>\n              <td class=\"p--1 u-center cp2\">").concat(wt, "</td>\n              <td class=\"p--1 u-center cp2\">").concat(tat, "</td>\n          </tr>");
}

function handleError(el, e) {
  e = e.toString().slice(6);
  BuildContainer(el, [e], artistaCaution, addTocontainer);
  setTimeout(function () {
    (0, _Utils.$)(el).style.display = "none";
  }, 5000);
}

var job = _Utils.jobs[0];
var data;
var dataSJF;
var dataRR;
var dataSRTF;
var dataFCFS;

window.onload = function () {
  var checkBoxes = (0, _Utils.$2)(".toog-1"),
      _$3 = (0, _Utils.$2)(".i"),
      _$4 = _toArray(_$3),
      specs = _$4.slice(0),
      form = (0, _Utils.$)("#form1"),
      form2 = (0, _Utils.$)("#exec"),
      randomInserter = (0, _Utils.$)("#random");

  var _checkBoxes = _toArray(checkBoxes),
      boxes = _checkBoxes.slice(0);

  boxes.forEach(function (e) {
    return e.addEventListener("click", toogleTqBox);
  });
  specs.forEach(function (e) {
    return e.addEventListener("input", function () {
      authenticate.bind(this, "var(--cp1)")();
    });
  });
  randomInserter.addEventListener("click", autoInsertAtBt);

  form.onsubmit = function (e) {
    e.preventDefault();

    if (!specs[0].value) {
      handleError("#caution", "error:specify how many processes you want to continue");
      return;
    }

    BuildContainer("#inputz", specs[0].value, artistaInputs, addTocontainer);
    (0, _Utils.$2)(".j").forEach(function (e) {
      return e.addEventListener("input", function () {
        authenticate.bind(this, "var(--cp4)")();
      });
    });
  };

  form2.onclick = function (e) {
    e.preventDefault();

    try {
      data = null;
      data = collectdata((0, _Utils.$2)(".j"));
    } catch (e) {
      (0, _Utils.$2)(".j").forEach(function (e) {
        return authenticate.bind(e, null, e.value === "" || isNaN(e.value))();
      });
      handleError("#caution", e);
      return;
    }

    dataFCFS = JSON.parse(JSON.stringify(data));
    dataRR = JSON.parse(JSON.stringify(_objectSpread({}, data, {
      tq: Number(specs[1].value)
    })));
    dataSJF = JSON.parse(JSON.stringify(data));
    dataSRTF = JSON.parse(JSON.stringify(data));

    if (data) {
      if (boxes.every(function (_ref6) {
        var checked = _ref6.checked;
        return !checked;
      })) {
        handleError("#caution", "error:please specify an algorithm from the options above");
        return;
      }

      if (boxes[0].checked) {
        try {
          BuildContainer("#test3", (0, _RoundRobin.RoundRobin)(dataRR), null, bigContainer, data);
        } catch (e) {
          handleError("#caution", e);
        }
      }

      boxes[3].checked && BuildContainer("#test", (0, _Srtf.SRTF)(dataSRTF), null, bigContainer, data);
      boxes[2].checked && BuildContainer("#test1", (0, _Sjf.SJF)(dataSJF), null, bigContainer, data);
      boxes[1].checked && BuildContainer("#test2", (0, _FCFS.FCFS)(dataFCFS), null, bigContainer, data);
    }
  };
};
},{"./Utils":"Utils.js","./FCFS":"FCFS.js","./RoundRobin":"RoundRobin.js","./Srtf":"Srtf.js","./Sjf":"Sjf.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49662" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map