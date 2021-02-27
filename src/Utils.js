let $ = (el, o = document) => o.querySelector(el);
let $2 = (el, o = document) => o.querySelectorAll(el);

function addToStory(obj, story) {
  let pro = { ...obj };
  story.push(pro);
}

function getProcessAt(arrai, time, T) {
  //bring idexes of processes that arrived at time T=arrival time
  let indexes = arrai.reduce((arr, p, i) => {
    return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
  }, []);
  if (indexes.length == 0) return 0;
  return indexes;
}

function getProcessAt2(arrai, time, T2, T) {
  //bring idexes of processes that arrived within time range T1 and T2
  let indexes = arrai.reduce((arr, p, i) => {
    return p.at >= T2 && p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
  }, []);
  if (indexes.length == 0) return 0;
  return indexes;
}
let jobs = [
  {
    read: [
      { at: 1, bt: 6 },
      { at: 3, bt: 8 },
      { at: 2, bt: 3 },
      { at: 2, bt: 20 },
    ],
    queue: [],
    wasteTime: 0,
    tq: 5,
    story: [],
  },
  {
    read: [
      { at: 2, bt: 2 },
      { at: 8, bt: 1 },
      { at: 9, bt: 3 },
      { at: 7, bt: 2 },
      { at: 16, bt: 17 },
      { at: 1000, bt: 54 },
      { at: 45, bt: 78 },
      { at: 71, bt: 16 },
      { at: 16, bt: 17 },
      { at: 100, bt: 32 },
      { at: 540, bt: 88 },
      { at: 2, bt: 8 },
      { at: 1, bt: 7 },
      { at: 4, bt: 1 },
      { at: 6, bt: 13 },
    ],
    tq: 5,
    queue: [],
    wasteTime: 0,
    tracker: { pid: undefined, time: undefined, start: undefined },
    story: [],
  },
  {
    read: [
      { at: 1, bt: 20 },
      { at: 1, bt: 20 },
      { at: 15, bt: 25 },
      { at: 30, bt: 100 },
      { at: 45, bt: 1 },
    ],
    /*let read:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/
    queue: [],
    story: [],
    wasteTime: 0,
    tq: 3,
  },
  {
    read: [
      { at: 0, bt: 2 },
      { at: 8, bt: 1 },
      { at: 9, bt: 3 },
      { at: 7, bt: 2 },
      { at: 16, bt: 1 },
    ],
    /*let rea:[{at:undefined ,bt:undefined },{at:undefined ,bt:undefined}]*/
    queue: [],
    story: [],
    wasteTime: 0,
    tq: 1,
  },
];
module.exports = {
  $,
  $2,
  addToStory,
  getProcessAt,
  getProcessAt2,
  jobs,
};
