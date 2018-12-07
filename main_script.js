first_click = true;


$("#life").click(function () {
    goOut();

    $(".main").html('<div style="width: 30%; height : 500px%;"><canvas id="bar-chart" ></canvas></div>');
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            xAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes :[{
                ticks: {
                    display: false
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        },
                  title: {
            // display: true,
            // text: 'Predicted world population (millions) in 2050'
          }
        }
    });
    goIn();
});

$("#weather").click(function () {
    goOut();
    $(".main").html('<div style="width: 30%; height : 500px%;">  <canvas id="pie-chart" width="800" height="450"></canvas>   </div>');
    // $(".main").html("<h2>Daily weather</h2>");
    new Chart(document.getElementById("pie-chart"), {
        type: 'pie',
        data: {
          labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
          datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }]
        },
        options: {
            legend: { display: false },
          title: {
            // display: true,
            text: 'Predicted world population (millions) in 2050'
          }
        }
        
    });
    
    
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
