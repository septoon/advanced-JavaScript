export const getHealth = (name, health) => {
  let color;
  if (health < 15) { color = 'red'; } else if (health < 15 || health <= 50) { color = 'yellow'; } else if (health > 50) { color = 'green'; }

  if (color === 'red') { return 'critical'; }
  if (color === 'yellow') { return 'wounded'; }
  if (color === 'green') { return 'healthy'; }
};
