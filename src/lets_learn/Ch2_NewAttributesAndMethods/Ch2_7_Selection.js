import React from "react"
import Helmet from "react-helmet"
import $ from "jquery"

import "./App.scss"

function SelectSomeText () {
    var input = document.getElementById ("Textbox");
        input.selectionStart = parseInt(document.getElementById('Start').value);
        input.selectionEnd = parseInt(document.getElementById('End').value);
        input.focus() // important for seeing the selection result
}
function SelectSomeText2 () {
    var input = document.getElementById ("Textbox");
    var start = parseInt(document.getElementById('Start').value);
    var end = parseInt(document.getElementById('End').value);
      input.setSelectionRange(start, end);
      input.focus() // important for seeing the selection result
}
function ShowSelection() {
    var input = document.getElementById ("Textbox");
    alert("Start: " + input.selectionStart + " End: " + input.selectionEnd );
}

const App = () => (
  <div>
    <Helmet>
      <title>Using the text selection APIs</title>
    </Helmet>
    <div>
      <h1>Using the Text Selection APIs</h1>
    	<p>This example shows how to use the Text Selection APIs to select ranges of
    	text in &lt;input&gt; and &lt;textarea&gt; fields. </p>
        <p><input type="text" id="Textbox" size="40" value="The text selection appears here"
          onChange={()=>{
            $()
          }}/></p>
    	<p>Use the two fields below to enter the start and end index of the text to
    	select. Then try using the buttons below to change and view the selection
    	offsets.</p>
    	<p>Selection Start: <input type="text" id="Start" size="3" defaultValue="5" /> Selection End:
    	<input type="text" id="End" size="3" defaultValue="15" /></p>
        <p><button onClick={SelectSomeText}>Select Text Using Properties</button></p>
        <p><button onClick={SelectSomeText2}>Select Text Using setSelectionRange()</button></p>
        <p><button onClick={ShowSelection}>Display Current Selection offsets</button></p>
    </div>
  </div>
)

export default App
