const referral = document.getElementById("referral-select");
referral.addEventListener("change", otherTextpopup);
const otherText = document.getElementById("other-text");
const otherTextLabel = document.getElementById("other-text-label");

function otherTextpopup() {
    if (referral.value == "other") {
       otherText.style.display = "block";
       otherTextLabel.style.display = "block";
    }else if(referral.value == "magic") {
        otherText.style.display = "block";
        otherTextLabel.style.display = "block";
    }else {
        otherText.value = "";
        otherText.style.display = "none";
        otherTextLabel.style.display = "none";
    }
}

