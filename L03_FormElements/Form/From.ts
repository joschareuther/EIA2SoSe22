namespace Form {
  window.addEventListener("load", hndLoad);
  let slider: HTMLInputElement;

  function hndLoad(_event: Event): void {
    slider = <HTMLInputElement>document.getElementById("slider");
    slider.addEventListener("change", hndChange);
    console.log(slider);
  }

  function hndChange(_event: Event): void {
    // console.log(slider.value);
    let formdata: FormData = new FormData(document.forms[0]);

    for (let entry of formdata.entries())
    console.log(entry);
  }
}