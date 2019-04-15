import React from "react"
import Helmet from "react-helmet"
import "./App.scss"
import $ from "jquery"

const { Modernizr } = window // I use cdn in public html file

const makePlaceholders = () => {
    const $inputs = $("input[type=text],input[type=email],input[type=tel],input[type=url]")
    $inputs.each(
        () => {
            const $this = $(this)
            this.placeholderVal = $this.attr("placeholder")
            $this.val(this.placeholderVal)
        }
    )
    .bind("focus", () => {
        const $this = $(this)
        const val = $.trim($this.val())
        if (val === this.placeholderVal || val === "") {
            $this.val("")
        }
    })
    .bind("blur", () => {
        const $this = $(this)
        const val = $.trim($this.val())
        if (val === this.placeholderVal || val === "") {
            $this.val(this.placeholderVal)
        }
    })
}

$(document).ready(() => {
    if (!Modernizr.input.placeholder) {
        makePlaceholders() // callback when placeholder is not supported
    }                      // but this probably won't be needed as most modern browsers now support it
})

// NOTE: PLACEHOLDER SHOULD NOT BE USED AS AN ALTERNATIVE TO A LABEL (noted by W3C)

const App = () => (
  <div>
    <Helmet>
      <title>Using the placeholder attribute</title>
    </Helmet>
    <div>
      <h1>Using the placeholder Attribute</h1>
      <p>The <code>placeholder</code> attribute displays placeholder text in an input control that
      suggests to the user the kind of input the control is looking for. The
      placeholder text displays when the control does not have focus and has no
      user-supplied input. When the control has focus, the placeholder text
      disappears. </p>
       <p>The control in this form uses the placeholder attribute to specify
       placeholder text, if the browser supports it. Otherwise, a custom javascript function is used to accomplish the same
       effect.</p>
      <form method="get" action="">
      <p><label htmlFor="Text1">Field 1: </label><input name="Text1" type="text" id="Text1" placeholder="Placeholder Text 1"/></p>
      <p><label htmlFor="Text2">Field 2: </label><input name="Text2" type="email" id="Text2" placeholder="Placeholder Text 2"/></p>
      <p><label htmlFor="Text3">Field 3: </label><input name="Text3" type="url" id="Text3" placeholder="Placeholder Text 3"/></p>
      </form>
    </div>
  </div>
)

export default App
