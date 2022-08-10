import React from 'react';
import { Row, Col } from 'reactstrap';
import { SalesSummary, Feeds } from '../../components/dashboard-components'; 

const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    {/* <Projects /> */}
                </Col>
            </Row>
            
        </div>
    );
}

export default Starter;
