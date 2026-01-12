document.addEventListener("DOMContentLoaded", function () {

   
    const page = document.body.getAttribute("data-page");

    if (!sessionStorage.getItem("welcomeShown")) {
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");
    sessionStorage.setItem("welcomeShown", "true");
}

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#ffdd99";
        });

        link.addEventListener("mouseout", function () {
            if (!this.classList.contains("active")) {
                this.style.color = "white";
            }
        });

        link.addEventListener("click", function () {
            menuLinks.forEach(l => {
                l.classList.remove("active");
                l.style.color = "white";
                l.style.borderBottom = "none";
            });

            this.classList.add("active");
            this.style.color = "#ffdd99";
            this.style.borderBottom = "3px solid #ffdd99";
        });
    });

  
    menuLinks.forEach(link => {
        if (link.getAttribute("href")?.includes(page)) {
            link.classList.add("active");
            link.style.color = "#ffdd99";
            link.style.borderBottom = "3px solid #ffdd99";
        }
    });

    
    const themes = ["theme-sea", "theme-sand", "theme-summer", "theme-marina"];
    let themeIndex = 0;
    const themeBtn = document.getElementById("theme-btn");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeIndex = themes.indexOf(savedTheme);
        if (themeIndex === -1) themeIndex = 0;
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.remove(...themes);
            document.body.classList.add(themes[themeIndex]);
            localStorage.setItem("theme", themes[themeIndex]);
            themeIndex = (themeIndex + 1) % themes.length;
        });
    }

   
    let likes = localStorage.getItem("likes") || 0;
    const likeBtn = document.getElementById("like-btn");
    const likeCount = document.getElementById("like-count");

    if (likeCount) likeCount.textContent = likes;

    if (likeBtn) {
        likeBtn.addEventListener("click", function () {
            likes++;
            localStorage.setItem("likes", likes);
            likeCount.textContent = likes;
        });
    }

   
    

    
    const images = document.querySelectorAll(".container img");

    images.forEach(img => {
        img.classList.add("clickable-img");

        img.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});


const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !message) {
            formMessage.textContent = "Lütfen tüm alanları doldurun.";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = "Mesajınız başarıyla gönderildi.";
            formMessage.style.color = "green";
            form.reset();
        }
    });
}


const activities = [
    {
        title: "Yoga Dersi",
        img: "https://www.visittci.com/core/grace-bay-beach-yoga-class_600x400.jpg",
        desc: "Sabaha huzurlu başlayın, profesyonel eğitmenlerle nefes ve beden çalışmaları yapın."
    },
    {
        title: "Sahil Yürüyüşü",
        img: "https://greatruns.com/wp-content/uploads/2016/09/mission-beach-thing-to-do-700x438.jpg",
        desc: "Deniz manzarası eşliğinde enerji dolu bir sabah yürüyüşü."
    },
    {
        title: "Bisiklet Turu",
        img: "https://lovevelo.travel/_next/image?url=https%3A%2F%2Fdedicated-angel-d0555d950b.media.strapiapp.com%2FPortugal_10_04912407b4.jpg&w=1440&q=75",
        desc: "Sahil boyunca bisiklet sürerek marina çevresini keşfedin."
    },
    {
        title: "Tekne Turu",
        img: "https://www.grandlady.com/img/boat-at-sunset.jpg",
        desc: "Gün batımında marina çevresinde keyifli bir tekne gezisi."
    },
    {
        title: "Açık Hava Pilatesi",
        img: "https://glamadelaide.com.au/wp-content/uploads/2022/01/online-pilates-hero.jpg",
        desc: "Sahil kenarında açık hava pilatesi ile gününüze zinde başlayın."
    },
    {
        title: "Meditasyon",
        img: "https://www.st-martin.org/assets/uploads/sites/3/2024/09/dsc09233.jpg",
        desc: "Sessiz ve huzurlu bir alanda meditasyon ile zihninizi boşaltın."
    },
    {
        title: "Akşam Konseri",
        img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/surfcityusa/28c872ff_c466_47a8_8c57_72063fec5356_6dcf1abf-7308-4a98-86d3-d8b7a384d74c.jpg",
        desc: "Ünlü sanatçılarla açık hava konserlerinde eğlenceyi doruklarda yaşayın."
    },
    {
        title: "Gastronomi Etkinliği",
        img: "https://yekakademi.com/wp-content/uploads/2024/09/Ascilik-Ustalik-Belgesi.jpg",
        desc: "Fine dining restoranlarda özel tatlar ve workshoplarla gastronomi deneyimi."
    },
    {
        title: "Sahil Sinema",
        img: "https://i0.wp.com/www.capemay.com/blog/wp-content/uploads/2015/07/Beach-Movie.jpg?ssl=1",
        desc: "Yıldızlar altında sahil sinemasında film keyfi."
    },
    {
        title: "Canlı Müzik",
        img: "https://www.barefootbeachcafe.com/wp-content/uploads/2021/11/BarefootBoys2-1080x675.jpg",
        desc: "Marina kafelerinde canlı müzik eşliğinde keyifli akşam saatleri."
    }
];

const activityList = document.getElementById("activityList");

if (activityList) {
    activities.forEach(item => {
        activityList.innerHTML += `
            <div class="activity-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="hover-box">
                    <h3 class="hover-title">${item.title}</h3>
                    <div class="hover-info">${item.desc}</div>
                </div>
            </div>
        `;
    });
}


const dailyActivities = [
    "Güne sahilde hafif bir yürüyüşle başlayın.",
    "Sahil kenarında açık hava pilatesi yapın.",
    "Marina kafelerinde dinlenin.",
    "Gün batımında tekne turuna katılın.",
    "Canlı müzikle akşamı tamamlayın."
];

const dailyPlan = document.getElementById("dailyPlan");

if (dailyPlan) {
    dailyActivities.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        dailyPlan.appendChild(li);
    });
}


const aboutReasons = [
    "Geniş ve güvenli sahil yürüyüş alanları",
    "Profesyonel bisiklet yolu ve kiralama noktaları",
    "Düzenli konserler ve sosyal etkinlikler",
    "Zengin gastronomi deneyimi",
    "Aile dostu etkinlik alanları",
    "Sürdürülebilir modern mimari"
];

const aboutList = document.getElementById("about-list");

if (aboutList) {
    aboutReasons.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        aboutList.appendChild(li);
    });
}
document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("hover-title")) {
        const info = e.target.parentElement.querySelector(".hover-info");
        if (info) {
            info.style.opacity = "1";
            info.style.transform = "translateY(-50%)";
        }
    }
});

document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("hover-title")) {
        const info = e.target.parentElement.querySelector(".hover-info");
        if (info) {
            info.style.opacity = "0";
            info.style.transform = "translateY(-60%)";
        }
    }
});