import Image from 'next/image'

import { PeopleProps } from './People.types'

import people5 from '@/assets/people5.png'
import people6 from '@/assets/people6.png'

export function People3({ customClass }: PeopleProps) {
    return (
        <div
            className={`relative w-72 mx-auto md:w-[324px] h-[324px] border broder-gray-100 bg-gray-50 rounded-[63px] ${customClass}`}
        >
            <Image
                className="absolute inset-0 size-full opacity-0 animate-image3"
                src={people5}
                width={324}
                height={324}
                alt=""
            />

            <Image
                className="absolute inset-0 size-full opacity-0 animate-image8"
                src={people6}
                width={324}
                height={324}
                alt=""
            />
        </div>
    )
}
