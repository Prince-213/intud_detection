const datapoints = [7, 19, 4, 15, 30, 20, 14, 10, 20, 22, 25, 11, 17];
const datapoints2 = [7, 22, 6, 20, 28, 21, 18, 20, 14, 20, 23, 9, 14];

export const BarData = {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],

    datasets: [
      {
        label: "",
        data: datapoints,
        borderColor: "#AA7D09",
        fill: false,

        tension: 0.4,
      },
      {
        label: "",
        data: datapoints2,
        borderColor: "#7AC231",
        fill: false,
        tension: 0.4,
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly View",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,

        suggestedMin: 0,
        suggestedMax: 30,
      },
    },
  },
};
