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
              className="absolute right-0 z-10 flex flex-col py-3 truncate origin-top-right bg-white rounded-md shadow focus:outline-none dark:bg-gray-800"
            >
              <Menu.Item>
                {({ active }) => <p className="menu-item">Articles</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Books</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Videos</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Podcasts</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Websites</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Social Media</p>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <p className="menu-item">Others</p>}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default HeaderMenu
