var viewModel=function(){
    this.name=ko.observable("Chotti");
    this.clickCounter=ko.observable(0);
    this.ImgSrc=ko.observable("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg");
    this.incrementclickCounter=function(){
        this.clickCounter(this.clickCounter()+1);
    }
}

ko.applyBindings(new viewModel());
