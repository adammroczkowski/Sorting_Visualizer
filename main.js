const btn = document.querySelector(".mergeSort");
const btn1 = document.querySelector(".bubbleSort");
const btn2 = document.querySelector(".selectionSort");
const btn3 = document.querySelector(".insertionSort");
const btn4 = document.querySelector(".quickSort");

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
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

function addData(data) {
  for (let i = 1; i <= 10; i++) {
    myChart.data.labels.push(i);
    myChart.data.datasets.forEach((dataset) => {
      let value = Math.floor(Math.random() * data);
      dataset.data.push(value);
    });
  }

  myChart.update();
}

addData(100);

console.log(myChart.data.datasets[0].data);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

// BUBBLE SORT
const bubbleSort = async (reference) => {
  const dataArray = myChart.data.datasets[0].data;
  const meta = myChart.getDatasetMeta(0);
  const colors = myChart.data.datasets[0].backgroundColor;
  const defaltColor = "rgb(255, 99, 132)";
  let tmp;

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      colors[j] = "#991fc4";
      myChart.data.datasets[0].backgroundColor = colors;

      myChart.update();
      await sleep(500);

      if (dataArray[j] > dataArray[j + 1]) {
        tmp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = tmp;

        tmp = meta.data[j];
        meta.data[j] = meta.data[j + 1];
        meta.data[j + 1] = tmp;

        colors[j + 1] = "#991fc4";
      }

      colors[j] = defaltColor;
      myChart.data.datasets[0].backgroundColor = colors;
    }
    colors[dataArray.length - i - 1] = "#7cc746";
    myChart.data.datasets[0].backgroundColor = colors;
    myChart.update();
  }
};

// MERGE SORT
const mergeSort = async (reference) => {
  // let chart = reference.chartInstance;
  const dataArray = myChart.data.datasets[0].data;
  const meta = myChart.getDatasetMeta(0);
  const colors = myChart.data.datasets[0].backgroundColor;
  const defaltColor = "rgb(255, 99, 132)";
  let tmp;

  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      colors[j] = "#991fc4";
      myChart.data.datasets[0].backgroundColor = colors;

      myChart.update();
      await sleep(500);

      if (dataArray[j] > dataArray[j + 1]) {
        tmp = dataArray[j];
        dataArray[j] = dataArray[j + 1];
        dataArray[j + 1] = tmp;

        tmp = meta.data[j];
        meta.data[j] = meta.data[j + 1];
        meta.data[j + 1] = tmp;

        colors[j + 1] = "#991fc4";
      }

      colors[j] = defaltColor;
      myChart.data.datasets[0].backgroundColor = colors;
    }
  }
};

btn1.addEventListener("click", () => {
  bubbleSort();
});

btn.addEventListener("click", () => {
  mergeSort();
});
