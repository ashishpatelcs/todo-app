export interface List {
  id: number;
  user_id: number;
  title: string;
  created_on: Date;
  updated_on: Date | null;
  list_items: ListItem[];
}

export interface NewList {}

export interface ListItem {
  task: string;
  created_on: Date;
  updated_on: Date | null;
  created_by: number;
}
