$(document).ready(function() {
    $("#navbar").click(function() {
        $("#dropdown").slideToggle("slow", function() {
            // animation complete
        });
    })


    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.maintainAspectRatio = false;
    Chart.defaults.global.responsive = true;

    var ctx = $('#myChart');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ["JavaScript", "Python", "Swift", "MEAN", "SQL", "Ping Pong"],
            datasets: [{
                // label: "Strengths",
                data: [3,4,3,2,2,1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(140, 200, 190, 0.5)',
                    'rgba(230, 190, 80, 0.5)',
                    'rgba(130, 190, 84, 0.5)',
                    'rgba(200, 160, 110, 0.5)',
                    'rgba(200, 100, 100, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(140, 200, 190, 0.5)',
                    'rgba(230, 190, 80, 0.5)',
                    'rgba(130, 190, 84, 0.5)',
                    'rgba(200, 160, 110, 0.5)',
                    'rgba(200, 100, 100, 0.5)',
                ],
                borderWidth: 1
            }]
        },

        // Configuration options go here
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                       display:false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display:false
                    },
                    ticks: {
                        min:0,
                        max: 4,
                        stepSize: 1,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 0:
                                    return 'Novice'
                                case 1:
                                    return 'Dabbler';
                                case 2:
                                    return 'Experienced';
                                case 3:
                                    return 'Warrior';
                                case 4:
                                    return 'Ninja';
                            }
                        }
                    }
                }]
            }
        }
    });

})