function animateSorting ()
{
  


 const container = document.getElementById('bunchOfTrash');
    console.log(container);
    
    const animItem = bodymovin.loadAnimation
    (
        {
            wrapper:container,
            loop: true,
            autoplay: true,
            path: 'https://assets6.lottiefiles.com/packages/lf20_pi8witpp.json'
            // path:  'https://assets1.lottiefiles.com/packages/lf20_qdmr8wxk.json'
        }

    );

    container.addEventListener('click', () => 
    
    {
        // container.classList.add('hide')
        animItem.goToAndPlay(0, true)
    }
    );


    
    
    
}
// export const greenTruck = animateTruck();


