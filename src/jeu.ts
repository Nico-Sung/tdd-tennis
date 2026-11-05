import type { Classement } from "./classement";

export class Jeu {
  constructor(joueur1: string, joueur2: string, classement: Classement) {}

  pointPour(joueur: string): void {}

  score(): string {
    return "Zéro-Zéro";
  }
}
