/**
 *  вью для главной
 */
export class IndexView {
    /**
     * Конструктор
     */
    constructor() {}

    /**
    * рендерит главную страничку
    * @param {Object} root
    */
    render(root) {
        // eslint-disable-next-line no-undef
        root.innerHTML = nunjucks.render('../../../views/index.njk');
    }
}
