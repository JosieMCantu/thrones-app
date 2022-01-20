export const fetchCharacters = async () => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const json = await res.json();
    return json;
}