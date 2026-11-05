import type { Classement } from "./classement";

const ANNONCES = ["Zéro", "Quinze", "Trente", "Quarante"];
const QUARANTE = 3;

export class Jeu {
  private pointsJoueur1 = 0;
  private pointsJoueur2 = 0;

  constructor(
    private readonly joueur1: string,
    joueur2: string,
    classement: Classement,
  ) {}

  pointPour(joueur: string): void {
    if (joueur === this.joueur1) {
      this.pointsJoueur1++;
    } else {
      this.pointsJoueur2++;
    }
  }

  score(): string {
    const scoreJoueur1 = ANNONCES[this.pointsJoueur1];
    const scoreJoueur2 = ANNONCES[this.pointsJoueur2];

    if (this.pointsJoueur1 === QUARANTE && this.pointsJoueur2 === QUARANTE) {
      return "Égalité";
    }

    if (this.pointsJoueur1 === this.pointsJoueur2 && this.pointsJoueur1 > 0) {
      return scoreJoueur1 + "-A";
    }

    return scoreJoueur1 + "-" + scoreJoueur2;
  }
}
