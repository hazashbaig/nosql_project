// Background.jsx

import React from 'react';
import './slide.css'; // Import your CSS file
import './slide.js'; // Import your JavaScript file

const Background = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="slide.css" />

          <title>Colossal Arts</title>

          <style>
            {`
              body {
                margin: 0;
                padding: 0;
                overflow: hidden;
              }

              .heading {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                padding: 10px;
                text-align: center;
                font-size: 24px;
                filter: brightness(5);
              }

              .slideshow-container {
                position: fixed;
                top: 0;
                overflow: hidden;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1; /* Place it behind the content */
                filter: brightness(0.6);
              }

              .mySlides {
                display: none;
                animation: fade 5s infinite;
              }

              img {
                width: 100%;
              }
            `}
          </style>
        </head>
        <body>
          <div className="heading">
            <h1>COLOSSAL ARTS</h1>
          </div>
          <div>
            <div>
              <div className="slideshow-container">
                {/* Update the src attribute with the correct path to your images */}
                <div className="mySlides fade">
                  <img src="/images/image1.jpg" alt="Image 1" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image2.jpg" alt="Image 2" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image3.jpg" alt="Image 3" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image4.jpg" alt="Image 4" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image5.jpg" alt="Image 5" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image6.jpg" alt="Image 6" />
                </div>
                <div className="mySlides fade">
                  <img src="/images/image7.jpg" alt="Image 7" />
                </div>
              </div>
            </div>
          </div>

          <script src="slide.js"></script>
        </body>
      </html>
    </>
  );
};

export default Background;
