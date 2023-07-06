
const username = 'sallyman128';
const url = `https://www.codewars.com/api/v1/users/${username}/`;

export const getCodewarsData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}