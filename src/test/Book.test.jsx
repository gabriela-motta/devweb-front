import React from "react";
import { shallow } from "enzyme";
import Book from "../components/Book/Book";
import BookContainer from "../components/Book/BookContainer";
import BookHeader from "../components/Book/BookHeader";

let book = {
  title: "Furiously Happy: A Funny Book About Horrible Things",
  image: "https://images-na.ssl-images-amazon.com/images/I/610bnioaSTL.jpg"
}
let match = {
  params: { bookId: "5bfa012412a828001675e6b1"}
}
const wrapper = shallow(<Book match={match}/>);
wrapper.setState({ book: book });

it("always renders a div", () => {
  expect(wrapper.find('div'));
  expect(wrapper.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
  it("contains everything else that gets rendered", () => {
    const divs = wrapper.find('div')
    // When using .find, enzyme arranges the nodes in order such
    // that the outermost node is first in the list. So we can
    // use .first() to get the outermost div.
    const wrappingDiv = divs.first();

    // Enzyme omits the outermost node when using the .children()
    // method on lockScreen(). This is annoying, but we can use it
    // to verify that wrappingDiv contains everything else this
    // component renders.
    expect(wrappingDiv.children()).toEqual(wrapper.children());
  });
});
