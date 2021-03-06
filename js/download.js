/*Function to download text to a local file*/
function download(filename, text) {
    var textXML = dijit.byId("dijit_form_SimpleTextarea_1").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/*Function executed once the download button is clicked*/
function downloadClicked() {
    /*Get the value of the active text field*/ 
    download('PublicServiceDescriptionRDFXML.rdf', dijit.byId("dijit_form_SimpleTextarea_1").value);
}