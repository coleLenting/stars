let rows = 0;

function duplicate() {
    var originalDiv = document.getElementById("stars");
    if (originalDiv) {
        var clone = originalDiv.cloneNode(true);
        clone.id = ""; // Clear the id attribute to avoid duplicates
        clone.className = "cloned-stars";
        document.body.appendChild(clone);
        rows++;
    } else {
        console.error("Element with id 'stars' not found.");
    }

}

document.getElementById("duplicateButton").addEventListener("click", duplicate);
