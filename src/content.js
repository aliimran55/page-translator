
import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";

function TranslationPopUp() {
    const [text, setText] = useState("");
    const [translation, setTranslation] = useState("")
    async function translateText(textToTranslate) {
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|de`
        );
        const data = await response.json();
        setTranslation(data.responseData.translatedText);
    }
    useEffect(() => {
        function handleMouseUp(){
            const selectedText = window.getSelection().toString().trim();
            setText(selectedText);
            if (selectedText !== "") {
                translateText(selectedText);
            }
        }
        document.addEventListener("mouseup", handleMouseUp);
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    return (
        <>
        {text !== "" && <div id="page-translator-popup"> {translation} </div>}
        </>
    );
}

let root = document.createElement("div");
root.id = "page-translator-root";
document.body.appendChild(root);

const reactRoot = createRoot(root);
reactRoot.render(<TranslationPopUp />);

