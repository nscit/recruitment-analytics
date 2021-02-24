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
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Ethnoracial Identity (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedEthnoracial = Highcharts.chart('interviewed-ethnoracial', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Ethnoracial Identity (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedEthnoracial = Highcharts.chart('applied-ethnoracial', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-ethnoracial-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Ethnoracial Identity (Applied)"
    },
    legend: {
        enabled: true
    }
});
// =====================
// Gender Identity
// =====================
const acceptedGender = Highcharts.chart('accepted-gender', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Gender Identity (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedGender = Highcharts.chart('interviewed-gender', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Gender Identity (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedGender = Highcharts.chart('applied-gender', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-gender-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Gender Identity (Applied)"
    },
    legend: {
        enabled: true
    }
});
// ======
// Major
// ======
const acceptedMajor = Highcharts.chart('accepted-major', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Major (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedMajor = Highcharts.chart('interviewed-major', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Major (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedMajor = Highcharts.chart('applied-major', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-major-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Major (Applied)"
    },
    legend: {
        enabled: true
    }
});

// ====================
// Classification
// ====================
const acceptedClassification = Highcharts.chart('accepted-classification', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Classification (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedClassification = Highcharts.chart('interviewed-classification', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Classification (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedClassification = Highcharts.chart('applied-classification', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-classification-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Classification (Applied)"
    },
    legend: {
        enabled: true
    }
});

// ====================
// Publicity
// ====================
const acceptedPublicity = Highcharts.chart('accepted-publicity', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Publicity (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedPublicity = Highcharts.chart('interviewed-publicity', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Publicity (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedPublicity = Highcharts.chart('applied-publicity', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-publicity-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Publicity (Applied)"
    },
    legend: {
        enabled: true
    }
});
// ====================
// Honors
// ====================
const acceptedHonors = Highcharts.chart('accepted-honors', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Honors (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedHonors = Highcharts.chart('interviewed-honors', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Honors (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedHonors = Highcharts.chart('applied-honors', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-honors-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Honors (Applied)"
    },
    legend: {
        enabled: true
    }
});
// ====================
// First-Generation
// ====================
const acceptedFirstgen = Highcharts.chart('accepted-firstgen', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 First Generation (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedFirstgen = Highcharts.chart('interviewed-firstgen', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 First Generation (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedFirstgen = Highcharts.chart('applied-firstgen', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-first-gen-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 First Generation (Applied)"
    },
    legend: {
        enabled: true
    }
});

// ====================
// Free Response
// ====================
const acceptedFreeResponse = Highcharts.chart('accepted-fr', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Accepted-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Free Response (Accepted)"
    },
    legend: {
        enabled: true
    }
});

const interviewedFreeResponse = Highcharts.chart('interviewed-fr', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Interviewed-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Free Response (Interviewed)"
    },
    legend: {
        enabled: true
    }
});

const appliedFreeResponse = Highcharts.chart('applied-fr', {
    chart: {
        type: 'area',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@2.0.0/Applied-free-response-v2.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: true
    },
    title: {
        text: "Spring 2021 Free Response (Applied)"
    },
    legend: {
        enabled: true
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     acceptedEthnoracial
// });
