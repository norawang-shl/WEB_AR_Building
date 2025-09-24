// 點擊模型會隨機換顏色
AFRAME.registerComponent("change-color-on-click", {
  init: function () {
    this.el.addEventListener("click", () => {
      const mesh = this.el.getObject3D("mesh");
      if (mesh) {
        mesh.traverse((node) => {
          if (node.isMesh) {
            node.material.color.set(
              "#" + Math.floor(Math.random() * 16777215).toString(16)
            );
          }
        });
      }
    });
  },
});

// 啟用互動
document.addEventListener("DOMContentLoaded", () => {
  const building = document.querySelector("#building");
  building.setAttribute("change-color-on-click", "");
});
