import type { Classement } from "./classement";

export class Jeu {
  private pointsJoueur1 = 0;

  constructor(joueur1: string, joueur2: string, classement: Classement) {}

  pointPour(joueur: string): void {
    this.pointsJoueur1++;
  }

  score(): string {
    if (this.pointsJoueur1 === 1) {
      return "Quinze-Zéro";
    }
    return "Zéro-Zéro";
  }
}
