'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Dropdown } from '../Dropdown'
import { Navbar } from '../Navbar'
import { Icon } from '../Icon'

export function Menu() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleMenuToggle = () => {
        if (mobileOpen === true) {
            setMobileOpen(false)
        } else {
            setMobileOpen(true)
        }
    }

    return (
        <Navbar.Root>
            <Navbar.Desktop>
                <Navbar.Item name="Mbank">
                    <Dropdown.Root>
                        <Dropdown.Item name="O Nu" link="#" />
                        <Dropdown.Item name="Carreiras" link="#" />
                        <Dropdown.Item name="Imprensa" link="#" />
                    </Dropdown.Root>
                </Navbar.Item>

                <Navbar.Item name="Conta digital">
                    <Dropdown.Root>
                        <Dropdown.Item name="Crie sua conta" link="#" />
                        <Dropdown.Item name="Transferências" link="#" />
                        <Dropdown.Item name="Rendimento" link="#" />
                    </Dropdown.Root>
                </Navbar.Item>

                <Navbar.Item name="Pra você">
                    <Dropdown.Root>
                        <Dropdown.Item name="Comunidade" link="#" />
                        <Dropdown.Item name="Rewards" link="#" />
                        <Dropdown.Item name="Novidades" link="#" />
                    </Dropdown.Root>
                </Navbar.Item>
            </Navbar.Desktop>

            <Navbar.Mobile onClick={handleMenuToggle} isActive={mobileOpen} />

            <Navbar.MobileMenu isOpen={mobileOpen}>
                <Navbar.ItemMobile customClass="mb-2" name="Mbank" link="#" />

                <Navbar.ItemMobile
                    customClass="mb-2"
                    name="Conta digital"
                    link="#"
                />

                <Navbar.ItemMobile
                    customClass="mb-2"
                    name="Quero ser Mbank"
                    link="#"
                />

                <Navbar.ItemMobile isVariation>
                    <Link
                        className="relative inline-block py-4 px-6 text-gray-500 after:content-[''] after:absolute after:top-[90%] after:left-4 after:transition-all after:w-0 after:h-[0.125rem] after:bg-secondary-500 hover:text-secondary-500 hover:after:w-full text-2xl lg:text-4xl"
                        href="#"
                    >
                        <Icon.Facebook />
                    </Link>

                    <Link
                        className="relative inline-block py-4 px-6 text-gray-500 after:content-[''] after:absolute after:top-[90%] after:left-4 after:transition-all after:w-0 after:h-[0.125rem] after:bg-secondary-500 hover:text-secondary-500 hover:after:w-full text-2xl lg:text-4xl"
                        href="#"
                    >
                        <Icon.Instagram />
                    </Link>

                    <Link
                        className="relative inline-block py-4 px-6 text-gray-500 after:content-[''] after:absolute after:top-[90%] after:left-4 after:transition-all after:w-0 after:h-[0.125rem] after:bg-secondary-500 hover:text-secondary-500 hover:after:w-full text-2xl lg:text-4xl"
                        href="#"
                    >
                        <Icon.Twitter />
                    </Link>

                    <Link
                        className="relative inline-block py-4 px-6 text-gray-500 after:content-[''] after:absolute after:top-[90%] after:left-4 after:transition-all after:w-0 after:h-[0.125rem] after:bg-secondary-500 hover:text-secondary-500 hover:after:w-full text-2xl lg:text-4xl"
                        href="#"
                    >
                        <Icon.Youtube />
                    </Link>
                </Navbar.ItemMobile>
            </Navbar.MobileMenu>
        </Navbar.Root>
    )
}
