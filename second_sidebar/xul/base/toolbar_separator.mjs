import { XULElement } from "./xul_element.mjs";

export class ToolbarSeparator extends XULElement {
  /**
   *
   * @param {object} params
   * @param {string?} params.id
   * @param {Array<string>} params.classList
   */
  constructor({ id = null, classList = [] } = {}) {
    super("toolbarseparator", { id, classList });
  }
}