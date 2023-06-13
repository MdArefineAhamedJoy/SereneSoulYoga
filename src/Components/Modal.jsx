import React, { useState } from 'react';

const DayButton = ({id}) => {
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');

  console.log(id)

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/admin/feedBack', {
      method: 'POST',
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



  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Day Button
      </button>
      {showModal && (
        <div className="fixed  inset-0 flex items-center justify-center z-50">
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
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 block mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DayButton;


