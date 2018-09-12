let elTabAboutButton,
    elTabPhotosButton,
    elClosePopupButton,
    elProfileAboutPage,
    elProfilePhotosPage,
    elBgSelectedImage,
    elLargePhotoPopup,
    elPhotoPopup;

const elPhotoGalleryWrapperCollection = document.getElementsByClassName("photo-gallery-wrapper");

try {
    elTabAboutButton = getElementByClass('about');
    elTabPhotosButton = getElementByClass("photos");
    elClosePopupButton = getElementByClass("close-popup");
    elProfileAboutPage = getElementByClass("profile-about-page");
    elProfilePhotosPage = getElementByClass("profile-photos-page");
    elBgSelectedImage = getElementByClass("bg-selected-image");
    elLargePhotoPopup = getElementByClass("large-photo-popup");
    elPhotoPopup = getElementByClass("photo-popup");

} catch (e) {
    console.error('Failed to init elements: ' + e.message);
}

function getElementByClass(className) {
    const elements = document.getElementsByClassName(className);
    if (elements.length == 0) {
        throw new Error(`No element "${className}"`);
    }
    return elements[0];
}

function openPopup(){
    if(!elPhotoPopup.classList.contains("open"))
        elPhotoPopup.classList.add("open");
}

function closePopup() {
    if(elPhotoPopup.classList.contains("open"))
        elPhotoPopup.classList.remove("open");
}

function addLargePhoto (collection){
    for(let i = 0; i<collection.length; i++){
        let elChosenPhoto = collection[i];
        elChosenPhoto.addEventListener("click",()=>{
            openPopup();
            elLargePhotoPopup.src = elChosenPhoto.getElementsByTagName("img")[0].src;
        });
    }
}

elTabAboutButton.addEventListener("click",()=>{
    if(!elTabAboutButton.classList.contains("active")&& elTabPhotosButton.classList.contains("active"))
        elTabAboutButton.classList.add("active");
        elTabPhotosButton.classList.remove("active");

        elProfileAboutPage.classList.add("active");
        elProfilePhotosPage.classList.remove("active");
});

elTabPhotosButton.addEventListener("click",()=>{
    if(!elTabPhotosButton.classList.contains("active") && elTabAboutButton.classList.contains("active")){
        elTabPhotosButton.classList.add("active");
        elTabAboutButton.classList.remove("active");

        elProfilePhotosPage.classList.add("active");
        elProfileAboutPage.classList.remove("active");
    }
});

elClosePopupButton.addEventListener("click", ()=>{
    closePopup();
});

addLargePhoto(elPhotoGalleryWrapperCollection);
closePopup();