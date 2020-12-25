import tshirt from '../assets/images/tShirts.jpg';
import jeans from '../assets/images/jeans.jpg';
import backpack from '../assets/images/backpack.jpg';
import necklace from '../assets/images/necklace.jpg';

export const PRODUCTS: {
	[key: string]: { title: string; imgPath: string; imgAlt: string };
} = {
	TSHIRT: {
		title: 'T Shirt',
		imgPath: tshirt,
		imgAlt: 'T shirt image',
	},
	JEANS: {
		title: 'Jeans',
		imgPath: jeans,
		imgAlt: 'Jeans image',
	},
	BACKPACK: {
		title: 'Backpack',
		imgPath: backpack,
		imgAlt: 'Backpack image',
	},
	NECKLACE: {
		title: 'Charm necklace',
		imgPath: necklace,
		imgAlt: 'Necklace image',
	},
};
