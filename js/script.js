window.onload = function () {
  // Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");
  // Create a new Chart object
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  document.getElementById("chart-tab").addEventListener("click", function () {
    // Capture income values
    var januaryIncome = document.getElementById("january-income").value;
    var februaryIncome = document.getElementById("february-income").value;
    var marchIncome = document.getElementById("march-income").value;
    var aprilIncome = document.getElementById("april-income").value;
    var mayIncome = document.getElementById("may-income").value;
    var juneIncome = document.getElementById("june-income").value;
    var julyIncome = document.getElementById("july-income").value;
    var augustIncome = document.getElementById("august-income").value;
    var septemberIncome = document.getElementById("september-income").value;
    var octoberIncome = document.getElementById("october-income").value;
    var novemberIncome = document.getElementById("november-income").value;
    var decemberIncome = document.getElementById("december-income").value;

    // Capture expense values
    var januaryExpenses = document.getElementById("january-expenses").value;
    var februaryExpenses = document.getElementById("february-expenses").value;
    var marchExpenses = document.getElementById("march-expenses").value;
    var aprilExpenses = document.getElementById("april-expenses").value;
    var mayExpenses = document.getElementById("may-expenses").value;
    var juneExpenses = document.getElementById("june-expenses").value;
    var julyExpenses = document.getElementById("july-expenses").value;
    var augustExpenses = document.getElementById("august-expenses").value;
    var septemberExpenses = document.getElementById("september-expenses").value;
    var octoberExpenses = document.getElementById("october-expenses").value;
    var novemberExpenses = document.getElementById("november-expenses").value;
    var decemberExpenses = document.getElementById("december-expenses").value;

    // Create arrays of income and expenses
    var incomeData = [
      januaryIncome,
      februaryIncome,
      marchIncome,
      aprilIncome,
      mayIncome,
      juneIncome,
      julyIncome,
      augustIncome,
      septemberIncome,
      octoberIncome,
      novemberIncome,
      decemberIncome,
    ].map(Number);
    var expensesData = [
      januaryExpenses,
      februaryExpenses,
      marchExpenses,
      aprilExpenses,
      mayExpenses,
      juneExpenses,
      julyExpenses,
      augustExpenses,
      septemberExpenses,
      octoberExpenses,
      novemberExpenses,
      decemberExpenses,
    ].map(Number);

    // Update the datasets in the chart
    myChart.data.datasets[0].data = incomeData;
    myChart.data.datasets[1].data = expensesData;

    // Update the chart to reflect the new data
    myChart.update();
  });
};
