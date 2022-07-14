import React from 'react';
import { usePagination, DOTS } from '../../helpers/usePagination';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    return (
        <div className='mt-3 flex justify-end items-center bg-white pagination-container'>
            <div className="pr-6 text-gray-400 page_info">
                Səhifə {currentPage}. Cəmi - 3 ({totalCount} Qeyd)
            </div>

            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    {paginationRange.map(pageNumber => {
                        if (pageNumber === DOTS) {
                            return <li key="dots" className="px-2.5 py-1 dots">&#8230;</li>;
                        }

                        return (
                            <li className={(pageNumber === currentPage) ? 'px-2.5 py-1 bg-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-700 active ' : 'px-2.5 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700'} key={pageNumber}
                                onClick={() => onPageChange(pageNumber)}>
                                {pageNumber}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
