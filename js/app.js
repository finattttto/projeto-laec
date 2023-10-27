import { footerComponent } from "./components/footer.js";
import { headerComponent } from "./components/header.js";

window.onload = function(){
    document.getElementById('appHeader').innerHTML = headerComponent;
    document.getElementById('appFooter').innerHTML = footerComponent;
}