import React from "react";
import { shallow } from "enzyme";
import BookContainer from "../components/Book/BookContainer";
import BookSynopsis from "../components/Book/BookSynopsis";
import BookReviews from "../components/Book/BookReviews";

let data = {
  title: "Furiously Happy: A Funny Book About Horrible Things",
  image: "https://images-na.ssl-images-amazon.com/images/I/610bnioaSTL.jpg"
}
const wrapper = shallow(<BookContainer data={data} />);

it("always renders a Container", () => {
  expect(wrapper.find('Container'));
  expect(wrapper.length).toBeGreaterThan(0);
});

describe("the rendered Container", () => {
  it("contains everything else that gets rendered", () => {
    const containers = wrapper.find('Container')
    // When using .find, enzyme arranges the nodes in order such
    // that the outermost node is first in the list. So we can
    // use .first() to get the outermost div.
    const wrappingContainer = containers.first();

    // Enzyme omits the outermost node when using the .children()
    // method on lockScreen(). This is annoying, but we can use it
    // to verify that wrappingDiv contains everything else this
    // component renders.
    expect(wrappingContainer.children()).toEqual(wrapper.children());
  });
});

it("always renders a BookSynopsis", () => {
  expect(wrapper.find(BookSynopsis).length).toBe(1);
});

describe("rendered BookSynopsis", () => {
  it("receives data", () => {
    const bookSynopsis = wrapper.find(BookSynopsis);
    expect(Object.keys(bookSynopsis.props()).length).toBe(1);
  });
});

it("always renders a BookReviews", () => {
  expect(wrapper.find(BookReviews).length).toBe(1);
});

describe("rendered BookReviews", () => {
  it("does not receive any props", () => {
    const bookReviews = wrapper.find(BookReviews);
    expect(Object.keys(bookReviews.props()).length).toBe(0);
  });
});
