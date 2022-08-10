import React, { useState } from 'react';
import './ui.components.css';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ProductIn = () => {
    
    const [input, setInput] = useState({
        name: '',
        desc: '',
        price: '',
        realprice: '',
        img: '',
    });
    
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
    
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
        axios.post("http://localhost:5001/productinTo", NewProductIn)
        toast.success("Mahsulotingiz bazaga kiritildi")
    } 
    
    return (
        <>
        <ToastContainer />
            <Form style={{background: 'white'}}>
                <i className="mdi mdi-plus mr-2" style={{fontSize: '20px', fontWeight: '700'}}>Mahsulot qo'shish </i>
                <FormGroup>
                    <Label for="name">
                            Mahsulot nomi
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={handleChange}
                        value={input.name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="desc">
                        Mahsulot tasnifi
                    </Label>
                    <Input
                        id="desc"
                        name="desc"
                        rows={5}
                        required
                        type="textarea"
                        onChange={handleChange}
                        value={input.desc}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">
                            Mahsulot narxi
                    </Label>
                    <Input
                        id="price"
                        type="number"
                        name="price"
                        required
                        onChange={handleChange}
                        value={input.price}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="realprice">
                            Mahsulot tannarxi
                    </Label>
                    <Input
                        type="number"
                        id="realprice"
                        name="realprice"
                        onChange={handleChange}
                        value={input.realprice}
                    />
                </FormGroup>
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
                                        onChange={handleChange} 
                                        value={input.img}
                                    />
                                    <span>(jpg, jpeg yoki png)</span>
                                </>
                            )}
                        </div>
                        {imgPreview && <button className="btn btn-danger" onClick={() => setImgPreview(null)}>O'chirish</button>}
                </FormGroup>
                <button type="submit" className="btn btn-success mt-4" onClick={handleClick} >Saqlash</button>
            </Form>
        </>
    );
}

export default ProductIn;
