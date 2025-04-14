document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("heading").textContent = "Welcome to JavaScript Web Page!";
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let paragraph = document.getElementById("paragraph");
    paragraph.classList.toggle("hidden");
});