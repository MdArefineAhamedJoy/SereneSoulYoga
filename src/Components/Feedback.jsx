import React, { useState } from 'react';

const Feedback = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/admin/feedBack/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
    setFeedback('');
  };

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
       Feedback 
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 shadow-lg rounded">
            <form onSubmit={handleSubmit}>
              <textarea
                value={feedback}
                placeholder="Enter your feedback"
                required
                onChange={handleChange}
                name=""
                id=""
                cols="30"
                rows="10"
                className="p-4 block"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500  mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={handleClose}
                className="bg-red-500 mt-4 mx-3  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;


