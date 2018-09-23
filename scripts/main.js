(function() {

let elTabMenu,
    elPagesWrapper,
    elCloseImagePopupButton,
    elLargeImage,
    elImagePopupWrapper;

const elGalleryCollection = document.getElementsByClassName("image-wrapper"),
      elTabButtonCollection = document.getElementsByClassName("tab-button"),
      elTabPageCollection = document.getElementsByClassName("tab-page");

try {
    elTabMenu = getElementById("tab-menu");
    elPagesWrapper = getElementById("pages-wrapper");
    elCloseImagePopupButton = getElementById("close-image-popup");
    elLargeImage = getElementById("large-image");
    elImagePopupWrapper = getElementById("image-popup-wrapper");

} catch (e) {
    console.error('Failed to init elements: ' + e.message);
}

function getElementById(id) {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`No element "${id}"`);
    }
    return element;
}

Array.prototype.forEach.call(elTabButtonCollection, (item,i)=>{
    item.addEventListener("click",  function(){
        const elActiveButton = elTabMenu.getElementsByClassName("active")[0];
        const elActivePage = elPagesWrapper.getElementsByClassName("active")[0];
        elActiveButton.classList.remove("active");
        elActivePage.classList.remove("active");

        event.currentTarget.classList.add("active");
        elTabPageCollection[i].classList.add("active");
    });
});

function openImagePopup(element){
    if(!element.classList.contains("open"))
        element.classList.add("open");
}

function closeImagePopup(element) {
    if(element.classList.contains("open"))
        element.classList.remove("open");
}

function addLargeImage (collection, elPopup, elImage){
    for(let i = 0; i<collection.length; i++){
        let elChosenImage = collection[i];
        elChosenImage.addEventListener("click",()=>{
            elImage.src = elChosenImage.getElementsByTagName("img")[0].src;
            openImagePopup(elPopup);
        });
    }
}

addLargeImage(elGalleryCollection, elImagePopupWrapper,elLargeImage);

elCloseImagePopupButton.addEventListener("click", ()=>{
    closeImagePopup(elImagePopupWrapper);
});

})();

