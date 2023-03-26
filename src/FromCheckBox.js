import React from 'react'
import { ErrorMessage, useField } from 'formik'

const genders = ['Male', 'Female', 'Other'];

const FormCheckBox = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className='form_container'>
            <div>
                <label className='label' htmlFor={field.name}>{label}</label>

                <input type="checkBox" name="sex" />Cricket
                <input type="checkBox" name="sex" />Football
                <input type="checkBox" name="sex" />Hocky

                <ErrorMessage component="div" name={field.name} className='error' />
            </div>
        </div>
    )
}

export default FormCheckBox
