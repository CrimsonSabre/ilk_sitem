function showAchievements() {
  clearUI();
  text.innerHTML = `
    <h3>🏆 Başarılar</h3>
    <p>${has("rare_death") ? "✅" : "🔒"} Nadir Ölüm</p>
    <p class="small">Başarılar yalnızca oyun sonlarında açılır.</p>
  `;
  addButton("⬅ Geri", showMenu);
}
unlock("rare_death");
addButton("❌ Çıkış", showMenu);
function exitGame() {
  window.location.href = "../../index.html";
}
