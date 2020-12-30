import './Home.css';
import { ReactElement } from 'react';
import { InDemand } from '../../components';
import homeBg from '../../assets/images/homePageBg(1620x1080).jpg';
import { Image } from 'react-bootstrap';

export const Home = (): ReactElement => {
	return (
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
	);
};
