
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));


function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!');
    }
    // select the elements we need

    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;
    modal.addEventListener('click', handleClickOutside);
   
    images.forEach(image =>                            // These are our Event Listeners!
        image.addEventListener('click', e => showImage(e.currentTarget))
    );

    images.forEach(image => {                         // loop over each image
        image.addEventListener('keyup', e => {        // attach an event listener for each image
            if (e.key === 'Enter') {                  // when that is keyup'd, check if it was enter
                showImage(e.currentTarget);           // if it was, show that image

            }
        });
    });

    function showImage(el) {
        if (!el) {
            console.info('no image to show');
            return;
        }
        console.log(el);                            // update the modal with this info
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    function openModal() {
        console.info('Opening Modal...');
        if (modal.matches('.open')) {                  // First check if the modal is already open
            console.info('Madal already open');
            return;                                    // stop the function from running
        }
        modal.classList.add('open');

        // Event listeners to be bound when we open the modal:
        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }
    function handleKeyUp(event) {
        if (event.key === 'Escape') return closeModal();
        if (event.key === 'ArrowRight') return showNextImage();
        if (event.key === 'ArrowLeft') return showPrevImage();
    }
    function showNextImage() {
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);   //it like if else  ||
    }
    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);    //it like if else  ||
    }

    function closeModal() {
        modal.classList.remove('open');
        // TODO: add event listeners for clicks and keyboard..
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

   

    


}

