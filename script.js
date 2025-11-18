// Button click event
document.getElementById("colorBtn").addEventListener("click", () => {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#fff3cd", "#e2e2e2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
});
