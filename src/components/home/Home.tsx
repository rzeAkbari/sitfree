import { ReactElement } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from '../../lib/carousel/Carousel'
import ProductCard from './components/ProductCard'
import useCategories, { Category } from './service/hooks/useCategories'

function Home(): ReactElement {
    const { data, isError, isLoading } = useCategories('categories.json')
    if (isError) return <div>error...</div>
    if (isLoading) return <div>loading...</div>
    return (
        <Container>
            <Carousel>
                {data.map((category: Category) => {
                    return <ProductCard category={category} />
                })}
            </Carousel>
        </Container>
    )
}

export default Home
