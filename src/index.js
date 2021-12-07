import { $, $2, jobs } from './Utils';
import { FCFS } from './FCFS';
import { RoundRobin } from './RoundRobin';
import { SRTF } from './Srtf';
import { SJF } from './Sjf';

function toogleTqBox() {
	if (!this.checked && this.value === 'robin') {
		$('#tq-toog').style.display = 'none';
		$('#tq-toog').style.opacity = 0;
	}
	if (this.checked && this.value === 'robin') {
		$('#tq-toog').style.opacity = 1;
		$('#tq-toog').style.display = 'block';
	}
}
function authenticate(col, bool = false) {
	let { max, value, min } = this;
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
	if (/\binput/.test(ele)) {
		$('#input__pack').style.display = 'block';
	}
	let pack = $(ele);
	pack.style.display = 'block';
	pack.innerHTML = callback(data, artist, data2);
}
function artistaProcess({ pid, time, start, b }, end) {
	let color = 'green',
		text = 'p' + (pid + 1),
		cut = (time / end) * 100;
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
	let [...inputBoxes] = $2('.item__box .i');
	inputBoxes.forEach((e) => (e.value = randomIntFromRange(e.min, e.max)));
}

function collectdata(dataPack) {
	let object = {
		queue: [],
		wasteTime: 0,
		tq: undefined,
		story: [],
		tracker: {},
		read: [],
	};
	let read = object.read;
	for (let i = 0; i < dataPack.length; i += 2) {
		let at = dataPack[i].value,
			bt = dataPack[i + 1].value;
		if ((!at && at !== 0) || !bt || isNaN(at)) throw new Error('values are incomplete');
		at = Math.round(at);
		bt = Math.round(bt);
		read.push({ at, bt });
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
                    <div class="item__box u-center" style="animation-delay:${(number * 2) / 10}s;">
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
function bigContainer({ story, end, title, queue2 }, artist = null, data2) {
	let tableData = story
		.map((e) => {
			if (e.b === 0) {
				e.ct = e.start + e.time;
				return e;
			}
		})
		.filter((e) => e != undefined);
	let { read } = data2;
	for (let { pid, ct } of tableData) {
		read[pid].ct = ct;
		read[pid].pid = pid;
		read[pid].tat = ct - read[pid].at;
		read[pid].wt = read[pid].tat - read[pid].bt;
	}
	let atat = read.reduce((a, { tat }) => a + tat, 0) / read.length,
		awt = read.reduce((a, { wt }) => a + wt, 0) / read.length;
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
function addTocontainer(n, callback, c = undefined) {
	let pack = '';
	if (!isNaN(n)) {
		for (let i = 0; i < n; i++) {
			pack += callback(i + 1);
		}
	} else {
		for (let el of n) {
			pack += callback(el, c);
		}
	}
	return pack;
}
function artistaTable({ pid, at, bt, ct, tat, wt }) {
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
	BuildContainer(el, [e], artistaCaution, addTocontainer);
	setTimeout(() => {
		$(el).style.display = 'none';
	}, 5000);
}
let job = jobs[0];
let data;
let dataSJF;
let dataRR;
let dataSRTF;
let dataFCFS;

window.onload = () => {
	let checkBoxes = $2('.toog-1'),
		[...specs] = $2('.i'),
		form = $('#form1'),
		form2 = $('#exec'),
		randomInserter = $('#random');
	let [...boxes] = checkBoxes;

	boxes.forEach((e) => e.addEventListener('click', toogleTqBox));

	specs.forEach((e) =>
		e.addEventListener('input', function () {
			authenticate.bind(this, 'var(--cp1)')();
		}),
	);
	randomInserter.addEventListener('click', autoInsertAtBt);

	form.onsubmit = function (e) {
		e.preventDefault();
		if (!specs[0].value) {
			handleError('#caution', 'error:specify how many processes you want to continue');
			return;
		}
		BuildContainer('#inputz', specs[0].value, artistaInputs, addTocontainer);
		$2('.j').forEach((e) =>
			e.addEventListener('input', function () {
				authenticate.bind(this, 'var(--cp4)')();
			}),
		);
	};
	form2.onclick = function (e) {
		e.preventDefault();
		try {
			data = null;
			data = collectdata($2('.j'));
		} catch (e) {
			$2('.j').forEach((e) => authenticate.bind(e, null, e.value === '' || isNaN(e.value))());
			handleError('#caution', e);

			return;
		}
		dataFCFS = JSON.parse(JSON.stringify(data));
		dataRR = JSON.parse(JSON.stringify({ ...data, tq: Number(specs[1].value) }));
		dataSJF = JSON.parse(JSON.stringify(data));
		dataSRTF = JSON.parse(JSON.stringify(data));
		if (data) {
			if (boxes.every(({ checked }) => !checked)) {
				handleError('#caution', 'error:please specify an algorithm from the options above uu');
				return;
			}
			if (boxes[0].checked) {
				try {
					BuildContainer('#test3', RoundRobin(dataRR), null, bigContainer, data);
				} catch (e) {
					alert('hi');
					console.log(e);
					handleError('#caution', e);
				}
			}
			boxes[3].checked && BuildContainer('#test', SRTF(dataSRTF), null, bigContainer, data);
			boxes[2].checked && BuildContainer('#test1', SJF(dataSJF), null, bigContainer, data);
			boxes[1].checked && BuildContainer('#test2', FCFS(dataFCFS), null, bigContainer, data);
		}
	};
};
