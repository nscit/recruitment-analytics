const sp21Ethnoracial = Highcharts.chart('sp21-ethnoracial', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-ethnoracial.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Ethnoracial Identity Breakdown"
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
});

const sp21Gender = Highcharts.chart('sp21-gender', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-gender.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Gender Identity Breakdown"
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
});

const sp21Major = Highcharts.chart('sp21-major', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-major.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Major Breakdown"
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
});

const sp21Classification = Highcharts.chart('sp21-classification', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-classification.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Classification Breakdown"
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
});

const sp21Publicity = Highcharts.chart('sp21-publicity', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-publicity.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Publicity Breakdown"
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
});

const sp21Honors = Highcharts.chart('sp21-honors', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-publicity.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Honors Breakdown"
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
});

const sp21Firstgen = Highcharts.chart('sp21-firstgen', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-first-gen.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "First Generation Breakdown"
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
});

const sp21FreeResponse = Highcharts.chart('sp21-fr', {
    chart: {
        type: 'bar',
    },
    data: {
        csvURL: "https://cdn.jsdelivr.net/gh/UT-Natural-Sciences-Council/database@3.0.0/sp21-portal-free-response.csv",
        dataRefreshRate: 1,
        enablePolling: true,
        switchRowsAndColumns: false
    },
    title: {
        text: "Free Response Breakdown"
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
});