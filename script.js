document.addEventListener("DOMContentLoaded", function() {
    const menuData = [
        {"title": "home", "url": "/"},
        {"title": "producten", "url": "/producten/"},
        {"title": "Over ons", "url": "/overons/"},
        {"title": "contact", "url": "/contact/"}
    ];

    function createMenu(menuItems) {
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");

        menuItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = item.title;
            a.href = item.url;
            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        document.body.prepend(nav);
    }

    createMenu(menuData);
});
