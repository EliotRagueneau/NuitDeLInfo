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

$("#battery").click(function () {
    goOut();

    $(".main").html("<h2>Warning low battery</h2>");

    goIn();
});

$("#low battery").click(function () {
    goOut();

    $(".main").html("<h2>No more battery</h2>");

    goIn();
});

$("#whathappend").click(function () {
    goOut();

    $(".main").html("<h2>How is the world today</h2>");

    goIn();
});

$("#bodyguard").click(function () {
    goOut();

    $(".main").html("<h2>withney houston</h2>");

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
