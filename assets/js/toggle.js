function toggleProject(id) {
    const projectDetails = document.getElementById(`project-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
        icon.classList.remove("bi-plus-lg");
        icon.classList.add("bi-chevron-down");
    } else {
        projectDetails.style.display = "none";
        icon.classList.remove("bi-chevron-down");
        icon.classList.add("bi-plus-lg");
    }
}