import Plotly from 'plotly.js-basic-dist';

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let initialStartDate = new Date('2024-02-01');
let tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
let durations = [5, 3, 6, 4, 5]; // Durations in days
let endDate = initialStartDate;

let traceData = tasks.map((task, index) => {
    let startDate = new Date(endDate.getTime());
    endDate = addDays(startDate, durations[index]);
    return {
        x: [startDate, endDate],
        y: [task, task],
        mode: 'lines',
        line: { width: 20, color: index % 2 === 0 ? 'rgba(55, 128, 191, 0.6)' : 'rgba(128, 0, 128, 0.6)' },
        name: `Task ${index + 1}`,
        hoverinfo: 'skip'
    };
});

let layout = {
    title: 'Gantt Chart with Rectangles',
    xaxis: {
        type: 'date'
    },
    yaxis: {
        automargin: true,
        range: [-1, tasks.length]
    },
    height: 300,
    showlegend: false
};

Plotly.newPlot('ganttChart', traceData, layout);