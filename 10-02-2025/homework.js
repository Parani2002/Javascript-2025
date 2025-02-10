const getFullName = (getFirstName,getLastName) => {
    return `My FullName is ${getFirstName} ${getLastName}`;
}

const getFirstName = (fname) => {
    return fname;
}

const getLastName = (lname) => {    
    return lname;
}

console.log(getFullName(getFirstName("Paranitharan"),getLastName("Suntharalingam")));
