let currentWebsite = "";
let iframeLoadedSuccessfully = false;

function openWebsite(url){

    currentWebsite = url;
    iframeLoadedSuccessfully = false;

    document.getElementById("website-container").style.display = "block";
    document.getElementById("brandFrame").src = url;

    const errorBox = document.getElementById("error-message");
    if(errorBox){
        errorBox.style.display = "none";
    }

    setTimeout(function(){

        if(!iframeLoadedSuccessfully){

            if(errorBox){
                errorBox.style.display = "block";
            }

        }

    },5000);

}

function iframeLoaded(){

    iframeLoadedSuccessfully = true;

}

function openOfficialWebsite(){

    window.open(currentWebsite,"_blank");

}

function closeWebsite(){

    document.getElementById("website-container").style.display = "none";
    document.getElementById("brandFrame").src = "";

    const errorBox = document.getElementById("error-message");
    if(errorBox){
        errorBox.style.display = "none";
    }

}


function searchBrands() {

    console.log("Search working");

    let input = document.getElementById("searchInput");
    let filter = input.value.toUpperCase();

    let brands = document.getElementsByClassName("brand-box");

    console.log("Brand count:", brands.length);

    for (let i = 0; i < brands.length; i++) {

        let brandName = brands[i].querySelector("h3");

        if (!brandName) continue;

        let txtValue = brandName.textContent || brandName.innerText;

        if (txtValue.toUpperCase().includes(filter)) {
            brands[i].style.display = "";
        } else {
            brands[i].style.display = "none";
        }
    }
}