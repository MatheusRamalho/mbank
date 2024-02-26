import Link from 'next/link'

import { Section } from '@/components/Section'
import { Header } from '@/components/Header'
import { List } from '@/components/List'
import { LinkButton } from '@/components/LinkButton'
import { Bg } from '@/components/Bg'
import { Brand } from '@/components/Brand'
import { Icon } from '@/components/Icon'
import { People } from '@/components/People'
import { DigitalAccount } from '@/components/DigitalAccount'
import { CreditCard } from '@/components/CreditCard'
import { CreditCardAnimate } from '@/components/CreditCardAnimate'

export default function Home() {
    return (
        <>
            <div className="hero-wrapper">
                <div className="z-[-1] absolute size-full overflow-hidden hidden sm:block">
                    <Bg.Hero className="w-full" />
                </div>

                <Section
                    id="sect-hero"
                    customClass="py-32"
                    customClassContainer="!flex-col lg:!flex-row"
                    legend="Section de aterrissagem"
                >
                    <div className="flex-[1_1_22.5rem] py-20">
                        <h1 className="text-6xl font-bold text-gray-950 leading-[110%]">
                            Ser Nubank é reinventar sua vida financeira.{' '}
                        </h1>

                        <p className="my-8 leading-8">
                            Conta com rendimento acima da poupança, cartão de
                            crédito sem anuidade e o melhor: resolva tudo pelo
                            app.{' '}
                        </p>

                        <div className="flex items-start justify-normal gap-4">
                            <LinkButton.Primary
                                link="#"
                                name="Quero ser Nubank"
                            />

                            <Link href="#">
                                <Icon.AppStore />
                            </Link>

                            <Link href="#">
                                <Icon.PlayStore />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-[3_1_22.5rem] flex items-center justify-center">
                        <CreditCardAnimate />
                    </div>
                </Section>
            </div>

            <Section
                id="sect-people"
                legend="Section para todos"
                customClassContainer="!flex-col xl:!flex-row gap-10"
            >
                <div className="flex-[4_1_22.5rem] flex flex-col items-start mx-4">
                    <Header
                        caption="Para todos"
                        title="Completo."
                        description="Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem tarifas abusivas. Cuide do seu dinheiro de um jeito simples. Somos eficientes para você usar seu dinheiro com o que realmente importa, sem tarifas de manutenção."
                    />

                    <List.Root>
                        <List.Item
                            title="100% gratuito."
                            description="Isso mesmo, você não paga nada para abrir sua conta."
                        >
                            <Icon.Check />
                        </List.Item>

                        <List.Item
                            title="Sem taxas ou cobranças."
                            description="Não se preocupe com taxas adicionais ou anuidades."
                        >
                            <Icon.Check />
                        </List.Item>

                        <List.Item
                            title="O melhor suporte de todos."
                            description="Segundo pesquisas, temos o melhor suporte pra você."
                        >
                            <Icon.Check />
                        </List.Item>
                    </List.Root>

                    <LinkButton.Quaternary
                        link="#"
                        name="Confira os benefícios"
                    >
                        <Icon.Arrow />
                    </LinkButton.Quaternary>
                </div>

                <div className="flex-1 flex items-center justify-center flex-col lg:flex-row">
                    <div className="flex-1 mx-4 hidden lg:block">
                        <People.People1 />
                    </div>

                    <div className="flex-1 flex flex-col gap-8 mx-4 my-6">
                        <People.People2 />
                        <People.People3 />
                    </div>
                </div>
            </Section>

            <Section
                id="sect-the-best"
                legend="Section o melhor de todos os bancos"
            >
                <div className="relative px-12 py-20 bg-gray-50 rounded-[48px] flex items-start justify-center gap-8 flex-col 2xl:flex-row 2xl:items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-32 before:h-8 before:bg-no-repeat before:bg-entail">
                    <div className="flex-[2_1_0%] m-4">
                        <Header caption="O melhor" title="Por que Nubank?" />
                    </div>

                    <div className="flex items-start justify-center gap-x-4 gap-y-8 flex-wrap md:flex-row">
                        <div className="min-w-52 flex-1 flex items-center justify-center flex-col">
                            <Icon.Cash className="w-auto drop-shadow-purple transition-all hover:scale-105" />

                            <p className="mt-4 font-bold text-center text-gray-1000">
                                {' '}
                                Conta rende mais que a poupança{' '}
                            </p>
                        </div>

                        <div className="min-w-52 flex-1 flex items-center justify-center flex-col">
                            <Icon.Transfer className="w-auto drop-shadow-purple transition-all hover:scale-105" />

                            <p className="mt-4 font-bold text-center text-gray-1000">
                                {' '}
                                Transferências e TEDs ilimitados{' '}
                            </p>
                        </div>

                        <div className="min-w-52 flex-1 flex items-center justify-center flex-col">
                            <Icon.Card className="w-auto drop-shadow-purple transition-all hover:scale-105" />

                            <p className="mt-4 font-bold text-center text-gray-1000">
                                {' '}
                                Conta e cartão 100% gratuitos{' '}
                            </p>
                        </div>

                        <div className="min-w-52 flex-1 flex items-center justify-center flex-col">
                            <Icon.Phone className="w-auto drop-shadow-purple transition-all hover:scale-105" />

                            <p className="mt-4 font-bold text-center text-gray-1000">
                                {' '}
                                O melhor suporte 24h do Brasil{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section
                id="sect-digital-account"
                legend="Section conta digital"
                customClassContainer="!flex-col lg:!flex-row"
            >
                <div className="flex-[1_1_22.5rem] flex items-center justify-center mx-6 order-2 lg:order-1">
                    <DigitalAccount className="w-3/4" />
                </div>

                <div className="flex-[1_1_22.5rem] flex flex-col items-start mx-4 order-1 lg:order-2">
                    <Header
                        caption="Conta digital"
                        title="Tudo pelo App."
                        description="Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil. Pague suas contas, ajuste seu limite, bloqueie e desbloqueie o cartão quando quiser e acompanhe cada movimentação em tempo real. Tudo pelo aplicativo."
                    />

                    <List.Root>
                        <List.Item
                            title="Tudo na palma da sua mão."
                            description="Conta digital. Você resolve tudo pelo App. Tudo."
                        >
                            <Icon.Mobile />
                        </List.Item>

                        <List.Item
                            title="Sem filas ou burocracias."
                            description="Investimos no melhor suporte pra isso. Não tem filas. Economia de tempo."
                        >
                            <Icon.Config />
                        </List.Item>

                        <List.Item
                            title="Configure tudo no app."
                            description="Toda a configuração e acesso aos novos recursos a um clique de distância."
                        >
                            <Icon.Time />
                        </List.Item>
                    </List.Root>

                    <LinkButton.Quaternary
                        link="#"
                        name="Segura e sem conplicações"
                    >
                        <Icon.Arrow />
                    </LinkButton.Quaternary>
                </div>
            </Section>

            <Section
                id="sect-credit-card"
                legend="Section tudo no app"
                customClassContainer="!flex-col lg:!flex-row"
            >
                <div className="flex-[3_1_22.5rem] flex flex-col items-start mx-4">
                    <Header
                        caption="Seu roxinho"
                        title="Crédito e débito."
                        description="Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também. Facilidade e segurança para você em mais de 30 milhões de estabelecimentos, além dos benefícios Mastercard."
                    />

                    <List.Root>
                        <List.Item
                            title="Tecnologia Contactless"
                            description="Tecnologia de pagamento por aproximação. Mais agilidade no dia a dia."
                        >
                            <Icon.Contactless />
                        </List.Item>

                        <List.Item
                            title="Cartão virtual."
                            description="Você pode gerar cartões virtuais no app para suas compras online. Mais segurança."
                        >
                            <Icon.Card />
                        </List.Item>
                    </List.Root>

                    <LinkButton.Quaternary link="#" name="Saiba mais">
                        <Icon.Arrow />
                    </LinkButton.Quaternary>
                </div>

                <div className="flex-[1_1_22.5rem] flex items-center justify-center mx-6">
                    <CreditCard.Double className="w-[85%]" />
                </div>
            </Section>

            <Section
                id="sect-app-download"
                legend="Section baixe o app e crie sua conta"
                customClassContainer="!flex-col lg:!flex-row"
            >
                <div className="flex-[3_1_22.5rem] flex flex-col items-start mx-4">
                    <Header
                        caption="Faça sua conta"
                        title="Baixe. É gratuito."
                        description="Vamos lá, junte-se aos mais de 20 milhões que escolheram o Nubank. Conte com o banco digital que mais cresce no Brasil. É de graça. É para todos. Clique e baixe o App."
                    />

                    <div className="flex items-start justify-normal gap-4 flex-col sm:flex-row">
                        <LinkButton.Secondary link="#">
                            <Icon.AppStoreFull />
                        </LinkButton.Secondary>

                        <LinkButton.Secondary link="#">
                            <Icon.PlayStoreFull />
                        </LinkButton.Secondary>
                    </div>
                </div>

                <div className="flex-[1_1_22.5rem] flex items-center justify-center mx-6">
                    <Brand.Full className="w-4/5" />
                </div>
            </Section>

            <div className="invite-wrapper">
                <div className="z-[-1] absolute size-full overflow-hidden hidden sm:block">
                    <Bg.Invite className="w-full" />
                </div>

                <Section
                    customClass="h-screen flex items-center justify-center"
                    id="sect-invite"
                    legend="Section baixe o app e crie sua conta"
                >
                    <div className="flex-[1_1_22.5rem] flex flex-col items-center justify-center mx-4 text-center">
                        <Header
                            caption="Nuconta"
                            title="O melhor dos bancos digitais. Pra você."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque vulputate at mattis nibh nulla est. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra. Pharetra, eget purus tortor nibh porta ipsum enim urna viverra."
                        />

                        <LinkButton.Primary link="#" name="Quero ser Nubank" />
                    </div>
                </Section>
            </div>
        </>
    )
}
