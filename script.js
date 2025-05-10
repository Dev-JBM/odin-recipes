const toggle = document.getElementById("toggle");

function update(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}

toggle.addEventListener("change", () =>
  toggle.checked ? update("#222831", "white") : update("#FBEAEB", "black")
);
