export const fetchColors = async () => {
    const response = await fetch("http://traffic-light-api.herokuapp.com");
    const colors = await response.json();
    return colors.color;
  };