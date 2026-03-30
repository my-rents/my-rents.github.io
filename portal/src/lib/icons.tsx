import type { IconData } from '@lineiconshq/free-icons'
import {
  ArrowRightOutlined,
  CalendarDaysOutlined,
  CheckCircle1Outlined,
  DollarCircleOutlined,
  Download1Outlined,
  EyeOutlined,
  FileMultipleOutlined,
  GalleryOutlined,
  Globe1Outlined,
  Home2Outlined,
  HourglassOutlined,
  Locked1Outlined,
  RefreshCircle1ClockwiseOutlined,
  Shield2CheckOutlined,
  User4Outlined,
} from '@lineiconshq/free-icons'

const iconMap = {
  arrow: ArrowRightOutlined,
  calendar: CalendarDaysOutlined,
  check: CheckCircle1Outlined,
  download: Download1Outlined,
  eye: EyeOutlined,
  file: FileMultipleOutlined,
  gallery: GalleryOutlined,
  globe: Globe1Outlined,
  home: Home2Outlined,
  hourglass: HourglassOutlined,
  lock: Locked1Outlined,
  money: DollarCircleOutlined,
  refresh: RefreshCircle1ClockwiseOutlined,
  shield: Shield2CheckOutlined,
  user: User4Outlined,
} satisfies Record<string, IconData>

export type PortalIconName = keyof typeof iconMap

function sanitizeSvg(svg: string): string {
  return svg
    .replaceAll('{color}', 'currentColor')
    .replaceAll('{strokeWidth}', '1.7')
    .replaceAll('//>', '/>')
}

export function PortalIcon({ className, name }: { className?: string; name: PortalIconName }) {
  const icon = iconMap[name]

  return (
    <svg
      aria-hidden="true"
      className={['portal-icon', className].filter(Boolean).join(' ')}
      dangerouslySetInnerHTML={{ __html: sanitizeSvg(icon.svg) }}
      viewBox={icon.viewBox}
      width="1.2em"
      height="1.2em"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    />
  )
}
