import Chart from 'react-apexcharts'

export default function StackedColumnChart() {
  const chartOptions = {
    chart: {
      stacked: true,
      toolbar: { show: false },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#c2c8ce',
        },
      },
      categories: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: '#c2c8ce',
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
      },
    },
    dataLabels: { enabled: false },
    colors: ['#556ee6', '#f1b44c', '#34c38f'],
    grid: { borderColor: '#fbfbfb' },
  }

  return (
    <Chart
      height="360"
      options={chartOptions}
      series={[
        {
          name: '订单数量',
          data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
        },
        {
          name: '净利润',
          data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
        },
        {
          name: '平均获益',
          data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
        },
      ]}
      type="bar"
      width="100%"
    />
  )
}
