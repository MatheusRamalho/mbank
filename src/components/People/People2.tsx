import Image from 'next/image'

import { PeopleProps } from './People.types'

import people3 from '@/assets/people3.png'
import people4 from '@/assets/people4.png'

export function People2({ customClass }: PeopleProps) {
    return (
        <div
            className={`relative w-[324px] h-[475px] border broder-gray-100 bg-gray-50 rounded-[63px] ${customClass}`}
        >
            <Image
                className="absolute inset-0 size-full opacity-0 animate-image2"
                src={people3}
                width={324}
                height={475}
                alt=""
            />

            <Image
                className="absolute inset-0 size-full opacity-0 animate-image7"
                src={people4}
                width={324}
                height={475}
                alt=""
            />
        </div>
    )
}
