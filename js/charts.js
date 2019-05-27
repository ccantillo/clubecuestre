window.onload = function () {

  var chart1 = new CanvasJS.Chart("usersChart", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "reporte uso de los establos"
    },
    axisY: {
      includeZero: false
    },
    data: [{
      type: "line",
      color: "rgba(244,67,54,.7)",
      dataPoints: [
        { y: 450 },
        { y: 414 },
        { y: 520 },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        { y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
        { y: 500 },
        { y: 480 },
        { y: 510 },
        { y: 510 },
        { y: 525 },
        { y: 560 },
        { y: 505 },
        { y: 480 },
        { y: 550 },
        { y: 590 },
        { y: 605, indexLabel: "highest", markerColor: "red", markerType: "triangle" },
        { y: 570 },
        { y: 520 },
        { y: 490 },
        { y: 455 },
        { y: 485 },
        { y: 510 },
        { y: 550 },
        { y: 590 }
      ]
    }]
  });


  var chart2 = new CanvasJS.Chart("revenueChart", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "reporte Financiero mensual"
    },
    axisY: {
      includeZero: false
    },
    data: [{
      type: "line",
      color: "rgba(244,67,54,.7)",
      dataPoints: [
        { y: 450 },
        { y: 414 },
        { y: 520 },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        { y: 410, indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
        { y: 500 },
        { y: 480 },
        { y: 510 }      
      ]
    }]
  });

  setTimeout(() => {
    chart1.render();
    chart2.render();
  }, 1000);

}
