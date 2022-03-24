/**
 * @file sp22.js
 * @author Amogh Dambal
 * date: 2021-02-24
 * contact: amoghdambal@utexas.edu
 * 
 * JavaScript code to render demographic breakdown charts of the Spring 2022
 * recruitment cycle for the UT Natural Sciences Council.
 */
let charts = [];

// demographic groups evaluated as of Spring 2022
const groups = [
    "ethnoracial",
    "gender",
    "major",
    "classification",
    "publicity",
    "honors",
    "first-gen",
    "free-response"
];

// lookup table to translate a demographic group to a graph title
const titleLookupTable = {
    "ethnoracial": "Ethnoracial Identity",
    "gender": "Gender",
    "major": "Major",
    "classification": "Classification",
    "publicity": "Publicity",
    "honors": "Honors",
    "first-gen": "First Generation",
    "free-response": "Optional Application Question"
};

// change these depending on semester and database configurations
const semester = "sp22";
const databaseVersion = "4.0.0";
const databaseURL = "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@" + databaseVersion + "/sp22-portal-";
const databaseFileType = ".csv";

// initialize all the charts 
for (var i = 0; i < groups.length; i++) {
    let name = semester + "-" + groups[i];

    // construct a Highcharts bar chart object
    charts.push(Highcharts.chart(name, {
        chart: {
            type: 'bar'
        },
        data: {
            csvURL: databaseURL + groups[i] + databaseFileType,
            dataRefreshRate: 1,
            enablePolling: true,
            switchRowsAndColumns: false
        },
        title: {
            text: titleLookupTable[groups[i]] + " Breakdown"
        },
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            itemMarginTop: 10,
            itemMarginBottom: 75
        },
        yAxis: {
            title: {
                text: "Number of Students"
            }
        }
    }));
}