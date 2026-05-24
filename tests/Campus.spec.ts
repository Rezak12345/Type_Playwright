import { test } from '@playwright/test';
import { CampusRegisterPage } from '../pages/CampusRegisterPage';

// ✅ import direct JSON (TS config required)
import data from '../data/etudiant.json';

test('Inscription Campus France - POM TypeScript', async ({ page }) => {

  const campusPage = new CampusRegisterPage(page);

  await campusPage.goto();

  await campusPage.fillEmail(data.email);
  await campusPage.fillPassword(data.motDePasse);
  await campusPage.fillConfirmPassword(data.confirmationMotDePasse);

  await campusPage.selectTitle();

  await campusPage.fillLastName(data.nom);
  await campusPage.fillFirstName(data.prenom);

  await campusPage.selectCountryResidence(data.paysResidence);
  await campusPage.selectNationality(data.paysNationalite);

  await campusPage.fillPostalInfo(data.codePostal, data.ville, data.telephone);

  await campusPage.selectProfile(data.profil);
  await campusPage.selectDomain(data.domaineActivite);
  await campusPage.selectLevel(data.niveauEtude);

  await campusPage.acceptTerms();
  
  await page.close(); // optionnel seulement ici
});