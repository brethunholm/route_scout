export default function RouteScoutLogo({
  color = "#4B3523",
  size = 28,
  ...props
}) {
  return (
    <svg
      {...props}
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RouteScout"
    >
      <text
        x="0"
        y="28"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize={size}
        fontWeight="700"
        fill={color}
      >
        RouteScout
      </text>
    </svg>
  );
}
