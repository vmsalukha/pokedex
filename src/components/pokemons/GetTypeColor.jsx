export const GetTypeColor = (type) => {
  switch (type) {
    case 'normal':
      return 'gray';
    case 'fighting':
      return 'red';
    case 'flying':
      return 'deepskyblue';
    case 'poison':
      return 'green';
    case 'ground':
      return 'khaki';
    case 'rock':
      return 'burlywood';
    case 'bug':
      return 'darkgreen';
    case 'ghost':
      return 'lightgray';
    case 'steel':
      return 'silver';
    case 'fire':
      return 'orangered';
    case 'water':
      return 'bluegreen';
    case 'grass':
      return 'lightgreen';
    case 'electric':
      return 'lightskyblue';
    case 'psychic':
      return 'purple';
    case 'ice':
      return 'lightblue';
    case 'dragon':
      return 'darkred';
    case 'dark':
      return 'darkgray';
    case 'fairy':
      return 'pink';
    case 'unknown':
      return 'lightgray';
    case 'shadow':
      return 'darkviolet';
    default:
      return 'black';
  }
};