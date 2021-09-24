const galleryItems = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

const galleryRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const lightboxImageRef = document.querySelector(".lightbox__image");

const dataOriginal = [];

const createdGallery = galleryItems.reduce((acc, img) => {
    dataOriginal.push(img);
    let imgEl = `<li class="gallery__item"><a class="galleryLink"><img src="${img.preview}" alt="${img.description}" class="gallery__image"></a></li>`;
    return acc + imgEl;
}, "");

galleryRef.insertAdjacentHTML("beforeend", createdGallery);

galleryRef.addEventListener("click", (evt) => {
    galleryItems.forEach((el) => {
        if (evt.target.alt === el.description) {
            lightboxImageRef.src = el.original;
            lightboxImageRef.alt = el.description;
        }
        lightboxRef.classList.add("is-open");
    });
});

const buttonClose = document.querySelector(".lightbox__button");

buttonClose.addEventListener("click", (evt) => {
    lightboxRef.classList.remove("is-open");
    lightboxImageRef.src = "";
    lightboxImageRef.alt = "";
    return;
});

const lightboxOverlay = document.querySelector(".lightbox__overlay");
lightboxOverlay.addEventListener("click", (evt) => {
    lightboxRef.classList.remove("is-open");
    lightboxImageRef.src = "";
    lightboxImageRef.alt = "";
    return;
});







// const imgTag = document.querySelector("img");
// console.log(imgTag);

// function listenerModal() {
//     if (imgTag.classList === "is-open") {
//         const lightboxOverlay = document.querySelector(".lightbox__overlay");
//         lightboxOverlay.addEventListener("click", (evt) => {
//             lightboxRef.classList.remove("is-open");
//             lightboxImageRef.src = "";
//             lightboxImageRef.alt = "";s
//             return;
//         });

//         window.addEventListener("keydown", (event) => {
//             const currentIndex = dataOriginal.indexOf(lightboxImageRef.src);

//             switch (event.key) {
//                 case "ArrowLeft":
//                     leftClick(currentIndex);
//                     break;
//                 case "ArrowRight":
//                     rightClick(currentIndex);
//                     break;
//                 case "Escape":
//                     lightboxRef.classList.remove("is-open");
//                     lightboxImageRef.src = "";
//                     lightboxImageRef.alt = "";
//                     break;

//                 default:
//                     break;
//             }
//         });
//     }
// }

window.addEventListener("keydown", (event) => {
    const currentIndex = dataOriginal.indexOf(lightboxImageRef.src);

    switch (event.key) {
        case "ArrowLeft":
            leftClick(currentIndex);
            break;
        case "ArrowRight":
            rightClick(currentIndex);
            break;
        case "Escape":
            lightboxRef.classList.remove("is-open");
            lightboxImageRef.src = "";
            lightboxImageRef.alt = "";
            break;

        default:
            break;
    }
});

function leftClick() {
    console.log((nextIndex -= 1));
    lightboxImageRef.src = dataOriginal[nextIndex].original;
}

let nextIndex = 0;
function rightClick() {
    console.log((nextIndex += 1));
    lightboxImageRef.src = dataOriginal[nextIndex].original;
}

// function leftClick(currentIndex) {
//     if (currentIndex + 1 > galleryItems.length - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex += 1;
//     }
//     lightboxImageRef.src = dataOriginal[currentIndex].original;
// }

// function rightClick(currentIndex) {
//     if (currentIndex - 1 > 0) {
//         currentIndex = dataOriginal.length - 1;
//     } else {
//         currentIndex -= 1;
//     }
//     lightboxImageRef.src = dataOriginal[currentIndex].original;
// }
