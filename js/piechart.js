
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Known',     50],
          ['Not known',      50]
        ]);

        var options = {
          title: 'Html & css',
          is3D: false,
        };
//second piechart
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Known', 60],
          ['Not known', 40]
        ]);

        var options = {
          title: 'C#',
          is3D: false,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d2'));
        chart.draw(data, options);
      }
      //third piechart


            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart3);
            function drawChart3() {
              var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Known',     2],
                ['Not known',      8]
              ]);

              var options = {
                title: 'PHP & SQL',
                is3D: false,
              };

              var chart = new google.visualization.PieChart(document.getElementById('piechart_3d3'));
              chart.draw(data, options);
            }

            //fourth piechart


                  google.charts.load("current", {packages:["corechart"]});
                  google.charts.setOnLoadCallback(drawChart4);
                  function drawChart4() {
                    var data = google.visualization.arrayToDataTable([
                      ['Task', 'Hours per Day'],
                      ['Known',     5],
                      ['Not known',      6]
                    ]);

                    var options = {
                      title: 'GIT',
                      is3D: false,
                    };

                    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d4'));
                    chart.draw(data, options);
                  }
                  window.addEventListener("resize", resizeScreen);
