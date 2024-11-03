import { PanelMultiView } from "./panel_multi_view.mjs";
import { XULElement } from "./xul_element.mjs";

export class Panel extends XULElement {
  /**
   *
   * @param {object} params
   * @param {string?} params.id
   * @param {Array<string>} params.classList
   */
  constructor({ id = null, classList = [] } = {}) {
    super("panel", { id, classList: [...classList, "panel-no-padding"] });
  }

  /**
   *
   * @param {string} type
   * @returns {Panel}
   */
  setType(type) {
    return this.setAttribute("type", type);
  }

  /**
   *
   * @param {string} role
   * @returns {Panel}
   */
  setRole(role) {
    return this.setAttribute("role", role);
  }

  /**
   *
   * @returns {Panel}
   */
  hidePopup() {
    this.element.hidePopup();
    return this;
  }

  /**
   *
   * @param {XULElement} target
   * @param {string} position
   * @returns {Panel}
   */
  openPopup(target, position = "bottomright topright") {
    this.element.openPopup(target.getXUL(), position);
    return this;
  }
}
