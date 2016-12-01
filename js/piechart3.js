
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Known',     2],
          ['Not known',      8]
        ]);

        var options = {
          title: 'PHP & SQL',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
        chart.draw(data, options);
      }
