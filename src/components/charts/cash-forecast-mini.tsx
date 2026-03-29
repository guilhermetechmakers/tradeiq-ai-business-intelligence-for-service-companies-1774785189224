import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { week: 'W1', cash: 42000 },
  { week: 'W2', cash: 45800 },
  { week: 'W3', cash: 44100 },
  { week: 'W4', cash: 50200 },
  { week: 'W5', cash: 48900 },
  { week: 'W6', cash: 53100 },
]

export function CashForecastMini() {
  return (
    <div className="h-[220px] w-full animate-fade-in-up">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="cashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(13, 148, 136)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="rgb(13, 148, 136)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
          <XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis
            tickLine={false}
            axisLine={false}
            fontSize={12}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: '1px solid rgb(226 232 240)',
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Cash']}
          />
          <Area
            type="monotone"
            dataKey="cash"
            stroke="rgb(13, 148, 136)"
            strokeWidth={2}
            fill="url(#cashFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
