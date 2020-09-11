let { addToStory, getProcessAt } = require("./Utils");

const FCFS = ({ read, queue, wasteTime, story }) => {
  function incomingAt(time) {
    //first checks if there is a process in the schduler
    if (read.some(p => p.at !== undefined)) {
      let arrived = getProcessAt(read, "at", time);

      if (arrived === 0) {
        return true;
      }
      queue = [...arrived];
      let temp = queue.map(e => read[e].at);
      let choice = temp.indexOf(Math.min(...temp));
      return queue[choice];
    }
    //if there is non end the program
    else return "terminate";
  }
  for (var i = 0; ; i++) {
    if (incomingAt(i) == "terminate") {
      // console.log("ready queue empty at" + i);
      return { story, end: i, title: "firstcome first serve" };
      break;
    }
    if (incomingAt(i) === true) {
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
module.exports = { FCFS };
