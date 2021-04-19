import React, { useState } from 'react';
import Arrow from '../../components/Arrow/Arrow';
import Widget from '../../components/Widget/Widget';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from "prop-types";


const WidgetContainer = ({ weather }) => {
    const [day, setDay] = useState(1)
    return (
        <Container>
            <Row>
                <Col className='content__arrow'>
                    {day !== 0 && <Arrow orientation='left' onClick={() => setDay(day => day - 1)} />}
                </Col>
                <Col lg={8} md={8} sm={8} xl={8} xs={12} >
                    <Widget weather={weather} day={day} />
                </Col>
                <Col className='content__arrow'>
                    {day !== 5 && <Arrow orientation='right' onClick={() => setDay(day => day + 1)} />}
                </Col>
            </Row>
        </Container>
    );
}

WidgetContainer.propTypes = {
    weather: PropTypes.object.isRequired
}

export default WidgetContainer;