import React from 'react'

import { Link } from 'react-router-dom';


const Popular = () => {
  return (
    <div>
        <div className="popular">
    <div className="progress">
        <div className="progress-1">
            <span>Web Development</span>
            <div className="progress-bar progress-1-bar"></div>
        </div>

        <div className="progress-2">
            <span>Branding</span>
            <div className="progress-bar progress-2-bar"></div>
        </div>

        <div className="progress-3">
            <span>Machine Learning</span>
            <div className="progress-bar progress-3-bar"></div>
        </div>

        <div className="progress-4">
            <span>Development</span>
            <div className="progress-bar progress-4-bar"></div>
        </div>
    </div>

    {/* follow buttons */}
    <div className="follows-main">
        
       
    <div className="heading-follow">
    Follow for more Updates
</div>
<div className="follow-us">
    Follow Me____

    <div className="buttons">
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                <path d="M23.953 4.57c-.885.392-1.83.656-2.825.775a4.931 4.931 0 0 0 2.163-2.724c-.95.556-2.005.964-3.127 1.184a4.922 4.922 0 0 0-8.433 4.482A13.94 13.94 0 0 1 1.671 3.149a4.922 4.922 0 0 0 1.523 6.573 4.894 4.894 0 0 1-2.224-.616v.062c0 2.23 1.585 4.1 3.688 4.527a4.926 4.926 0 0 1-2.224.084c.629 1.956 2.445 3.375 4.594 3.414a9.867 9.867 0 0 1-6.102 2.103c-.396 0-.789-.023-1.178-.067A13.947 13.947 0 0 0 7.548 21c9.059 0 14.006-7.497 14.006-13.986 0-.213-.005-.425-.014-.637A10.037 10.037 0 0 0 24 4.59a9.835 9.835 0 0 1-2.847.775 4.926 4.926 0 0 0 2.164-2.724z"/>
            </svg>
        </a>

        <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                <path d="M22.675 0h-21.35C.92 0 0 .92 0 2.025v21.95C0 23.08.92 24 2.025 24h21.95C23.08 24 24 23.08 24 21.975V2.025C24 .92 23.08 0 22.675 0zm-3.175 12h-3.575v10H13.5V12h-2.7V9.75h2.7V7.5c0-2.275 1.325-3.5 3.325-3.5.975 0 1.825.075 2.075.125v2.4h-1.425c-1.125 0-1.5.75-1.5 1.5V9.75h2.7L19.5 12z"/>
            </svg>
        </a>

        <a href="https://instagram.com/leptop_tz" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm6 12c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zm2-8c0 .553-.447 1-1 1s-1-.447-1-1 .447-1 1-1 1 .447 1 1zm-2.5 8c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5 4.5-2 4.5-4.5z"/>
            </svg>
        </a>

        <a href="https://x.com/leptop_tz" target="_blank" rel="noopener noreferrer" className="social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
                <path d="M23.44 4.834c-.885.392-1.83.656-2.825.775 1.012-.607 1.794-1.57 2.163-2.724-.951.556-2.005.964-3.127 1.184-.895-.956-2.169-1.553-3.568-1.553-2.699 0-4.865 2.199-4.865 4.916 0 .385.045.761.127 1.124-4.043-.203-7.634-2.136-10.038-5.081-.42.726-.659 1.568-.659 2.468 0 1.704.869 3.203 2.187 4.086-.807-.026-1.566-.247-2.229-.616v.061c0 2.37 1.688 4.348 3.926 4.8-.411.112-.84.171-1.283.171-.313 0-.618-.03-.916-.086.619 1.926 2.417 3.33 4.55 3.367-1.669 1.309-3.774 2.093-6.059 2.093-.394 0-.783-.023-1.167-.067 2.153 1.373 4.725 2.175 7.475 2.175 8.974 0 13.877-7.431 13.877-13.867 0-.211-.005-.425-.014-.637.951-.688 1.773-1.547 2.426-2.538z"/>
            </svg>
        </a>
    </div>
</div> </div>




</div>


    </div>
  )
}

export default Popular