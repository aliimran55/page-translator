
import React from "react";
import { createRoot } from "react-dom/client";

function TranslationPopUp() {
    return (
        <div id="page-translator-popup">
            Hello React
        </div>
    );
}

let root = document.createElement("div");
root.id = "page-translator-root";
document.body.appendChild(root);

const reactRoot = createRoot(root);
reactRoot.render(<TranslationPopUp />);

document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();

    let popUp = document.getElementById("page-translator-popup");

    if (!selectedText) {
        return;
    }

    if (popUp === null) {
        popUp = document.createElement("div");
        popUp.id = "page-translator-popup";
        popUp.textContent = selectedText;
        document.body.appendChild(popUp);
    }

    popUp.textContent = selectedText;
    console.log(selectedText);
});
