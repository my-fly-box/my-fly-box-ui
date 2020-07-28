import React from "react";
import "react-native";
import Fly from "../components/Fly";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import { createStore } from "redux";
import { render } from "react-native-testing-library";

let mockFlyData = {
  id: "13",
  type: "fly",
  attributes: {
    amount: 6,
    category: "Dry",
    color: "Green",
    id: 13,
    name: "Sparkle Dun",
    size: 14,
  },
};

describe("Fly", () => {

  it("renders the individual fly card", () => {
    const testStore = createStore(rootReducer);
    const testWrapper = (
      <Provider store={testStore}>
        <Fly fly={mockFlyData} navigation={""} handleDelete={""} />
      </Provider>
    );
    const { queryByTestId } = render(testWrapper);
    const editButton = queryByTestId("editButton");
    const deleteButton = queryByTestId("deleteButton");

    expect(editButton).toBeTruthy();
    expect(deleteButton).toBeTruthy();
  });
});
