import './InDemand.css';
import { PRODUCTS } from '../../utilities';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { ReactElement } from 'react';

export const InDemand = (): ReactElement => {
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
							<ProductCard product={PRODUCTS.TSHIRT} />
						</Col>
						<Col className='second'>
							<ProductCard product={PRODUCTS.JEANS} />
						</Col>
					</Row>
				</Col>
				<Col>
					<Row className='horizontal'>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='first'>
							<ProductCard product={PRODUCTS.BACKPACK} />
						</Col>
						<Col xs={12} sm={12} md={6} lg={6} xl={6} className='second'>
							<ProductCard product={PRODUCTS.NECKLACE} />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
