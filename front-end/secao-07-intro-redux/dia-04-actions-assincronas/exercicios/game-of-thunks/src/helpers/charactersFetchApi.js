const charactersFetchApi = async (characterName) => {
        const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
        const character = await response.json();
        return character;
}

export default charactersFetchApi;