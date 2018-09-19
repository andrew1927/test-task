(function() {

let elTabAboutButton,
    elTabPhotosButton,
    elClosePopupButton,
    elFirstPage,
    elSecondPage,
    elLargePhotoPopup,
    elImagePopup;

const elPhotoGalleryWrapperCollection = document.getElementsByClassName("photo-wrapper");

try {
    elTabAboutButton = getElementById("about-btn");
    elTabPhotosButton = getElementById("photos-btn");
    elClosePopupButton = getElementById("close-popup");
    elFirstPage = getElementById("first-page");
    elSecondPage = getElementById("second-page");
    elLargePhotoPopup = getElementById("large-photo-popup");
    elImagePopup = getElementById("image-popup");

} catch (e) {
    console.error('Failed to init elements: ' + e.message);
}

function getElementById(id) {
    const element = document.getElementById(id);
    if (element.length == 0) {
        throw new Error(`No element "${id}"`);
    }
    return element;
}

function openPopup(element){
    if(!element.classList.contains("open"))
        element.classList.add("open");
}

function closePopup(element) {
    if(element.classList.contains("open"))
        element.classList.remove("open");
}

function addLargePhoto (collection){
    for(let i = 0; i<collection.length; i++){
        let elChosenPhoto = collection[i];
        elChosenPhoto.addEventListener("click",()=>{
            openPopup(elImagePopup);
            elLargePhotoPopup.src = elChosenPhoto.getElementsByTagName("img")[0].src;
        });
    }
}

elTabAboutButton.addEventListener("click",()=>{
    if(!elTabAboutButton.classList.contains("active")&& elTabPhotosButton.classList.contains("active"))
        elTabAboutButton.classList.add("active");
        elTabPhotosButton.classList.remove("active");

        elFirstPage.classList.add("active");
        elSecondPage.classList.remove("active");
});

elTabPhotosButton.addEventListener("click",()=>{
    if(!elTabPhotosButton.classList.contains("active") && elTabAboutButton.classList.contains("active")){
        elTabPhotosButton.classList.add("active");
        elTabAboutButton.classList.remove("active");

        elSecondPage.classList.add("active");
        elFirstPage.classList.remove("active");
    }
});

elClosePopupButton.addEventListener("click", ()=>{
    closePopup(elImagePopup);
});

addLargePhoto(elPhotoGalleryWrapperCollection);

})();