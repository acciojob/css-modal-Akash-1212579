let modalDiv = document.getElementsByClassName("modal")[0];
let closeModal = document.getElementsByClassName("close-modal")[0];
let modalBtn = document.getElementById("openModal");

modalBtn.addEventListener("click", () => {
    modalDiv.style.display = "block";
});
closeModal.addEventListener("click",()=>{
	modalDiv.style.display = "none";
})


