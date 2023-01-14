import { Category } from '../service/hooks/useCategories'
import { Button, Card } from 'react-bootstrap'

function ProductCard({ category }: { category: Category }) {
    return (
        <Card>
            <Card.Img
                variant='top'
                src={category.photo}
                style={{ height: '100px', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>
                    <div className='d-flex  justify-content-between'>
                        <div className='col-4 align-self-center'>
                            {category.title}
                        </div>
                        <div className='col-auto align-self-center'>
                            <Button variant='primary' className='end-0'>
                                Show All
                            </Button>
                        </div>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
