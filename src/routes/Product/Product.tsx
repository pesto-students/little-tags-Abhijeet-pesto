import { ReactElement, useEffect, useState } from 'react';
import './Product.css';
import { ProductDesc, SIZE } from '../../components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginModal, selectItemById, addToCart, CartItem, InventoryItem } from '../../slices';
import { RootState } from '../../rootReducer';
import { CATEGORIES } from '../../utilities';

interface ParamType {
	productId: string;
}

export const Product = (): ReactElement => {
	const { productId } = useParams<ParamType>();
	const product = useSelector((state: RootState) => selectItemById(state, productId)) as InventoryItem;
	const isAuthenticatedUser = useSelector((state: RootState) => state.user.isLoggedIn);
	const showSizeSelector = product?.category === CATEGORIES.MEN || product?.category === CATEGORIES.WOMEN;
	const [size, setSize] = useState(showSizeSelector ? SIZE.MEDIUM : null);
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onQuantityChange = (newQuantity: number) => {
		setQuantity(newQuantity);
	};

	const onSizeChange = (size: SIZE) => {
		setSize(size);
	};

	const onCartBtnClick = () => {
		if (isAuthenticatedUser) {
			const item: CartItem = {
				id: Number(productId),
				name: product.title,
				price: product.price,
				size,
				quantity: quantity,
				imgUrl: product.image,
			};
			dispatch(addToCart(item));
		} else {
			dispatch(openLoginModal());
		}
	};

	return (
		<div className='product-page-container'>
			<div className='product-container'>
				<ProductDesc
					title={product?.title}
					price={product?.price}
					description={product?.description}
					quantity={quantity}
					size={size}
					showSizeSelector={showSizeSelector}
					onAddToCart={onCartBtnClick}
					onQuantityChange={onQuantityChange}
					onSizeChange={onSizeChange}
				/>
			</div>
		</div>
	);
};
