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
        if (character.id === updatedCharacter.id) {
          return updateCharacter;
        }
        return character;
      });

      return {
        ...state,
        characters: updatedCharacters,
      };

    case "REMOVE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(character => {
          return character.id !== action.payload;
        })
      }
      // return {
      //   ...state,
      //   characters: state.characters.filter(
      //     (character) => character.id !== action.payload
      //   ),
      // };

    default:
      return state;
  }
};