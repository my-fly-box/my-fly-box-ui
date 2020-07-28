import React from "react";
import "react-native";
import FishForm from "../components/FishForm";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { render } from "react-native-testing-library";

describe("FishForm", () => {
  it("renders the fish form input fields", async () => {
    const testStore = createStore(rootReducer);
    const testWrapper = (
      <Provider store={testStore}>
        <FishForm />
      </Provider>
    );

    const { getByPlaceholder } = render(testWrapper);

    const speciesInput = getByPlaceholder("Enter Species Name");
    const lengthInput = getByPlaceholder("Enter Length (in)");
    const weightInput = getByPlaceholder("Enter Weight (lb)");
    const locationInput = getByPlaceholder("Enter Location");

    expect(speciesInput).toBeTruthy();
    expect(lengthInput).toBeTruthy();
    expect(weightInput).toBeTruthy();
    expect(locationInput).toBeTruthy();
  });
});
