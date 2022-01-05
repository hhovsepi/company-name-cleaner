function cleanCompanyName(rawName) {
    const splitThese = /[,]( g\.?m\.?b\.?h| l\.?l\.?c| l\.?t\.?d| p\.?v\.?t| i\.?n\.?c(orporated)?| limited| corp|)\.?/;
    const replaceThese = /.LLC| llc|[?]|®|[*]|[$]|#|&|{|}|-|'|"|%|:|[+]|[,]|[(]|[)]|~|[<]|[>]|[@]|[™]| LLc|.com| Pvt| Llc| PVT| lmtd| LIMITED| LTD| ltd| Ltd| Inc| Incorporated | incorporated| INC| Inc.|Orporated| Corporated| Corporation|'  Ltd'| LTD|INC| ltd| LTd| LTD|  ltd|www |www.| Ltd/;
    let splitThese2 = new RegExp(splitThese, "gi");
    let replaceThese2 = new RegExp(replaceThese, 'gi', ''); 

    let SplitTest1 = rawName
    .split(splitThese2)[0]
    .replace(replaceThese2, '')
    .split(/\s+/)

    SplitTest1.forEach(test => {
        if (SplitTest1[0] == undefined) {
            SplitTest1[0] = "";
        }
        if (SplitTest1[1] == undefined) {
            SplitTest1[1] = "";
            } 
        if (SplitTest1[2] == undefined) {
            SplitTest1[2] = "";
            }
        if (SplitTest1[3] == undefined) {      // if any of the items in company name array are empty, just get rid of them
            SplitTest1[3] = "";
            }
        if (SplitTest1[4] == undefined) {
            SplitTest1[4] = "";
                }         
    
    if (SplitTest1[0].length > 3){
    SplitTest1[0] = SplitTest1[0].charAt(0).toUpperCase().concat(SplitTest1[0].toLowerCase().slice(1, SplitTest1[0].length));
    }
    else {
    SplitTest1[0] = SplitTest1[0];
    }
    if (SplitTest1[0] != '' && SplitTest1[1] == '' && SplitTest1[2] == '' && SplitTest1[3] == '' && SplitTest1[4] == '' && SplitTest1[0] != SplitTest1[0].toUpperCase() && SplitTest1[0] != SplitTest1[0].toLowerCase()) {
        SplitTest1[0] = SplitTest1[0];
    }
    if (SplitTest1[1].length > 3){
        SplitTest1[1] = SplitTest1[1].charAt(0).toUpperCase().concat(SplitTest1[1].toLowerCase().slice(1, SplitTest1[1].length));
    }
    else {
        SplitTest1[1] = SplitTest1[1];
    }
    if (SplitTest1[0] != '' && SplitTest1[1] != '' && SplitTest1[2] == '' && SplitTest1[3] == '' && SplitTest1[4] == '' && SplitTest1[0] != SplitTest1[0].toUpperCase() && SplitTest1[0] != SplitTest1[0].toLowerCase()) {
        SplitTest1[0] = SplitTest1[0];
        SplitTest1[1] = SplitTest1[1];
    }
    if (SplitTest1[2].length > 3){
        SplitTest1[2] = SplitTest1[2].charAt(0).toUpperCase().concat(SplitTest1[2].toLowerCase().slice(1, SplitTest1[2].length));       // If a piece of the company name string is longer than 3 characters, it is likely not an abbreviation. Start case it.
    }
    else {
        SplitTest1[2] = SplitTest1[2];
    }
    if (SplitTest1[0] != '' && SplitTest1[1] != '' && SplitTest1[2] != '' && SplitTest1[3] == '' && SplitTest1[4] == '' && SplitTest1[0] != SplitTest1[0].toUpperCase() && SplitTest1[0] != SplitTest1[0].toLowerCase()) {
        
        SplitTest1[0] = SplitTest1[0];
        SplitTest1[1] = SplitTest1[1];
        SplitTest1[2] = SplitTest1[2];
    }
    if (SplitTest1[3].length > 3){
        SplitTest1[3] = SplitTest1[3].charAt(0).toUpperCase().concat(SplitTest1[3].toLowerCase().slice(1, SplitTest1[3].length));
    }
    else {
        SplitTest1[3] = SplitTest1[3];
    }
    if (SplitTest1[4].length > 3){
        SplitTest1[4] = SplitTest1[4].charAt(0).toUpperCase().concat(SplitTest1[4].toLowerCase().slice(1, SplitTest1[4].length));
    }
    else {
        SplitTest1[4] = SplitTest1[4];
    }
    });

    let cleanedString = SplitTest1[0] + " " + SplitTest1[1] + " " + SplitTest1[2] + " " + SplitTest1[3] + " " + SplitTest1[4];
    let finalProduct = cleanedString.trim();
    return finalProduct;
}

testCompanies = [
    "Medtronic, LLC",
    "HAIG'S HOUSE",
    "some other already clean name",
    "SWANKY.AI",
    "ABC INTERNATIONAL",
    "Me.you",
    "AMBIVELENT international"
]

testCompanies.forEach(testCo => {
    clean = cleanCompanyName(testCo);
     console.log(`[${testCo}]: [${clean}]`)
});