import Chart from 'react-apexcharts'

export default function CircleChart() {
  const chartOptions: Chart['props']['options'] = {
    grid: { show: false },
    plotOptions: {
      radialBar: {
        endAngle: 270,
        offsetY: -15,
        hollow: {
          size: '36%',
        },
        track: {
          margin: 12,
          strokeWidth: '100%',
          background: '#f4f4f4',
        },
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL',
            color: '#666',
          },
          value: {
            offsetY: -25,
            color: '#adb5c3',
            fontSize: '18px',
          },
          name: {
            offsetY: 15,
            color: '#999',
            fontSize: '14px',
          },
        },
      },
    },
    stroke: { lineCap: 'round' },
    colors: ['#556ee6', '#f1b44c', '#50a5f1'],
    labels: ['Ethereum', 'Bitcoin', 'Litecoin'],
  }

  return (
    <Chart
      height="120%"
      options={chartOptions}
      series={[79, 70, 64]}
      type="radialBar"
      width="100%"
    />
  )
}
