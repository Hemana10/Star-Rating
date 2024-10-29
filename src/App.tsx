import './App.css';

function App() {

  const stars = Array(5).fill(0);

  const handleClick = (index: number) => {
    let starLinks = document.querySelectorAll('a');
    let i;
    for(i = 0; i <= index; i++) {
      (starLinks[i] as HTMLElement).classList.add('bg-yellow-500');
    }
    for(; i < starLinks.length; i++) {
      (starLinks[i] as HTMLElement).classList.remove('bg-yellow-500');
    }
  };

  const handleHover = (index: number) => {
    let starLinks = document.querySelectorAll('a');
    for(let i = 0; i <= index; i++) {
      if(!(starLinks[i] as HTMLElement).classList.contains('bg-yellow-500'))
        (starLinks[i] as HTMLElement).classList.add('bg-yellow-200');
    }
  };

  const handleLeave = () => {
    let starLinks = document.querySelectorAll('a');
    for(let i = 0; i < starLinks.length; i++) {
      (starLinks[i] as HTMLElement).classList.remove('bg-yellow-200');
    }
  };

  const renderEmptyStars = stars.map((star, index) => 
    <a key={index} onClick={() => handleClick(index)} onMouseEnter={() => handleHover(index)}  onMouseLeave={() => handleLeave()}  className='hover:cursor-pointer'>
      <img src="https://static.thenounproject.com/png/1299464-512.png" alt="empty star" className='h-24 w-24'/> 
    </a>

  );

  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div>
          <div className='flex justify-center items-center'>
            <span>Please Leave a Rating!!</span>
          </div>
          <div className='flex' >
            {renderEmptyStars}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;


