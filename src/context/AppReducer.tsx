export default function AppReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };

    case "EDIT_CHARACTER":
      const updateCharacter = action.payload;

      const updateCharacters = state.characters.map((character: { id: Number; }) => {
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
        characters: state.characters.filter((character: { id: Number; }) => {
          return character.id !== action.payload;
        })
      }

    default:
      return state;
  }
};