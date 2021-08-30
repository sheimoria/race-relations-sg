import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="p-6">
      <nav className="flex items-center justify-between gap-6">
        <h1>Race Relations in Singapore</h1>
        <div className="flex items-center gap-4 transition">
          {theme ? (
            theme === 'light' ? (
              <MoonIcon onClick={() => setTheme('dark')} />
            ) : (
              <SunIcon onClick={() => setTheme('light')} />
            )
          ) : null}
        </div>
      </nav>
    </header>
  )
}

export default Header
