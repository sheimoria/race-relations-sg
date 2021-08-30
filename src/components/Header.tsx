import { MoonIcon, SunIcon } from '@heroicons/react/solid'

import HeaderMenu from 'components/HeaderMenu'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-10 p-6 bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between gap-4">
        <h1>Race Relations in Singapore</h1>
        <div className="flex items-center gap-4 transition">
          {theme ? (
            theme === 'light' ? (
              <MoonIcon onClick={() => setTheme('dark')} />
            ) : (
              <SunIcon onClick={() => setTheme('light')} />
            )
          ) : null}
          <HeaderMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
