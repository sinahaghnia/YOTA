import { createPortal } from "react-dom";

export default function LayoutPortal({children}){
    return createPortal(children , document.body);
}