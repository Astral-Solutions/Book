import React from 'react';

const LoadingBook = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
            <div className="w-40 h-40 flex items-center justify-center">
                <img
                    src="/images/bookOpening.gif"
                    alt="Loading..."
                    loading="lazy"
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default LoadingBook;
