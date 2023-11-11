export default h;
function h(params) {
    if (typeof params === "string") {
        return document.createTextNode(params);
    }
    const element = document.createElement(params.type);
    if (Array.isArray(params.classList)) {
        element.classList.add(...params.classList);
    }
    if (params.attributes) {
        Object.entries(params.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    if (params.listeners) {
        Object.entries(params.listeners).forEach(([key, value]) => {
            element.addEventListener(key, value);
        });
    }
    if (params.children) {
        params.children.forEach((child) => {
            element.appendChild(h(child));
        });
    }
    return element;
}
