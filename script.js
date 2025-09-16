 // Fonction appelée au survol d'une image
 function upDate(previewPic) {
     console.log("Événement déclenché!");
     console.log("Source:", previewPic.src);
     console.log("Texte alternatif:", previewPic.alt);

     const imageDiv = document.getElementById("image");
     imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
     imageDiv.innerText = previewPic.alt;
 }

 // Fonction appelée quand la souris quitte l'image
 function unDo() {
     const imageDiv = document.getElementById("image");
     imageDiv.style.backgroundImage = "none";
     imageDiv.innerText = "Survolez une image ci-dessous pour l'afficher ici";
 }