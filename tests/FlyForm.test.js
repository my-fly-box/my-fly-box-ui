import React from "react";
import "react-native";
import FlyForm from "../components/FlyForm";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { render } from "react-native-testing-library";

describe("FlyForm", () => {
  it("renders the fly form input fields", async () => {
    const testStore = createStore(rootReducer);
    const testWrapper = (
      <Provider store={testStore}>
        <FlyForm />
      </Provider>
    );

    const { getByPlaceholder } = render(testWrapper);

    const nameInput = getByPlaceholder("Enter Fly Name");
    const colorInput = getByPlaceholder("Enter Fly Color");
    const sizeInput = getByPlaceholder("Enter Fly Size");
    const categoryInput = getByPlaceholder("Enter Fly Category");
    const amountInput = getByPlaceholder("Enter Fly Amount");

    expect(nameInput).toBeTruthy();
    expect(colorInput).toBeTruthy();
    expect(sizeInput).toBeTruthy();
    expect(categoryInput).toBeTruthy();
    expect(amountInput).toBeTruthy();
  });
});
