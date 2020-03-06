const Config = {
    name: "user",
    scale: 1,
    Links: [
        [
            "reddit",
            [
                ["r/jailbreak", "https://www.reddit.com/r/jailbreak"],
                ["r/unixporn", "https://www.reddit.com/r/unixporn"],
                ["r/minecraft", "https://www.reddit.com/r/minecraft"]
            ]
        ],
        [
            "video",
            [
                ["netflix", "https://www.netflix.com"],
                ["youtube", "https://www.youtube.com"],
                ["twitch", "https://www.twitch.tv"],
                ["9anime", "https://www.9anime.to"],
            ]
        ],
        [
            "site",
            [
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ],
        [
            "dev",
            [
                ["github", "https://www.github.com"],
                ["gbatemp", "https://www.gbatemp.net"],
                ["link", "https://www.example.com"],
                ["link", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
