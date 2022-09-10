import Chart from 'react-apexcharts'

export default function RadialBarChart() {
  const chartOptions: Chart['props']['options'] = {
    grid: { show: false },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        offsetY: -15,
        hollow: {
          size: '48%',
        },
        track: {
          strokeWidth: '100%',
          background: '#f4f4f4',
        },
        dataLabels: {
          value: {
            offsetY: 20,
            color: '#adb5c3',
            fontSize: '18px',
          },
          name: {
            offsetY: 60,
            fontSize: '14px',
            color: '#adb5c3',
          },
        },
      },
    },
    colors: ['#556ee6'],
    stroke: { dashArray: 4 },
    labels: ['盈利率'],
  }

  return (
    <Chart
      height="100%"
      options={chartOptions}
      series={[67]}
      type="radialBar"
      width="100%"
    />
  )
}
