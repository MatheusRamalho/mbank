import { List } from '../List'
import { LinkButton } from '../LinkButton'
import { Icon } from '../Icon'
import { Brand } from '../Brand'

export function Footer() {
    return (
        <footer className="w-full bg-primary-gradient pt-20 px-8">
            <div className="container mx-auto flex items-start justify-normal flex-wrap flex-col sm:flex-row gap-x-4 gap-y-8 pb-20">
                <div className="flex-1 min-w-52">
                    <h4 className="font-semiBold text-xl text-gray-50">
                        {' '}
                        Nubank{' '}
                    </h4>

                    <List.Root customClass="mt-4 pt-4">
                        <List.Action name="Sobre nós" link="#" />
                        <List.Action name="Carreiras" link="#" />
                        <List.Action name="Perguntas Frequentes" link="#" />
                        <List.Action name="Contato" link="#" />
                        <List.Action name="Imprensa" link="#" />
                    </List.Root>
                </div>

                <div className="flex-1 min-w-52">
                    <h4 className="font-semiBold text-xl text-gray-50">
                        {' '}
                        Produtos{' '}
                    </h4>

                    <List.Root customClass="mt-4 pt-4">
                        <List.Action name="Conta Digital" link="#" />
                        <List.Action name="Cartão de crédito" link="#" />
                        <List.Action name="Rewards" link="#" />
                        <List.Action name="Empréstimo" link="#" />
                        <List.Action name="Conta PJ" link="#" />
                    </List.Root>
                </div>

                <div className="flex-1 min-w-52">
                    <h4 className="font-semiBold text-xl text-gray-50">
                        {' '}
                        Fale conosco{' '}
                    </h4>

                    <List.Root customClass="mt-4 pt-4">
                        <List.Action name="0800 000 0000" link="#" />
                        <List.Action name="email@email.com.br" link="#" />
                        <List.Action name="Atendimento 24h" link="#" />
                    </List.Root>
                </div>

                <div className="flex-1 min-w-52">
                    <h4 className="font-semiBold text-xl text-gray-50">
                        {' '}
                        Esplore mais{' '}
                    </h4>

                    <List.Root customClass="mt-4 pt-4">
                        <List.Action name="Comunidade" link="#" />
                        <List.Action name="Blog" link="#" />
                        <List.Action name="Newsletter" link="#" />
                    </List.Root>
                </div>

                <div className="flex-[2_1_0%] min-w-96">
                    <h4 className="font-semiBold text-xl text-gray-50">
                        {' '}
                        Baixe o app{' '}
                    </h4>

                    <div className="flex items-start justify-start flex-wrap flex-col gap-4 sm:flex-row mt-4 pt-4">
                        <LinkButton.Secondary link="#">
                            <Icon.AppStoreFull />
                        </LinkButton.Secondary>

                        <LinkButton.Secondary link="#">
                            <Icon.PlayStoreFull />
                        </LinkButton.Secondary>
                    </div>
                </div>
            </div>

            <div className="container mx-auto border-t border-t-secondary-300 flex items-center justify-center gap-4 py-12 flex-col sm:flex-row sm:justify-between">
                <div className="flex-1 flex items-center justify-start gap-4">
                    <Brand.White className="max-w-24" />

                    <p className="text-xs text-gray-50">
                        Nome da empresa. 00.000.000/0000-00 <br />
                        Rua Tal, 00 - Cidade, Estado - 00000-000 <br />
                        Projeto de estudo, um redesign do site da Nubank.
                    </p>
                </div>

                <div className="flex-1 flex items-center justify-end">
                    <List.Root isHorizontal>
                        <List.Action link="#">
                            <Icon.Facebook className="size-10 !stroke-white" />
                        </List.Action>

                        <List.Action link="#">
                            <Icon.Instagram className="size-10 !stroke-white" />
                        </List.Action>

                        <List.Action link="#">
                            <Icon.Twitter className="size-10 !stroke-white" />
                        </List.Action>

                        <List.Action link="#">
                            <Icon.Youtube className="size-10 !stroke-white" />
                        </List.Action>
                    </List.Root>
                </div>
            </div>
        </footer>
    )
}
