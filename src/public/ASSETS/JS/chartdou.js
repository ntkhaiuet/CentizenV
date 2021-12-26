$('#id_province').change(function() {
  console.log("change");
})

// Biểu Đồ thông kê Nam. Nữ theo %
const data = {
    labels: ['Nam', 'Nữ'],
    datasets: [{
      label: 'Weekly Sales',
      data: [55, 45],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'doughnut',
    data,
    options: {
      plugins: {
        labels: {
          render: (context) => {
            console.log(context);
            // console.log(showData(this));
            const percentage = context.value / showData(this) * 100;
            return percentage.toFixed(1) + '%';
          }
        }
      }
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart-doughnut'),
    config
  );

  function showData() {
    let totalsum = 0;
    let i = 0;
    for(i; i < myChart.config.data.datasets[0].data.length; i++) {
      if(myChart.getDataVisibility(i) === true) {
        totalsum += myChart.config.data.datasets[0].data[i];
      }
    };

    return totalsum;
  };
