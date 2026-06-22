import { Distribution, Orientation } from "../types";

export class Style {

  orientation: Orientation;
  templateAreas: string;
  layout: Distribution;
  maxItems: number;
  columns: string;
  border: string;
  height: string;
  width:string;
  rows: string;
  gap: string;

  constructor(
    orientation: Orientation,
    border: string = "10px",
    height:string = "100%",
    width:string = "100%",
    templateAreas: string,
    layout: Distribution,
    gap: string = "8px",
    maxItems: number,
    columns: string,
    rows: string
  ) {
    this.templateAreas = templateAreas;
    this.orientation = orientation;
    this.maxItems = maxItems;
    this.columns = columns;
    this.border = border;
    this.height = height;
    this.width = width;
    this.layout = layout;
    this.rows = rows;
    this.gap = gap;
  }
}
