import React, { useEffect, useState } from 'react';
import {
    Table,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

const Alerts = () => {
    // For Dismiss Button with Alert
    // const [visible, setVisible] = useState(true);
    // const onDismiss = () => {
    //     setVisible(false);
    // }

    const [order, setOrder] = useState([
        {
            name: "",
            phone: "",
            email: "",
            select: "",
            quantity: "",
        },
    ]);

    useEffect(() => {
        fetch("/orderget")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then((data) => setOrder(data));
    }, []);

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-chart-areaspline mr-2"> Buyurtmalar</i>
                 </CardTitle>
                <CardBody className="">
                    <div className="mt-3">
                        <Table  bordered hover responsive size="" >
                            <thead>
                                <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    F.I.O
                                </th>
                                <th>
                                    TELEFON RAQAM
                                </th>
                                <th>
                                    EMAIL
                                </th>
                                <th>
                                    MAHSULOT NOMI
                                </th>
                                <th>
                                    MAHSULOT MIQDORI
                                </th>
                                </tr>
                            </thead>
                            { order.map((item, index) => (
                                <tbody>
                                    <tr>
                                    <th scope="row" key={item}>{index + 1}</th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.phone}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.select}
                                    </td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Alerts;
