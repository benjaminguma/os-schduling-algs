function SRTF({ read, queue, wasteTime, tracker, story }) {
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

      if (arrived === 0) return "no process";

      queue = [...arrived];

      if (queue.length) {
        let choice = getProcessAt(queue, "bt");
        return choice;
      }
    }
    //if there is non end the program
    else return "empty";
  }
  for (let i = 0; ; i++) {
    let IOFOT = incomingAt(i);
    if (IOFOT === "empty") {
      empty = i;
      // console.log("ready queue empty at" + i);
      return {
        story: story.filter(({ b }) => b !== undefined),
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

    let current = incomingAt(i);
    //this if block executes only once
    if (tracker.pid === undefined) {
      tracker = assignTracker(tracker, [current, 0, i]);
    }

    if (tracker.pid === current) {
      //reduces burst time and keeps track of d so called process
      read[current].bt--;
      tracker.time++;
      check(current, tracker, i);
    }
    //else for new processes that just joined the party
    if (tracker.pid !== current) {
      let pro;

      pro = { ...tracker, b: read[tracker.pid].bt };
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
    let pro;
    if (read[current].bt === 0) {
      pro = { ...tracker, b: read[tracker.pid].bt };
      story.push(pro);
      read[current] = {};
    }
    return;
  }
}
module.exports = { SRTF };
