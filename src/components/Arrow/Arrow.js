import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Arrow.scss'

const Arrow = ({ onClick, orientation }) => {
    return (
        <button onClick={onClick} className='arrow' aria-label="arrow">
            <FontAwesomeIcon icon={orientation === 'right' ? faArrowRight : faArrowLeft} />
        </button>
    );
}

export default Arrow;