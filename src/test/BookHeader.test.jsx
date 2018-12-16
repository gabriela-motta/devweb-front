import React from "react";
import { shallow } from "enzyme";
import BookHeader from "../components/Book/BookHeader";

let authorName = "Jenny Lawson";
let author = "5bf9ffaa12a828001675e6b0";
let book = {
  title: "Furiously Happy: A Funny Book About Horrible Things",
  image: "https://images-na.ssl-images-amazon.com/images/I/610bnioaSTL.jpg"
}
const wrapper = shallow(<BookHeader author={author} book={book} />);

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

it("always renders book title", () => {
  expect(wrapper.find('Header').first().dive().find('HeaderContent').dive().text()).toEqual(book.title);
});

it("always renders author name", () => {
  wrapper.setState({ author: {name: authorName} });
  expect(wrapper.find('Header').last().dive().text()).toEqual("Written by: " + authorName);
});
