import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', children, style }) {
  const { ref, visible } = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
