import data from "./games.json";

export function getGames(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data.games);
        }, 3000);
    });
}