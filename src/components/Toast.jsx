import React from 'react';

const Toast = (props) => {
	return(
<div className="rounded z-20 absolute top-1 left-1 right-1 py-2 px-3 mx-2 bg-red-200 flex items-center space-x-2 font-custom">
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<g stroke="#ff0000" strokeLinecap="round" strokeWidth="0.5">
		<path fill="#ff0000" fillOpacity="0" strokeDasharray="60" strokeDashoffset="60" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.25s" values="60;0" />
			<animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.075s" values="0;0.3" />
		</path>
		<path fill="none" strokeDasharray="8" strokeDashoffset="8" d="M12 7V13">
			<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.1s" values="8;0" />
			<animate attributeName="stroke-width" begin="0.5s" dur="1.5s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="0.5;3;3;0.5;0.5" />
		</path>
	</g>
	<circle cx="12" cy="17" r="1" fill="#ff0000" fillOpacity="0">
		<animate fill="freeze" attributeName="fill-opacity" begin="0.4s" dur="0.2s" values="0;1" />
		<animate attributeName="r" begin="0.65s" dur="1.5s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="1;2;2;1;1" />
	</circle>
</svg>
      <p className="text-xl">{props.message || "password Doesnt Match"}</p>
    </div>
		)
    
};

export default Toast;