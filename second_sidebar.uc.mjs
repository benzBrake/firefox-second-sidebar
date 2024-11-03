import { SidebarController } from "./second_sidebar/sidebar_controller.mjs";

const TIMEOUT = 1000;

const STYLE = `
    #browser {
      position: relative;

      --sidebar-2-button-icon-size: 32px;
      --sidebar-2-main-padding: 4px;
      --sidebar-2-main-width: calc(var(--sidebar-2-button-icon-size) + 2 * var(--toolbarbutton-outer-padding) + 2 * var(--sidebar-2-main-padding));
      --sidebar-2-box-padding: 4px;
    }
    #sidebar-2-main {
      display: flex;
      flex-direction: column;
      gap: 8px;
      order: 7;
      overflow: scroll;
      padding: 0 var(--sidebar-2-main-padding) 0 var(--sidebar-2-main-padding);
    }

    #sidebar-2-main-web-panel-buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .sidebar-2-main-button > .toolbarbutton-icon {
      width: 32px !important;
      height: 32px !important;
    }

    #sidebar-2-box {
      order: 6;
      background-color: var(--toolbar-bgcolor);
      width: 500px;
      z-index: 3;
      padding-block-end: var(--space-small);
    }

    #sidebar-2-box[pinned="false"] {
      position: absolute;
      background-color: transparent;
      height: 100%;
      right: var(--sidebar-2-main-width);
      padding-block-start: var(--sidebar-2-box-padding);
      padding-block-end: calc(var(--space-small) + var(--sidebar-2-box-padding));
      padding-inline-end: var(--sidebar-2-box-padding);
    }

    #sidebar-2 {
      box-shadow: var(--content-area-shadow);
      border-radius: var(--border-radius-medium);
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    #sidebar-2-toolbar {
      display: flex;
      flex-direction: row;
      gap: 8px;
      padding: 4px;
      background-color: var(--toolbar-bgcolor);
      color: var(--toolbar-color);
    }

    #sidebar-2-toolbar-title {
      display: flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
    }

    #sidebar-2-toolbar-pin-button {
      transform: scale(-1, 1);
    }

    #sidebar-2-web-panels {
      width: 100%;
      height: 100%;
    }

    .web-panel {
      width: 100%;
      height: 100%;
    }

    #sidebar-2-splitter {
      order: 5;
    }

    #sidebar-2-splitter[pinned="false"] {
      display: none;
    }

    #sidebar-2-web-panel-popup-new-multiview {
      display: flex;
      flex-direction: row;
    }

    #sidebar-2-web-panel-popup-new-multiview-input {
      width: 200px;
    }

    #sidebar-2-web-panel-popup-edit-multiview {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    #sidebar-2-web-panel-popup-edit-multiview-buttons-row {
      justify-content: center;
      width: 100%;
    }
  `;

class SecondSidebar {
  constructor() {
    SidebarController.inject();
    this.decorate();
  }

  decorate() {
    const style = document.createElement("style");
    style.innerHTML = STYLE;
    document.querySelector("head").appendChild(style);
  }
}

var interval = setInterval(() => {
  if (document.querySelector("#browser")) {
    window.second_sidebar = new SecondSidebar();
    window.SecondSidebarController = SidebarController;
    clearInterval(interval);
  }
}, TIMEOUT);
