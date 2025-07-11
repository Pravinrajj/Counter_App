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
