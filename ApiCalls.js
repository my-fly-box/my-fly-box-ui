export const fetchFlies = async () => {
  try {
    const response = await fetch(
      "https://my-fly-box-api.herokuapp.com/api/v1/flies"
    );
    const flyData = await response.json();
    return flyData;
  } catch (error) {
    console.error(error);
  }
};
