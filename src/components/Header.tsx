import { MoonIcon, SunIcon } from '@heroicons/react/solid'

import HeaderMenu from 'components/HeaderMenu'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header>
      <nav>
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
