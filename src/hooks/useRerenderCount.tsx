import React, { useEffect, useRef } from 'react';

export const useRerenderCount = () => {
    const count = useRef(1);
    useEffect(() => {
        count.current += 1;
    });
    return count.current;
};
