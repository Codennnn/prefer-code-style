import CardAreaChart from '../charts/CardAreaChart'

type ChartCardProps = {
  Icon
  name
  seriesName
  seriesData
  color
  count
  value
}

function ChartCard({
  Icon,
  name,
  seriesName,
  seriesData,
  color,
  count,
  value,
}: ChartCardProps) {
  return (
    <div className="custom-card">
      <div className="flex items-center mb-8">
        <Icon className="w-8 mr-6" />
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="flex items-center justify-between h-12">
        <div className="mr-6 whitespace-no-wrap">
          <div className="mb-2 text-lg font-semibold">{count}</div>
          <div className="text-sm text-gray-600 truncate">{value}</div>
        </div>
        <CardAreaChart
          color={color}
          seriesData={seriesData}
          seriesName={seriesName}
        />
      </div>
    </div>
  )
}

type ChartCardsProps = {
  data: { icon; name; seriesName; seriesData; color; count; value }[]
}

export default function ChartCards({ data }: ChartCardsProps) {
  return (
    <>
      {data.map(
        ({ icon, name, seriesName, seriesData, color, count, value }) => (
          <div key={name} className="w-1/3 px-3">
            <ChartCard
              Icon={icon}
              color={color}
              count={count}
              name={name}
              seriesData={seriesData}
              seriesName={seriesName}
              value={value}
            />
          </div>
        )
      )}
    </>
  )
}
