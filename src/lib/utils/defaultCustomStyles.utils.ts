import { CustomStyles } from "../interface";

export const defaultCustomStyles: CustomStyles = {
  templateAreas: '"one one two four" "one one three three"',
  columns: { quantity: 4, value: 1, unit: 'fr' },
  rows: { quantity: 2, value: 1, unit: 'fr' },
  border: { value: 12, unit: 'px' },
  height: { value:100, unit: '%' },
  width: { value: 100, unit: '%' },
  gap: { value: 8, unit: 'px' },
  orientation: 'horizontal',
  layout: 'custom',
  maxItems: 4,
}
