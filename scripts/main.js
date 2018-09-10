let elTabAboutButton,
    elTabPhotosButton,
    elProfileAboutPage,
    elProfilePhotosPage;


try {
    elTabAboutButton = getElementByClass('about');
    elTabPhotosButton = getElementByClass("photos");
    elProfileAboutPage = getElementByClass("profile-about-page");
    elProfilePhotosPage = getElementByClass("profile-photos-page");

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