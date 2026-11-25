function saveName() {
    const name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter your name 😊");
        return;
    }

    localStorage.setItem("questaStudentName", name);

    document.getElementById("namePopup").style.display = "none";

    console.log("Welcome, " + name);
}

window.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("questaStudentName");

    if (savedName) {
        document.getElementById("namePopup").style.display = "none";
    }

});