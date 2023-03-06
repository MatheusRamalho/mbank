import { ReactSVG } from "react-svg";

import { List } from "../List";
import { LinkButton } from "../LinkButton";

import appStoreFullIcon from '../../assets/svgs/icon-app-store-full.svg';
import playStoreFullIcon from '../../assets/svgs/icon-play-store-full.svg';
import brandWhiteSvg from '../../assets/svgs/brand-white.svg';
import facebookIcon from '../../assets/svgs/icon-facebook.svg';
import instagramIcon from '../../assets/svgs/icon-instagram.svg';
import twitterIcon from '../../assets/svgs/icon-twitter.svg';
import youtubeIcon from '../../assets/svgs/icon-youtube.svg';

import { FooterWrapper } from "./Footer.styled";

export const Footer = () => {
    return (
        <FooterWrapper>
            <div className="container flex flex--start-a">
                <div className="flex-item flex-item--1">
                    <h4> Nubank </h4>

                    <List.Root classe="mt mt--2 pt pt--2">
                        <List.Action name="Sobre nós" link="#" />
                        <List.Action name="Carreiras" link="#" />
                        <List.Action name="Perguntas Frequentes" link="#" />
                        <List.Action name="Contato" link="#" />
                        <List.Action name="Imprensa" link="#" />
                    </List.Root>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Produtos </h4>

                    <List.Root classe="mt mt--2 pt pt--2">
                        <List.Action name="Conta Digital" link="#" />
                        <List.Action name="Cartão de crédito" link="#" />
                        <List.Action name="Rewards" link="#" />
                        <List.Action name="Empréstimo" link="#" />
                        <List.Action name="Conta PJ" link="#" />
                    </List.Root>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Fale conosco </h4>

                    <List.Root classe="mt mt--2 pt pt--2">
                        <List.Action name="0800 608 6236" link="#" />
                        <List.Action name="meajuda@nubank.com.br" link="#" />
                        <List.Action name="Atendimento 24h" link="#" />
                    </List.Root>
                </div>

                <div className="flex-item flex-item--1">
                    <h4> Esplore mais </h4>

                    <List.Root classe="mt mt--2 pt pt--2">
                        <List.Action name="Comunidade" link="#" />
                        <List.Action name="Blog" link="#" />
                        <List.Action name="Newsletter" link="#" />
                    </List.Root>
                </div>

                <div className="flex-item flex-item--2">
                    <h4> Baixe o app </h4>

                    <div className="flex flex--start mt mt--2 pt pt--2">
                        <LinkButton isSecondary link="#">
                            <ReactSVG
                                src={appStoreFullIcon}
                                role="img"
                                aria-label="Nubank logo marca"
                            />
                        </LinkButton>

                        <LinkButton isSecondary link="#" classe="ml ml--4">
                            <ReactSVG
                                src={playStoreFullIcon}
                                role="img"
                                aria-label="Nubank logo marca"
                            />
                        </LinkButton>
                    </div>
                </div>
            </div>

            <div className="container flex--between py py--5">
                <div className="flex flex--start">
                    <ReactSVG
                        className="brand-footer"
                        src={brandWhiteSvg}
                        role="img"
                        aria-label="Nubank logo marca"
                    />

                    <p className="ml ml--2">
                        Nu Pagamentos S.A. 18.236.120/0001-58 <br />
                        Rua Capote Valente, 39 - São Paulo, SP - 05409-000
                    </p>
                </div>

                <div className="flex flex--start">
                    <List.Root isHorizontal>
                        <List.Action link="#">
                            <ReactSVG
                                src={facebookIcon}
                                role="img"
                                aria-label="Facebook logo marca"
                            />
                        </List.Action>

                        <List.Action link="#">
                            <ReactSVG
                                src={instagramIcon}
                                role="img"
                                aria-label="Instagram logo marca"
                            />
                        </List.Action>

                        <List.Action link="#">
                            <ReactSVG
                                src={twitterIcon}
                                role="img"
                                aria-label="Twitter logo marca"
                            />
                        </List.Action>

                        <List.Action link="#">
                            <ReactSVG
                                src={youtubeIcon}
                                role="img"
                                aria-label="Youtube logo marca"
                            />
                        </List.Action>
                    </List.Root>
                </div>
            </div>
        </FooterWrapper>
    );
}
