export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
    if(localStorage.getItem(key)){
        alert("account already exist");
        return;
}};


export const getLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
};


