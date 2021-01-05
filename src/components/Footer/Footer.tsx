import './Footer.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { setInventoryFilter } from '../../slices';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Footer = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useHistory();
	const onClickCategory = (category: string) => {
		if (category?.length === 0) history.push(category);
		else {
			dispatch(
				setInventoryFilter({
					filter: {
						filterBy: 'category',
						filterValue: category,
					},
				}),
			);
			history.push(`/viewall`);
		}
	};
	return (
		<div className='footer-container'>
			<div className='section'>
				<div className='footer-header'>
					<div className='footer-header-info'>Contact-info</div>
					<div className='footer-items'>
						<div>Phone: (+91) 9876 543 210</div>
						<div>Address: 1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, United State</div>
						<div>{'  '}</div>
						<div className='card-details'>We accept:</div>
						<div className='imagesContainer'>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip id='button-tooltip-2'>Mastercard</Tooltip>}
								delay={{ show: 250, hide: 400 }}
							>
								<img src={process.env.PUBLIC_URL + '/mastercard_inverse.svg'} />
							</OverlayTrigger>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip id='button-tooltip-2'>JCB</Tooltip>}
								delay={{ show: 250, hide: 400 }}
							>
								<img src='jcb_inverse.svg' />
							</OverlayTrigger>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip id='button-tooltip-2'>PayPal</Tooltip>}
								delay={{ show: 250, hide: 400 }}
							>
								<img src='paypal_inverse.svg' />
							</OverlayTrigger>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip id='button-tooltip-2'>VISA</Tooltip>}
								delay={{ show: 250, hide: 400 }}
							>
								<img src='visa_inverse.svg' />
							</OverlayTrigger>
							<OverlayTrigger
								placement='top'
								overlay={<Tooltip id='button-tooltip-2'>Amazon Pay</Tooltip>}
								delay={{ show: 250, hide: 400 }}
							>
								<img src='amazon_inverse.svg' />
							</OverlayTrigger>
						</div>
					</div>
				</div>
				<div className='footer-header'>
					<div className='footer-header-info'>Categories</div>
					<div className='footer-items footer-category' onClick={() => onClickCategory('men clothing')}>
						Mens Clothing{' '}
					</div>
					<div className='footer-items footer-category' onClick={() => onClickCategory('women clothing')}>
						Women clothing
					</div>
					<div className='footer-items footer-category' onClick={() => onClickCategory('electronics')}>
						Electronics
					</div>
					<div className='footer-items footer-category' onClick={() => onClickCategory('jewelery')}>
						Jewelery
					</div>
				</div>
				<div className='footer-header'></div>
				<div className='footer-header'>
					<div className='footer-header-info'> Let’s stay in touch</div>
					<div className='subscribe'>
						<input id='emails' type='email' placeholder='Your email address' className='sub-input' />
						<button className='sub-btn'>Subscribe</button>
					</div>
					<div className='footer-items'></div>
					<div className='footer-items'>Keep up to date with our latest news and special offers.</div>
				</div>
			</div>
			<hr />
			<div className=' footer-details'>
				<div>© 2020, Little Tags Website</div>
				<div className='rights'>All Rights Reserved.</div>
			</div>
		</div>
	);
};
