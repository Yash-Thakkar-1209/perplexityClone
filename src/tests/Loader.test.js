import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader Component", () => {
  test("renders loader", () => {
    render(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
