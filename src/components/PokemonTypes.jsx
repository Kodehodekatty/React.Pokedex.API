export const typeColor = (name) => {
  switch (name) {
    case "fire":
      return "red";
    case "grass":
      return "green";
    case "water":
      return "blue";
    case "ice":
      return "teal";
    case "ground":
      return "burlywood";
    case "rock":
      return "brown";
    case "dragon":
      return "darkslateblue";
    case "fairy":
      return "pink";
    case "fighting":
      return "crimson";
    case "dark":
      return "black";
    case "ghost":
      return "indigo";
    case "psychic":
      return "purple";
    case "bug":
      return "olive";
    case "poison":
      return "darkmagenta";
    case "normal":
      return "grey";
    case "steel":
      return "silver";
    case "electric":
      return "gold";
    case "flying":
      return "lightblue";
    default:
      return "white";
  }
};
