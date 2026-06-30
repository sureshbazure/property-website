
// ===== GOOGLE SCRIPT URL =====
const SCRIPT_URL = https://sureshbazure.github.io/property-website/;

// ===== FORM SUBMISSION =====
const form = document.getElementById("enquiry");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    const data = {
        name: inputs[0].value,
        mobile: inputs[1].value,
        email: inputs[2].value,
        message: inputs[3].value
    };

    try {

        const res = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if(result.status === "success"){
            alert("Enquiry Sent Successfully!");
            form.reset();
        } else {
            alert("Failed. Try again.");
        }

    } catch(err){
        alert("Network Error");
        console.log(err);
    }

});

fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
        "Content-Type": "text/plain"
    },
    body: JSON.stringify(data)
})

// ===== WHATSAPP BUTTON =====
const whatsappNumber = "919999999999"; // change this

function openWhatsApp(){
    window.open(
        `https://wa.me/${whatsappNumber}?text=Hi%20I%20am%20interested%20in%20your%20property`,
        "_blank"
    );


// BASIC VALIDATION
if(!data.name || !data.mobile){
    alert("Name and Mobile required");
    return;
}

if(data.mobile.length < 10){
    alert("Invalid mobile number");
    return;
}
}
