import { Page } from '@playwright/test';

export class CampusRegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.campusfrance.org/fr/user/register');
  }

  async fillEmail(email: string) {
    await this.page.getByRole('textbox', { name: 'monadresse@domaine.com' }).fill(email);
  }

  async fillPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Mon mot de passe*' }).fill(password);
  }

  async fillConfirmPassword(confirmPassword: string) {
    await this.page.getByRole('textbox', { name: 'Confirmer le mot de passe*' }).fill(confirmPassword);
  }

  async selectTitle() {
    await this.page.getByText('Mr').click();
  }

  async fillLastName(nom: string) {
    await this.page.getByRole('textbox', { name: 'Nom*', exact: true }).fill(nom);
  }

  async fillFirstName(prenom: string) {
    await this.page.getByRole('textbox', { name: 'Prénom*' }).fill(prenom);
  }

  async selectCountryResidence(paysResidence: string) {
    await this.page
      .locator('div')
      .filter({ hasText: /^- Choisir une valeur -$/ })
      .nth(1)
      .click();

    await this.page.getByText(`-${paysResidence}`, { exact: true }).click();
  }

  async selectNationality(paysNationalite: string) {
    await this.page
      .getByRole('textbox', { name: 'Pays de nationalité (valeur 1)' })
      .fill('fr');

    await this.page.getByText(paysNationalite, { exact: true }).click();
  }

  async fillPostalInfo(codePostal: string, ville: string, telephone: string) {
    await this.page.getByRole('textbox', { name: 'Code postal' }).fill(codePostal);
    await this.page.getByRole('textbox', { name: 'Ville' }).fill(ville);
    await this.page.getByRole('textbox', { name: 'Téléphone' }).fill(telephone);
  }

  async selectProfile(profil: string) {
    await this.page
      .locator('#edit-field-publics-cibles')
      .getByText(profil, { exact: true })
      .click();
  }

  async selectDomain(domaineActivite: string) {
    await this.page.getByText('- Aucun(e) -').nth(1).click();
    await this.page.getByText(domaineActivite).click();
  }

  async selectLevel(niveauEtude: string) {
    await this.page
      .locator('div')
      .filter({ hasText: /^- Aucun\(e\) -$/ })
      .nth(2)
      .click();

    await this.page.getByText(niveauEtude).click();
  }

  async acceptTerms() {
    await this.page.getByText('J’accepte que mes données').click();

  }
}