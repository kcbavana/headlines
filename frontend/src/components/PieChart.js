import React, { Component } from 'react'
import {Pie} from "chart.js";

export default class PieChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
        }
    }
render() {
    return (
        <div>
            <Pie 
                data={{
                    labels: this.state.labels,
                    datasets: this.state.datasets
                }}
                height='50%'
            />
            
        </div>
    )
}

}
//     chartRef = React.createRef();
//     componentDidMount() {
//         const myChartRef = this.chartRef.current.getContext("2d");
        
//         new Chart(myChartRef, {
//             type: "pie",
//             data: {
//                 //Bring in data
//                 datasets: [{
//                     data: [10,20,30],
//                     backgroundColor: ["#329785", "#116153", "#A3DBD1"],
//                     borderWidth: 0
//                 }],
            
//                 labels: [
//                     'support',
//                     'neutral',
//                     'disapprove'
//                 ]
//             },
//             options: {
//                 //Customize chart options
//             }
//         });
    

// }
// render() {
//     return (
//         <div className={classes.graphContainer}>
//             <canvas
//                 id="myChart"
//                 ref={this.chartRef}
//             />
//         </div>
//     )
// }

// // window.onload = function() {
// //     var ctx = document.getElementById("votingChart");
// //     var pieChart = new Chart(ctx, {
// //         type: 'pie',
// //         data: data, 
// //         option: options
// //     });
// // }

// // data = {
// //     datasets: [{
// //         data: [10,20,30],
// //         backgroundColor: ["#329785", "#116153", "#A3DBD1"],
// //         borderWidth: 0
// //     }],

// //     labels: [
// //         'support',
// //         'neutral',
// //         'disapprove'
// //     ]

    

// // };


export default PieChart;