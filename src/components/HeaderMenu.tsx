import { Menu, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'

const HeaderMenu = () => {
  return (
    <Menu as="div" className="relative -mb-1.5">
      {({ open }) => (
        <>
          <Menu.Button>
            <MenuIcon />
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items
              static
              className="absolute right-0 z-10 flex flex-col py-3 truncate origin-top-right bg-white rounded shadow focus:outline-none dark:bg-gray-800"
            >
              <Menu.Item>
                {({ active }) => (
                  <Link href="/articles">
                    <a className="menu-item">Articles</a>
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link href="/books">
                    <a className="menu-item">Books</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/videos">
                    <a className="menu-item">Videos</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/podcasts">
                    <a className="menu-item">Podcasts</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/websites">
                    <a className="menu-item">Websites</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/social media">
                    <a className="menu-item">Social Media</a>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/others">
                    <a className="menu-item">Others</a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default HeaderMenu
