//Object named photoslideshow thats reps functionalitt of slideshow
let photoSlideShow = {
    //array called photolist that contains names of the photos as strings
    photoList: ['photo1.jpeg', 'photo2.jpeg', 'photo3.jpeg', 'photo4.jpeg'],
    //An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    currentPhotoIndex: 0,
    //A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
    nextPhoto: function(){
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        }
    },
    //A prevPhoto() function that does the same thing, but backwards.
    prevPhoto: function (){
        if(this.currentPhotoIndex > 0 ){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
          } else{
           console.log("End of slideshow");
          }

    },
    //A function getCurrentPhoto() that returns the current photo from the list.
    getCurrentPhoto: function (){
        return this.photoList[this.currentPhotoIndex];
    }
};
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();