describe("user can sign up", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("successfully", () => {
    cy.route({
      method: "POST",
      url: "https://yummy-food-api.herokuapp.com/api/auth/",
      response: "fixture:registration.json",
      headers: {
        uid: "user@mail.com"
      }
    });

    cy.get("#render-signup").click();
    cy.get("#signup").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#confirm_password").type("password");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    cy.get("#message").should("contain", "Hi user@mail.com");
  });

  it("with invalid credentials", () => {
    cy.route({
      method: "POST",
      url: "https://yummy-food-api.herokuapp.com/api/auth/",
      status: "401",
      response: {
        errors: ["Invalid entries. Please try again."]
      }
    });

    cy.get("#render-signup").click();
    cy.get("#signup").within(() => {
      cy.get("#email").type("user@mail.com");
      cy.get("#password").type("password");
      cy.get("#confirm_password").type("passworddd");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    cy.get("#message").should("contain", "Invalid entries. Please try again.");
  });
});
