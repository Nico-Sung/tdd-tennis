import type { Classement } from "./classement";

const ANNONCES = ["Zéro", "Quinze", "Trente", "Quarante"];
const QUARANTE = 3;

export class Jeu {
  private pointsJoueur1 = 0;
  private pointsJoueur2 = 0;

  constructor(
    private readonly joueur1: string,
    private readonly joueur2: string,
    private readonly classement: Classement,
  ) {}

  pointPour(joueur: string): void {
    if (this.estTermine()) {
      return;
    }

    if (joueur === this.joueur1) {
      this.pointsJoueur1++;
    } else {
      this.pointsJoueur2++;
    }

    if (this.estTermine()) {
      this.classement.enregistrer(this.vainqueur(), this.perdant());
    }
  }

  score(): string {
    if (this.estTermine()) {
      return "Victoire " + this.vainqueur();
    }

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

  private estTermine(): boolean {
    return this.pointsJoueur1 > QUARANTE || this.pointsJoueur2 > QUARANTE;
  }

  private vainqueur(): string {
    if (this.pointsJoueur1 > QUARANTE) {
      return this.joueur1;
    }
    return this.joueur2;
  }

  private perdant(): string {
    if (this.pointsJoueur1 > QUARANTE) {
      return this.joueur2;
    }
    return this.joueur1;
  }
}
