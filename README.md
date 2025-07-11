# Counter_App
## Date:
## Objective:
To build a live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms.

## Tasks:

#### 1. Create the HTML Structure:
Add a ```<textarea>``` for user input.

Place a ```<div> or <p>``` below it to show the live character count.

Include a label or heading like “Write your message”.

#### 2. Style with CSS:
Center the layout using margin or flexbox.

Style the textarea with border, padding, and font size.

Style the counter to be bold and place it neatly below the input area.

#### 3. Add JavaScript Functionality:
Use addEventListener("input", ...) on the textarea.

Inside the function, get the length of the value (.value.length).

Update the counter element with this number in real time.

#### 4. Enhancements:
Set a maximum character limit (e.g., 100) and show remaining characters.

Change the text color if the user exceeds the limit.

Add emojis or icons using Unicode for visual feedback.
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Live Character Counter</title>
</head>
<body>
    <div class="container">
        <h2>Write your message</h2>
        <textarea id="message" rows="6" maxlength="200" placeholder="Type..."></textarea>
        <p><span id="counter">0</span> / 100 characters</p>
        <p id="msg" style="color: red; font-weight: 700;"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background: #d9d6d6;
}

.container {
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    align-self: center;
    color: rgb(233, 239, 239);
}

textarea {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    resize: none;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#counter {
    margin-top: 10px;
    font-weight: bold;
    color: rgb(233, 239, 239);
}
```
## JS Code:
```js
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const maxLength = 100;

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    counter.textContent = `${length}`;

    if (length > maxLength) {
        counter.style.color = "red";
        msg.textContent = " ⚠️ Oops Limit exceeded!";
    } else {
        counter.style.color = "white";
    }
});

```
## Output:
<img width="611" height="491" alt="image" src="https://github.com/user-attachments/assets/14567b7d-14ff-4110-8e56-527921eaf54e" />

## Result:
A live character counter using JavaScript that dynamically displays the number of characters entered into a textarea — similar to what you see in Twitter or feedback forms is built successfully.
