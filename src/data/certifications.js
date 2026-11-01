// Fill in issuer, date and url for each entry. Leave '' for anything not yet verified.
// Put certificate images in public/certificates/ and set image: '/certificates/name.png'.
const c = (title) => ({ title, issuer: '', date: '', url: '', image: '' });

export const certifications = [
  c('Bitcoin'), c('Java Programming'), c('Cyber Attacks'), c('Data Structures and Algorithms'),
  c('GitHub'), c('Interface with Arduino'), c('Nanotechnology'),
];
