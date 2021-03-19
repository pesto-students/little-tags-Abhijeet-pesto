import { ReactElement } from 'react';
import './ProductThumbnail.css';
import { Image } from 'react-bootstrap';

interface Props {
	src: string;
	alt?: string;
}

export const ProductThumbnail = ({ src, alt }: Props): ReactElement => {
	return <Image src={src} alt={alt} thumbnail />;
};
