import clock from "clock";
import * as document from "document";
import { me as appbit } from "appbit";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { FitFont } from 'fitfont';
import { today as t } from "user-activity";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
// const myLabel = document.getElementById("myLabel");

// Get fitfont label
const timeLabel = new FitFont({ 
  id:'timeLabel',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder

  // Optional
  halign: 'start',            // horizontal alignment : start / middle / end
  valign: 'baseline',         // vertical alignment   : baseline / top / middle / bottom
  letterspacing: 0            // letterspacing...
})

const basicCommand = new FitFont({ 
  id:'basicCommand',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

basicCommand.text = "A> BASIC.COM";

const basicMessage = new FitFont({ 
  id:'basicMessage',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

basicMessage.text = "Mallard-80 BASIC with Jetsam";

const bytesFree = new FitFont({ 
  id:'bytesFree',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

bytesFree.text = "31042 free bytes";

const getTimeMethod = new FitFont({ 
  id:'getTimeMethod',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

getTimeMethod.text = "CALL get.time(hour%, min%)";


const printTime = new FitFont({ 
  id:'printTime',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

printTime.text = `PRINT USING "##:##"`;

const getDateMethod = new FitFont({ 
  id:'getDateMethod',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

getDateMethod.text = "CALL get.time(dd%,mm%,yyyy%)";

const printDate = new FitFont({ 
  id:'printDate',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

printDate.text = `PRINT USING "##/##/####"`;

const dateLabel = new FitFont({ 
  id:'dateLabel',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})

const defFoot = new FitFont({ 
  id:'defFoot',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})
defFoot.text = `DEF FOOT0=HIMEM+1`;

const printFoot = new FitFont({ 
  id:'printFoot',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})
printFoot.text = `PRINT FOOT0(now%)`;


const footstepsNum = new FitFont({ 
  id:'footstepsNum',               // id of your symbol in the index.gui, you can also give an element object e.g. id: document.getElementById('foo')
  font:'Roboto_Mono_16', // name of the generated font folder
})


// Update the FitFont elements every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  timeLabel.text = `${hours}:${mins}`;

  const dd = util.zeroPad(today.getDay());
  const mm = util.zeroPad(today.getMonth());
  const yyyy = today.getFullYear();
  dateLabel.text = `${dd}/${mm}/${yyyy}`;

  if (appbit.permissions.granted("access_activity")) {
    footstepsNum.text = `${t.adjusted.steps}`;
  } else {
    footstepsNum.text = "I can't :(";
  }


}
