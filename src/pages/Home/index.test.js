import { fireEvent, render, screen } from "@testing-library/react";
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
    // render(<Page />);
  
    // //  screen.findByText("#DigitonPARIS");
    // const { container } = render(<Page />);
    // expect(container.querySelector("#events")).toBeInTheDocument();
    const { container } = render(<Page />);

    const eventsContainer = container.querySelector("#events");
    expect(eventsContainer).toBeInTheDocument();
  

  });
  
  it("a list a people is displayed",   () => {
    // to implement
    const names =  ["Samira", "Jean-baptiste", "Alice", "Luís", "Christine", "Isabelle"] 
    render(<Page />);
    names.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    })
  })
  it("a footer is displayed", () => {
    // to implement
    const { container } = render(<Page />);
    expect(container.querySelector("footer")).toBeInTheDocument();
  })
  it("an event card, with the last event, is displayed", () => {
    render(<Page />)


    const eventCardImage = screen.getByTestId("card-image-testid");
    // expect(eventCardImage.src).toBeDefined();
    // expect(eventCardImage.src).not.toBe("");
    // to implement
    // expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
  })
});

// const element = await screen.findByText("Evénement 1");
// expect(element).toBeInTheDocument();
//    const event2Element = screen.findByText("Evénement 1");
// expect(event2Element).toBeInTheDocument();
//   const event2Element = await screen.findByText(" #DigitonPARIS");
//   expect(event2Element).toBeInTheDocument();
// beforeEach(() => {
  //   jest.resetAllMocks();
  // });
  
  // jest.mock("../../contexts/DataContext", () => {
    //   const mockData = {
      //     events: [
        //       { title: "Evénement 1", date: "2022-05-01T20:28:45.744Z", cover: "image1.jpg" },
        //       { title: "Evénement 2", date: "2022-06-01T20:28:45.744Z", cover: "image2.jpg" }
        //     ]
        //   };
        //   return { useData: jest.fn(() => ({ data: mockData })) };
        // const { getByText } = render(<Page />);
        
        // Vérifiez si les titres des événements sont affichés
        //  screen.findByText("Evénement 1");
        // expect(getByText("Evénement 1")).toBeInTheDocument();
        // expect(getByText("Evénement 2")).toBeInTheDocument();
        // expect( await screen.findByText("Evénement 2")).toBeInTheDocument();
// });