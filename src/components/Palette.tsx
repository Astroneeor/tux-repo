import { SWATCHES } from '../data/content'

type Props = {
  activeColor: string
  onColorSelect: (color: string) => void
}

export default function Palette({ activeColor, onColorSelect }: Props) {
  return (
    <div id="palette">
      {SWATCHES.map((color) => (
        <div
          key={color}
          className={`swatch${activeColor === color ? ' swatch-active' : ''}`}
          style={{ background: color }}
          onClick={() => onColorSelect(color)}
          title={color}
        />
      ))}
    </div>
  )
}
