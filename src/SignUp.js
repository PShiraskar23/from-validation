// import { useState } from 'react';
import FormInput from './FormInput';
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormCheckBox from './FromCheckBox';

const SignUp = () => {

    const validate=Yup.object({
        firstName:Yup.string().min(3).max(25).required(),
        lastName:Yup.string().min(3).max(25).required(),
        email:Yup.string().email().required(),
        phone:Yup.number().min(10).required(),
        age:Yup.number().required(),
        // cv:Yup.required("file is required"),
        orgnization:Yup.string().required(),
        experience:Yup.number().min(10).required(),
        password:Yup.string().min(8).max(16).required(),
        gender: Yup.string().required('Gender is required'),
    })

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                age:"",
                sex:"",
                country:"",
                cv:"",
                hobbies:"",
                orgnization:"",
                experience:"",
                password:""
            }}

            validationSchema={validate}

            onSubmit={(values,action)=>{
                swal("Great!", "Registration Successful!", "success");
                console.log(values)
                action.resetForm()
            }}
        >
            { () => (
                
                    <Form>
                    <FormInput label="Firstname" name="firstName" type="text" />
                    <FormInput label="Lastname" name="lastName" type="text" />
                    <FormInput label="Email" name="email" type="email" />
                    <FormInput label="Phone Number" name="phone" type="number" />
                    <FormInput label="Age" name="age" type="number" />
                    <FormRadio label="Sex" name="sex" type="radio"/>
                   <FormSelect label="Country" name="country" type="select"/>
                    <FormInput label="CV" name="cv" type="file" />
                    <FormCheckBox label="Hobbies" name="hobbies" type="checkBox"/>
                    <FormInput label="Orgnization" name="orgnization" type="text" />
                    <FormInput label="Experience" name="experience" type="number" />
                    <FormInput label="Password" name="password" type="password" />
                    <button className='btn'>Register</button>                    
                    </Form>
 
            )}
        </Formik>
    )
}
export default SignUp;
