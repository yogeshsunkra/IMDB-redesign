import React from 'react'

const Skeleton = ({ loading, children, className = "", skeletonClass="" }) => {
    if (!loading) {

        return (
            <div className={`${className}`}>
                {children}
            </div>
        )

    }

    return (
        <div
            className={`rounded-xl ${className} animate-pulse  bg-dark-2/30  ${skeletonClass} min-h-6`}
        />
    );
};

export default Skeleton


