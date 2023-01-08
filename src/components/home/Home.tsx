import { ReactElement } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from './components/ProductCard'
import useCategories, { Category } from './service/hooks/useCategories'

function Home(): ReactElement {
    const { data, isError, isLoading } = useCategories('categories.json')
    if (isError) return <div>error...</div>
    if (isLoading) return <div>loading...</div>
    return (
        <Container>
            <Row className='no-wrap'>
                {data.map((category: Category) => (
                    <Col>
                        <ProductCard category={category} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Home
