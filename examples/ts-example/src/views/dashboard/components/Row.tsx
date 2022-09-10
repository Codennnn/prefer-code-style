export default function Row({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return <div className={`flex mb-6 ${className}`}>{children}</div>
}
