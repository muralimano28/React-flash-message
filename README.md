## React-flash-message
React.js code to display flash message.. 

## Description
Flashmessage intakes 6 props.
  1. messageHeader -> this text is shown in bold Eg: use funny expressions
  2. messageBody -> this text is shown in normal font and this is the message you want to display to users
  3. type -> There are 4 types of flash messages
    * Danger
    * Success
    * Warning
    * Info
    * **Please note that starting letter is CAPS for all type**
  4. autoDismiss -> If you want the message to dismiss by itself make this prop as true and give timeout value in milliseconds.
  5. timeout -> set time to dismiss the flash message (in milli seconds)
  6. hidden -> If you want to hide make it true. When you needed flash message change it to false.

## Usage

**In your anything.jsx file**

```
var FlashMessage = require("./FlashMessage.jsx")

React.render( <FlashMessage
                messageHeader = "Oops!"
                messageBody = "Something went wrong!"
                type =  "Danger"
                autoDismiss = {true}
                timeout = {3000}
                hidden = {false}
              /> , document.getElementById('flash')
            );
            
```
**In your anything.html file**

1. Convert FlashMessage.scss to css and include it in your html
2. Create a div element with id as flash in your html

```
<div id="flash" ></div>
```
**Feel free to play with my code**


 

