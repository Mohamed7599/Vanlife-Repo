import React from 'react';
import { useParams } from 'react-router-dom';
import useVansData from '../../HOOKS/UseVans';

const VansDetails = () => {
    const { id } = useParams();
    const van = useVansData(id);
    return (
        <div>
            Vans Details
        </div>
    );
}

export default VansDetails;
