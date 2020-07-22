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

export const addFlyToAPI = async (flyData) => {
  try {
    const response = await fetch('https://my-fly-box-api.herokuapp.com/api/v1/flies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(flyData),
    });
    const flyDataResponse = await response.json();
    return flyDataResponse;
  } catch (error) {
    console.error(error);
  }
};

export const addUpdatedFly = async (flyData) => {
  try {
    const response = await fetch(`https://my-fly-box-api.herokuapp.com/api/v1/flies/${flyData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(flyData.attributes),
    });
    const flyDataResponse = await response.json();
    return flyDataResponse;
  } catch (error) {
    console.error(error);
  }
}
export const deleteFly = async (flyId) => {
    try {
      const response = await fetch(
        `https://my-fly-box-api.herokuapp.com/api/v1/flies/${flyId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      const deletionResponse = await response.json();
      console.log(deletionResponse);
    } catch (error) {
      console.error(error);
    }
  };

  export const addFishToAPI = async (fishData) => {
    try {
      const response = await fetch('https://my-fly-box-api.herokuapp.com/api/v1/catches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(fishData),
      });
      const fishDataResponse = await response.json();
      return fishDataResponse;
    } catch (error) {
      console.error(error);
    }
  };
