
import React from "react";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { franc } from "franc";

function TranslationPopUp() {
    const [text, setText] = useState("");
    const [translation, setTranslation] = useState("")
    async function translateText(textToTranslate) {
        const language = franc(textToTranslate)
        if(language !== "eng"){
            setTranslation("");
            return;
        }
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|de`
        );
        const data = await response.json();
        setTranslation(data.responseData.translatedText);
    }
    useEffect(() => {
        function handleMouseUp() {
        const selectedText = window.getSelection().toString().trim().slice(0, 500);

        setText(selectedText);
        setTranslation("");

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
        {translation !== "" && <div id="page-translator-popup"> {translation} </div>}
        </>
    );
}

let root = document.createElement("div");
root.id = "page-translator-root";
document.body.appendChild(root);

const reactRoot = createRoot(root);
reactRoot.render(<TranslationPopUp />);

