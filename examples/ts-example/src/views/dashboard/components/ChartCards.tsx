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
      <div className="mb-8 flex items-center">
        <Icon className="mr-6 w-8" />
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="flex h-12 items-center justify-between">
        <div className="whitespace-no-wrap mr-6">
          <div className="mb-2 text-lg font-semibold">{count}</div>
          <div className="truncate text-sm text-gray-600">{value}</div>
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
