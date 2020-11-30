import { Component } from "../../../framework/components/component.js";


export class CommentReplyComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
         //#region Seccion Calificacion
         let replyIcon = this.shadowRoot.querySelector(".comment-reply");
         replyIcon.classList.add("invisible");
         //#endregion

        //#region Score Stars
        let scoreStars = this.shadowRoot.querySelectorAll(".score");

        for (let i = 0; i < scoreStars.length; i++) {
            const scoreStar = scoreStars[i];
            scoreStar.addEventListener("click", score);
            scoreStar.setAttribute("target", i);
        }

        function score() {
            for (let i = 0; i < scoreStars.length; i++) {
                const e = scoreStars[i];
                if(e.classList.contains("scored")) {
                    e.classList.remove("scored");
                }
                if(i <= this.attributes.target.value) {
                    e.classList.add("scored");
                }
            }
        }
        //#endregion

        //#region See more/less icons
        let seeIcons = this.shadowRoot.querySelectorAll(".comment-expand img");
        console.log(seeIcons);

        for (let i = 0; i < seeIcons.length; i++) {
            const seeIcon = seeIcons[i];
            seeIcon.addEventListener("click", mostrar);
            seeIcon.setAttribute("target", i);
        }

        function mostrar() {
            for (let i = 0; i < seeIcons.length; i++) {
                const e = seeIcons[i];
                if(e.classList.contains("oculto")) {
                    e.classList.remove("oculto");
                } else {
                    e.classList.add("oculto");
                }
            }
        }
        //#endregion
    }

    changes() {
        
    }

}