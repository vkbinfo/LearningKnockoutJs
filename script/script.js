//here we can give hard data or can get data with the help of ajax
var initialCatData=[
    {
        name:"Chotti",
        clickCounts:0,
        ImgSrc:"https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        nickNames:[{name:"cute"},{name:"sexy"}]
    },
    {
        clickCounts:0,
        name:'Mast Cat',
        ImgSrc:'https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg',
        nickNames:[{name:"what"},{name:"doom"}]
    },
    {
        clickCounts:0,
        name:'Strong Cat',
        ImgSrc:"https://static.pexels.com/photos/617278/pexels-photo-617278.jpeg",
        nickNames:[{name:"Gori"},{name:"Channa"}]
    },
    {
        clickCounts:0,
        name:'Dizzy Cat',
        ImgSrc:'https://static.pexels.com/photos/96938/pexels-photo-96938.jpeg',
        nickNames:[{name:"Hira"},{name:"Anjana"}]
    }

]




var cat=function(data){
    this.name=ko.observable(data.name);
    this.clickCounts=ko.observable(data.clickCounts);
    this.ImgSrc=ko.observable(data.ImgSrc);
    this.nickNames=ko.observable(data.nickNames);
    //ko computbable is required for automatic update
    this.title=ko.computed(function(){
        if (this.clickCounts()<10){
            return "NewBorn";
        }
        else if(this.clickCounts()>10){
            return "Infant";
        }
        else{
            return "Stupid kid";
        }
    },this)
}

var viewModel=function(){
    // we are changing our context to that from this becuase we are using with
    // in dom.
    var that=this;
    that.catData=ko.observableArray();
    initialCatData.forEach(function(data){
        that.catData().push(new cat(data));
    });
    that.currentCat=ko.observable(that.catData()[2]);
    that.incrementclickCounter=function(){
        //here if we use this, then in dom, this.currentCat().clickCounter()
        //converts into currentCat().currentCat().clickCounter()  because /
        // in dom this is currentCat() not viewModel because of with..awesome
        that.currentCat().clickCounts(that.currentCat().clickCounts()+1);
    };
    that.listItemClick=function(eventObj){
        //eventObj is here is a element of catData, which is a ko watching object/
        console.log(eventObj)
        that.currentCat(eventObj);
    };
}

ko.applyBindings(new viewModel());
