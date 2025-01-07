export function randomIndex(size) {
  return Math.round((Math.random() * 10) % (size-1));
}

export function isActive(activeCell, row, cell) {
  return activeCell.row === row && activeCell.col === cell;
}