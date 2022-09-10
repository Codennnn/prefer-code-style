import PropTypes from 'prop-types'
import Chart from 'react-apexcharts'

export default function CardAreaChart({ color, seriesName, seriesData }) {
  const chartOptions: Chart['props']['options'] = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors: [color],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    tooltip: {
      x: { show: false },
    },
  }

  return (
    <Chart
      height="100%"
      options={chartOptions}
      series={[
        {
          name: seriesName,
          data: seriesData,
        },
      ]}
      type="area"
      width="100%"
    />
  )
}

CardAreaChart.propTypes = {
  color: PropTypes.string,
  seriesName: PropTypes.string.isRequired,
  seriesData: PropTypes.arrayOf(PropTypes.number).isRequired,
}

CardAreaChart.defaultProps = {
  color: '#556ee6',
}
