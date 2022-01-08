function cleanCompanyName(rawName) {
    const splitThese = /[,]| \/|\/|\(|\.com| -|\,| \& co| i\.?n\.?c\.?(orporated)?(?![a-zA-Z])|(g\.?m\.?b\.?h| l\.?l\.?c| l\.?t\.?d| p\.?v\.?t| limited| corp(oration)?)\.?/;
    const replaceThese = /\.LLC| llc|[?]|®|[*]|[$]|#|{|}|'|"|%|:|[+]|[,]|[(]|[)]|~|[<]|[>]|[@]|[™]| LLc|\.com|www |www\./;
    let splitThese2 = new RegExp(splitThese, "gi");
    let replaceThese2 = new RegExp(replaceThese, 'gi', ''); 
// match & co
// have it work on 7 company name strings
// capitalize if there is just one character on eitherside of the ampersand
// replace inc\.
// split on comma and more
    let SplitTest1 = rawName
    .split(splitThese2)[0]
    .replace(replaceThese2, '')
    .split(/\s+/)

    SplitTest1.forEach(test => {
        if (SplitTest1[0] == undefined) {
            SplitTest1[0] = '';
        }
        if (SplitTest1[1] == undefined) {
            SplitTest1[1] = '';
            } 
        if (SplitTest1[2] == undefined) {
            SplitTest1[2] = '';
            }
        if (SplitTest1[3] == undefined) {      // if any of the items in company name array are empty, just get rid of them
            SplitTest1[3] = '';
            }
        if (SplitTest1[4] == undefined) {
            SplitTest1[4] = '';
                }   
        if (SplitTest1[5] == undefined) {
        SplitTest1[5] = '';
                }
        if (SplitTest1[6] == undefined) {
        SplitTest1[6] = '';
                } 
    if (SplitTest1[0].length <= 3 && SplitTest1[0].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[0] = SplitTest1[0].toUpperCase();
    }
    if (SplitTest1[1].length <= 3 && SplitTest1[1].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[1] = SplitTest1[1].toUpperCase();
    }
    if (SplitTest1[2].length <= 3 && SplitTest1[2].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[2] = SplitTest1[2].toUpperCase();
    }
    if (SplitTest1[3].length <= 3 && SplitTest1[3].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[3] = SplitTest1[3].toUpperCase();
    }
    if (SplitTest1[4].length <= 3 && SplitTest1[4].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[4] = SplitTest1[4].toUpperCase();
    }
    if (SplitTest1[5].length <= 3 && SplitTest1[5].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[5] = SplitTest1[5].toUpperCase();
    }
    if (SplitTest1[6].length <= 3 && SplitTest1[6].match(/a|e|i|o|u/gi) == null) {
        SplitTest1[6] = SplitTest1[6].toUpperCase();
    }

    // duplicate and add, if the standalone string is less than 3 characters, capitalize it. Oh, and same thing with vowels.        
    // TODO: specifically for lines 36, 45, & 55-- the forEach loop seems to have stopped the logic on these lines from taking effect. What we are saying here is: IF the string is not fully lowercased
    // or fully uppercased, it is probably special syntax (e.g.: "AlphaTrAI"), so leave it alone. This seems to have stopped working with the forEach loop. Should fix!
    // after a few attempts and still no luck. So- I want to figure out why line 70 will not return the string we want it to return. Is it because I re-declared the variable with each new if statement before?
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
    if (SplitTest1[5].length > 3){
        SplitTest1[5] = SplitTest1[5].charAt(0).toUpperCase().concat(SplitTest1[5].toLowerCase().slice(1, SplitTest1[5].length));
    }
    else {
        SplitTest1[5] = SplitTest1[5];
    }
    if (SplitTest1[6].length > 3){
        SplitTest1[6] = SplitTest1[6].charAt(0).toUpperCase().concat(SplitTest1[6].toLowerCase().slice(1, SplitTest1[6].length));
    }
    else {
        SplitTest1[6] = SplitTest1[6];
    }
    if (SplitTest1[0].includes('&') && SplitTest1[0].length <= 6) {
        SplitTest1[0] = SplitTest1[0].toUpperCase();
    }
    if (SplitTest1[0].includes('.') && SplitTest1[0].length <= 4) {
        SplitTest1[0] = SplitTest1[0].toUpperCase();
    }
    if (SplitTest1[1].includes('.') && SplitTest1[1].length <= 4) {
        SplitTest1[1] = SplitTest1[1].toUpperCase();
    }
    if (SplitTest1[2].includes('.') && SplitTest1[2].length <= 4) {
        SplitTest1[2] = SplitTest1[2].toUpperCase();
    }
    if (SplitTest1[3].includes('.') && SplitTest1[3].length <= 4) {
        SplitTest1[3] = SplitTest1[3].toUpperCase();
    }
    });
    let cleanedString = SplitTest1[0] + " " + SplitTest1[1] + " " + SplitTest1[2] + " " + SplitTest1[3] + " " + SplitTest1[4] + " " + SplitTest1[5] + " " + SplitTest1[6];
    let finalProduct = cleanedString.trim();
    if (finalProduct.length <= 3) {
        finalProduct = finalProduct.toUpperCase();
    }
    if (finalProduct.length <= 5 && finalProduct.match(/a|e|i|o|u/gi) == null) {
        finalProduct = finalProduct.toUpperCase();
    }
    
    return finalProduct;
}

testCompanies = [
    "Flex A.i.",
    "trc international",
    "Flex A.I.",
    "AmpliFy",
    "Third Incorporated",
    "Me, LLC",
    "AMBIVELENT international"
]

testCompanies.forEach(testCo => {
    clean = cleanCompanyName(testCo);
     console.log(`[${testCo}]: [${clean}]`)
});