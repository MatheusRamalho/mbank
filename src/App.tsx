import { BrowserRouter, Link } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { ReactSVG } from "react-svg";

import { usePersistedState } from "./hooks/usePersistedState";
import { Routers } from "./routes/Routes";

import { defaultTheme } from "./styles/default";
import GlobalStyle from './styles/global';

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";

import facebookIcon from './assets/svgs/icon-facebook.svg';
import instagramIcon from './assets/svgs/icon-instagram.svg';
import twitterIcon from './assets/svgs/icon-twitter.svg';
import youtubeIcon from './assets/svgs/icon-youtube.svg';

export const App = () => {
	const [theme] = usePersistedState<DefaultTheme>('theme-nubank', defaultTheme);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<GlobalStyle />

				<Navbar.Root>
					<Navbar.Desktop>
						<Navbar.Item name="Nubank">
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

					<Navbar.Mobile></Navbar.Mobile>

					<Navbar.MobileMenu>
						<Navbar.ItemMobile classe="mb mb--1" name="Nubank" link="#" />
						<Navbar.ItemMobile classe="mb mb--1" name="Conta digital" link="#" />
						<Navbar.ItemMobile classe="mb mb--1" name="Quero ser Nubank" link="#" />
						<Navbar.ItemMobile isVariation>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG
									src={facebookIcon}
									role="img"
									aria-label="Facebook logo marca"
								/>
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG
									src={instagramIcon}
									role="img"
									aria-label="Instagram logo marca"
								/>
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG
									src={twitterIcon}
									role="img"
									aria-label="Twitter logo marca"
								/>
							</Link>
							<Link className="nav-item-mobile-link" to="#">
								<ReactSVG
									src={youtubeIcon}
									role="img"
									aria-label="Youtube logo marca"
								/>
							</Link>
						</Navbar.ItemMobile>
					</Navbar.MobileMenu>
				</Navbar.Root>

				<main className="content">
					<Routers />
				</main>

				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	)
}
