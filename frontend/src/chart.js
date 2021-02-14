window.onload = function() {
    var ctx = document.getElementById("votingChart");
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: data, 
        option: options
    });
}

data = {
    datasets: [{
        data: [10,20,30],
        backgroundColor: ["#329785", "#116153", "#A3DBD1"],
        borderWidth: 0
    }],

    labels: [
        'support',
        'neutral',
        'disapprove'
    ]

    

};

options = {
    title: {
        display:true,
        text: '102 votes'
    }
};

