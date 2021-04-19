import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Arrow.scss'
import PropTypes from "prop-types";

const Arrow = ({ onClick, orientation }) => {
    return (
        <button onClick={onClick} className='arrow' aria-label="arrow">
            <FontAwesomeIcon icon={orientation === 'right' ? faArrowRight : faArrowLeft} />
        </button>
    );
}

Arrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    orientation: PropTypes.string
}

export default Arrow;