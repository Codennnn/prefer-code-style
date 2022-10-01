export default function Row({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[]
  className?: string
}) {
  return <div className={`mb-6 flex ${className}`}>{children}</div>
}
