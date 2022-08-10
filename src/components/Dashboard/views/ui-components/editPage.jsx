import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, Input, Label, Row, Col} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; 

const EditPage = () => {


    
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const [input, setInput] = useState([
        {
            name: "",
            desc: "",
            price: "",
            realprice: "",
            img: "",
        },
    ]);

    const handleChange = (e) => {

        const {name, value} = e.target;
        setInput((prev) => {
            return {
                ...prev, 
                [name]: value
            };
        });

        

    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(input);
        setInput({name: "", desc: "", price: "", realprice: "", img: "" });

        const NewProductIn = {
            name: input.name,
            desc: input.desc,
            price: input.price,
            realprice: input.realprice,
            img: input.img
        }
        // axios.post("http://localhost:5001/productinTo", NewProductIn)
        // toast.success("Mahsulotingiz bazaga kiritildi")
    } 
    
    
    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
            if(selected && ALLOWED_TYPES.includes(selected.type)) {
                let reader = new FileReader();
                reader.onloadend = () => {
                    setImgPreview(reader.result);
                }
                reader.readAsDataURL(selected);
            }else {
                setError(true);
            }
    };

    return (
        <>
            <Row>
                <Col xs="12" md="12" sm="12">
                    <Row>
                        <Col  md="6" >
                        <Form style={{background: 'white'}}>
                            <i className="mdi mdi-border-color mr-2"  style={{fontSize: '20px', fontWeight: '700'}}>Tahrirlash </i>
                            <FormGroup>
                                <Label for="name">
                                    Mahsulot nomi
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={input.name}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="desc">
                                    Mahsulot tasnifi
                                </Label>
                                <Input
                                    id="desc"
                                    name="desc"
                                    type="textarea"
                                    rows={5}
                                    value={input.desc}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">
                                    Mahsulot narxi
                                </Label>
                                <Input
                                    id="price"
                                    name="price"
                                    type="text"
                                    value={input.price}
                                    onChange={handleChange}
                                    
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="realPrice">
                                    Mahsulot tannarxi
                                </Label>
                                <Input
                                    id="realPrice"
                                    name="realPrice"
                                    type="realPrice"
                                    value={input.realPrice}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Form>
                        </Col>
                        <Col  md="6">
                        <FormGroup>
                            <Label for="exampleFile">
                            Rasm
                            </Label>
                                {error && <p className="errorMsg">Format to'g'ri kelmaydi</p>}
                                <div className="imgPreview"
                                    style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "#131313"}}>
                                    {!imgPreview && (
                                        <>
                                            <label htmlFor="fileUpload" className="customFileUpload">Fayl tanlash</label>
                                            <input 
                                                type="file" 
                                                id="fileUpload" 
                                                name="image" 
                                                onChange={handleImageChange} 
                                            />
                                            <span>(jpg, jpeg yoki png)</span>
                                        </>
                                    )}
                                </div>
                                {imgPreview && <button className="btn btn-danger mt-3" onClick={() => setImgPreview(null)}>O'chirish</button>}
                        </FormGroup>
                        {/* <Link to="/dashboard" className="btn btn-success mt-3">Saqlash</Link> */}
                        <button type="submit" onClick={handleClick} className="btn btn-success mt-3">Saqlash</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ >
    );
}

export default EditPage;
