import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { FitFont } from 'fitfont'

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

// Update the <text> element every tick with the current time
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
}
