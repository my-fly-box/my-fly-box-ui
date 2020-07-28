import React from "react";
import "react-native";
import AddFly from "../containers/AddFly";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";
import { createStore } from "redux";
import renderer from "react-test-renderer";

describe("AddFly", () => {
  it("renders the AddFly", async () => {
    const testStore = createStore(rootReducer);
    const testWrapper = (
      <Provider store={testStore}>
        <AddFly />
      </Provider>
    );
    const snap = renderer.create(testWrapper).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
