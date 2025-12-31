const SvgPath = () => {
  const handleMouseMove = () => {
    console.log("Mouse moved");
    alert("hello hover");
  };
  
  return (
    <div>
      <div className="string bg-red-300">
        <svg 
          width="500" 
          height="160" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{ display: 'block' }}
        >
          {/* Make sure rect captures events */}
          <rect 
            width="500" 
            height="160" 
            fill="transparent" 
            onMouseEnter={handleMouseMove}
            style={{ pointerEvents: 'all' }}
          />
          
          <path d="M 10 80 Q 95 10 180 80" stroke="white" fill="transparent" />
        </svg>
      </div>
    </div>
  );
};
export default SvgPath