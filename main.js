// Chart options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#192228",
    foreColor: "white"
  },
  series: [{
    name: "Population",
    data: [
      1376048940, 
      1311050530, 
      325843650, 
      257563820, 
      207847530, 
      188924870, 
      182201960, 
      160995640, 
      143456920, 
      126573480
    ]
  }],
  xaxis: {
    categories: [
      "China",
      "India",
      "United States",
      "Indonesia",
      "Brazil",
      "Pakistan",
      "Nigeria",
      "Bangladesh",
      "Russia",
      "Japan"
    ]
  },
  fill: {
    colors: ["#a0ecff"] // bar-color
  },
  dataLabels: {
    enabled: false
  },

  title: {
    text: "Top 10 Most Populous Countries",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
      color: "white"
    }
  }
};

// Initialize chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Change the orientation of the chart to horizontal
document.getElementById("change").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);