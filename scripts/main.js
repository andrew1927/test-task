(function() {

    let elTabMenu,
        elPagesWrapper,
        elCloseImagePopupButton,
        elLargeImage,
        elImagePopupWrapper,
        elGalleryCollection,
        elTabButtonCollection,
        elTabPageCollection;

    init();

    function init() {
        initElements();
        initPopup();
        initTabbar();
        initGallery();
    }

    function initElements() {
        try {
            elTabMenu = getElementById("tab-menu");
            elPagesWrapper = getElementById("pages-wrapper");
            elCloseImagePopupButton = getElementById("close-image-popup");
            elLargeImage = getElementById("large-image");
            elImagePopupWrapper = getElementById("image-popup-wrapper");

            elGalleryCollection = getElementsByClass("image-wrapper");
            elTabButtonCollection = getElementsByClass("tab-button");
            elTabPageCollection = getElementsByClass("tab-page");
        } catch (e) {
            console.error("Failed to init elements: " + e.message);
        }
    }

    function getElementById(id) {
        const element = document.getElementById(id);
        if (!element) {
            throw new Error(`No element "${id}"`);
        }
        return element;
    }

    function getElementsByClass(className) {
        const elements = document.getElementsByClassName(className);
        if (elements.length == 0) {
            throw new Error(`No elements with class name "${className}"`);
        }
        return elements;
    }

    function initPopup() {
        elCloseImagePopupButton.addEventListener("click", ()=>{
            closeImagePopup(elImagePopupWrapper);
        });
    }

    function initTabbar() {
        Array.prototype.forEach.call(elTabButtonCollection, (item, i)=>{
            item.addEventListener("click",  function(){
                const elActiveButton = elTabMenu.getElementsByClassName("active")[0];
                const elActivePage = elPagesWrapper.getElementsByClassName("active")[0];
                elActiveButton.classList.remove("active");
                elActivePage.classList.remove("active");

                event.currentTarget.classList.add("active");
                elTabPageCollection[i].classList.add("active");
            });
        });
    }

    function initGallery() {
        Array.prototype.forEach.call(elGalleryCollection, (item)=>{
            item.addEventListener("click", ()=>{
                const image = item.getElementsByTagName("img")[0].src;
                openImagePopup(elImagePopupWrapper, image);
            })
        });
    }

    function openImagePopup(element, image){
        elLargeImage.src = image;

        if(!element.classList.contains("open"))
            element.classList.add("open");
    }

    function closeImagePopup(element) {
        if(element.classList.contains("open"))
            element.classList.remove("open");
    }

})();



