import React from 'react'
import { Formik, Form, type FormikHelpers } from 'formik'
import * as Yup from 'yup'
import CustomInput from './customForm/customUserForm'

const initialValues = {
  userFullName: '',
  userEmail: '',
  userPassword: ''
}

const validationSchema = Yup.object().shape({
  userFullName: Yup.string()
    .required('Name is required.')
    .matches(/^[A-Za-z]+([ A-Za-z]+)*$/, { message: 'Please provide a valid name.' }),
  userEmail: Yup.string()
    .required('Email is required.')
    .email('Please provide a valid email address.'),
  userPassword: Yup.string()
    .required('Password is required.')
    .min(8, 'Must be at least 8 characters.')
})

interface FormValues {
  userFullName: string
  userEmail: string
  userPassword: string
}

const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
  console.log(values)
  setSubmitting(false)
}

const TypeInput = [
  { type: 'text', name: 'userFullName', placeholder: 'Name' },
  { type: 'email', name: 'userEmail', placeholder: 'Email' },
  { type: 'password', name: 'userPassword', placeholder: 'Password' }
]

const FormSignup = (): React.ReactElement => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className='w-[280px] sm:w-[360px]'>
        <div className='flex flex-col items-center p-0 gap-6 w-full lg:w-[360px] h-auto rounded-xl'>
          <div className='flex flex-col items-start p-0 gap-5 w-full lg:w-[360px] h-auto '>
            <CustomInput items={TypeInput} />
          </div>
        </div>
        <div className='w-full lg:w-[360px] h-auto flex flex-col items-center lg:items-start lg:pt-[35px] pt-[20px] gap-4'>
          <button
            type='submit'
            className='flex flex-row justify-center items-center px-[10px] py-[18px] gap-2 w-full lg:w-[360px] h-[44px]
              bg-black border-[1px] border-solid shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg '>
            <span className='w-full lg:w-[119px] h-[24px] font-inter font-semibold inline-block text-[16px] leading-6 text-[#ffffff]'>
              Create account
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default FormSignup
