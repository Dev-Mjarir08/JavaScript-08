 let carouselItem = document.querySelectorAll('.carousel-item');
 let Index = 0;

 const nextButton = () => {
        carouselItem[Index].classList.remove('active')
    ;
        if (Index >= carouselItem.length - 1) {
            Index = 0;
        }
        else {
            ++Index;
        }  
    carouselItem[Index].classList.add('active');
    }

 const prevButton = () => { 
    carouselItem[Index].classList.remove('active');
    if (Index <= 0) {
        Index = carouselItem.length - 1;
    }
    else {
        --Index;
    }  
    carouselItem[Index].classList.add('active');
 }
