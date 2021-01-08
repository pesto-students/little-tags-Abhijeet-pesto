import { ReactElement, useEffect, useState } from 'react';
import './Product.css';
import { ProductDesc, SIZE } from '../../components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	openLoginModal,
	selectItemById,
	addToCart,
	CartItem,
	InventoryItem,
	addNewToast,
	NewToastParams,
	deleteFromCart,
} from '../../slices';
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
	const [addedToCart, setAddedToCart] = useState(false);
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

	const onAddToCartClick = () => {
		if (isAuthenticatedUser) {
			const item: CartItem = {
				id: Number(productId),
				name: product.title,
				price: product.price,
				size,
				quantity: quantity,
				imgUrl: product.image,
			};

			const message: NewToastParams = {
				title: 'success',
				message: 'Product added to cart.',
			};
			dispatch(addToCart(item));
			dispatch(addNewToast(message));
			setAddedToCart(true);
		} else {
			dispatch(openLoginModal());
		}
	};

	const onDeleteFromCartClick = () => {
		const message: NewToastParams = {
			title: 'info',
			message: 'Product removed from cart.',
		};
		dispatch(deleteFromCart(productId));
		dispatch(addNewToast(message));
		setAddedToCart(false);
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
					addedToCart={addedToCart}
					onAddToCart={onAddToCartClick}
					onDeleteFromCart={onDeleteFromCartClick}
					onQuantityChange={onQuantityChange}
					onSizeChange={onSizeChange}
				/>
			</div>
		</div>
	);
};
