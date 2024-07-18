import Image from 'next/image'

import { PeopleProps } from './People.types'

import people1 from '@/assets/people1.png'
import people2 from '@/assets/people2.png'

export function People1({ customClass }: PeopleProps) {
    return (
        <div
            className={`relative w-full md:w-[456px] h-[660px] border broder-gray-100 bg-gray-50 rounded-[63px] ${customClass}`}
        >
            <Image
                className="absolute inset-0 size-full opacity-0 animate-image"
                src={people1}
                width={456}
                height={660}
                alt=""
            />

            <Image
                className="absolute inset-0 size-full opacity-0 animate-image5"
                src={people2}
                width={456}
                height={660}
                alt=""
            />
        </div>
    )
}
