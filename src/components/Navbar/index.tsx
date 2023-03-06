import { NavbarDesktop } from "./Desktop/Desktop";
import { NavbarItem } from "./Item/Item";
import { NavbarItemMobile } from "./ItemMobile/ItemMobile";
import { NavbarMobile } from "./Mobile/Mobile";
import { NavbarMobileMenu } from "./MobileMenu/MobileMenu";
import { NavbarRoot } from "./Root/Root";

export const Navbar = {
    Root: NavbarRoot,
    Desktop: NavbarDesktop,
    Mobile: NavbarMobile,
    MobileMenu: NavbarMobileMenu,
    Item: NavbarItem,
    ItemMobile: NavbarItemMobile
}
