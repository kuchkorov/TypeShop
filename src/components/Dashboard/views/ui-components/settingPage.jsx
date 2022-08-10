import React from 'react';
import {
    Form, 
    FormGroup,
    Label, 
    Input, 
    Col
} from 'reactstrap';


const Cards = () => {

    function handleClick (e) {
        e.preventDefault();
    }
    return (
        <>
       <Form style={{backgroundColor: '#fff'}}>
       <i className="mdi mdi-credit-card-multiple" style={{fontSize: '20px', fontWeight: '700'}}><span> Sozlash</span> </i>
            <FormGroup row>
                <Label for="name" sm={2}> Ism </Label>
                <Col sm={10}><Input id="name" name="name" type="name"/></Col>
            </FormGroup>    

            <FormGroup row>
                <Label
                    for="LastName"
                    sm={2}
                    >
                Familiya
                </Label>
                <Col sm={10}>
                <Input
                    id="LastName"
                    name="LastName"
                    type="text"
                />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="eamil"
                    sm={2}
                    >
                E-Mail
                </Label>
                <Col sm={10}>
                <Input
                    id="email"
                    name="email"
                    type="email"
                />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="password"
                    sm={2}
                    >
                Parol
                </Label>
                <Col sm={10}>
                <Input
                    id="password"
                    name="password"
                    type="password"
                />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label
                    for="compairPassword"
                    sm={2}
                    >
                Parolni tekshirish
                </Label>
                <Col sm={10}>
                <Input
                    id="compairPassword"
                    name="compairPassword"
                    type="compairPassword"
                />
                </Col>
            </FormGroup>
            <button className="btn btn-success mt-4" onClick={handleClick} >Saqlash</button>
        </Form>
        </>
    );
}

export default Cards;


