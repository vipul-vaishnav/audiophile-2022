import React from 'react'
import Moon from '../../icons/Moon'
import Sun from '../../icons/Sun'

const ToggleSwitch = () => {
  const [isDark, setIsDark] = React.useState<boolean>(true)

  const handleToggle = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className="bg-white w-20 h-20 fixed rounded-tl-full right-0 bottom-0 text-neutral-900">
      <button onClick={handleToggle} className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4">
        {isDark ? <Sun width="w-10" height="h-10" /> : <Moon width="w-10" height="h-10" />}
      </button>
    </div>
  )
}

export default ToggleSwitch
