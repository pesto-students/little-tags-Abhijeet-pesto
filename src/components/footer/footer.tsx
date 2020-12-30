import './footer.css';
export const Footer = (): JSX.Element => {
	return (
		<div className='App'>
			<div>
				<div className='bg'>
					<div className='containerFooter'>
						<div>
							<div className='info'>Contact-Info</div>
							<div className='text'>
								<br></br>
								Phone-91-9876-543-210
								<br></br>
								Address: 1418 Riverwood Drive,
								<br></br>
								Suite 3245 Cottonwood,
								<br></br>
								CA 96052, United State
								<br></br>
								<br></br>
								We accept:
								<br></br>
								<div className='imagesContainer'>
									<div className='image'>
										<br></br>
										<img src='mastercard_inverse.svg' />
										<img src='jcb_inverse.svg' />
										<img src='paypal_inverse.svg' />
										<img src='visa_inverse.svg' />
										<img src='amazon_inverse.svg' />
									</div>
								</div>
							</div>
						</div>

						<div className='info'>
							Categories
							<div className='text'>
								<br></br>
								Accessories
								<br></br>
								Jeans
								<br></br>
								Tops
								<br></br>
								Jackets
							</div>
						</div>
						<div className='info'></div>

						<div className='info'>
							Let’s stay in touch
							<div className='text'>
								<div className='input-group'>
									<br></br>
									<input className='form-control width100' />
									<span className='input-group-btn'>
										<button className='btn btn-info subButton text'>Subscribe</button>
									</span>
								</div>
							</div>
							<br></br>
							<div className='text'> Keep up to date with our latest news and special offers.</div>
						</div>
					</div>
					<br></br>
					<br></br>
					<hr></hr>
					<div className='info bottomtags'>
						<div>© 2020, Little Tags Website</div>
						<br></br>
						<div>All Rights Reserved.</div>
					</div>
				</div>
			</div>
		</div>
	);
};
