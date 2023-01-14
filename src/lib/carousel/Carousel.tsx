import { ReactElement, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

const NUMBER_CARDS_IN_VIEW = 4
const CARDS_IN_VIEW_INDEX = 3

function Carousel({ children }: { children: ReactElement[] }) {
    const activeCarousel = useRef<number>(CARDS_IN_VIEW_INDEX)
    const caroselDirection = useRef<string>('right')
    const handleLeft = () => {
        if (activeCarousel.current > 0) {
            if (caroselDirection.current === 'left') activeCarousel.current--
            else activeCarousel.current -= NUMBER_CARDS_IN_VIEW
        }

        caroselDirection.current = 'left'

        const item = 'item-' + activeCarousel.current
        const element = document.getElementById(item)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    const handleRight = () => {
        if (activeCarousel.current < children.length - 1) {
            if (caroselDirection.current === 'right') activeCarousel.current++
            else activeCarousel.current += NUMBER_CARDS_IN_VIEW
        }
        caroselDirection.current = 'right'

        const item = 'item-' + activeCarousel.current
        const element = document.getElementById(item)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div className='position-relative'>
            <button
                className='rounded bg-primary border-primary text-secondary position-absolute start-0 p-2'
                style={{ zIndex: '2', top: '37%' }}
                onClick={handleLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                className='rounded bg-primary border-primary text-secondary position-absolute end-0 p-2'
                style={{ zIndex: '2', top: '37%' }}
                onClick={handleRight}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className='row flex-nowrap overflow-hidden position-relative mx-1'>
                {children.map((child: ReactElement, index: number) => {
                    return (
                        <div
                            key={child.key}
                            id={`item-${index}`}
                            className={`col-${CARDS_IN_VIEW_INDEX}`}
                        >
                            {child}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
