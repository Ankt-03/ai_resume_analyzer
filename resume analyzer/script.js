// Attach event listener after DOM loads
document.addEventListener("DOMContentLoaded", function () {

    const analyzeBtn = document.getElementById("analyzeBtn");

    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", analyzeResume);
    }

    // If on result page, generate result
    if (window.location.pathname.includes("result.html")) {
        generateResult();
    }

});


async function analyzeResume() {
    const resumeInput = document.getElementById("resume");
    const jobDescInput = document.getElementById("jobDesc");

    const resume = resumeInput.files[0];
    const jobDesc = jobDescInput.value;

    if (!resume || jobDesc.trim() === "") {
        alert("Please upload resume and paste job description.");
        return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDesc", jobDesc);

    document.getElementById("loadingScreen").classList.remove("hidden");

    try {
        const response = await fetch("http://localhost:5000/analyze", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.analysis) {
            localStorage.setItem("analysisResult", data.analysis);
            window.location.href = "result.html";
        } else {
            alert("Error analyzing resume.");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Backend connection failed.");
    }
}


function generateResult() {
    const result = localStorage.getItem("analysisResult");
    const resultElement = document.getElementById("resultText");

    if (!resultElement) return;

    if (result) {
        resultElement.innerText = result;
    } else {
        resultElement.innerText = "No result found.";
    }
}


function goBack() {
    localStorage.removeItem("analysisResult");
    window.location.href = "index.html";
}
