let { addToStory, getProcessAt } = require("./Utils");

const SJF = ({ read, queue, wasteTime, story }) => {
  function getProcessAt(arrai, time, T) {
    //bring idexes of processes that arrived at time T=arrival time
    if (time == "at") {
      let indexes = arrai.reduce((arr, p, i) => {
        return p.at <= T && p.at !== undefined ? arr.concat(i) : arr;
      }, []);
      if (indexes.length == 0) return 0;
      return indexes;
    } else {
      //brings process with smaallest bt and handle ptoblem of equal bt
      let p_smallbt = arrai.reduce((pi, p) => {
        return read[pi].bt < read[p].bt
          ? pi
          : read[pi].bt == read[p].bt
          ? read[pi].at < read[p].at
            ? pi
            : p
          : p;
      });
      return p_smallbt;
    }
  }
  function incomingAt(time) {
    //first checks if there is a process in the schduler
    if (read.some(p => p.at !== undefined)) {
      let arrived = getProcessAt(read, "at", time);

      if (arrived) queue = [...arrived];

      if (queue.length != 0) {
        let choice = getProcessAt(queue, "bt");
        queue = queue.filter(i => i != choice);
        return choice;
      }
      return true;
    }
    //if there is non end the program
    else return "terminate";
  }
  for (var i = 0; ; i++) {
    let IOFOT = incomingAt(i);
    if (IOFOT === "terminate") {
      // console.log("ready queue empty at" + i);
      return { story, end: i, title: "s.j.f (non premptive)" };
    }
    if (IOFOT === true) {
      wasteTime++;
      continue;
    }
    wasteTime &&
      addToStory(
        { pid: "id", time: wasteTime, start: i - wasteTime, b: "N/A" },
        story
      );
    wasteTime = 0;
    let update = incomingAt(i);
    let { at, bt } = read[update];
    addToStory({ pid: update, at, bt, time: bt, start: i, b: 0 }, story);
    i += read[update].bt - 1;
    read[update].bt = undefined;
    read[update].at = undefined;
  }
};
module.exports = { SJF };
