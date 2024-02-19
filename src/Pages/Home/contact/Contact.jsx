// import React from 'react';
import { useForm } from 'react-hook-form'
import { useContactByEmailMutation } from '../../../Redux/features/User/UserApi'
import Swal from 'sweetalert2'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [contactUs] = useContactByEmailMutation()
  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: 'plz wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await contactUs(data).unwrap()
      console.log(res)
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
    return (
        <div className="max-w-md mx-auto p-6 my-4 bg-white rounded-lg shadow-lg"
         id = 'contact'>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" {...register('email', { required: 'Email is required' })} className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                    <input type="text" id="subject" {...register('subject', { required: 'Subject is required' })} className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500" />
                    {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea id="message" {...register('message', { required: 'Message is required' })} rows="5" className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"></textarea>
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>
                <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
