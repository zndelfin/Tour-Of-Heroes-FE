export default function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };

    case "EDIT_CHARACTER":
      const updateCharacter = action.payload;

      const updateCharacters = state.characters.map((character) => {
        if (character.id === updateCharacter.id) {
          return updateCharacter;
        }
        return character;
      });

      return {
         ...state,
        characters: updateCharacters,
      };

    case "REMOVE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(character => {
          return character.id !== action.payload;
        })
      }

    default:
      return state;
  }
};