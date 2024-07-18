// import { CreditCard } from '../CreditCard'
import { Icon } from '../Icon'

export function CreditCardAnimate() {
    return (
        <div className="relative flex items-center justify-center w-fit py-20">
            <Icon.Card className="hidden md:block z-[2] absolute top-0 drop-shadow-purple animate-icon-move2" />
            <Icon.Mobile className="hidden md:block z-[2] absolute top-1/2 left-[-70px] drop-shadow-purple animate-icon-move4" />
            <Icon.Contactless className="hidden md:block z-[2] absolute top-full drop-shadow-purple animate-icon-move3" />

            <div
                className="z-[-1] w-[340px] h-[calc(0.64_*_340px)] rounded-xl shadow-purple4 origin-center animate-flip-card"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* <CreditCard.Front className="size-full absolute inset-0 card-front-animate" />
                <CreditCard.BackInverted className="size-full absolute inset-0 card-back-animate" /> */}
            </div>
        </div>
    )
}
