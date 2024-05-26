import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CheckoutSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip Code is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
 
});

const Checkout = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-6">Checkout</h1>
      <Formik
        initialValues={{ name: '', address: '', city: '', state: '', zip: '', email: '', phone: '' }}
        validationSchema={CheckoutSchema}
        onSubmit={values => {
          // Handle form submission
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field
                name="name"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <Field
                name="address"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <Field
                name="city"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="city" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
              <Field
                name="state"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="state" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
              <Field
                name="zip"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="zip" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <Field
                name="phone"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage name="phone" component="div" className="text-red-600 text-sm" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      
    </div>
    
  );
};

export default Checkout;

// import React from 'react';
// import { useSelector } from 'react-redux';

// const Checkout = () => {
//   const cart = useSelector(state => state.cart);

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-6">Checkout</h1>
//       {cart.items.length === 0 ? (
//         <p className="text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.items.map(item => (
//             <div key={item.id} className="border p-4 rounded-lg">
//               <h2 className="text-2xl font-bold">{item.name}</h2>
//               <p className="text-xl">Price: ${item.price}</p>
//               <p className="text-xl">Quantity: {item.quantity}</p>
//             </div>
//           ))}
//           <div className="text-right">
//             <p className="text-xl font-bold">Total: ${cart.total}</p>
//             <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//               Proceed to Payment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Checkout;
