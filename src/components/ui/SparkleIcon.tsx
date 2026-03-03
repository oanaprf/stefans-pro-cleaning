interface SparkleIconProps {
  size?: number
  color?: string
  className?: string
}

export default function SparkleIcon({
  size = 24,
  color = '#F6CD3A',
  className = '',
}: SparkleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z"
        fill={color}
      />
      <path
        d="M19 2L19.75 5.25L23 6L19.75 6.75L19 10L18.25 6.75L15 6L18.25 5.25L19 2Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M5 16L5.5 18.5L8 19L5.5 19.5L5 22L4.5 19.5L2 19L4.5 18.5L5 16Z"
        fill={color}
        opacity="0.4"
      />
    </svg>
  )
}
