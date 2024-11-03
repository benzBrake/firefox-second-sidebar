import { Input } from "./xul/input.mjs";
import { Panel } from "./xul/panel.mjs";
import { PanelMultiView } from "./xul/panel_multi_view.mjs";
import { SidebarController } from "./sidebar_controller.mjs";
import { WebPanel } from "./web_panel.mjs";
import { WebPanelButton } from "./web_panel_button.mjs";
import { WebPanelNewButton } from "./web_panel_new_button.mjs";

export class WebPanelPopupNew extends Panel {
  constructor() {
    super({ id: "sidebar-2-web-panel-popup-new" });
    this.setType("default").setRole("group");
    this.input = this.#createInput();
    this.multiView = this.#createMultiView();
  }

  /**
   *
   * @returns {PanelMultiView}
   */
  #createMultiView() {
    const multiView = new PanelMultiView({
      id: "sidebar-2-web-panel-popup-new-multiview",
    }).appendChild(this.input);

    this.appendChild(multiView);
    return multiView;
  }

  /**
   *
   * @returns {Input}
   */
  #createInput() {
    const input = new Input({
      id: "sidebar-2-web-panel-popup-new-multiview-input",
    }).setType("text");

    input.addEventListener("keyup", (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        const url = input.getValue();
        this.hidePopup();
        const webPanel = new WebPanel(url);
        const webPanelButton = new WebPanelButton(webPanel);
        SidebarController.webPanelButtons.appendChild(webPanelButton);
        SidebarController.webPanels.add(webPanel).save();
        SidebarController.switch(webPanel);
      }
    });

    return input;
  }

  /**
   *
   * @param {WebPanelNewButton} target
   */
  openPopup(target) {
    this.input.setValue("https://");
    Panel.prototype.openPopup.call(this, target);
  }
}
