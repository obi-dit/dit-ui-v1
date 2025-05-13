export const getInitials = (name:string)=>{
    if(name){
        const checkIfNameIsMultipleValues = name.split(' ').length > 1;
        if(!checkIfNameIsMultipleValues){
        const firstInitals = name.split('')[0]
        const secondInitials =name.split('')[1]
        return `${firstInitals?.toUpperCase()}${secondInitials?.toUpperCase()}`
        }

        return name
        .split(" ")
        .map(part => part[0])
        .join("")
        .toUpperCase();
    }
}