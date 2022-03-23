/**
 * @file trends.js
 * @author Amogh Dambal
 * contact: amoghdambal@utexas.edu
 * date: 2021-02-24
 * 
 * JavaScript code to generate dynamic, interactive trend charts for all
 * available recruitment data for all cycles for the UT
 * Natural Sciences Council. 
 * Currently data is only available from Spring 2019-Spring 2021. 
 */

let semesterCharts = [];

const evaluationCategories = [
    "Accepted",
    "Interviewed",
    "Applied"
];

// lookup table that controls the titles of the graphs
const evalCategoryTitleLookupTable = {
    "Accepted": "Accepted Members",
    "Interviewed": "Interviewees",
    "Applied": "All Applicants"
};

// demographic groups evaluated as of Spring 2021
const demographicGroups = [
    "ethnoracial",
    "gender",
    "major",
    "classification",
    "publicity",
    "honors",
    "first-gen",
    "free-response",
];

// lookup table that controls the bottom margins
const demographicGroupBottomMarginLookupTable = {
    "ethnoracial": 10,
    "gender": 40,
    "major": 10,
    "classification": 50,
    "publicity": 20,
    "honors": 100,
    "first-gen": 100,
    "free-response": 100,
}

// lookup table to translate a demographic group to a graph title
const trendTitleLookupTable = {
    "ethnoracial": "Ethnoracial Identity",
    "gender": "Gender",
    "major": "Major",
    "classification": "Classification",
    "publicity": "Publicity",
    "honors": "Honors",
    "first-gen": "First Generation",
    "free-response": "Optional Application Question"
};

// these shouldn't change, but if the CSV file request is failing, one of
// these config settings are likely the issue
const trendDatabaseVersion = "2.0.0";
const trendDatabaseURL = "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@" + trendDatabaseVersion + "/";
const trendDatabaseFileType = ".csv";

for (var i = 0; i < evaluationCategories.length; i++) {
    for (var j = 0; j < demographicGroups.length; j++) {
        let chartID = evaluationCategories[i].toLowerCase() + "-" + demographicGroups[j];
        // console.log(chartID);
        semesterCharts.push(Highcharts.chart(chartID, {
            chart: {
                type: 'line'
            },
            data: {
                // add the v2 to mark version 2 of the files in the NSC database
                csvURL: trendDatabaseURL + evaluationCategories[i] + "-" + demographicGroups[j] + "-v2" + trendDatabaseFileType,
                dataRefreshRate: 1,
                enablePolling: true,
                switchRowsAndColumns: true
            },
            title: {
                text: trendTitleLookupTable[demographicGroups[j]] + " Trends for " + evalCategoryTitleLookupTable[evaluationCategories[i]]
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                itemMarginTop: 10,
                itemMarginBottom: demographicGroupBottomMarginLookupTable[demographicGroups[j]]
            },
            yAxis: {
                title: {
                    text: "Number of Students"
                }
            }
        }));
    }
}