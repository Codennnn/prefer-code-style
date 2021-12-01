import Chart from 'react-apexcharts'

export default function LineChart() {
  const chartOptions: Chart['props']['options'] = {
    chart: {
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 20,
        left: 8,
        blur: 8,
        opacity: 0.15,
      },
    },
    grid: { show: true, borderColor: '#f1f1f1' },
    yaxis: {
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '14px',
          fontFamily: 'Rubik, Helvetica, Arial, sans-serif',
          fontWeight: 400,
        },
      },
    },
    xaxis: {
      axisBorder: { color: '#e0e0e0' },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '14px',
          fontFamily: 'Rubik, Helvetica, Arial, sans-serif',
          fontWeight: 400,
        },
      },
    },
    colors: ['#556ee6'],
    stroke: { curve: 'smooth', width: 3 },
    labels: ['盈利率'],
  }

  return (
    <Chart
      height="100%"
      options={chartOptions}
      series={[
        {
          name: '万元',
          data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
        },
      ]}
      type="line"
      width="100%"
    />
  )
}
