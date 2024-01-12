import React, { useEffect, useState } from 'react'
import "./addpage.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';



function Addpage() {

    const [addData, setAddData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3500/")
            .then(res => res.json())
            .then((data) => setAddData(data))
    }, [])

    function createProduct(values) {
        fetch("http://localhost:3500/", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            getAll()
        })

    }
    function getAll() {
        fetch("http://localhost:3500/")
            .then(res => res.json())
            .then((data) => setAddData(data))
    }

    function handleDelete(id) {
        fetch("http://localhost:3500/" + id, {
            method: "Delete"
        })
            .then((res) => res.json())
            .then((data) => getAll())
    }

    return (
        <div>
            <Helmet>
                <title>Add Page</title>
            </Helmet>

            <Formik
                initialValues={{ image: '', name: '', description: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    name: Yup.string()
                        .required('Required'),
                    description: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    createProduct(values)
                }}
            >
                <Form>
                    <label htmlFor="image">image:</label>
                    <Field name="image" type="text" />
                    <ErrorMessage name="image" />

                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="description">description :</label>
                    <Field name="description" type="description" />
                    <ErrorMessage name="description" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <div className="our_services">
                <div className="our_services_head">
                    <p>Our Services</p>
                </div>
                <div className="our_services_cards">
                    {addData.map((x) => (
                        <div className='our_services_card' key={x._id}>
                            <ul >
                                <div className='image'> <li className={x.image}></li></div>
                                <li>{x.name}</li>
                                <li>{x.description}</li>
                                <li className='learn_more' onClick={() => handleDelete(x._id)}>
                                    <span>Delete </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Addpage
