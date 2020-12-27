import './Home.css';
import { ReactElement } from 'react';
import { InDemand, Layout } from '../../components';
import homeBg from '../../assets/images/homePageBg(1620x1080).jpg';
import { Image } from 'react-bootstrap';

export const Home = (): ReactElement => {
	return (
		<Layout isLoggedIn={false} userName={''} itemsInCart={0} theme='white'>
			<div className='home-container'>
				<div className='main'>
					<div className='main-bg'>
						<Image src={homeBg} alt='clothes' fluid />
					</div>
					<div className='main-title'>
						<div className='heading'>
							<span>Online Flee Market for Clothes</span>
						</div>
						<div className='sub-headeing'>
							<div className='line'></div>
							<div className='sub-heading-text'>
								<span>Its Time to Recycle</span>
							</div>
							<div className='line'></div>
						</div>
					</div>
				</div>
				<div className='in-demand'>
					<div className='demand-section'>
						<InDemand />
					</div>
				</div>
			</div>
		</Layout>
		// <div className='home-container'>
		// 	<div className='main'>
		// 		<div className='main-bg'>
		// 			<Image src={homeBg} alt='clothes' fluid />
		// 		</div>
		// 		<div className='header'>
		// 			<Header isLoggedIn={false} userName={''} itemsInCart={0} />
		// 		</div>
		// 		<div className='main-title'>
		// 			<div className='heading'>
		// 				<span>Online Flee Market for Clothes</span>
		// 			</div>
		// 			<div className='sub-headeing'>
		// 				<div className='line'></div>
		// 				<div className='sub-heading-text'>
		// 					<span>Its Time to Recycle</span>
		// 				</div>
		// 				<div className='line'></div>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='in-demand'>
		// 		<div className='demand-section'>
		// 			<InDemand />
		// 		</div>
		// 	</div>
		// </div>
	);
};
