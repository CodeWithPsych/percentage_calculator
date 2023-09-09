function cal(event) {
    event.preventDefault();
    let std_board = document.querySelector("#Board1").value.toLowerCase();

    if (std_board === "yes") {
        document.querySelector(".additional_info").style.display = "block";

        let std_name = document.querySelector("#n1").value;
        let std_class = document.querySelector("#c1").value;
        let std_tm = parseInt(document.querySelector("#tm1").value);
        let std_om = parseInt(document.querySelector("#om1").value);

        let result = (std_om / std_tm) * 100;
        document.querySelector("#result").innerHTML = `Dear ${std_name}, you have got ${result.toFixed(2)}%<br>marks in class ${std_class}`;
        document.querySelector("#result").style.display = "block";
    } else {
        document.querySelector(".additional_info").style.display = "none";
        document.querySelector("#result").style.display = "block";
        document.querySelector("#result").innerHTML = "Sorry, the calculator is only <br> for Board Students";
    }
}