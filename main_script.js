first_click = true;


$("#life").click(function () {
    goOut();

    $(".main").html("<h2>Bite</h2>");

    goIn();
});

$("#weather").click(function () {
    goOut();

    $(".main").html("<h2>Daily weather</h2>");

    goIn();
});

function goOut() {
    if (first_click) {
        first_click = false
    } else {
        $(".main").animate({
            width: "300vw",
        }, "slow", "swing");
    }

}

function goIn() {
    $(".main").animate({
        width: "100vw",
    }, "slow", "swing");
}
