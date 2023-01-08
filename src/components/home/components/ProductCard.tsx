import { Category } from '../service/hooks/useCategories'
import { Button, Card } from 'react-bootstrap'

function ProductCard({ category }: { category: Category }) {
    return (
        <Card>
            <Card.Img variant='top' src={category.photo} />
            <Card.Body>
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <Button variant='primary'>Show All</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
