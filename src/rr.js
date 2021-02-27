let { addToStory, getProcessAt2 } = require("./Utils");

function RoundRobin({ read, queue, wasteTime, story, tq }) {
  if (!tq) throw new Error("time quantum not specified for round robin");
  let T2 = 0,
    queue2 = [],
    modifiedQueue = false;
  function hasLastValid(slave, master) {
    if (!slave.length) return false;
    return master[slave[slave.length - 1]].bt > 0;
  }
  let choice;
  function incomingAt(time2, time) {
    modifiedQueue = false;
    choice = undefined;
    if (read.some((p) => p.at !== undefined)) {
      // checks if there is a process in the schduler
      let arrived = getProcessAt2(read, "at", time2, time);
      console.log({ queueBefore: queue });
      if (arrived === 0 && !queue.length && !hasLastValid(queue2, read)) {
        return "no process";
      }

      if (arrived) {
        modifiedQueue = true;
        //sorts so called processes based on their a.t
        arrived = arrived.sort((a, b) => {
          (a = read[a].at), (b = read[b].at);

          if (a <= b) return -1;
          if (a >= b) return 1;
          return 0;
        });
        //exec just once i.e when queue is an empty pack
        if (!queue.length) {
          // ? queue is empty but there was a last entry that needs to be requeued
          if (hasLastValid(queue2, read)) {
            queue = [...arrived, queue2[queue2.length - 1]];
          } else queue = [...arrived];
        } else {
          //? in this case the queue contains values and there are new arrivals
          if (hasLastValid(queue2, read)) {
            queue = [...queue, ...arrived, queue2[queue2.length - 1]];
          } else queue = [...queue, ...arrived];
        }
        console.log({ queue });
      }
      if (!modifiedQueue && hasLastValid(queue2, read))
        queue = [...queue, queue2[queue2.length - 1]];
      //after q0 runs once we have to know if we should reschdule it

      choice = queue[0];
      console.log({ queue });

      queue2.push(choice);
      queue.shift();
      console.log({ choiceBefore: choice });
      //console.log(queue2);

      //if it has some bt let it be pushed to za queue

      console.log({ choiceReturned: choice });
      return choice;
    }
    //if there is non end the program
    return "terminate";
  }

  for (let i = 0; ; i++) {
    let IOFOT = incomingAt(T2, i);
    // console.log({ IOFOT });
    if (IOFOT === "terminate") {
      // console.log({
      //   story,
      //   end: i,
      //   title: "round robin algorithm"
      // });
      return {
        story,
        end: i,
        title: "round robin algorithm",
      };
    }
    if (IOFOT === "no process") {
      wasteTime++;
      T2 = i + 1;
      continue;
    }
    wasteTime &&
      addToStory(
        { pid: "id", time: wasteTime, start: i - wasteTime, b: "N/A" },
        story
      );

    wasteTime = 0;

    let pid = IOFOT;
    let { at, bt } = read[pid],
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
    addToStory({ pid, at, time, start, b: bt }, story);
  }
}

const data = {
  queue: [],
  wasteTime: 0,
  tq: 3,
  story: [],
  tracker: {},
  //   read: [
  //     { at: 45, bt: 20 }, //*0
  //     { at: 4, bt: 2 }, //*01
  //     { at: 86, bt: 27 }, //*02
  //     { at: 63, bt: 2 }, //*03
  //     { at: 64, bt: 57 }, //*04
  //     { at: 18, bt: 2 }, //*05
  //   ],
  read: [
    { at: 45, bt: 20 }, //*0
    { at: 4, bt: 15 }, //*01
    { at: 86, bt: 27 }, //*02
    { at: 63, bt: 2 }, //*03
    { at: 64, bt: 57 }, //*04
    { at: 18, bt: 2 }, //*05
  ],
  //   read: [
  //     { at: 5, bt: 5 },
  //     { at: 4, bt: 6 },
  //     { at: 3, bt: 7 },
  //     { at: 1, bt: 9 },
  //     { at: 2, bt: 2 },
  //     { at: 6, bt: 3 },
  //   ],
};
// module.exports = { RoundRobin };
console.log(RoundRobin(data));
