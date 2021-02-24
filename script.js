// make all the charts
// there's probably a better way to do this
// with a loop, but i don't know javascript
// future tech coordinator! please fix this
// -amogh

// =====================
// Ethnoracial Identity
// =====================
const acceptedEthnoracial = Highcharts.chart('accepted-ethnoracial', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Ethnoracial Identity Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },

    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedEthnoracial = Highcharts.chart('interviewed-ethnoracial', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Ethnoracial Identity Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedEthnoracial = Highcharts.chart('applied-ethnoracial', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Ethnoracial Identity Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});
// =====================
// Gender Identity
// =====================
const acceptedGender = Highcharts.chart('accepted-gender', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Gender Identity Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 40
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedGender = Highcharts.chart('interviewed-gender', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Gender Identity Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 40
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedGender = Highcharts.chart('applied-gender', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Gender Identity Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 40
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});
// ======
// Major
// ======
const acceptedMajor = Highcharts.chart('accepted-major', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Major Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedMajor = Highcharts.chart('interviewed-major', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Major Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedMajor = Highcharts.chart('applied-major', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Major Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

// ====================
// Classification
// ====================
const acceptedClassification = Highcharts.chart('accepted-classification', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Classification Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 50
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedClassification = Highcharts.chart('interviewed-classification', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Classification Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 50
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedClassification = Highcharts.chart('applied-classification', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Classification Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 50
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

// ====================
// Publicity
// ====================
const acceptedPublicity = Highcharts.chart('accepted-publicity', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Publicity Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 20
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedPublicity = Highcharts.chart('interviewed-publicity', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Publicity Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 20
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedPublicity = Highcharts.chart('applied-publicity', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Publicity Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 20
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});
// ====================
// Honors
// ====================
const acceptedHonors = Highcharts.chart('accepted-honors', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Honors Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedHonors = Highcharts.chart('interviewed-honors', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Honors Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedHonors = Highcharts.chart('applied-honors', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Honors Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});
// ====================
// First-Generation
// ====================
const acceptedFirstgen = Highcharts.chart('accepted-firstgen', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "First Generation Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedFirstgen = Highcharts.chart('interviewed-firstgen', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "First Generation Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedFirstgen = Highcharts.chart('applied-firstgen', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "First Generation Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

// ====================
// Free Response
// ====================
const acceptedFreeResponse = Highcharts.chart('accepted-fr', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Free Response Trends for Accepted Members"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const interviewedFreeResponse = Highcharts.chart('interviewed-fr', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Free Response Trends for Interviewees"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

const appliedFreeResponse = Highcharts.chart('applied-fr', {
    chart: {
        type: 'line',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Free Response Trends for All Applicants"
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        itemMarginTop: 10,
        itemMarginBottom: 100
    },
    yAxis: {
        title: {
            text: "Number of Students"
        }
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     acceptedEthnoracial
// });
