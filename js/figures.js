// cSpell:disable
let categoryIndex = 0;


addCategory("MXTX Figures")
.addFigure('reachheart.webp', 'Until I Reach Your Heart', "Owned")
.addFigure('amonglotus.webp', 'Among The Lotus', "Owned")
.addFigure('xl.jpg', 'Xie Lian', "Owned")
.addFigure('hc.jpg', 'Hua Cheng', "Owned")
.addFigure('wwx.webp', 'Wei Wuxian DX', "Owned")
.addFigure('lwj.webp', 'Lan Wangji DX', "Owned")
.addFigure('yllzwwx.webp', 'YLLZ Wei Wuxian', "Owned")


addCategory("Shoujo / Game Nendoroids")
.addFigure('hollowknight.webp', 'Hollow Knight', "Ordered")
.addFigure('marius.webp', 'Marius von Hagen', "Ordered")
.addFigure('aether.webp', 'Aether', "Owned")
.addFigure('lumine.webp', 'Lumine', "Owned")
.addFigure('ozymandias.webp', 'Ozymandias <br>Fate Grand Order', "Owned")
.addFigure('link.webp', 'Link <br>Breath of the Wild', "Owned")
.addFigure('sylvanas.webp', 'Sylvanas <br>World of Warcraft', "Owned")
    
.addFigure('zag.jpg', 'Zagreus <br>Hades', "Owned")
.addFigure('kogitsunemaru.webp', 'Kogitsunemaru <br>Touken Ranbu', "Owned")
.addFigure('mizuki.webp', 'Mikazuki <br>Touken Ranbu', "Owned")
.addFigure('joker.webp', 'Joker <br>Persona 5', "Owned")
.addFigure('shirogane.webp', 'Shirogane Miyuki', "Owned")
.addFigure('kaguya.webp', 'Shinomiya Kaguya', "Owned")
.addFigure('miyamura.webp', 'Miyamura Izumi <br>Horimiya', "Owned")
    
.addFigure('miku.webp', 'Miku Nakano <br>Quintessential Quintuplets', "Sold")


addCategory("Shounen Figures")
.addFigure('yuta.webp', 'Okkotsu Yuta', "Owned")
.addFigure('gojo.webp', 'Gojo Satoru', "Owned")

.addFigure('eren.webp', 'Eren Yeager', "Owned")
.addFigure('mikasa.webp', 'Mikasa Ackerman', "Owned")
.addFigure('levi.webp', 'Levi Ackerman', "Owned")
.addFigure('s4eren.webp', 'Eren Yeager (Season 4)', "Owned")
.addFigure('todoroki.webp', 'Shoto Torodoki Movie Ver. <br>My Hero Academia', "Owned")

.addFigure('muichironendo.webp', 'Tokito Muichiro', "Ordered")
.addFigure('giyu.webp', 'Tomioka Giyu', "Owned")
.addFigure('rengoku.webp', 'Rengoku Kyojuro', "Owned")
.addFigure('uzui.jpg', 'Uzui Tengen', "Owned")
.addFigure('muichiro.webp', 'Chokonose Muichiro', "Owned")
.addFigure('giyuchoko.webp', 'Chokonose Giyu T.', "Owned")
    
.addFigure('02.webp', 'Zero Two <br>Darling in the Franxx', "Owned")
    
.addFigure('dumpling.webp', 'Gyoza Fairy <br>Dorohedoro', "Owned")


function closeFigure() {
    const el = document.getElementById("preview");
    el.firstChild.remove();
    el.style.display = "none";

}

function showFigure(imageName) {
    const el = document.getElementById("preview");
    el.setAttribute("onClick", "closeFigure()");
    el.setAttribute("oncontextmenu", "return false;");
    el.style.display = "flex";
    const img = new Image();
    img.src = `images/figures/${imageName}`;
    el.append(img);
}



function statusToIconName(status) {
    if (status === "waiting") return 'schedule';
    if (status === "owned") return 'done';
    if (status === "shipped") return 'local_shipping';
    if (status === "ordered") return 'shopping_bag';
    if (status === "sold") return 'monetization_on';
}

function addCategory(title, url) {
    categoryIndex++;
    let currentIndex = categoryIndex;

    const contentEl = document.querySelector(".content");
    const categoryTagType = url ? 'a': 'div';

    const categoryTitleEl = `<${categoryTagType} class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</${categoryTagType}>`;
    contentEl.innerHTML+=(categoryTitleEl);

    const categoryEl = document.createElement("div");
    categoryEl.id = `category-${currentIndex}`
    categoryEl.classList.add("category");
    contentEl.append(categoryEl);

    this.addFigure = (figureImage, figureTitle, figureStatus) => {
        const iconName = () => {
            const lowercaseFigure = figureStatus.toLowerCase();
            return statusToIconName(lowercaseFigure);           
        }

        const el = `
            <div class="figure-item">
                <img oncontextmenu="return false;" onClick="showFigure('${figureImage}')" src="images/figures/${figureImage}" loading="lazy" alt="${figureTitle}" />
                <div class="figure-title">${figureTitle}</div>
                <div class="status ${figureStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${figureStatus}</div>
            </div>
        `;
        document.getElementById(categoryEl.id).innerHTML+= el;
        return this;
    }

    return this;
}
function addInlineCategory() {
    categoryIndex++;
    let currentIndex = categoryIndex;

    const contentEl = document.querySelector(".content");


    const categoryEl = document.createElement("div");
    categoryEl.id = `category-${currentIndex}`
    categoryEl.classList.add("category", "inline");
    contentEl.append(categoryEl);

    this.addFigure = (title, url, figureImage, figureTitle, figureStatus) => {
        const iconName = () => {
            const lowercaseFigure = figureStatus.toLowerCase();
            return statusToIconName(lowercaseFigure);
        }

        const el = `
            <div class="figure-outer">
                <a class="category-title" href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
                <div class="figure-item">
                    <img oncontextmenu="return false;" onClick="showFigure('${figureImage}')" src="images/figures/${figureImage}" loading="lazy" alt="${figureTitle}" />
                    <div class="figure-title">${figureTitle}</div>
                    <div class="status ${figureStatus.toLowerCase()}"><span class="material-icons">${iconName()}</span>${figureStatus}</div>
              </div>
           </div>
        `;
        document.getElementById(categoryEl.id).innerHTML+= el;
        return this;
    }

    return this;
}


const categoryEl = document.querySelector(".figure-item");
const contentEl = document.querySelector(".content")


const moveTitle = () => {
    const categoryLeft = categoryEl.getBoundingClientRect().left;
    const contentLeft = contentEl.getBoundingClientRect().left;

    document.querySelectorAll(".category-title").forEach(el => {
        if (el.parentElement.classList.contains("figure-outer")) return;
        el.style.transform = `translate(${categoryLeft - contentLeft}px, 0)`;
    });
}

moveTitle();

window.addEventListener("resize", moveTitle)
