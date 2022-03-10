export const getQueens = async () => {
    const res = await fetch('http://www.nokeynoshade.party/api/queens/all');
    const queens = await res.json();
    return queens
}

