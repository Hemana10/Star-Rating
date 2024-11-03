import './App.css';

function App() {

  const stars = Array(5).fill(0);

  const handleClick = (index: number) => {
    let starLinks = document.querySelectorAll('a');
    let i;
    for(i = 0; i <= index; i++) {
        (starLinks[i] as HTMLElement).classList.remove('empty-star');
        (starLinks[i] as HTMLElement).classList.add('highlighted-star');
    }
    for(; i < starLinks.length; i++) {
      (starLinks[i] as HTMLElement).classList.remove('highlighted-star');
      (starLinks[i] as HTMLElement).classList.add('empty-star');
    }
  };

  const handleHover = (index: number) => {
    let starLinks = document.querySelectorAll('a');
    for(let i = 0; i <= index; i++) {
      if(!(starLinks[i] as HTMLElement).classList.contains('hover-star')) {
        (starLinks[i] as HTMLElement).classList.remove('empty-star');
        (starLinks[i] as HTMLElement).classList.add('hover-star');
      }
    }
  };

  const handleLeave = () => {
    let starLinks = document.querySelectorAll('a');
    for(let i = 0; i < starLinks.length; i++) {
      (starLinks[i] as HTMLElement).classList.remove('hover-star');
      (starLinks[i] as HTMLElement).classList.add('empty-star');
    }
  };

  const renderEmptyStars = stars.map((star, index) => 
    <a key={index} onClick={() => handleClick(index)} className='hover:cursor-pointer empty-star'
      onMouseEnter={() => handleHover(index)}  onMouseLeave={() => handleLeave()}>
    </a>
  );

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div>
          <div className='flex justify-center items-center'>
            <span className='font-mono text-3xl'>Please leave a rating!!!</span>
          </div>
          <div className='flex'>
            {renderEmptyStars}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


