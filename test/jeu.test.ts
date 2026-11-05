import { describe, expect, it } from "vitest";
import { Jeu } from "../src/jeu";
import { classementDummy } from "./doubles/classement-dummy";

// dummy : le classement n'est pas utilisé ici, on le passe juste au constructeur.
describe("jeu", () => {
  it("le score vaut zéro-zéro en début de jeu", () => {
    const jeu = new Jeu("Nico", "Clementine", classementDummy);

    expect(jeu.score()).toBe("Zéro-Zéro");
  });

  it("un premier point marqué vaut quinze", () => {
    const jeu = new Jeu("Nico", "Clementine", classementDummy);

    jeu.pointPour("Nico");

    expect(jeu.score()).toBe("Quinze-Zéro");
  });

  it("le score annonce les points du joueur 1 puis ceux du joueur 2", () => {
    const jeu = new Jeu("Nico", "Clementine", classementDummy);

    jeu.pointPour("Nico");
    jeu.pointPour("Clementine");
    jeu.pointPour("Nico");

    expect(jeu.score()).toBe("Trente-Quinze");
  });

  it("le troisième point marqué vaut quarante", () => {
    const jeu = new Jeu("Nico", "Clementine", classementDummy);

    jeu.pointPour("Nico");
    jeu.pointPour("Clementine");
    jeu.pointPour("Nico");
    jeu.pointPour("Clementine");
    jeu.pointPour("Nico");

    expect(jeu.score()).toBe("Quarante-Trente");
  });

  it("à points égaux le score s'annonce avec a", () => {
    const jeu = new Jeu("Nico", "Clementine", classementDummy);

    jeu.pointPour("Nico");
    jeu.pointPour("Clementine");

    expect(jeu.score()).toBe("Quinze-A");

    jeu.pointPour("Nico");
    jeu.pointPour("Clementine");

    expect(jeu.score()).toBe("Trente-A");
  });
});
