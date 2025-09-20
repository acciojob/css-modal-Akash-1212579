let modalDiv = document.getElementsByClassName("modal")[0];
let closeModal = document.getElementsByClassName("close-modal")[0];
let modalBtn = document.getElementById("openModal");
let header = document.getElementsByClassName("modal-header")[0];
modalBtn.addEventListener("click", () => {
    modalDiv.style.display = "block";
});
closeModal.addEventListener("click",()=>{
	modalDiv.style.display = "none";
});
header.addEventListener("click",()=>{
	modalDiv.style.display = "none";
});



