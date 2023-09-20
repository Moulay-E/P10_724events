import { fireEvent, render, screen, within } from "@testing-library/react";
import Page from "./index";



describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Page />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Page />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

// adding this test
describe("When a page is created", () => { 
  it("a list of events is displayed",  async() => {
    const { container } = render(<Page />);
    const eventsContainer = container.querySelector("#events");
    expect(eventsContainer).toBeInTheDocument();
  });
  
  it("a list a people is displayed",   () => {
    const names =  ["Samira", "Jean-baptiste", "Alice", "Luís", "Christine", "Isabelle"] 
    render(<Page />);
    names.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    })
  })

  it("a footer is displayed", () => {
    const { container } = render(<Page />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  })
  
  it("an event card, with the last event, is displayed", async () => {
    const {container} = render(<Page/>)
    const footerElement = container.querySelector('footer');
    const eventCardInFooter = footerElement.querySelector('card-testid');
    expect(eventCardInFooter).toBeDefined();
  })
});
