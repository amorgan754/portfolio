// imports
import { Main } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

// router
const router = new Navigo("/");

// render
function render(state = store.Home){
    document.querySelector("#root").innerHTML = `
    ${Main(state)}
    `;
    router.updatePageLinks();
    afterRender(state);
}

function afterRender(state){
    if (state.view === "Home"){
        document.querySelector("body").addEventListener("click", event => {
            event.preventDefault();
            router.navigate("/About");
        })
    }
}

router
    .on({
        "/": () => render(),
        ":view": params => {
            let view = capitalize(params.data.view);
            if (view in store) {
                render(store[view]);
            } else {
                render(store.Viewnotfound);
                console.log(`View ${view} not defined`);
                }
            }
        })
    .resolve();

