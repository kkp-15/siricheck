const castles = [
    { name: "弘前城", description: "青森県、桜の名所としても有名な城。", map: "https://goo.gl/maps/g8TAYp7XUHP2" },
    { name: "盛岡城", description: "岩手県、現存する石垣が見どころ。", map: "https://goo.gl/maps/CkNzL3AFd7o" },
    // 他のお城の情報を追加
];

function showCastle() {
    const randomIndex = Math.floor(Math.random() * castles.length);
    const castle = castles[randomIndex];

    // HTML要素に情報を表示
    document.getElementById('castle-name').innerText = castle.name;
    document.getElementById('castle-description').innerText = castle.description;
    document.getElementById('castle-map-link').innerHTML = `<a href="${castle.map}" target="_blank">地図リンク</a>`;
}
