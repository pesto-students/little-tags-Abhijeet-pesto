import tshirt from '../assets/images/tShirts.jpg';
import jeans from '../assets/images/jeans.jpg';
import backpack from '../assets/images/backpack.jpg';
import necklace from '../assets/images/necklace.jpg';

export enum CATEGORIES {
	MEN = 'men clothing',
	WOMEN = 'women clothing',
	JEWELERY = 'jewelery',
	ELECTRONIS = 'electronics',
}

export const STATEARR: string[] = [
	'Andaman & Nicobar',
	'Andhra Pradesh',
	'Arunachal Pradesh',
	'Assam',
	'Bihar',
	'Chandigarh',
	'Chhattisgarh',
	'Dadra & Nagar Haveli',
	'Daman & Diu',
	'Delhi',
	'Goa',
	'Gujarat',
	'Haryana',
	'Himachal Pradesh',
	'Jammu & Kashmir',
	'Jharkhand',
	'Karnataka',
	'Kerala',
	'Lakshadweep',
	'Madhya Pradesh',
	'Maharashtra',
	'Manipur',
	'Meghalaya',
	'Mizoram',
	'Nagaland',
	'Orissa',
	'Pondicherry',
	'Punjab',
	'Rajasthan',
	'Sikkim',
	'Tamil Nadu',
	'Tripura',
	'Uttar Pradesh',
	'Uttaranchal',
	'West Bengal',
];

export const PRODUCT_CATEGORIES: {
	[key: string]: { title: string; imgPath: string; imgAlt: string; category: CATEGORIES };
} = {
	MEN: {
		title: `Men's Clothing`,
		imgPath: tshirt,
		imgAlt: 'T shirt image',
		category: CATEGORIES.MEN,
	},
	WOMEN: {
		title: `Women's Clothing`,
		imgPath: jeans,
		imgAlt: 'Jeans image',
		category: CATEGORIES.WOMEN,
	},
	ELECTRONIS: {
		title: 'Electronics',
		imgPath: backpack,
		imgAlt: 'Backpack image',
		category: CATEGORIES.ELECTRONIS,
	},
	JEWELERY: {
		title: 'Jewelery',
		imgPath: necklace,
		imgAlt: 'Necklace image',
		category: CATEGORIES.JEWELERY,
	},
};
