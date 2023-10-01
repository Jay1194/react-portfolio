import React from 'react';

const Portfolio = () => {
    return (
        <section>
            <div>
                <h1 class="project-title">Front-End Applications</h1>
            </div>
        <div className="image-container">
            
          {/* Normal Image Placeholders */}
          {Array.from({ length: 15 }, (_, index) => (
            <div key={index} className="image-placeholder">
            {index + 1}  
            </div>
          ))}
        </div>
        </section>
      );
    };

export default Portfolio