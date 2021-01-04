import './InDemand.css';
import { PRODUCT_CATEGORIES } from '../../utilities';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard, { Product } from '../ProductCard/ProductCard';
import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInventoryFilter } from '../../slices';

export const InDemand = (): ReactElement => {
	const history = useHistory();
	const dispatch = useDispatch();

	const onCardClick = (product: Product) => {
		dispatch(
			setInventoryFilter({
				filter: {
					filterBy: 'category',
					filterValue: product.category,
				},
			}),
		);
		history.push(`/viewall`);
	};

	return (
		<Container fluid className='in-demand-container'>
			<Row className='title-container'>
				<Col>
					<span>Most in Demand</span>
				</Col>
			</Row>
			<Row xs={1} sm={1} md={2} lg={2} xl={2} className='in-demand-grid'>
				<Col>
					<Row xs={1} sm={1} md={1} lg={1} xl={1} className='vertical'>
						<Col className='first'>
							<ProductCard product={PRODUCT_CATEGORIES.MEN} onCardClick={onCardClick} />
						</Col>
						<Col className='second'>
							<ProductCard product={PRODUCT_CATEGORIES.WOMEN} onCardClick={onCardClick} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row className='horizontal'>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='first'>
							<ProductCard product={PRODUCT_CATEGORIES.ELECTRONIS} onCardClick={onCardClick} />
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='second'>
							<ProductCard product={PRODUCT_CATEGORIES.JEWELERY} onCardClick={onCardClick} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
