import { Component } from "../../../framework/components/component.js";


export class OptionsComponent extends Component {


  constructor() {
    super(import.meta.url)
  }
  parent =  document.querySelector('#equalizer')
  closeEvent = new CustomEvent("closeEq");
  openEvent = new CustomEvent("openEq");

  init() {
    //#region obtencion de Buttons
    let element = this
    let btnEq = this.shadowRoot.querySelector("#btn_eq");
    let btnEqSel = this.shadowRoot.querySelector("#btn_eqsel");
    let btnMod = this.shadowRoot.querySelector("#btn_mod");
    let btnModSel = this.shadowRoot.querySelector("#btn_modsel");
    let btnRandom = this.shadowRoot.querySelector("#btn_random");
    let btnRandomSel = this.shadowRoot.querySelector("#btn_randomsel");
    let btnRepeat = this.shadowRoot.querySelector("#btn_repeat");
    let btnRepeatSel = this.shadowRoot.querySelector("#btn_repeatsel");
  //#endregion
  //#region cambios de estado
 
    btnEq.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnEqSel.classList.toggle("oculto");
      element.parent.dispatchEvent(element.openEvent);

    });
    btnEqSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnEq.classList.toggle("oculto");
      element.parent.dispatchEvent(element.closeEvent);
    });

    btnMod.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnModSel.classList.toggle("oculto");

    });
    btnModSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnMod.classList.toggle("oculto");

    });

    btnRandom.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRandomSel.classList.toggle("oculto");

    });

    btnRandomSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRandom.classList.toggle("oculto");

    });

    
    btnRepeat.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRepeatSel.classList.toggle("oculto");

    });
    btnRepeatSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRepeat.classList.toggle("oculto");

    });

  //#endregion


  }
  changes() {

  }

}