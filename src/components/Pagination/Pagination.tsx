import { ReactElement, useState, useCallback, useEffect } from 'react';
import './Pagination.css';
import classNames from 'classnames';

export interface Pager {
	currentPage: number;
	startPage: number;
	endPage: number;
	currentStartIndex: number;
	currentEndIndex: number;
	pageNumbers: number[];
	noOfPages: number;
}

const defaultProps = {
	itemsPerPage: 5,
};

type PaginationProps = {
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (arg: Pager) => void;
} & typeof defaultProps;

export const Pagination = ({ totalItems, itemsPerPage, onPageChange }: PaginationProps): ReactElement => {
	const [pager, setPager] = useState<Pager>({} as Pager);

	const getPager = useCallback((totalItems: number, currentPage: number, pageSize: number): Pager => {
		const totalPages = Math.ceil(totalItems / pageSize);
		const startPage = Math.max(1, Math.min(totalPages - 4, currentPage - 2));
		const endPage = Math.min(totalPages, Math.max(5, currentPage + 2));

		const startIndex = (currentPage - 1) * pageSize;
		const endIndex = Math.min(totalItems, startIndex + pageSize);
		const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

		return {
			currentPage: currentPage,
			startPage: startPage,
			endPage: endPage,
			currentStartIndex: startIndex,
			currentEndIndex: endIndex,
			pageNumbers: pages,
			noOfPages: totalPages,
		};
	}, []);

	useEffect(() => {
		const newPager = getPager(totalItems, 1, itemsPerPage);
		setPager(newPager);
	}, [totalItems, itemsPerPage, getPager]);

	const setPage = (page: number) => {
		if (page < 1 || page > pager.noOfPages || page === pager.currentPage) {
			return;
		}

		const newPager = getPager(totalItems, page, itemsPerPage);
		setPager(newPager);
		onPageChange(newPager);
	};

	return (
		<div className='pagination-container'>
			<div className='prev-btn-container'>
				<button
					type='button'
					className='btn'
					disabled={pager.currentPage === 1}
					onClick={() => setPage(pager.currentPage - 1)}
				>
					&lt;&lt;Previous
				</button>
			</div>
			<div className='navigation-container'>
				{pager.pageNumbers &&
					pager.pageNumbers.map((num) => (
						<span key={num}>
							<button
								className={classNames({
									btn: true,
									active: pager.currentPage === num,
									'pagination-nav-btn': true,
								})}
								onClick={() => setPage(num)}
							>
								{num}
							</button>
						</span>
					))}
			</div>
			<div className='next-btn-container'>
				<button
					type='button'
					className='btn'
					disabled={pager.currentPage === pager.noOfPages}
					onClick={() => setPage(pager.currentPage + 1)}
				>
					Next{'>>'}
				</button>
			</div>
		</div>
	);
};

Pagination.defaultProps = defaultProps;
