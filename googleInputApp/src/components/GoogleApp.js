import React from "react";

const GoogleApp = () => {
  return (
    <React.Fragment>
      <section>
        <div className='bg-white w-auto h-96 mx-5 mt-40 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto'>
            {/* header section */}
            <div className='h-32 shadow flex justify-center items-center'>
                <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJB-pQ6jXIzpB0gLwhpzt0FMXVi6tbfWMqg&usqp=CAU'
                 alt='image'/>

            </div>


            {/* body section */}
            <div className='mt-16 grid justify-center'>
                <div className='relative'>
                    <input
                    type='text'
                    required
                    className='h-20 w-96 text-4xl rounded-lg outline-none pl-6 transition duration-200'
                    />
                    <p className='text-3xl absolute top-4 left-6 transition duration-200 bg-white px-2 inputText'>Name</p>
                </div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GoogleApp;
