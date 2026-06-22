import { Orientation } from "../types";

export interface CustomStyles {
  orientation: Orientation;
  templateAreas: string;
  maxItems: number;
  columns: Columns;
  layout: "custom"
  border: Border;
  height: Height;
  width: Width;
  rows: Rows;
  gap: Gap;
}

export interface Border {
  unit: Unit;
  value: number;
}

export interface Height {
  unit: Unit;
  value: number;
}

export interface Width {
  unit: Unit;
  value: number;
}
export interface Gap {
  unit: Unit;
  value: number;
}

export interface Rows {
  quantity: number;
  unit: Unit;
  value: number;
}

export interface Columns {
  quantity: number;
  unit: Unit;
  value: number;
}

type Unit = "cm" | "mm" | "in" | "px" | "pt" | "pc" | "em" | "rem" | "%" | "fr" | "vw" | "vh";

