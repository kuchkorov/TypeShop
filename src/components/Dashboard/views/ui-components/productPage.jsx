import React, { useEffect, useState } from 'react';
import './ui.components.css';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Table, CardImg, Card, CardBody, CardTitle, Row, Col} from 'reactstrap';

const ProductPage = () => {

    const [ productpage, setProductpage ] = useState([
        {
            name: "",
            desc: "",
            price: "",
            realprice: "",
            img: ""
        } 
    ]);

    const deleteProduct = (id) => {
        axios.delete("http://localhost:5001/delete/" + id );
        toast.error("Product was deleted successfull")
        console.log("Contact wea delete successfull")
    }

    useEffect(() => {
            fetch("/productpageget")
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then((data) => setProductpage(data))
                .catch(err => console.log(err))
        }, []);
 
    return (
        <div className="ProductPage">
            <ToastContainer />
            <Row>
                <Col xs="12" md="12">
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3">
                            <i className="mdi mdi-cart mr-2">Mahsulotlar </i>
                            <button className="btn btn-success" style={{float: 'right'}}><NavLink to="/productIn" className=" mdi mdi-plus mr-2 text-white">Qo'shish</NavLink></button>
                        </CardTitle>
                        <CardBody className="">
                            <div className="">
                                <Table  bordered responsive size="" >
                                    <thead>
                                        <tr>
                                            <th>
                                                №
                                            </th>
                                            <th>
                                                Rasm
                                            </th>
                                            <th>
                                                Mahsulot nomi
                                            </th>
                                            <th>
                                                Tasnifi
                                            </th>
                                            <th>
                                                Narxi (so'm)
                                            </th>
                                            <th>
                                                Tannarxi (so'm)
                                            </th>
                                            <th>
                                                Tahrirlash
                                            </th>
                                        </tr>
                                    </thead>
                                        { productpage?.map ((item, index) => (
                                            <tbody  style={{textAlign: 'justify'}} >
                                                <tr key={item._id}>
                                                    <th scope="row" key={item}>
                                                        {index + 1}
                                                    </th>
                                                    <td>
                                                        <CardImg src={item.img} center />
                                                    </td>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td>
                                                        {item.desc}
                                                    </td>
                                                    <td>
                                                        {item.price}
                                                    </td>
                                                    <td>
                                                        {item.realprice}
                                                    </td>
                                                    <td>
                                                        <div className="productEditer">
                                                           <NavLink to=""></NavLink> <span className="btn btn-success mdi mdi-border-color mr-2"></span>
                                                            <span className="btn btn-danger mdi mdi-delete" onClick={() => deleteProduct(item._id) }></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                </Table>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductPage;
